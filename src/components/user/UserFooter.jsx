import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Twitter,
    Instagram,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';

const UserFooter = () => {
    return (
        <footer className="bg-gray-50 text-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                                <span className="text-white font-bold">S</span>
                            </div>
                            <h3 className="text-xl font-bold">BRAND</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Your premium online shopping destination. Discover amazing products with unbeatable quality and service.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="h-5 w-5 text-gray-500 hover:text-blue-600 cursor-pointer transition" />
                            <Twitter className="h-5 w-5 text-gray-500 hover:text-blue-400 cursor-pointer transition" />
                            <Instagram className="h-5 w-5 text-gray-500 hover:text-pink-600 cursor-pointer transition" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link to="/" className="hover:text-blue-600 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="hover:text-blue-600 transition">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-blue-600 transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-blue-600 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Customer Service</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="cursor-pointer hover:text-blue-600 transition">FAQ</li>
                            <li className="cursor-pointer hover:text-blue-600 transition">Shipping Info</li>
                            <li className="cursor-pointer hover:text-blue-600 transition">Returns</li>
                            <li className="cursor-pointer hover:text-blue-600 transition">Size Guide</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contact Info</h4>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-start space-x-3">
                                <Mail className="h-4 w-4 text-blue-600 mt-0.5" />
                                <span>support@brand.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone className="h-4 w-4 text-blue-600 mt-0.5" />
                                <span>+94 768 150 761</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-blue-600 mt-0.5" />
                                <span>No. 241/7, Sama Mawatha Mattegoda.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 mt-10 pt-6 text-center">
                    <p className="text-sm text-gray-600">
                        © 2025 Brand. All rights reserved.{' '}
                        <span className="mx-2">•</span>
                        <Link to="/privacy" className="hover:text-blue-600 transition underline">
                            Privacy Policy
                        </Link>
                        <span className="mx-2">•</span>
                        <Link to="/terms" className="hover:text-blue-600 transition underline">
                            Terms of Service
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default UserFooter;