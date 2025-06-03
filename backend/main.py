from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import pickle
import json
import os
from sklearn.metrics.pairwise import euclidean_distances
import joblib
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = tf.keras.models.load_model('model/lstm_model.keras')

with open('model/scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

with open('model/char_to_index.pkl', 'rb') as f:
    char_to_index = pickle.load(f)

with open('model/config.json', 'r') as f:
    config = json.load(f)
max_length = config["max_length"]

output_labels = [
    'molecular_weight', 'isoelectric_point', 'hydrophobicity', 
    'total_charge', 'polar_ratio', 'nonpolar_ratio', 'sequence_length'
]
valid_chars = set(char_to_index.keys())

class SequenceInput(BaseModel):
    sequence: str

@app.get("/")
async def root():
    return {"message": "Protein property prediction API is running"}

@app.post("/predict")
async def predict(data: SequenceInput):
    try:
        seq = data.sequence.strip().upper()
        if not all(c in valid_chars for c in seq):
            raise HTTPException(status_code=400, detail="Sequence contains invalid characters")
        encoded = [char_to_index.get(c, 0) for c in seq]
        padded = pad_sequences([encoded], maxlen=max_length, padding='post')
        prediction_scaled = model.predict(padded)
        prediction = scaler.inverse_transform(prediction_scaled)

        result = {}
        for label, pred in zip(output_labels, prediction[0]):
            if label == "total_charge" or label == "sequence_length":
                result[label] = int(round(float(pred)))
            else:
                result[label] = round(float(pred), 4)

        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

try:
    scaler = joblib.load("K-Means/scaler.pkl")
    kmeans = joblib.load("K-Means/kmeans.pkl")
    X_train = pd.read_csv("K-Means/train_data.csv")
except Exception as e:
    raise RuntimeError(f"Gagal load model atau data: {e}")

features = [
    'molecular_weight',
    'isoelectric_point',
    'hydrophobicity',
    'total_charge',
    'polar_ratio',
    'nonpolar_ratio',
    'sequence_length'
]

class FisiokimiaInput(BaseModel):
    molecular_weight: float
    isoelectric_point: float
    hydrophobicity: float
    total_charge: int
    polar_ratio: float
    nonpolar_ratio: float
    sequence_length: int

@app.post("/find-similar")
def find_similar(input_data: FisiokimiaInput):
    try:
        # Convert input ke vektor & scale
        user_vec = np.array([[getattr(input_data, f) for f in features]])
        user_vec_scaled = scaler.transform(user_vec)

        # Prediksi cluster
        user_cluster = int(kmeans.predict(user_vec_scaled)[0])

        # Ambil data dari cluster yang sama
        similar_df = X_train[X_train['cluster'] == user_cluster].copy()

        if similar_df.empty:
            raise HTTPException(status_code=404, detail="Tidak ada data serupa di cluster ini.")

        # Hitung jarak Euclidean
        distances = euclidean_distances(
            scaler.transform(similar_df[features]),
            user_vec_scaled
        )
        similar_df['distance'] = distances
        closest_match = similar_df.sort_values('distance').iloc[0]

        return {
            "sequence": closest_match['sequence'],
            "distance": round(float(closest_match['distance']), 4),
            "cluster": user_cluster
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Terjadi kesalahan: {str(e)}")
