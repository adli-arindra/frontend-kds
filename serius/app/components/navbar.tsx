import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="fixed top-0 w-full z-50 flex flex-row items-center px-12 h-[75px] bg-white border-b-2 border-gray-300 justify-between">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt=""
                    width={125}
                    height={100}
                />
            </Link>
            <div className="flex flex-row justify-between items-center text-gray-800 space-x-6 font-semibold text-sm">
                <Link href="/news">Latest News</Link>
                <Link href="/team">Our Team</Link>
                <Link href="/features">
                    <div className="bg-[#338FF2] text-white px-4 py-2 rounded-4xl hover:scale-105 transition-all duration-300 ease-in-out">
                        <p>Get Started</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
