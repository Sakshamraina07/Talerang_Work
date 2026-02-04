import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { Quote, Briefcase, Award, TrendingUp } from 'lucide-react';

const Alumni = () => {
    const successStories = [
        {
            name: "Aditi Sharma",
            role: "Product Manager",
            company: "Google",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
            quote: "Talerang gave me the confidence to step into the corporate world. The mentorship was invaluable."
        },
        {
            name: "Rahul Verma",
            role: "Strategy Consultant",
            company: "McKinsey & Co.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
            quote: "The practical skills I learned here were exactly what I needed to ace my interviews."
        },
        {
            name: "Sneha Gupta",
            role: "Marketing Associate",
            company: "Unilever",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
            quote: "From resume building to mock interviews, every session was a step closer to my dream job."
        }
    ];

    const companies = [
        "Google", "McKinsey", "BCG", "HUL", "P&G", "Amazon", "Microsoft", "Goldman Sachs"
    ];

    return (
        <Layout>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative py-32 bg-dark overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/alumni-bg.png"
                        alt="Alumni Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our Alumni Network
                        </h1>
                        <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                            Join a community of over 10,000+ future leaders who are making their mark at top global organizations.
                        </p>
                        <Button className="px-8 py-3 text-lg">
                            Join the Network
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { icon: Award, label: "Success Rate", value: "96%" },
                        { icon: Briefcase, label: "Placement Partners", value: "450+" },
                        { icon: TrendingUp, label: "High Salary", value: "₹24 LPA" },
                        { icon: Quote, label: "Alumni Reviews", value: "4.8/5" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <stat.icon size={24} />
                            </div>
                            <div className="text-3xl font-bold text-dark mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-dark mb-4">Success Stories</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Hear from our graduates who have transformed their careers through our programs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-16 h-16 rounded-full object-cover ring-4 ring-slate-50"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg text-dark">{story.name}</h3>
                                        <p className="text-sm text-primary font-medium">{story.role}</p>
                                        <p className="text-xs text-slate-400">{story.company}</p>
                                    </div>
                                </div>
                                <blockquote className="text-slate-600 italic leading-relaxed">
                                    "{story.quote}"
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Placements */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-dark mb-12">Where Our Alumni Work</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className="px-8 py-4 bg-slate-50 rounded-xl font-bold text-slate-400 hover:text-primary hover:bg-primary/5 transition-all duration-300 border border-slate-100 cursor-pointer"
                            >
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-dark text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to write your success story?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Join our next cohort and get access to exclusive mentorship and placement opportunities.
                    </p>
                    <Button variant="primary" className="px-8 py-3 bg-primary text-white hover:bg-white hover:text-primary border border-transparent hover:border-white transition-all">
                        Apply Now
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default Alumni;
