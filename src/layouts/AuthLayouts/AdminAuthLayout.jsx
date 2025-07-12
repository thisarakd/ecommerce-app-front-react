import React from 'react';

const AdminAuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                {children}
            </div>
        </div>
    );
};

export default AdminAuthLayout;