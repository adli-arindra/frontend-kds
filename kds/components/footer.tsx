import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-6 font-sans border-t border-gray-200">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
            <nav className="mb-4 sm:mb-0">
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6">
                <li>
                <a href="#" className="hover:text-gray-800 transition-colors duration-200">
                    Our Vision
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-gray-800 transition-colors duration-200">
                    Features
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-gray-800 transition-colors duration-200">
                    Our Team
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-gray-800 transition-colors duration-200">
                    Latest News
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-gray-800 transition-colors duration-200">
                    Contact
                </a>
                </li>
            </ul>
            </nav>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <p className="text-center sm:text-left">Copyright © Genescope</p>
            <p className="text-center sm:text-right">
                Powered by <span className="font-semibold text-gray-800">KDS</span>
            </p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
