import Image from "next/image";

const TeamPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center sm:text-left">
            People Behind GeneScope AI
            </h1>

            <p className="text-lg text-gray-700 mb-12 text-center sm:text-left mr-32">
            Meet the team behind GeneScope AI, a group of passionate scientists and engineers dedicated to advancing protein
            sequence analysis through cutting-edge AI technology.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left">
            Our Team
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start space-y-8 sm:space-y-0 sm:space-x-12">
            <div className="flex flex-col items-center text-center">
                <Image
                src="/team/elen.png"
                alt="Eleanor Cordelia"
                width={220}
                height={220}
                className="rounded-full object-cover"
                />
                <p className="mt-4 text-lg font-semibold text-gray-900">Eleanor Cordelia</p>
                <p className="text-sm text-gray-600">Student ID: 123456</p>
            </div>

            <div className="flex flex-col items-center text-center">
                <Image
                src="/team/viktor.png"
                alt="Viktor Arsidiantoro S."
                width={220}
                height={220}
                className="rounded-full object-cover"
                />
                <p className="mt-4 text-lg font-semibold text-gray-900">Viktor Arsidiantoro S.</p>
                <p className="text-sm text-gray-600">Student ID: 789012</p>
            </div>

            <div className="flex flex-col items-center text-center">
                <Image
                src="/team/adli.png"
                alt="Muhammad Adli A."
                width={220}
                height={220}
                className="rounded-full object-cover"
                />
                <p className="mt-4 text-lg font-semibold text-gray-900">Muhammad Adli A.</p>
                <p className="text-sm text-gray-600">Student ID: 345678</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default TeamPage;
