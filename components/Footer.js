import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-between mb-10">
                    <div className="flex-1 min-w-[200px] mb-6">
                        <h3 className="text-lg font-semibold">FreshGrocer - Your One-Stop Grocery Delivery</h3>
                    </div>
                    <div className="flex-1 min-w-[200px] mb-6">
                        <h4 className="text-lg font-semibold">Quick Links:</h4>
                        <ul className="list-none p-0">
                            {['Home', 'Shop', 'About Us', 'Contact Us', 'FAQs', 'Blog', 'Privacy Policy', 'Terms of Service'].map(link => (
                                <li key={link}>
                                    <a href="javascript:void(0);" className="text-white hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 min-w-[200px] mb-6">
                        <h4 className="text-lg font-semibold">Customer Service:</h4>
                        <ul className="list-none p-0">
                            {['Track Your Order', 'Returns & Refunds', 'Delivery Information', 'Payment Options'].map(link => (
                                <li key={link}>
                                    <a href="javascript:void(0);" className="text-white hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 min-w-[200px] mb-6">
                        <h4 className="text-lg font-semibold">Connect with Us:</h4>
                        <p>
                            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map(platform => (
                                <span key={platform}>
                                    <a href="javascript:void(0);" className="text-white hover:underline">{platform}</a>
                                    {platform !== 'LinkedIn' && ' | '}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="mb-10">
                    <h4 className="text-lg font-semibold">Download Our App:</h4>
                    <p>
                        Available on <a href="javascript:void(0);" className="text-white hover:underline">App Store</a> | 
                        <a href="javascript:void(0);" className="text-white hover:underline"> Google Play</a>
                    </p>
                </div>

                <div className="mb-10">
                    <h4 className="text-lg font-semibold">Stay Updated:</h4>
                    <div className="flex items-center">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="p-2 w-1/3 rounded-l-md border-none focus:outline-none" 
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">Subscribe</button>
                    </div>
                </div>

                <div className="mb-10">
                    <h4 className="text-lg font-semibold">Payment Methods:</h4>
                    <p>We accept: Visa, MasterCard, PayPal, Apple Pay, Google Pay</p>
                </div>

                <div className="mb-10">
                    <h4 className="text-lg font-semibold">Address:</h4>
                    <p>FreshGrocer, 123 Market Street, City, State, ZIP</p>
                </div>

                <div className="mb-10">
                    <h4 className="text-lg font-semibold">Contact Us:</h4>
                    <p>Email: <a href="mailto:davivbenedictor610@gmail.com" className="text-white hover:underline">davivbenedictor610@gmail.com</a> | Phone: <span className="font-bold">255746209799</span></p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold">Follow Us for Daily Deals!</h4>
                    <p>Join our community and get exclusive discounts and offers.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
