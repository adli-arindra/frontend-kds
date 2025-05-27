import Link from "next/link";
import Image from "next/image";

interface CTAButtonProps {
    text: string;
    href: string;
}

const CTAButton = ({ text, href }: CTAButtonProps) => {
    return (
        <Link href={href}>
        <div className="flex flex-row justify-between bg-gray-800 p-4 py-2 rounded-4xl w-[200px] mt-8 hover:bg-gray-600">
            <p className="text-white text-sm">{text}</p>
            <Image src="/arrow.png" alt="" width={20} height={20} />
        </div>
        </Link>
    );
};

export default CTAButton;
