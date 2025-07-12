import React from 'react';
import SellerAuthLayout from '../../layouts/AuthLayouts/SellerAuthLayout.jsx';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import SellerBackground from '../../assets/images/seller/seller-login-background.jpg'

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SellerAuthLayout>
            <div className="flex flex-col md:flex-row w-full justify-end">
                {/* Left Side - Form */}
                <div className="w-full space-y-6 flex flex-col justify-center items-center">
                    {/* Logo / Title */}
                    <h2 className="text-3xl font-bold text-gray-800">Sign In | Seller Portal</h2>
                    <p className="text-gray-500 text-sm mb-10">
                        Welcome back! Please sign in to continue.
                    </p>

                    {/* Form */}
                    <div className="space-y-5 w-full md:max-w-[400px] ">
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

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    className="pl-10 pr-10 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right text-sm text-blue-500 mt-1">Forgot Password?</div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
                        >
                            Sign In →
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

export default Login;