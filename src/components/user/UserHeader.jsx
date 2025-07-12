import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, Heart, Store } from 'lucide-react';
import SellerButton from '../ui/SellerButton.jsx';

const UserHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    // Simulate cart count
    const cartCount = 2;
    const wishCount = 2;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-40 bg-white shadow-md">
            <div className="container mx-auto px-4">
                {/* Desktop Header */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-gray-800">
                        BRAND
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-gray-700 hover:text-blue-500 transition-colors relative group ${
                                    location.pathname === link.path ? 'text-blue-600' : ''
                                }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all ${
                                        location.pathname === link.path ? 'w-full' : ''
                                    }`}
                                ></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex space-x-7 items-center">
                        {/* Wishlist Icon */}
                        <Link to="/wishList" className="relative">
                            <Heart className="h-5 w-5" />
                            {wishCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {wishCount}
                                </span>
                            )}
                        </Link>

                        {/* User Icon */}
                        <Link to="/userProfile" className="relative">
                            <User className="h-5 w-5" />
                        </Link>

                        {/* Cart Icon */}
                        <Link to="/cart" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                                )}
                        </Link>
                        <SellerButton to="/seller" className="hidden md:flex" icon={Store}>
                            Seller Account
                        </SellerButton>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-700 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 pt-2 border-t border-gray-200">
                        <nav className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-gray-700 hover:text-blue-500 transition-colors ${
                                        location.pathname === link.path ? 'font-medium text-blue-600' : ''
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-2 mt-2 border-t border-gray-100 flex items-center space-x-4">
                                <SellerButton to="/seller" className="flex md:hidden" icon={Store}>
                                    Seller Account
                                </SellerButton>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default UserHeader;