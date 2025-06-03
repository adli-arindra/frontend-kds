import Image from "next/image";
import Link from "next/link";

const analysisModes = [
    {
        id: 1,
        src: "/features/1.png",
        alt: "Protein Sequence Analysis",
        title: "Protein Sequence Analysis",
        description: "Predict the behavior of a protein from its amino acid sequence with high accuracy.",
        link: "/predict",
    },
    {
        id: 2,
        src: "/features/2.png",
        alt: "Protein Similarity Clustering",
        title: "Protein Similarity Clustering",
        description: "Group proteins with similar sequences to understand evolutionary relationships.",
        link: "/predict",
    },
];

const Features = () => {
    return (
        <div className="bg-white w-screen min-h-screen py-12 px-4 sm:px-6 lg:px-32">
        <h1 className="text-black text-3xl font-bold text-center sm:text-left mb-8">Choose Your Analysis Mode</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            {analysisModes.map((mode) => (
            <Link href={mode.link} key={mode.id} className="block max-w-sm p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                src={mode.src}
                alt={mode.alt}
                width={400}
                height={400}
                className="rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{mode.title}</h2>
                <p className="text-gray-700 text-sm">{mode.description}</p>
            </Link>
            ))}
        </div>
        </div>
    );
};

export default Features;
