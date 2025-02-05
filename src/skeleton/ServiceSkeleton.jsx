import React from 'react';

const SkeletonUI = () => {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
            <h2 className="text-2xl font-semibold mb-4 bg-gray-300 h-8 w-1/2 rounded"></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="bg-gray-300 h-6 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-4 rounded"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonUI;
