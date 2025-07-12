import React from 'react';
import UserHeader from '../../components/user/UserHeader.jsx';
import UserFooter from '../../components/user/UserFooter.jsx';

const UserAuthLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <UserHeader />
            <main className="bg-gray-100 flex-grow flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-md">{children}</div>
            </main>
            <UserFooter />
        </div>
    );
};

export default UserAuthLayout;