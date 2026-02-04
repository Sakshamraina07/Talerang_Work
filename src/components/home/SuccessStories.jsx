import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Ria Sharma",
        role: "Analyst at McKinsey",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ria",
        quote: "Talerang was the turning point in my career. The mentorship I received was world-class and helped me crack my dream job interview."
    },
    {
        name: "Arjun Patel",
        role: "Product at Google",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
        quote: "The curriculum is exactly what colleges miss. Practical, hands-on, and real-world ready. Highly recommend the Future CEOs program."
    },
    {
        name: "Sanya Malhotra",
        role: "HR Manager at HUL",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya",
        quote: "As a recruiter, I can spot a Talerang graduate from a mile away. They are professional, articulate, and ready to deliver from Day 1."
    }
];

const SuccessStories = () => {
    return (
        <Section bg="light" id="success-stories">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    Wall of Love
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Success Stories</h2>
                <p className="text-slate-600 text-lg">Hear from our alumni who are making waves in the industry.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <Card key={i} className="relative h-full">
                        <Quote className="absolute top-6 right-6 text-slate-100" size={48} />
                        <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-slate-700 mb-6 italic relative z-10">"{t.quote}"</p>
                        <div className="flex items-center gap-4 mt-auto">
                            <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full bg-slate-200" />
                            <div>
                                <div className="font-bold text-dark">{t.name}</div>
                                <div className="text-xs text-slate-500">{t.role}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default SuccessStories;
