import React from 'react';

const SellerAuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md">{children}</div>
        </div>
    );
};

export default SellerAuthLayout;