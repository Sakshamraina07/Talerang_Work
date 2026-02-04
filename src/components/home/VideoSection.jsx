import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const VideoSection = () => {
    return (
        <Section className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">
                    Our alumni found their dream jobs. <span className="text-primary">Did you?</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                    If you're looking for a platform to bridge the gap between academic knowledge and the work world,
                    you've come to the right place. Join a diverse community of global young leaders.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Individuals Column */}
                <div className="flex flex-col">
                    <h3 className="text-2xl font-heading font-bold text-dark mb-4 text-center md:text-left">
                        Individuals: Find your <span className="text-primary">dream job!</span>
                    </h3>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-6 border-4 border-slate-100">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/8i4NZ-LaHFk?si=title-hide&rel=0"
                            title="Talerang Corporate Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <Button variant="outline" className="w-full justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider font-bold py-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Apply Now
                    </Button>
                </div>

                {/* Corporates Column */}
                <div className="flex flex-col">
                    <h3 className="text-2xl font-heading font-bold text-dark mb-4 text-center md:text-left">
                        Corporates: Sign-up to <span className="text-secondary">hire or train!</span>
                    </h3>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-6 border-4 border-slate-100">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/Mx1OIr3NW7I?si=title-hide&rel=0"
                            title="Talerang Corporate Custom Trainings"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <Button variant="outline" className="w-full justify-center border-2 border-secondary text-yellow-700 hover:bg-primary hover:text-white hover:border-primary uppercase tracking-wider font-bold py-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Sign-Up
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default VideoSection;
