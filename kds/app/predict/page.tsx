"use client";

import React, { useState } from 'react';

interface AnalysisResponse {
    molecular_weight: number;
    isoelectric_point: number;
    hydrophobicity: number;
    total_charge: number;
    polar_ratio: number;
    nonpolar_ratio: number;
    sequence_length: number;
}

const Predict: React.FC = () => {
    const [sequence, setSequence] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [analysisResults, setAnalysisResults] = useState<AnalysisResponse | null>(null);

    const API_ENDPOINT = 'https://lstm-kds-fbafhjc7g0hrcya9.southeastasia-01.azurewebsites.net/predict';

    const handleAnalyzeSequence = async () => {
        if (!sequence.trim()) {
            setError('Please paste your protein sequence.');
            setAnalysisResults(null);
            return;
        }

        setLoading(true);
        setError(null);
        setAnalysisResults(null);

        try {
            const res = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sequence: sequence.trim() }),
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || `API error: ${res.status}`);
            }

            const data: AnalysisResponse = await res.json();
            setAnalysisResults(data);
            console.log('Analysis Results:', data);

        } catch (err: any) {
            console.error('Error analyzing sequence:', err);
            setError(err.message || 'Failed to analyze sequence. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center p-4">
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left p-8 lg:p-12">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                    Welcome to <br />GeneScope AI
                </h1>
                <p className="text-base text-gray-700 max-w-lg mx-auto lg:mx-0">
                    Siap mengeksplorasi rahasia genetikmu? Tempel sekuens proteinmu di bawah ini dan biarkan GeneScope AI mengungkap analisisnya dalam hitungan detik!
                </p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start p-8 lg:p-12">
                <label htmlFor="proteinSequence" className="text-gray-800 font-semibold mb-2 self-start">
                    Paste Your Protein Sequence Below:
                </label>
                <textarea
                    id="proteinSequence"
                    className="w-full h-48 p-4 mb-6 text-gray-800 bg-red-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="e.g., MVYILPVLGASLEEDQSSLLRAVRLG..."
                    value={sequence}
                    onChange={(e) => setSequence(e.target.value)}
                ></textarea>

                {error && <p className="text-red-600 text-sm mb-4 self-start">{error}</p>}
                {loading && <p className="text-blue-600 text-sm mb-4 self-start">Analyzing sequence...</p>}

                <button
                    onClick={handleAnalyzeSequence}
                    className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    disabled={loading}
                >
                    {loading ? 'Analyzing...' : 'Analyze Sequence'}
                </button>

                {analysisResults && (
                    <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg w-full">
                        <h3 className="text-xl font-bold text-blue-800 mb-4">Analysis Results:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                            <p>
                                <span className="font-semibold">Molecular Weight:</span> {analysisResults.molecular_weight.toFixed(4)}
                            </p>
                            <p>
                                <span className="font-semibold">Isoelectric Point:</span> {analysisResults.isoelectric_point.toFixed(4)}
                            </p>
                            <p>
                                <span className="font-semibold">Hydrophobicity:</span> {analysisResults.hydrophobicity.toFixed(4)}
                            </p>
                            <p>
                                <span className="font-semibold">Total Charge:</span> {analysisResults.total_charge.toFixed(4)}
                            </p>
                            <p>
                                <span className="font-semibold">Polar Ratio:</span> {analysisResults.polar_ratio.toFixed(4)}
                            </p>
                            <p>
                                <span className="font-semibold">Nonpolar Ratio:</span> {analysisResults.nonpolar_ratio.toFixed(4)}
                            </p>
                            <p>
                                <span className="font-semibold">Sequence Length:</span> {analysisResults.sequence_length.toFixed(4)}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Predict;