import React from 'react';
import UserHeader from "../../components/user/UserHeader.jsx";
import UserFooter from "../../components/user/UserFooter.jsx";
import UserAuthLayout from "../../layouts/AuthLayouts/UserAuthLayout.jsx";
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';

function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);
    return (
        <UserAuthLayout>

            <div className="bg-white shadow-md rounded-lg pt-5 max-w-sm mx-auto my-8">
                {/* Tabs */}
                <div className="flex justify-around">
                    <button
                        onClick={() => setIsSignIn(true)}
                        className={`text-lg font-semibold border-b-2 pb-2 w-full ${
                            isSignIn ? 'border-orange-500 text-orange-500' : 'border-gray-200 text-gray-400'
                        }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setIsSignIn(false)}
                        className={`text-lg font-semibold border-b-2 pb-2 w-full ${
                            !isSignIn ? 'border-orange-500 text-orange-500' : 'border-gray-200 text-gray-400'
                        }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Form */}
                {isSignIn ? (
                    <div className="space-y-4 p-7">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                            <button
                                type="button"
                                className="absolute top-4/6 right-3 transform -translate-y-1/2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-500 cursor-pointer" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-500 cursor-pointer" />
                                )}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right text-sm text-blue-500">Forgot Password</div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Sign In →
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4 p-7">
                        {/* Name */}
                        <div>
                            <label htmlFor="new-name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="new-name"
                                placeholder="Enter your name"
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="new-email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="new-email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                id="new-password"
                                placeholder="8+ characters"
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                            <button
                                type="button"
                                className="absolute top-4/6 right-3 transform -translate-y-1/2"
                                onClick={() => setShowNewPassword(!showPassword)}
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
                            <input
                                type={showRetypePassword ? 'text' : 'password'}
                                id="confirm-password"
                                placeholder="Confirm your password"
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                            <button
                                type="button"
                                className="absolute top-4/6 right-3 transform -translate-y-1/2"
                                onClick={() => setShowRetypePassword(!showPassword)}
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
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Sign Up →
                        </button>

                    </div>
                )}
            </div>
        </UserAuthLayout>
    );
}

export default Login;