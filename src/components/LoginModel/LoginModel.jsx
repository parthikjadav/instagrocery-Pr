import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const LoginModal = ({ setIsLoginOpen }) => {
    const [mobile, setMobile] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 10) {
            setMobile(value);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-black"
                    onClick={() => setIsLoginOpen(false)}
                >
                    <FaTimes size={20} />
                </button>


                <div className="flex justify-center mb-4">
                    <div className="bg-yellow-500 rounded-full p-3">
                        <span className="text-black font-bold text-xl">Insta</span><span className="text-green-500  text-xl">grocery</span>
                    </div>
                </div>

                <h2 className="text-center text-xl font-bold text-gray-800">India's last minute app</h2>
                <p className="text-center text-gray-500 text-sm mt-1">Log in or Sign up</p>

            
                <div className="mt-4">
                    <label className="block text-gray-700 font-medium mb-1">Enter Mobile Number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <span className="bg-gray-200 px-3 py-2 text-gray-700">+91</span>
                        <input
                            type="text"
                            value={mobile}
                            onChange={handleInputChange}
                            placeholder="Enter mobile number"
                            className="w-full px-3 py-2 outline-none"
                        />
                    </div>
                </div>

                <button
                    className={`w-full py-3 mt-4 rounded-lg font-bold ${
                        mobile.length === 10 ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-400 text-white"
                    }`}
                    disabled={mobile.length !== 10}
                >
                    Continue
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                    By continuing, you agree to our{" "}
                    <a href="#" className="text-blue-500 underline">
                        Terms of service
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-blue-500 underline">
                        Privacy policy
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
