import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
                src="/home.png"
                alt="Discover Protein Secrets"
                width={800}
                height={400}
                layout="responsive"
                className="rounded-xl"
            />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Protein Secrets Instantly, All in a Single Click
            </h1>

            <p className="text-md text-gray-700 mb-10 max-w-2xl mx-auto">
            Dari diagnosis cepat hingga eksplorasi biologis, GeneScope AI membantumu mengubah data
            mentah menjadi wawasan yang bermakna.
            </p>

            <Link href="/features">
                <div className="bg-[#338FF2] text-white px-4 py-2 rounded-4xl w-fit mx-auto font-semibold hover:scale-105 transition-all duration-300 ease-in-out">
                    <p>Get Started</p>
                </div>
            </Link>
        </div>
        </div>
    );
};

export default HomePage;