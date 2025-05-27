import React from 'react';
import CTAButton from '../ctabutton';

interface TeamMemberProps {
    name: string;
    id: string;
    description: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, id, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-4 px-20">
        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mb-4">
            <svg
            className="w-16 h-16 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
            />
            </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{id}</p>
        <p className="text-sm text-gray-500 mb-4 max-w-xs leading-relaxed">
            {description}
        </p>
        <CTAButton href='/' text='Read More'/>
        </div>
    );
};

const Team: React.FC = () => {
    const teamMembers: TeamMemberProps[] = [
        {
        name: 'Eleanor Cordelia',
        id: '18222059',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
        name: 'Viktor Arsidiantoro',
        id: '18222083',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
        name: 'Muhammad Adli',
        id: '18222089',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    return (
        <section className="py-16 bg-gray-200 font-sans px-48">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">Our Team</p>
            <h2 className="text-4xl font-bold text-gray-800">Meet our people</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
                <TeamMemberCard
                key={index}
                name={member.name}
                id={member.id}
                description={member.description}
                />
            ))}
            </div>
        </div>
        </section>
    );
};

export default Team;
