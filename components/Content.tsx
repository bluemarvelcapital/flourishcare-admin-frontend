import React from "react";

interface props {
    children: React.ReactNode;
    className?: string;
}

export const Content: React.FC<props> = ({ children, className }) => {
    return (
        <div
            className={`flex-1 overflow-auto ${className ? className : ""}`}
            id="json-container"
        >
            {children}
        </div>
    );
};
