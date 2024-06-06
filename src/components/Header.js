import * as React from "react"
import { Link } from "gatsby"
import logo from "../../static/Bettencourt.svg"

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="Bettencourt Creative Solutions" className="h-10" />
                </Link>
                <nav>
                    <Link to="/" className="mr-4 text-white">Home</Link>
                    <Link to="/about" className="mr-4 text-white">About</Link>
                    <Link to="/services" className="mr-4 text-white">Services</Link>
                    <Link to="/portfolio" className="mr-4 text-white">Portfolio</Link>
                    <Link to="/contact" className="text-white">Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
