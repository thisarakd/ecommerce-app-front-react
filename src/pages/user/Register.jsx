import React from 'react';
import UserAuthLayout from "../../layouts/AuthLayouts/UserAuthLayout.jsx";
import { useState } from "react";
import {Eye, EyeOff, Lock, Mail} from 'lucide-react';

function Register() {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);
    return (
        <UserAuthLayout>

            <div className="bg-white shadow-md rounded-lg pt-4 max-w-md mx-auto my-8">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl my-4 font-bold text-gray-800">Register</h2>
                    <p className="text-gray-500 text-sm mb-3">
                        Be an our valued customer
                    </p>
                </div>


                {/* Form */}
                    <div className="space-y-5 p-7">
                        {/* Name */}
                        <div>
                            <label htmlFor="new-name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="new-name"
                                placeholder="Enter your name"
                                className="mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="new-email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                id="new-email"
                                placeholder="Enter your email"
                                className="pl-10 mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                            </div>
                        </div>

                        {/* Mobile */}
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                Mobile Number
                            </label>
                            <input
                                type="number"
                                id="mobile"
                                placeholder="Enter your mobile number"
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
                                Are you agree to {' '}
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
                            Register
                        </button>

                        <p className="text-center">
                            Already have an account? {' '}
                            <a href="/login" className="text-blue-500 hover:underline">
                                Sign In
                            </a>
                        </p>
                    </div>
            </div>
        </UserAuthLayout>
    );
}

export default Register;