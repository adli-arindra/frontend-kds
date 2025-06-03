"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ResponseTable, { AnalysisResults } from './components/response-table';
import Link from 'next/link';

const PredictPage = () => {
    const searchParams = useSearchParams();
    const [proteinSequence, setProteinSequence] = useState('');
    const [analysisResult, setAnalysisResult] = useState<AnalysisResults | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [tab, setTab] = useState('attribute');
    const [similar, setSimilar] = useState('');
    const [tabDescription, setTabDescription] = useState('');

    useEffect(() => {
        const queryTab = searchParams.get('tab');
        if (queryTab) {
            if (queryTab === 'attribute' || queryTab === 'similar-sequence') {
                setTab(queryTab);
            }
        }
    }, [searchParams]);

    useEffect(() => {
        if (tab === 'attribute') {
            setTabDescription("This tab will show you the attribute of a given protein sequence.")
        } 
        else {
            setTabDescription("This tab will show you the most similar sequence to a given protein sequence.")
        }
    }, [tab]);

    const handleAnalyze = async () => {
        if (!proteinSequence.trim()) {
            setError('Please enter a protein sequence.');
            setAnalysisResult(undefined);
            return;
        }

        setIsLoading(true);
        setError('');
        setAnalysisResult(undefined);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_ENDPOINT + '/predict';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sequence: proteinSequence }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Something went wrong with the analysis.');
            }

            const data = await response.json();
            setAnalysisResult(data as AnalysisResults);

            try {
                const simApiUrl = process.env.NEXT_PUBLIC_ENDPOINT + '/find-similar'
                const simResponse = await fetch(simApiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                if (!simResponse.ok) {
                    const simErrorData = await simResponse.json();
                    throw new Error(simErrorData.message || 'Something went wrong with the analysis.');
                }

                const simData = await simResponse.json();
                setSimilar(simData.sequence);
            } catch (err: any) {
                setError(err.message || 'Failed to connect to the analysis service.');
            }
        } catch (err: any) {
            setError(err.message || 'Failed to connect to the analysis service.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Protein Sequence Analysis
            </h1>

            <div className="mb-6">
            <label htmlFor="protein-sequence" className="block text-gray-700 text-sm font-medium mb-2">
                Enter protein Sequence:
            </label>
            <textarea
                id="protein-sequence"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-base resize-y"
                rows={10}
                value={proteinSequence}
                onChange={(e) => setProteinSequence(e.target.value)}
                placeholder="e.g., AGWLLLVVGAASVAGVGAWLLLVVGAASVAGVGAWLLLVVGAASVAGVGAWLLLVVGAASVAGVG"
            ></textarea>
            </div>

            <div className="flex justify-end mb-6">
            <button
                onClick={handleAnalyze}
                className="bg-[#338FF2] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
            >
                {isLoading ? 'Analyzing...' : 'Analyze'}
            </button>
            </div>

            {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
            </div>
            )}

            {(
                <div className="w-full bg-white border-b-2 border-gray-200 flex flex-row">
                    <div className="max-w-4xl mx-auto flex justify-start space-x-8">
                        <button
                            className={`
                            py-3 px-4 text-lg font-semibold focus:outline-none
                            ${tab === "attribute"
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'
                            }
                            transition-colors duration-200 ease-in-out
                            `}
                            onClick={() => setTab('attribute')}
                        >
                            Attributes
                        </button>
                    </div>
                    <div className="max-w-4xl mx-auto flex justify-start space-x-8">
                        <button
                            className={`
                            py-3 px-4 text-lg font-semibold focus:outline-none
                            ${tab === "similar-sequence"
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'
                            }
                            transition-colors duration-200 ease-in-out
                            `}
                            onClick={() => setTab('similar-sequence')}
                        >
                            Similar Sequence
                        </button>
                    </div>
                </div>
            )}
            {analysisResult && tab === "attribute" && (
            <div className="">
                <ResponseTable results={analysisResult}/>
            </div>
            )}
            {analysisResult && tab === "similar-sequence" && (
            <div className="text-gray-800 py-4 text-wrap w-full space-y-2">
                <h1>The most similar sequence to the one you provided is this one:</h1>
                <div className='overflow-auto py-4 px-2 bg-gray-200 rounded-2xl'>
                    <p className='text-wrap'>{similar}</p>
                </div>
            </div>
            )}
            {!analysisResult && (
                <div className='bg-white h-32 flex justify-center items-center'>
                    <p className='text-gray-600 text-center'>{tabDescription}</p>
                </div>
            )}
        </div>
        <Link href="/converter" 
                className="text-blue-700 mt-4 hover:text-blue-400">
                Want to convert a DNA sequence to protein sequence instead ?
        </Link>
        </div>
    );
};

export default PredictPage;