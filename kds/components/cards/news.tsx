import React from 'react';
import CTAButton from '../ctabutton';

interface NewsCardProps {
    date: string;
    title: string;
    description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ date, title, description }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
            <svg
            className="w-16 h-16 text-gray-600"
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
        <div className="p-4 flex flex-col flex-grow">
            <p className="text-gray-500 text-xs mb-2">{date}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
            {title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">
            {description}
            </p>
            <div className="flex justify-start">
            <CTAButton href='/' text='Read More'/>
            </div>
        </div>
        </div>
    );
};

const News: React.FC = () => {
    const newsItems: NewsCardProps[] = [
        {
        date: '16th March 2021',
        title: 'Dr.Aboobacker and team successfully done the world\'s first head implant.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
        date: '16th March 2021',
        title: 'Dr.Aboobacker and team successfully done the world\'s first head implant.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
        date: '16th March 2021',
        title: 'Dr.Aboobacker and team successfully done the world\'s first head implant.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
        date: '16th March 2021',
        title: 'Dr.Aboobacker and team successfully done the world\'s first head implant.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    return (
        <section className="py-16 bg-white font-sans">
        <div className="container mx-auto px-32">
            <div className="mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">Latest News</p>
            <h2 className="text-4xl font-bold text-gray-800">Hot Topics</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {newsItems.map((item, index) => (
                <NewsCard
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                />
            ))}
            </div>

            <div className="flex justify-center space-x-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
        </div>
        </section>
    );
};

export default News;
