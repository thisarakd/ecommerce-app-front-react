import React from 'react';
import SellerHeader from "../../components/seller/SellerHeader.jsx";


const SellerAuthLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <SellerHeader />
            <main className="bg-gray-100 flex-grow flex items-center justify-center">
                <div className="w-full">{children}</div>
            </main>
        </div>
    );
};

export default SellerAuthLayout;