import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import {
    Lock, CheckCircle, ChevronDown, ChevronUp,
    BarChart2, Compass, BookOpen, Briefcase,
    FileText, Users, Award, Rocket, ExternalLink, ArrowRight, Sparkles
} from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Competency Assessment',
        subtitle: 'Know where you stand',
        icon: BarChart2,
        color: 'from-red-500 to-rose-600',
        borderColor: 'border-red-400',
        glowColor: 'shadow-red-500/20',
        badgeColor: 'bg-red-100 text-red-700',
        locked: false,
        completed: false,
        description:
            'Begin your journey by understanding your current competency levels across key career dimensions. This personalised assessment maps your strengths and identifies development areas.',
        actions: [
            { label: 'View your results', href: '#', primary: false },
        ],
    },
    {
        id: 2,
        title: 'Skill & Career Indicator',
        subtitle: 'Discover your direction',
        icon: Compass,
        color: 'from-orange-500 to-amber-500',
        borderColor: 'border-orange-400',
        glowColor: 'shadow-orange-500/20',
        badgeColor: 'bg-orange-100 text-orange-700',
        locked: false,
        completed: false,
        description:
            'Take the Talerang Career Aptitude Test (T-CAT) to unlock curated insights about your ideal career path. Choose the level that suits your current stage.',
        actions: [
            { label: 'View your skills here', href: '#', primary: true },
            { label: 'T-CAT Basic', href: '#', primary: false },
            { label: 'T-CAT Advanced', href: '#', primary: false },
        ],
        tags: ['Talerang – Career Aptitude Test'],
    },
    {
        id: 3,
        title: 'Training',
        subtitle: 'Bridge your skill gap',
        icon: BookOpen,
        color: 'from-purple-500 to-violet-600',
        borderColor: 'border-purple-400',
        glowColor: 'shadow-purple-500/20',
        badgeColor: 'bg-purple-100 text-purple-700',
        locked: false,
        completed: false,
        description:
            'Receive interactive training to bridge your skill gap. There are several suggested trainings on the portal and additional live webinars you will be notified about via email.',
        actions: [
            { label: 'Click here to access trainings', href: '#', primary: true },
        ],
    },
    {
        id: 4,
        title: 'Micro-Internships',
        subtitle: 'Apply your skills in real projects',
        icon: Briefcase,
        color: 'from-blue-500 to-cyan-500',
        borderColor: 'border-blue-400',
        glowColor: 'shadow-blue-500/20',
        badgeColor: 'bg-blue-100 text-blue-700',
        locked: false,
        completed: false,
        description:
            'Get hands-on experience through curated micro-internship projects that mirror real workplace challenges.',
        actions: [
            { label: 'Take the skill track challenge', href: '#', primary: true },
            { label: 'Upload your submission', href: '#', primary: false },
        ],
    },
    {
        id: 5,
        title: 'Resume Creator',
        subtitle: 'Build your perfect resume',
        icon: FileText,
        color: 'from-teal-500 to-emerald-500',
        borderColor: 'border-teal-400',
        glowColor: 'shadow-teal-500/20',
        badgeColor: 'bg-teal-100 text-teal-700',
        locked: true,
        completed: false,
        description:
            'Make use of the Resume Creator tool to build the perfect resume for yourself. Stand out with an ATS-optimised, professionally designed profile.',
        actions: [
            { label: 'Build your Resume', href: '#', primary: true },
        ],
    },
    {
        id: 6,
        title: 'Mentorship Session',
        subtitle: 'Get expert guidance',
        icon: Users,
        color: 'from-indigo-500 to-blue-600',
        borderColor: 'border-indigo-400',
        glowColor: 'shadow-indigo-500/20',
        badgeColor: 'bg-indigo-100 text-indigo-700',
        locked: true,
        completed: false,
        description:
            'Get access to an exclusive mentoring session with Team Talerang. We provide feedback on the project you have worked on and help you sign up for a mock interview (20–30 minutes).',
        actions: [
            { label: 'Book now', href: '#', primary: true },
        ],
    },
    {
        id: 7,
        title: 'Download Certificate',
        subtitle: 'Celebrate your achievement',
        icon: Award,
        color: 'from-yellow-500 to-orange-400',
        borderColor: 'border-yellow-400',
        glowColor: 'shadow-yellow-500/20',
        badgeColor: 'bg-yellow-100 text-yellow-700',
        locked: true,
        completed: false,
        description:
            'Collect your certificate for completing this program. Your Talerang certification is recognised by top recruiters and hiring managers across industries.',
        actions: [
            { label: 'Download Certificate', href: '#', primary: true },
        ],
    },
    {
        id: 8,
        title: 'Apply for Jobs',
        subtitle: 'Launch your career',
        icon: Rocket,
        color: 'from-pink-500 to-red-500',
        borderColor: 'border-pink-400',
        glowColor: 'shadow-pink-500/20',
        badgeColor: 'bg-pink-100 text-pink-700',
        locked: true,
        completed: false,
        description:
            'You will be required to give us details about your preferred skill track, location, references and complete a few quick formalities before you are connected to an internship or job opportunity.',
        actions: [
            { label: 'Apply Now', href: '#', primary: true },
        ],
    },
];

