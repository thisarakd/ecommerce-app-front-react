import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, DollarSign } from 'lucide-react';
import SellerButton from '../ui/SellerButton.jsx';

const SellerHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const isLoginPage = location.pathname === '/seller/login';

    const navLinks = [
        { path: '/seller/terms-and-policies', label: 'Terms & Policies' },
    ];

    return (
        <header className="sticky top-0 z-40 bg-white shadow-md">
            <div className="container mx-auto px-4">
                {/* Desktop Header */}
                <div className="flex items-center justify-between h-[10vh]">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-gray-800">
                        BRAND
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}s
                                className={`text-gray-700 hover:text-orange-500 transition-colors relative group ${
                                    location.pathname === link.path ? 'text-orange-600' : ''
                                }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all ${
                                        location.pathname === link.path ? 'w-full' : ''
                                    }`}
                                ></span>
                            </Link>
                        ))}
                    </nav>

                    <SellerButton to={isLoginPage ? '/seller/register': '/seller/login'} className="flex" icon={DollarSign}>
                        {isLoginPage ? 'Become a Seller' : 'Already a Seller?'}
                    </SellerButton>
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
                                    className={`text-gray-700 hover:text-orange-500 transition-colors ${
                                        location.pathname === link.path ? 'font-medium text-orange-600' : ''
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default SellerHeader;