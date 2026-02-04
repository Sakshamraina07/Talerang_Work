
import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <div
            className={`bg-white rounded-2xl p-6 ${hover ? 'shadow-lg hover:shadow-xl transition-shadow duration-300' : 'shadow-md'} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
