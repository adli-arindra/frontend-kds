import React from 'react';
import CTAButton from '../ctabutton';
import Link from 'next/link';

interface FeatureCardProps {
    title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title }) => {
    return (
        <Link href={"/predict"}>
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="w-24 h-24 bg-gray-300 rounded-md flex items-center justify-center mb-4">
            <svg
            className="w-12 h-12 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
                />
            </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        </Link>
    );
};

const Features: React.FC = () => {
    const featureItems: FeatureCardProps[] = [
        { title: 'DNA Analysis' },
        { title: 'Gene Analysis' },
        { title: 'Gene Classification' },
        { title: 'Visual Insights' },
    ];

    return (
        <section className="py-16 bg-white font-sans">
        <div className="container mx-auto px-32">
            <div className="mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">Features</p>
            <h2 className="text-4xl font-bold text-gray-800">State of the art treatment</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featureItems.map((feature, index) => (
                <FeatureCard
                key={index}
                title={feature.title}
                />
            ))}
            </div>

            <div className="text-center">
            <CTAButton href='/' text='Read More'/>
            </div>
        </div>
        </section>
    );
};

export default Features;
