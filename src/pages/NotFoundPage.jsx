import React from 'react';

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-orange-50 text-orange-800 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-extrabold mb-4">404</h1>
                <p className="text-2xl md:text-3xl font-semibold mb-6">
                    Page Not Found 😕
                </p>
                <p className="text-base md:text-lg mb-8 text-orange-700">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <button
                    onClick={() => window.history.back()}
                    className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg shadow hover:from-orange-500 hover:to-orange-700 transition-all"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default NotFoundPage;