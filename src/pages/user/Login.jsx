import React from 'react';
import UserHeader from "../../components/user/UserHeader.jsx";
import UserFooter from "../../components/user/UserFooter.jsx";
import UserAuthLayout from "../../layouts/AuthLayouts/UserAuthLayout.jsx";
import { useState } from "react";
import {Eye, EyeOff, Lock, Mail} from 'lucide-react';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <UserAuthLayout>

            <div className="bg-white shadow-md rounded-lg pt-4 max-w-sm mx-auto my-8">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl my-4 font-bold text-gray-800">Sign In</h2>
                    <p className="text-gray-500 text-sm mb-3">
                        Welcome back! Please sign in to continue.
                    </p>
                </div>

                {/* Form */}
                    <div className="space-y-5 p-7">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="pl-10 mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
                                className="pl-10 mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                            />
                            </div>
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

                        <p className="text-center">
                            Don't have an account? {' '}
                            <a href="/register" className="text-blue-500 hover:underline">
                                Register
                            </a>
                        </p>
                    </div>
            </div>
        </UserAuthLayout>
    );
}

export default Login;