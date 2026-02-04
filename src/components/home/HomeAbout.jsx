import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { CheckCircle } from 'lucide-react';

const HomeAbout = () => {
    return (
        <Section className="py-20 bg-slate-50">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                            alt="Talerang Team"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <div className="text-3xl font-bold mb-2">10+ Years</div>
                                <div className="text-white/80">Of shaping careers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">About Talerang</div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-dark max-w-lg">
                        We are on a mission to create Work-Ready India
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        Talerang began as an independent research project at Harvard Business School.
                        We realized that despite having degrees, millions of graduates were not ready for the workforce.
                        We fix that gap.
                    </p>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                        {[
                            "Proprietary Curriculum from Harvard",
                            "Access to 400+ Corporate Partners",
                            "Personalized Mentorship & feedback"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="text-secondary shrink-0" size={20} />
                                <span className="font-medium text-dark">{item}</span>
                            </div>
                        ))}
                    </div>

                    <Link to="/about">
                        <Button variant="primary">Read Our Story</Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default HomeAbout;
