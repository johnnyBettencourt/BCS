import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer className="bg-white shadow-md py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex justify-center mb-4 md:mb-0">
                    <Link to="/" className="text-black hover:text-gray-700 font-semibold text-xl">Bettencourt Creative Solutions</Link>
                </div>
                <nav className="flex space-x-4">
                    <Link to="/" className="text-black hover:text-gray-700">Home</Link>
                    <Link to="/about" className="text-black hover:text-gray-700">About</Link>
                    <Link to="/services" className="text-black hover:text-gray-700">Services</Link>
                    <Link to="/portfolio" className="text-black hover:text-gray-700">Portfolio</Link>
                    <button className="text-black hover:text-gray-700" onClick={() => window.scrollTo(0, 0)}>Contact</button>
                </nav>
                <div className="mt-4 md:mt-0">
                    <p className="text-gray-700">© {new Date().getFullYear()} Bettencourt Creative Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
