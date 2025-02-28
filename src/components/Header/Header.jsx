import React, { useState, useEffect } from "react";
import { FaPlus, FaSearch, FaShoppingCart, FaTimes, FaMinus, FaBars } from "react-icons/fa";
import Logo from "../../assets/images/Logo/Logo.svg";
import Time from "../../assets/images/AddtoCart/time.png";
import LoginModal from "../LoginModel/LoginModel";

const placeholders = [
    "sugar",
    "milk",
    "chips",
    "crud",
    "milik",
    "rice",
    "vegetable",
    "fruits",
    "bread",
    "butter",
    "oil",
    "snacks",
    "cold drinks",
    "biscuits",
    "pulses"
];

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <header className="px-6 py-4 bg-white shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-3xl">Insta</span>
                        <span className="text-green-500 text-3xl">grocery</span>
                    </div>

                    <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* navBar */}
                    <nav className={`lg:flex lg:items-center lg:gap-6 ${isMenuOpen ? "block" : "hidden"} absolute lg:static top-16 left-0 w-full bg-white lg:w-auto p-4 lg:p-0 shadow-md lg:shadow-none`}>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                            <div className="text-center">
                                <h5 className="text-black font-bold text-lg">Delivery in 13 minutes</h5>
                                <p className="text-gray-500 text-sm">405, Varachha Main Rd</p>
                            </div>

                            <div className="relative w-full lg:w-96 flex items-center bg-gray-100 px-4 py-3 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-green-500 transition-all duration-300">
                                <FaSearch className="text-gray-500" />
                                <input
                                    type="search"
                                    placeholder={placeholders[placeholderIndex]}
                                    className="w-full bg-transparent outline-none px-3 text-lg transition-all duration-500 ease-in-out placeholder-opacity-100 placeholder-animated"
                                />
                            </div>
                        </div>
                    </nav>

                    {/* Login & Cart */}
                    <div className="hidden lg:flex items-center gap-6">
                        <button className="text-black font-medium text-md" onClick={() => setIsLoginOpen(true)}>
                            Login
                        </button>
                        <button className="flex flex-col items-center px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700" onClick={() => setIsCartOpen(true)}>
                            <div className="flex items-center gap-2">
                                <FaShoppingCart size={20} />
                                <span>4 items</span>
                            </div>
                            <span className="text-xs">₹230</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Cart Modal */}
            {isCartOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
                    <div className="h-screen w-96 bg-white shadow-lg p-6 overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">My Cart</h2>
                            <button onClick={() => setIsCartOpen(false)}>
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <div className="flex items-center px-3 p-3 rounded-md bg-white shadow-lg">
                            <img src={Time} alt="time" className="w-12 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold">Delivery in 13 minutes</h3>
                                <p className="text-sm text-gray-500">Shipment of 1 item</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-4 border-b bg-white shadow-lg">
                            <img src={Logo} alt="Cheetos" className="w-16 h-16 rounded-lg" />
                            <div>
                                <p className="font-bold">Cheetos Flamin Hot</p>
                                <p className="text-sm text-gray-500">28.3 g</p>
                                <p className="font-bold">
                                    ₹161 <span className="text-gray-400 line-through">₹170</span>
                                </p>
                            </div>
                            <div className="flex items-center bg-green-500 p-2 rounded-xl">
                                <button className="text-white px-3">
                                    <FaMinus />
                                </button>
                                <span className="text-white font-bold px-4">2</span>
                                <button className="text-white px-3">
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg p-4 rounded-lg mt-4">
                            <h3 className="font-bold mb-2">Bill details</h3>
                            <div className="flex justify-between text-sm">
                                <span>Items total</span> <span>₹161</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Delivery charge</span> <span className="text-green-500">FREE</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Handling charge</span> <span>₹4</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg mt-2">
                                <span>Grand total</span> <span>₹165</span>
                            </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-4">
                            <h3 className="font-bold">Cancellation Policy</h3>
                            <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                        </div>
                        <button
                            className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
                            onClick={() => setIsLoginOpen(true)}
                        >
                            Login to Proceed
                        </button>
                    </div>
                </div>
            )}

            {/* Login Modal */}
            {isLoginOpen && <LoginModal setIsLoginOpen={setIsLoginOpen} />}
        </>
    );
};

export default Header;
