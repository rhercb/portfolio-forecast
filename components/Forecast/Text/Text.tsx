import React from "react";

interface TextProps {
    isLoading: boolean;
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ isLoading, children }) => {
    if (isLoading) {
        return <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>;
    }
    return children;
};

export default Text;
