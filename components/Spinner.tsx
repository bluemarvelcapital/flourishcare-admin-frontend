import React from "react";

export const WindowSpinner = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-white opacity-75"></div>
            <div className="fixed top-1/2 left-1/2 z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        </div>
    );
};

export const ButtonSpinner = ({ size = "10" }) => {
    return (
        <div className="flex items-center justify-center">
            <div
                className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-white background-white`}
            ></div>
        </div>
    );
};
