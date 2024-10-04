import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
            <h2 className="text-orange-500 text-2xl font-bold">FreshGrocer</h2>
            <ul className="flex space-x-6">
                <li>
                    <Link 
                        to="/" 
                        className="text-white hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/shop" 
                        className="text-white hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300"
                    >
                        Shop
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-white hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300"
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className="text-white hover:bg-orange-500 hover:text-white px-3 py-2 rounded transition duration-300"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
