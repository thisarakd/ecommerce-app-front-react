import React from 'react';
import SellerAuthLayout from '../../layouts/AuthLayouts/SellerAuthLayout.jsx';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import SellerBackground from '../../assets/images/seller/seller-register-background.jpg'

function Register() {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);

    return (
        <SellerAuthLayout>
            <div className="flex flex-col md:flex-row w-full justify-end">
                {/* Left Side - Form */}
                <div className="w-full py-20 space-y-6 flex flex-col justify-center items-center">
                    {/* Logo / Title */}
                    <h2 className="text-3xl font-bold text-gray-800">Register | Seller Portal</h2>
                    <p className="text-gray-500 text-sm mb-10">
                        Welcome back! Please sign in to continue.
                    </p>

                    {/* Form */}
                    <div className="space-y-5 w-full md:max-w-[400px] ">
                        {/* Seller Name */}
                        <div>
                            <label htmlFor="new-name" className="block text-sm font-medium text-gray-700">
                                Seller Name
                            </label>
                            <input
                                type="text"
                                id="new-name"
                                placeholder="Enter your name"
                                className="mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                        </div>
                        {/* Seller Contact Number */}
                        <div>
                            <label htmlFor="new-name" className="block text-sm font-medium text-gray-700">
                                Seller Contact Number
                            </label>
                            <input
                                type="number"
                                id="new-name"
                                placeholder="Enter your shop telephone number"
                                className="mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="pl-10 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                />
                            </div>
                        </div>

                        {/* Shop Name */}
                        <div>
                            <label htmlFor="new-name" className="block text-sm font-medium text-gray-700">
                                Shop Name
                            </label>
                            <input
                                type="text"
                                id="new-name"
                                placeholder="Enter your shop name"
                                className="mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        {/* Contact Number */}
                        <div>
                            <label htmlFor="new-name" className="block text-sm font-medium text-gray-700">
                                Shop Telephone
                            </label>
                            <input
                                type="number"
                                id="new-name"
                                placeholder="Enter your shop telephone number"
                                className="mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    id="new-password"
                                    placeholder="8+ characters"
                                    className="pl-10 mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                />
                            </div>
                            <button
                                type="button"
                                className="absolute top-4/6 right-3 transform -translate-y-1/2"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                {showNewPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-500 cursor-pointer" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-500 cursor-pointer" />
                                )}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type={showRetypePassword ? 'text' : 'password'}
                                    id="confirm-password"
                                    placeholder="Confirm your password"
                                    className="pl-10 mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                />
                            </div>
                            <button
                                type="button"
                                className="absolute top-4/6 right-3 transform -translate-y-1/2"
                                onClick={() => setShowRetypePassword(!showRetypePassword)}
                            >
                                {showRetypePassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-500 cursor-pointer" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-500 cursor-pointer" />
                                )}
                            </button>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                            />
                            <label htmlFor="terms" className="text-sm text-gray-700">
                                Are you agree to Clicon{' '}
                                <a href="#" className="text-blue-500 hover:underline">
                                    Terms of Condition
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-blue-500 hover:underline">
                                    Privacy Policy
                                </a>
                                .
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
                        >
                            Register as a Seller →
                        </button>

                        <p className="text-gray-500 text-sm">2025 All Rights Reserved | Brand</p>
                    </div>
                </div>

                {/* Right Side - Image Section */}
                <div
                    className="hidden md:flex w-full min-h-[90vh] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${SellerBackground})`
                    }}
                >
                    <div className="bg-gradient-to-br opacity-15 from-orange-500 to-orange-600 w-full h-full flex flex-col justify-center items-center text-white text-center">
                    </div>
                </div>
            </div>
        </SellerAuthLayout>
    );
}

export default Register;