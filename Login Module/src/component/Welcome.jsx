import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
    const location = useLocation();
    const message = location.state?.message || 'Welcome!';

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold">{message}</h1>
        </div>
    );
};

export default Welcome;
