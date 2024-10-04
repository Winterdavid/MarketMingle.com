import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-6">About FreshGrocer</h1>
            <p className="text-lg mb-4">
                FreshGrocer is your one-stop solution for grocery delivery. We strive to provide our customers with the best products at the most affordable prices, ensuring that your shopping experience is seamless and enjoyable.
            </p>
            <h2 className="text-3xl font-semibold mt-6 mb-2">Our Mission</h2>
            <p className="text-lg mb-4">
                Our mission is to make grocery shopping easier and more accessible for everyone. We are committed to providing high-quality products, excellent customer service, and a user-friendly platform.
            </p>
            <h2 className="text-3xl font-semibold mt-6 mb-2">Meet the Team</h2>
            <ul className="list-disc list-inside mb-4">
                <li className="text-lg">David- Founder & CEO</li>
                <li className="text-lg">Benezeth- Head of Marketing</li>
                <li className="text-lg">Benedictor - Customer Service Manager</li>
            </ul>
            <h2 className="text-3xl font-semibold mt-6 mb-2">Our History</h2>
            <p className="text-lg mb-4">
                FreshGrocer was founded in 2020 with the goal of revolutionizing the grocery shopping experience. Since then, we have grown rapidly and expanded our services to reach more customers.
            </p>
            <h2 className="text-3xl font-semibold mt-6 mb-2">Contact Us</h2>
            <p className="text-lg mb-4">
                For more information, feel free to reach out to us at <a href="mail:davidbenedictor610@gmail.com" className="text-blue-600 hover:underline">davidbenector610@gmail.com</a> or call us at <span className="font-bold">255 46209799</span>.
            </p>
        </div>
    );
};

export default About;
