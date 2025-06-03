import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-white py-8 px-12 flex flex-col items-center justify-center text-sm text-[#4A709C] border-t-2 border-gray-300">
            <div className="flex flex-row justify-between items-center space-x-6 mb-6 w-1/2">
                <Link className="w-[150px] text-center" href="/terms">Terms of Service</Link>
                <Link className="w-[150px] text-center" href="/privacy">Privacy Policy</Link>
                <Link className="w-[150px] text-center" href="/contact">Contact Us</Link>
            </div>
            <p className="text-center">&copy; GeneScope AI</p>
        </footer>
    );
};

export default Footer;
