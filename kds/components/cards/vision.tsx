import Image from "next/image";
import Link from "next/link";
import CTAButton from "../ctabutton";

const Vision = () => {
    return (
        <div
            className="bg-gray-200 max-w-screen p-12 pr-8 flex flex-row h-fit">
            <div
                className="w-1/2 pl-36">
                <p className="text-sm text-gray-400 font-bold">Our Vision</p>
                <h1 className="text-6xl text-gray-800 font-bold">Unlock the Secrets of DNA with Just One Click</h1>
                <p className="text-sm text-gray-800 mt-4">Dari diagnosis cepat hingga eksplorasi biologis, GeneScope AI membantumu mengubah data mentah menjadi wawasan yang bermakna.</p>
                
                <div className="mt-4 pl-4 space-y-2">
                    <span className="flex flex-row space-x-4">
                        <Image
                            src="/check.png"
                            alt=""
                            width={20}
                            height={100}
                        />
                        <p className="text-gray-700 text-sm">Real-Time DNA Analysis</p>
                    </span>
                    <span className="flex flex-row space-x-4">
                        <Image
                            src="/check.png"
                            alt=""
                            width={20}
                            height={100}
                        />
                        <p className="text-gray-700 text-sm">AI-Powered Gene Classification</p>
                    </span>
                    <span className="flex flex-row space-x-4">
                        <Image
                            src="/check.png"
                            alt=""
                            width={20}
                            height={100}
                        />
                        <p className="text-gray-700 text-sm">Intuitive Visual Insights</p>
                    </span>
                </div>

                <CTAButton href="/predict" text="Try Now"/>
            </div>
            <Image
                src="/gene.png"
                alt=""
                width={500}
                height={500}
                className="w-1/3 mx-auto"/>
        </div>
    );
};

export default Vision;