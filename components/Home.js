import React from 'react';
import deliveryImage from './delivery-image.png'; // Adjust the path as needed

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to GroceriesToGo</h1>
            <p className="text-lg md:text-xl mb-6">Your one-stop shop for fresh groceries delivered to your door!</p>
            <button className="bg-orange-400 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-500 transition duration-300">
                Shop Now
            </button>
            <div className="mt-8">
                <img 
                    src={deliveryImage} 
                    alt="Delivery Person" 
                    className="w-full max-w-lg rounded-lg shadow-lg" 
                />
            </div>
        </div>
    );
};

export default Home;
