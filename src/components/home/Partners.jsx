import React from 'react';
import Section from '../ui/Section';

const partners = [
    "McKinsey & Company", "Hindustan Unilever", "Google", "JP Morgan",
    "Godrej", "Teach For India", "Mahindra", "Aditya Birla Group"
];

const Partners = () => {
    return (
        <Section className="py-12 border-b border-slate-100">
            <div className="text-center mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Trusted by 400+ Corporate Partners</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                {/* Using placeholder logos for demo purposes since we don't have raw assets */}
                {partners.map((partner, i) => (
                    <div key={i} className="text-xl md:text-2xl font-heading font-bold text-slate-400 hover:text-primary cursor-default whitespace-nowrap">
                        {partner}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Partners;
