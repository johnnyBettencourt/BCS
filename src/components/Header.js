import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useModal } from '../context/ModalContext';
import logo from "../../static/Bettencourt.svg";

const Header = () => {
    const { openModal } = useModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="Bettencourt Creative Solutions" className="h-16" />
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="text-black hover:text-gray-700 font-semibold">Home</Link>
                    <Link to="/about" className="text-black hover:text-gray-700 font-semibold">About</Link>
                    <Link to="/services" className="text-black hover:text-gray-700 font-semibold">Services</Link>
                    <Link to="/portfolio" className="text-black hover:text-gray-700 font-semibold">Portfolio</Link>
                    <button onClick={openModal} className="text-black hover:text-gray-700 font-semibold">Contact</button>
                </nav>
                <div className="md:hidden">
                    <button className="text-black hover:text-gray-700" onClick={toggleMenu}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <nav className="px-4 pb-4">
                        <Link to="/" className="block text-black hover:text-gray-700 py-2">Home</Link>
                        <Link to="/about" className="block text-black hover:text-gray-700 py-2">About</Link>
                        <Link to="/services" className="block text-black hover:text-gray-700 py-2">Services</Link>
                        <Link to="/portfolio" className="block text-black hover:text-gray-700 py-2">Portfolio</Link>
                        <button onClick={openModal} className="block text-black hover:text-gray-700 py-2">Contact</button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
