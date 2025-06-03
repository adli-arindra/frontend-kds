"use client";
import React, { useState } from "react";
import { proteinToDNA, dnaToProtein } from "@/utils/converter";
import Link from "next/link";

const ConverterPage = () => {
    const [sequence, setSequence] = useState('');
    const [convertedSequence, setConvertedSequence] = useState('');
    const [error, setError] = useState('');
    const [conversionMode, setConversionMode] = useState<'dnaToProtein' | 'proteinToDna'>('dnaToProtein');

    const handleConvert = () => {
        setError('');
        setConvertedSequence('');

        if (!sequence.trim()) {
            setError('Please enter a sequence to convert.');
            return;
        }

        try {
            if (conversionMode === 'dnaToProtein') {
                const result = dnaToProtein(sequence);
                setConvertedSequence(result);
            } else {
                const result = proteinToDNA(sequence);
                setConvertedSequence(result);
            }
        } catch {
            setError('Please make sure you inserted the correct sequence!');
        }
    };

    const toggleConversionMode = () => {
        setConversionMode(prevMode =>
            prevMode === 'dnaToProtein' ? 'proteinToDna' : 'dnaToProtein'
        );
        setSequence('');
        setConvertedSequence('');
        setError('');
    };

    const inputLabel = conversionMode === 'dnaToProtein' ? 'Enter DNA Sequence:' : 'Enter Protein Sequence:';
    const inputPlaceholder = conversionMode === 'dnaToProtein'
        ? 'e.g., ATGCGTACGTACGTACGTACGTACGTACGTACG'
        : 'e.g., AGWLLLVVGAASVAGVGAWLLLVVGAASVAGVGAWLLLVVGAASVAGVGAWLLLVVGAASVAGVG';

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Sequence Converter
                </h1>

                <div className="mb-6">
                    <label htmlFor="sequence-input" className="block text-gray-700 text-sm font-medium mb-2">
                        {inputLabel}
                    </label>
                    <textarea
                        id="sequence-input"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-base resize-y"
                        rows={10}
                        value={sequence}
                        onChange={(e) => setSequence(e.target.value)}
                        placeholder={inputPlaceholder}
                    ></textarea>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex items-center justify-center mb-6 space-x-4">
                        <span className={`text-md font-medium ${conversionMode === 'dnaToProtein' ? 'text-blue-600' : 'text-gray-500'}`}>
                            DNA to Protein
                        </span>
                        <label htmlFor="toggle-switch" className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                id="toggle-switch"
                                className="sr-only peer"
                                checked={conversionMode === 'proteinToDna'}
                                onChange={toggleConversionMode}
                                />
                            <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                        <span className={`text-md font-medium ${conversionMode === 'proteinToDna' ? 'text-blue-600' : 'text-gray-500'}`}>
                            Protein to DNA
                        </span>
                    </div>

                    <div className="flex justify-end mb-6">
                        <button
                            onClick={handleConvert}
                            className="bg-[#338FF2] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                            Convert
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline"> {error}</span>
                    </div>
                )}

                {convertedSequence && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Converted Result:</h2>
                        <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 overflow-auto max-h-60">
                            <p className="text-gray-800 text-base break-words">{convertedSequence}</p>
                        </div>
                    </div>
                )}
            </div>
            <Link href="/predict?tab=attribute" 
                className="text-blue-700 mt-4 hover:text-blue-400">
                Want to analyze a protein sequence instead ?
            </Link>
        </div>
    );
};

export default ConverterPage;
