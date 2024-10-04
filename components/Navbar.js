import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Adjust the path if necessary

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-white border-b border-gray-300">
            <div className="flex items-center">
                <img src={logo} alt="GroceriesToGo Logo" className="h-12 mr-2" /> {/* Logo styling */}
                <h1 className="text-2xl font-semibold">GroceriesToGo</h1>
            </div>
            <div className="flex flex-1 justify-center space-x-6">
                <Link to="/" className="text-gray-700 hover:text-orange-500 transition duration-300">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-orange-500 transition duration-300">About</Link>
                <Link to="/shop" className="text-gray-700 hover:text-orange-500 transition duration-300">Shop</Link>
                <Link to="/menu" className="text-gray-700 hover:text-orange-500 transition duration-300">Menu</Link>
                <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition duration-300">Contact</Link>
            </div>
            <div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded mr-2 hover:bg-orange-600 transition duration-300">Sign Up</button>
                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300">Add to Cart</button>
            </div>
        </nav>
    );
};

export default Navbar;
