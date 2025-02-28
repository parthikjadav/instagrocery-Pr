import React from 'react';

const Footer = () => {
    return (
        <section className="py-8 bg-white shadow-lg w-full">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-12 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-8">
                    
                    {/* Useful Links Section */}
                    <div>
                        <h3 className="text-black font-bold text-lg mb-4">Useful Links</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <ul className="space-y-2 text-gray-700">
                                <li><a href="#" className="hover:text-green-600">Home</a></li>
                                <li><a href="#" className="hover:text-green-600">Careers</a></li>
                                <li><a href="#" className="hover:text-green-600">Blog</a></li>
                                <li><a href="#" className="hover:text-green-600">Press</a></li>
                                <li><a href="#" className="hover:text-green-600">Lead</a></li>
                                <li><a href="#" className="hover:text-green-600">Value</a></li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                                <li><a href="#" className="hover:text-green-600">Privacy</a></li>
                                <li><a href="#" className="hover:text-green-600">Terms</a></li>
                                <li><a href="#" className="hover:text-green-600">FAQs</a></li>
                                <li><a href="#" className="hover:text-green-600">Security</a></li>
                                <li><a href="#" className="hover:text-green-600">Mobile</a></li>
                                <li><a href="#" className="hover:text-green-600">Contact</a></li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                                <li><a href="#" className="hover:text-green-600">Partner</a></li>
                                <li><a href="#" className="hover:text-green-600">Franchise</a></li>
                                <li><a href="#" className="hover:text-green-600">Warehouse</a></li>
                                <li><a href="#" className="hover:text-green-600">Deliver</a></li>
                                <li><a href="#" className="hover:text-green-600">Resources</a></li>
                                <li><a href="#" className="hover:text-green-600">Seller</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Categories Section */}
                    <div>
                        <div className="flex flex-col md:flex-row gap-2 items-center md:items-start mb-4">
                            <h3 className="text-black font-bold text-lg">Categories</h3>
                            <span className="text-green-600 cursor-pointer hover:underline">See all</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <ul className="space-y-2 text-gray-700">
                                <li><a href="#" className="hover:text-green-600">Vegetables & Fruits</a></li>
                                <li><a href="#" className="hover:text-green-600">Cold Drinks & Juices</a></li>
                                <li><a href="#" className="hover:text-green-600">Bakery & Biscuits</a></li>
                                <li><a href="#" className="hover:text-green-600">Dry Fruits, Masala & Oil</a></li>
                                <li><a href="#" className="hover:text-green-600">Paan Corner</a></li>
                                <li><a href="#" className="hover:text-green-600">Pharma & Wellness</a></li>
                                <li><a href="#" className="hover:text-green-600">Ice Creams & Frozen Desserts</a></li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                                <li><a href="#" className="hover:text-green-600">Dairy & Breakfast</a></li>
                                <li><a href="#" className="hover:text-green-600">Instant & Frozen Food</a></li>
                                <li><a href="#" className="hover:text-green-600">Sweet Tooth</a></li>
                                <li><a href="#" className="hover:text-green-600">Sauces & Spreads</a></li>
                                <li><a href="#" className="hover:text-green-600">Organic & Premium</a></li>
                                <li><a href="#" className="hover:text-green-600">Cleaning Essentials</a></li>
                                <li><a href="#" className="hover:text-green-600">Personal Care</a></li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                                <li><a href="#" className="hover:text-green-600">Munchies</a></li>
                                <li><a href="#" className="hover:text-green-600">Tea, Coffee & Health Drinks</a></li>
                                <li><a href="#" className="hover:text-green-600">Atta, Rice & Dal</a></li>
                                <li><a href="#" className="hover:text-green-600">Chicken, Meat & Fish</a></li>
                                <li><a href="#" className="hover:text-green-600">Baby Care</a></li>
                                <li><a href="#" className="hover:text-green-600">Home & Office</a></li>
                                <li><a href="#" className="hover:text-green-600">Pet Care</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-8 border-t pt-4 text-center text-gray-600 text-sm">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </section>
    );
};

export default Footer;
