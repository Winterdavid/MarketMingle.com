import React, { useState } from 'react';
import sweetAppleImage from './sweet apple.png'; // Adjust the path according to your structure

import bananaImage from './banana.png'; // Add your other images similarly
import breadImage from './whole-wheat-bread.png';
import almondMilkImage from './almond-milk.png';

// Sample product data
const products = [
    {
        id: 1,
        name: 'Organic Apples',
        price: 3.99,
        image: sweetAppleImage, // Use the imported apple image
    },
    {
        id: 2,
        name: 'Fresh Bananas',
        price: 1.99,
        image: bananaImage, // Use the imported banana image
    },
    {
        id: 3,
        name: 'Whole Wheat Bread',
        price: 2.49,
        image: breadImage, // Use the imported bread image
    },
    {
        id: 4,
        name: 'Almond Milk',
        price: 2.99,
        image: almondMilkImage, // Use the imported almond milk image
    },
];

const Shop = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.name} has been added to your cart!`);
    };

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Shop FreshGrocer</h1>
            <div className="flex flex-wrap justify-center">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border border-gray-300 rounded-lg m-2 p-4 w-48 text-center bg-white shadow-md transition-transform transform hover:scale-105"
                    >
                        <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded-md" />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-700">${product.price.toFixed(2)}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Shopping Cart</h2>
                <p className="text-gray-600">Items in Cart: {cart.length}</p>
                {cart.length > 0 && (
                    <ul className="mt-2">
                        {cart.map((item, index) => (
                            <li key={index} className="border-b border-gray-300 py-1">
                                {item.name} - ${item.price.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Shop;
