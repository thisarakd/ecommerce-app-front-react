import React from 'react';
import Header from '../components/user/UserHeader.jsx';
import Footer from '../components/user/UserFooter.jsx';

const UserLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default UserLayout;