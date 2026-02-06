import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { ArrowRight, Star, Briefcase } from 'lucide-react';

// New Components
import Partners from '../components/home/Partners';
import HomeAbout from '../components/home/HomeAbout';
import Programs from '../components/home/Programs';
import SuccessStories from '../components/home/SuccessStories';
import VideoSection from '../components/home/VideoSection';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Users, GraduationCap } from 'lucide-react';

const Home = () => {
    return (
        <Layout>
            {/* Hero Section (Unchanged) */}
            <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-20 lg:pb-28">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-white opacity-70 rounded-l-full blur-3xl"></div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-primary text-sm font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Admissions Open for 2026 Batch
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-secondary leading-tight mb-6">
                                Launch Your Career with <span className="text-primary italic">Confidence</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Talerang bridges the gap between what you learn in college and what you need to succeed at work. Join 500,000+ students getting work-ready.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button variant="primary" className="gap-2">
                                    Apply Now <ArrowRight size={18} />
                                </Button>
                                <Button variant="outline">
                                    View Programs
                                </Button>
                            </div>

                            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden`}>
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Student" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-primary font-bold text-xs">
                                        +2k
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="flex text-yellow-500">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                    <span>Trusted by students</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                    alt="Students collaborating"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-dark">94% Placement</p>
                                            <p className="text-xs text-slate-500">Success Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute -top-6 -right-6 -z-10 grid grid-cols-4 gap-2">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        <div>
                            <div className="text-3xl md:text-4xl font-heading font-bold mb-1 text-white">500k+</div>
                            <div className="text-indigo-100 text-sm">Learners Impacted</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-heading font-bold mb-1 text-white">400+</div>
                            <div className="text-indigo-100 text-sm">Corporate Partners</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-heading font-bold mb-1 text-white">94%</div>
                            <div className="text-indigo-100 text-sm">Placement Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-heading font-bold mb-1 text-white">10+</div>
                            <div className="text-indigo-100 text-sm">Years of Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Logos */}
            <Partners />

            {/* Why Talerang (Features) */}
            <Section id="features" bg="light">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Talerang?</h2>
                    <p className="text-slate-600 text-lg">We don't just teach theory. We build careers through practical training, mentorship, and industry exposure.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="border-t-4 border-t-primary">
                        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Expert Mentorship</h3>
                        <p className="text-slate-600 mb-4">Learn closely with industry leaders from top companies like McKinsey, HUL, and Google.</p>
                    </Card>

                    <Card className="border-t-4 border-t-secondary">
                        <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                            <GraduationCap size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Harvard Curriculum</h3>
                        <p className="text-slate-600 mb-4">Our curriculum is researched at Harvard Business School and tailored for the Indian market.</p>
                    </Card>

                    <Card className="border-t-4 border-t-green-500">
                        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                            <Briefcase size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Guaranteed Internships</h3>
                        <p className="text-slate-600 mb-4">Access to exclusive internship and job opportunities with our 400+ corporate partners.</p>
                    </Card>
                </div>
            </Section>

            {/* Video Section */}
            <VideoSection />

            {/* Programs Section */}
            <Programs />

            {/* About / Mission Section */}
            <HomeAbout />

            {/* Success Stories */}
            <SuccessStories />

            {/* Final CTA */}
            <Section>
                <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-indigo-100 text-lg mb-8">Join thousands of students who have transformed their careers with Talerang.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button variant="secondary" className="px-8 py-4 text-lg">Apply Now</Button>
                            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default Home;
