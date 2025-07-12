import React from 'react';
import { Link } from 'react-router-dom';

const SellerButton = ({ to, icon: IconName, className="", children }) => {
  return (
    <Link
      to={to}
      className={`items-center space-x-2 px-4 py-2
  bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-md
  hover:from-orange-500 hover:to-orange-700 transition-all shadow-md hover:shadow-lg ${className}`}>
      <IconName className="h-5 w-5" />
      <span>{children}</span>
    </Link>
  );
};

export default SellerButton;