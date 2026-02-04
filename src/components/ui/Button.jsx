
import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl focus:ring-primary",
        secondary: "bg-secondary text-dark hover:bg-yellow-400 shadow-md hover:shadow-lg focus:ring-secondary",
        outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
        ghost: "text-slate-600 hover:text-primary hover:bg-slate-50",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
