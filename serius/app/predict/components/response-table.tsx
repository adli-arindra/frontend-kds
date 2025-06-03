import React from 'react';

export interface AnalysisResults {
    molecular_weight: number;
    isoelectric_point: number;
    hydrophobicity: number;
    total_charge: number;
    polar_ratio: number;
    nonpolar_ratio: number;
    sequence_length: number;
}

interface ResponseTableProps {
    results: AnalysisResults;
}

const ResponseTable: React.FC<ResponseTableProps> = ({ results }) => {
    if (!results) {
        return null;
    }

    const data = [
        { property: 'Molecular Weight', value: results.molecular_weight?.toFixed(4) },
        { property: 'Isoelectric Point', value: results.isoelectric_point?.toFixed(4) },
        { property: 'Hydrophobicity', value: results.hydrophobicity?.toFixed(4) },
        { property: 'Total Charge', value: results.total_charge },
        { property: 'Polar Ratio', value: results.polar_ratio?.toFixed(4) },
        { property: 'Nonpolar Ratio', value: results.nonpolar_ratio?.toFixed(4) },
        { property: 'Sequence Length', value: results.sequence_length },
    ];

    return (
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
                </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.property}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {row.value}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default ResponseTable;