
import React from 'react';

const Section = ({
    children,
    className = '',
    bg = 'white',
    id = ''
}) => {
    const bgColors = {
        white: 'bg-white',
        light: 'bg-light',
        dark: 'bg-dark',
        primary: 'bg-primary'
    };

    return (
        <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

export default Section;
