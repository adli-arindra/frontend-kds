import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div
            className="
                fixed top-0 left-0 w-full z-50
                flex flex-row justify-center items-center bg-white py-4
            "
        >
            <Link
                href={"/"}>
                <Image
                    src="/logo.png"
                    alt="Company Logo" // Added descriptive alt text
                    width={150}
                    height={100}
                />
            </Link>

            <span className="text-gray-800 font-roboto text-sm space-x-4 mx-24">
                <Link href="/#Vision" className="hover:text-gray-500">Our Vision</Link>
                <Link href="/#Features" className="hover:text-gray-500">Features</Link>
                <Link href="/#Team" className="hover:text-gray-500">Our Team</Link>
                <Link href="/#News" className="hover:text-gray-500">Latest News</Link>
                <Link href="/#Contact" className="hover:text-gray-500">Contact</Link>
            </span>

            <Image
                src="/socmed.png"
                alt="Social Media Links" // Added descriptive alt text
                width={75}
                height={100}
            />
        </div>
    );
};

export default Header;