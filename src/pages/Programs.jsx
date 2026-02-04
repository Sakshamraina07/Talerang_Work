import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { User, Briefcase, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const allPrograms = [
    {
        title: "Future CEOs Program",
        target: "College Students",
        description: "A transformative 12-week journey designed to bridge the gap between college education and industry expectations. Master the art of leadership, communication, and problem-solving.",
        features: ["Live Projects with Corporate Partners", "1-on-1 Mentorship from Industry Vets", "Mock Interviews & Resume Building"],
        color: "bg-indigo-50 text-primary",
        icon: <User size={32} />
    },
    {
        title: "Young Leaders Academy",
        target: "Early Graduates (0-2 Yrs Exp)",
        description: "Accelerate your career trajectory. Learn how to manage teams, handle complex stakeholders, and drive business impact from day one.",
        features: ["Advanced Management Modules", "Networking with 400+ Partners", "Placement Assistance"],
        color: "bg-yellow-50 text-yellow-600",
        icon: <Briefcase size={32} />
    },
    {
        title: "Corporate Excellence",
        target: "Working Professionals",
        description: "Customized upskilling modules for organizations and individuals looking to stay relevant in a rapidly evolving market.",
        features: ["Strategic Thinking", "Digital Transformation", "Leadership for the Future"],
        color: "bg-green-50 text-green-600",
        icon: <BookOpen size={32} />
    }
];

const Programs = () => {
    return (
        <Layout>
            <Section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 to-white">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-dark flex items-center justify-center gap-3">
                        Our <span className="text-primary">Programs</span>
                        <BookOpen className="text-secondary" size={40} />
                    </h1>
                    <p className="text-xl text-slate-600">
                        Designed by Harvard alumni, our programs are tailored for every stage of your professional journey.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="space-y-12">
                    {allPrograms.map((prog, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className={`w-full md:w-1/3 h-64 rounded-2xl flex flex-col items-center justify-center text-center p-6 ${prog.color}`}>
                                <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
                                    {prog.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{prog.title}</h3>
                                <div className="text-sm font-bold uppercase tracking-wider opacity-80">{prog.target}</div>
                            </div>

                            <div className="md:w-2/3">
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    {prog.description}
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    {prog.features.map((feat, j) => (
                                        <div key={j} className="flex items-center gap-3 text-slate-700">
                                            <CheckCircle className="text-green-500 shrink-0" size={20} />
                                            <span className="font-medium">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="primary" className="gap-2">
                                    Apply Now <ArrowRight size={18} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </Layout>
    );
};

export default Programs;
