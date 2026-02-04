import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRight, BookOpen, User, Briefcase } from 'lucide-react';

const programs = [
    {
        title: "Future CEOs Program",
        target: "College Students",
        duration: "12 Weeks",
        description: "Our flagship program designed to build core leadership and professional skills.",
        features: ["Harvard Case Studies", "1-on-1 Mentorship", "Interview Prep"],
        color: "bg-indigo-50 text-primary",
        icon: <User size={24} />
    },
    {
        title: "Young Leaders Academy",
        target: "Early Graduates",
        duration: "6 Months",
        description: "Accelerate your climb up the corporate ladder with advanced management training.",
        features: ["Live Projects", "Network Access", "Placement Support"],
        color: "bg-yellow-50 text-yellow-600",
        icon: <Briefcase size={24} />
    },
    {
        title: "Corporate Upskilling",
        target: "Working Professionals",
        duration: "Custom",
        description: "Tailored modules for teams to improve productivity and leadership.",
        features: ["Team Building", "Communication", "Strategic Thinking"],
        color: "bg-green-50 text-green-600",
        icon: <BookOpen size={24} />
    }
];

const Programs = () => {
    return (
        <Section id="programs">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Programs</h2>
                    <p className="text-slate-600 text-lg">World-class curriculum adapted for every stage of your journey.</p>
                </div>
                <Button variant="outline" className="hidden md:inline-flex mt-4 md:mt-0">View All Programs</Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {programs.map((prog, i) => (
                    <div key={i} className="group border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 bg-white">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${prog.color}`}>
                            {prog.icon}
                        </div>

                        <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">{prog.target}</div>
                        <h3 className="text-2xl font-bold mb-3">{prog.title}</h3>
                        <p className="text-slate-600 mb-6">{prog.description}</p>

                        <ul className="mb-8 space-y-3">
                            {prog.features.map((feat, j) => (
                                <li key={j} className="flex items-center text-sm text-slate-500">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                            Details
                        </Button>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Button variant="outline">View All Programs</Button>
            </div>
        </Section>
    );
};

export default Programs;
