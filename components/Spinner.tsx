import React from "react";

export const WindowSpinner = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
    );
};

export const ButtonSpinner = ({ size = "10" }) => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div
                className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-white`}
            ></div>
        </div>
    );
};
