import Image from "next/image";
import Link from "next/link";

const researchArticles = [
    {
        id: 1,
        title: "New AI Model Predicts Protein Structures with Unprecedented Accuracy",
        description:
        "Researchers at the Institute for Protein Innovation have developed a new AI model that significantly improves the accuracy of protein structure prediction. This breakthrough could accelerate drug discovery and our understanding of biological processes.",
        link: "/news",
        imageUrl: "/news/1.png",
    },
    {
        id: 2,
        title: "Deep Learning Identifies Novel Protein Interactions in Cancer Cells",
        description:
        "A study published in Nature Communications demonstrates how deep learning can identify previously unknown protein interactions in cancer cells, offering new targets for therapeutic intervention.",
        link: "/news",
        imageUrl: "/news/2.png",
    },
    {
        id: 3,
        title: "AI-Driven Protein Design for Enhanced Enzyme Activity",
        description:
        "Scientists at the University of California, Berkeley, have used AI to design proteins with enhanced enzyme activity, paving the way for new applications in biotechnology and synthetic biology.",
        link: "/news",
        imageUrl: "/news/3.png",
    },
    {
        id: 4,
        title: "Machine Learning Accelerates Protein Function Prediction",
        description:
        "A new machine learning approach developed at the Broad Institute of MIT and Harvard significantly speeds up the prediction of protein function from sequence data, enabling faster analysis of large datasets.",
        link: "/news",
        imageUrl: "/news/4.png",
    },
];

const News = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-24">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center sm:text-left">
            Latest Research
            </h1>

            {researchArticles.map((article, index) => (
            <div key={article.id} className={`flex flex-col md:flex-row items-center md:items-start mb-6 ${index === researchArticles.length - 1 ? 'mb-0' : ''}`}>
                <div className="md:w-2/3 md:pr-8 mb-2 md:mb-0">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {article.title}
                </h2>
                <p className="text-gray-700 mb-4 text-sm text-justify">
                    {article.description}
                </p>
                <Link href={article.link} className="text-blue-600 hover:underline font-medium">
                    Read More
                </Link>
                </div>
                <div className="md:w-1/3 flex justify-center items-center">
                <Image
                    src={article.imageUrl}
                    alt={`Placeholder image for ${article.title}`}
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default News;