const StepCard = ({ step, index }) => {
    const [expanded, setExpanded] = useState(!step.locked && index < 4);
    const Icon = step.icon;

    return (
        <div
            className={`relative group transition-all duration-500 ${step.locked ? 'opacity-70' : 'opacity-100'}`}
        >
            {/* Connector line */}
            {index < steps.length - 1 && (
                <div className={`absolute left-8 top-full w-0.5 h-6 z-10 ${step.locked ? 'bg-gray-200' : 'bg-gradient-to-b from-gray-300 to-gray-100'}`} />
            )}

            <div
                className={`
                    relative overflow-hidden rounded-2xl border transition-all duration-300
                    ${step.locked
                        ? 'border-gray-200 bg-white/60'
                        : `bg-white border-gray-100 shadow-lg ${step.glowColor} hover:shadow-xl`
                    }
                    ${!step.locked ? 'hover:-translate-y-0.5' : ''}
                `}
            >
                {/* Gradient accent top bar */}
                {!step.locked && (
                    <div className={`h-1 w-full bg-gradient-to-r ${step.color}`} />
                )}

                {/* Card Header */}
                <button
                    onClick={() => !step.locked && setExpanded(p => !p)}
                    className={`w-full flex items-center gap-4 px-6 py-5 text-left ${!step.locked ? 'cursor-pointer' : 'cursor-default'}`}
                >
                    {/* Step number / icon circle */}
                    <div className={`
                        flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
                        ${step.locked
                            ? 'bg-gray-100'
                            : `bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-110`
                        }
                    `}>
                        {step.locked
                            ? <Lock className="w-5 h-5 text-gray-400" />
                            : <Icon className="w-6 h-6 text-white" />
                        }
                    </div>

                    {/* Title block */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${step.locked ? 'bg-gray-100 text-gray-400' : step.badgeColor}`}>
                                STEP {step.id}
                            </span>
                            {step.locked && (
                                <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                                    <Lock className="w-3 h-3" /> Locked
                                </span>
                            )}
                        </div>
                        <h3 className={`text-lg font-bold mt-1 ${step.locked ? 'text-gray-400' : 'text-gray-800'}`}>
                            {step.title}
                        </h3>
                        <p className={`text-sm ${step.locked ? 'text-gray-300' : 'text-gray-500'}`}>
                            {step.subtitle}
                        </p>
                    </div>

                    {/* Expand toggle */}
                    {!step.locked && (
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expanded ? 'bg-gray-100' : 'bg-gray-50'}`}>
                            {expanded
                                ? <ChevronUp className="w-4 h-4 text-gray-500" />
                                : <ChevronDown className="w-4 h-4 text-gray-500" />
                            }
                        </div>
                    )}
                </button>

                {/* Expandable Body */}
                <div className={`overflow-hidden transition-all duration-500 ${expanded && !step.locked ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 border-t border-gray-50">
                        <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-5">
                            {step.description}
                        </p>

                        {step.tags && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {step.tags.map(tag => (
                                    <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full ${step.badgeColor}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-wrap gap-3">
                            {step.actions.map((action, i) => (
                                <a
                                    key={i}
                                    href={action.href}
                                    className={`
                                        inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                                        ${action.primary
                                            ? `bg-gradient-to-r ${step.color} text-white shadow-md hover:shadow-lg hover:-translate-y-0.5`
                                            : 'border border-gray-200 text-gray-600 hover:border-gray-400 hover:bg-gray-50'
                                        }
                                    `}
                                >
                                    {action.label}
                                    {action.primary && <ExternalLink className="w-3.5 h-3.5" />}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WrapTest = () => {
    const unlockedCount = steps.filter(s => !s.locked).length;
    const progressPercent = Math.round((unlockedCount / steps.length) * 100);

    return (
        <Layout>
            {/* ── Hero Section ── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 pt-10 pb-20">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-800/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm font-semibold mb-8 animate-fade-in-up">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        Your Career Roadmap — 8 Steps to Success
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
                        The Talerang{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-orange-300">
                            WrapTest
                        </span>
                        <br />Journey
                    </h1>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
                        A structured, end-to-end career development program — from knowing yourself to landing your dream job. Complete each step to unlock the next.
                    </p>

                    {/* Quick stat pills */}
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
                        {[
                            { label: '8 Milestones', color: 'bg-red-500/20 border-red-400/30 text-red-300' },
                            { label: 'Personalised Path', color: 'bg-purple-500/20 border-purple-400/30 text-purple-300' },
                            { label: 'Industry Recognised', color: 'bg-amber-500/20 border-amber-400/30 text-amber-300' },
                        ].map(pill => (
                            <span key={pill.label} className={`px-5 py-2 rounded-full border backdrop-blur-sm text-sm font-semibold ${pill.color}`}>
                                {pill.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full text-slate-50" preserveAspectRatio="none" height="60">
                        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
                    </svg>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section className="bg-slate-50 py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">

                    {/* Progress Overview Card */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full" />
                        <div className="relative flex items-center justify-between gap-4 flex-wrap mb-4">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Your Progress</p>
                                <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-700">
                                    {unlockedCount} of {steps.length} Steps Unlocked
                                </h2>
                            </div>
                            <div className="text-right">
                                <span className="text-4xl font-black text-primary">{progressPercent}%</span>
                                <span className="block text-xs text-gray-400 font-medium">Completed</span>
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-red-500 to-purple-600 rounded-full transition-all duration-700"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {steps.map(s => (
                                <div
                                    key={s.id}
                                    title={s.title}
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${s.locked ? 'bg-gray-100 text-gray-300' : `bg-gradient-to-br ${s.color} text-white shadow-sm`}`}
                                >
                                    {s.id}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col gap-6">
                        {steps.map((step, index) => (
                            <StepCard key={step.id} step={step} index={index} />
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-slate-900 to-red-950 rounded-3xl p-10 relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15)_0%,_transparent_70%)]" />
                            <div className="relative">
                                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">Ready to begin?</p>
                                <h3 className="text-3xl font-extrabold text-white mb-4">
                                    We help you fly, we help you{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">SOAR</span>
                                </h3>
                                <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                                    Start with Step 1 today and unlock your personalised career path built by industry experts at Talerang.
                                </p>
                                <a
                                    href="/login"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-xl shadow-lg hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-200 text-sm"
                                >
                                    Start Your Journey <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default WrapTest;
