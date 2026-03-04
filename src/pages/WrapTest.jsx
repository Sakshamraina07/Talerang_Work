import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import {
    Lock, ChevronDown, ChevronUp,
    BarChart2, Compass, BookOpen, Briefcase,
    FileText, Users, Award, Rocket, ExternalLink, ArrowRight, Sparkles
} from 'lucide-react';

/* ─── Brand palette ─────────────────────────────────────────────────────────
   Primary red  : #DC2626  (red-600)
   Deep red     : #991B1B  (red-800)
   Dark blue    : #0F172A  (slate-900)
   Mid dark blue: #1E293B  (slate-800)
   Card surface : #162032  (~slate-850)
   Muted text   : #94A3B8  (slate-400)
────────────────────────────────────────────────────────────────────────── */

const steps = [
    {
        id: 1,
        title: 'Competency Assessment',
        subtitle: 'Know where you stand',
        icon: BarChart2,
        locked: false,
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
        locked: false,
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
        locked: false,
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
        locked: false,
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
        locked: true,
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
        locked: true,
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
        locked: true,
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
        locked: true,
        description:
            'You will be required to give us details about your preferred skill track, location, references and complete a few quick formalities before you are connected to an internship or job opportunity.',
        actions: [
            { label: 'Apply Now', href: '#', primary: true },
        ],
    },
];

/* ─── Step Card ────────────────────────────────────────────────────────────── */
const StepCard = ({ step, index }) => {
    const [expanded, setExpanded] = useState(!step.locked && index < 4);
    const Icon = step.icon;

    return (
        <div className={`relative group transition-all duration-500 ${step.locked ? 'opacity-50' : 'opacity-100'}`}>

            {/* Connector line */}
            {index < steps.length - 1 && (
                <div
                    className="absolute left-8 top-full w-0.5 h-6 z-10"
                    style={{
                        background: step.locked
                            ? 'rgba(15,23,42,0.1)'
                            : 'linear-gradient(to bottom, #DC2626, rgba(220,38,38,0.1))'
                    }}
                />
            )}

            {/* Card */}
            <div
                style={{
                    background: step.locked ? '#FAFAFA' : '#ffffff',
                    border: step.locked
                        ? '1px solid rgba(15,23,42,0.07)'
                        : '1px solid rgba(15,23,42,0.12)',
                    boxShadow: step.locked
                        ? 'none'
                        : '0 4px 20px rgba(15,23,42,0.07), 0 1px 4px rgba(220,38,38,0.08)',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                }}
                className={!step.locked ? 'hover:-translate-y-0.5' : ''}
            >
                {/* Red top accent bar */}
                {!step.locked && (
                    <div style={{ height: '3px', background: 'linear-gradient(90deg, #DC2626, #991B1B)' }} />
                )}

                {/* Header button */}
                <button
                    onClick={() => !step.locked && setExpanded(p => !p)}
                    className={`w-full flex items-center gap-4 px-6 py-5 text-left ${!step.locked ? 'cursor-pointer' : 'cursor-default'}`}
                >
                    {/* Icon circle */}
                    <div
                        style={{
                            width: '3.5rem',
                            height: '3.5rem',
                            borderRadius: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            background: step.locked
                                ? 'rgba(15,23,42,0.06)'
                                : 'linear-gradient(135deg, #DC2626, #7F1D1D)',
                            boxShadow: step.locked ? 'none' : '0 4px 14px rgba(220,38,38,0.35)',
                            transition: 'transform 0.3s ease',
                        }}
                        className={!step.locked ? 'group-hover:scale-110' : ''}
                    >
                        {step.locked
                            ? <Lock style={{ width: '1.1rem', height: '1.1rem', color: 'rgba(15,23,42,0.25)' }} />
                            : <Icon style={{ width: '1.3rem', height: '1.3rem', color: '#fff' }} />
                        }
                    </div>

                    {/* Title block */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <span
                                style={{
                                    fontSize: '0.65rem',
                                    fontWeight: 800,
                                    letterSpacing: '0.08em',
                                    padding: '2px 10px',
                                    borderRadius: '999px',
                                    background: step.locked
                                        ? 'rgba(15,23,42,0.05)'
                                        : 'rgba(220,38,38,0.08)',
                                    color: step.locked ? 'rgba(15,23,42,0.25)' : '#DC2626',
                                    border: step.locked ? '1px solid rgba(15,23,42,0.08)' : '1px solid rgba(220,38,38,0.25)',
                                }}
                            >
                                STEP {step.id}
                            </span>
                            {step.locked && (
                                <span style={{ fontSize: '0.7rem', color: 'rgba(15,23,42,0.3)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                    <Lock style={{ width: '0.65rem', height: '0.65rem' }} /> Locked
                                </span>
                            )}
                        </div>
                        <h3
                            style={{
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                color: step.locked ? 'rgba(15,23,42,0.3)' : '#0F172A',
                                marginBottom: '2px',
                            }}
                        >
                            {step.title}
                        </h3>
                        <p style={{ fontSize: '0.8rem', color: step.locked ? 'rgba(15,23,42,0.3)' : '#64748B' }}>
                            {step.subtitle}
                        </p>
                    </div>

                    {/* Expand toggle */}
                    {!step.locked && (
                        <div
                            style={{
                                flexShrink: 0,
                                width: '2rem',
                                height: '2rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: expanded ? 'rgba(220,38,38,0.08)' : 'rgba(15,23,42,0.04)',
                                border: '1px solid rgba(220,38,38,0.2)',
                                transition: 'background 0.2s',
                            }}
                        >
                            {expanded
                                ? <ChevronUp style={{ width: '1rem', height: '1rem', color: '#DC2626' }} />
                                : <ChevronDown style={{ width: '1rem', height: '1rem', color: '#64748B' }} />
                            }
                        </div>
                    )}
                </button>

                {/* Expandable body */}
                <div
                    style={{
                        overflow: 'hidden',
                        maxHeight: expanded && !step.locked ? '24rem' : '0',
                        opacity: expanded && !step.locked ? 1 : 0,
                        transition: 'max-height 0.5s ease, opacity 0.4s ease',
                    }}
                >
                    <div
                        style={{
                            padding: '0 1.5rem 1.5rem',
                            borderTop: '1px solid rgba(15,23,42,0.07)',
                        }}
                    >
                        <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.7, marginTop: '1rem', marginBottom: '1.25rem' }}>
                            {step.description}
                        </p>

                        {step.tags && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                {step.tags.map(tag => (
                                    <span
                                        key={tag}
                                        style={{
                                            fontSize: '0.72rem',
                                            fontWeight: 700,
                                            padding: '3px 12px',
                                            borderRadius: '999px',
                                            background: 'rgba(220,38,38,0.15)',
                                            color: '#FCA5A5',
                                            border: '1px solid rgba(220,38,38,0.3)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {step.actions.map((action, i) => (
                                <a
                                    key={i}
                                    href={action.href}
                                    style={action.primary ? {
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        padding: '0.6rem 1.25rem',
                                        borderRadius: '0.6rem',
                                        fontSize: '0.82rem',
                                        fontWeight: 700,
                                        background: 'linear-gradient(135deg, #DC2626, #991B1B)',
                                        color: '#fff',
                                        boxShadow: '0 4px 14px rgba(220,38,38,0.4)',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        border: 'none',
                                    } : {
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        padding: '0.6rem 1.25rem',
                                        borderRadius: '0.6rem',
                                        fontSize: '0.82rem',
                                        fontWeight: 600,
                                        background: 'transparent',
                                        color: '#475569',
                                        border: '1px solid rgba(15,23,42,0.15)',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={e => {
                                        if (action.primary) {
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(220,38,38,0.55)';
                                            e.currentTarget.style.transform = 'translateY(-1px)';
                                        } else {
                                            e.currentTarget.style.borderColor = 'rgba(220,38,38,0.35)';
                                            e.currentTarget.style.color = '#DC2626';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (action.primary) {
                                            e.currentTarget.style.boxShadow = '0 4px 14px rgba(220,38,38,0.4)';
                                            e.currentTarget.style.transform = 'none';
                                        } else {
                                            e.currentTarget.style.borderColor = 'rgba(15,23,42,0.15)';
                                            e.currentTarget.style.color = '#475569';
                                        }
                                    }}
                                >
                                    {action.label}
                                    {action.primary && <ExternalLink style={{ width: '0.8rem', height: '0.8rem' }} />}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

/* ─── Page ─────────────────────────────────────────────────────────────────── */
const WrapTest = () => {
    const unlockedCount = steps.filter(s => !s.locked).length;
    const progressPercent = Math.round((unlockedCount / steps.length) * 100);

    return (
        <Layout>
            {/* ── Hero ── */}
            <section
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #0F172A 0%, #1a0a0a 50%, #0F172A 100%)',
                    paddingTop: '4.5rem',
                    paddingBottom: '6rem',
                }}
            >
                {/* Background orbs */}
                <div style={{
                    position: 'absolute', top: '-5rem', left: '50%', transform: 'translateX(-50%)',
                    width: '700px', height: '700px',
                    background: 'radial-gradient(circle, rgba(220,38,38,0.18) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-3rem', right: '-4rem',
                    width: '350px', height: '350px',
                    background: 'radial-gradient(circle, rgba(153,27,27,0.2) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', top: '2rem', left: '-3rem',
                    width: '280px', height: '280px',
                    background: 'radial-gradient(circle, rgba(30,41,59,0.7) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', maxWidth: '52rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.4rem 1.1rem',
                        background: 'rgba(220,38,38,0.12)',
                        border: '1px solid rgba(220,38,38,0.3)',
                        borderRadius: '999px',
                        color: '#FCA5A5',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        marginBottom: '1.75rem',
                    }}>
                        <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#DC2626' }} />
                        Your Career Roadmap — 8 Steps to Success
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#F8FAFC', lineHeight: 1.1, marginBottom: '1.25rem' }}>
                        The Talerang{' '}
                        <span style={{
                            backgroundImage: 'linear-gradient(90deg, #DC2626, #F87171)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            WrapTest
                        </span>
                        <br />Journey
                    </h1>

                    <p style={{ fontSize: '1rem', color: '#64748B', maxWidth: '36rem', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
                        A structured, end-to-end career development program — from knowing yourself to landing your dream job. Complete each step to unlock the next.
                    </p>

                    {/* Stat pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
                        {[
                            '8 Milestones',
                            'Personalised Path',
                            'Industry Recognised',
                        ].map((label, idx) => (
                            <span
                                key={label}
                                style={{
                                    padding: '0.45rem 1.1rem',
                                    borderRadius: '999px',
                                    fontSize: '0.78rem',
                                    fontWeight: 700,
                                    background: idx === 0
                                        ? 'rgba(220,38,38,0.15)'
                                        : 'rgba(30,41,59,0.8)',
                                    border: idx === 0
                                        ? '1px solid rgba(220,38,38,0.35)'
                                        : '1px solid rgba(255,255,255,0.08)',
                                    color: idx === 0 ? '#FCA5A5' : '#94A3B8',
                                    backdropFilter: 'blur(8px)',
                                }}
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Wave divider */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0 }}>
                    <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none" height="60">
                        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section style={{ background: '#ffffff', padding: '4rem 0 5rem' }}>
                <div style={{ maxWidth: '44rem', margin: '0 auto', padding: '0 1.5rem' }}>

                    {/* Progress Card */}
                    <div
                        style={{
                            background: '#ffffff',
                            borderRadius: '1rem',
                            border: '1px solid rgba(15,23,42,0.1)',
                            boxShadow: '0 8px 32px rgba(15,23,42,0.08), 0 2px 8px rgba(220,38,38,0.08)',
                            padding: '1.5rem',
                            marginBottom: '3rem',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Corner accent */}
                        <div style={{
                            position: 'absolute', top: 0, right: 0,
                            width: '120px', height: '120px',
                            background: 'radial-gradient(circle at top right, rgba(220,38,38,0.08), transparent 70%)',
                        }} />

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem', position: 'relative' }}>
                            <div>
                                <p style={{ fontSize: '0.65rem', fontWeight: 800, color: '#DC2626', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                                    Your Progress
                                </p>
                                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0F172A' }}>
                                    {unlockedCount} of {steps.length} Steps Unlocked
                                </h2>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <span style={{ fontSize: '2.8rem', fontWeight: 900, backgroundImage: 'linear-gradient(135deg, #DC2626, #F87171)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                    {progressPercent}%
                                </span>
                                <span style={{ display: 'block', fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600 }}>Completed</span>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div style={{ width: '100%', background: 'rgba(15,23,42,0.08)', borderRadius: '999px', height: '6px', overflow: 'hidden', marginBottom: '1rem' }}>
                            <div
                                style={{
                                    height: '100%',
                                    width: `${progressPercent}%`,
                                    background: 'linear-gradient(90deg, #DC2626, #F87171)',
                                    borderRadius: '999px',
                                    boxShadow: '0 0 10px rgba(220,38,38,0.6)',
                                    transition: 'width 0.8s ease',
                                }}
                            />
                        </div>

                        {/* Step dots */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {steps.map(s => (
                                <div
                                    key={s.id}
                                    title={s.title}
                                    style={{
                                        width: '1.75rem',
                                        height: '1.75rem',
                                        borderRadius: '0.4rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.7rem',
                                        fontWeight: 800,
                                        background: s.locked
                                            ? 'rgba(15,23,42,0.06)'
                                            : 'linear-gradient(135deg, #DC2626, #991B1B)',
                                        color: s.locked ? 'rgba(15,23,42,0.2)' : '#fff',
                                        boxShadow: s.locked ? 'none' : '0 2px 8px rgba(220,38,38,0.4)',
                                        border: s.locked ? '1px solid rgba(15,23,42,0.08)' : 'none',
                                    }}
                                >
                                    {s.id}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Course Outline Banner ── */}
                    <div
                        style={{
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            marginBottom: '3rem',
                            boxShadow: '0 8px 32px rgba(15,23,42,0.10), 0 2px 8px rgba(220,38,38,0.10)',
                            border: '1px solid rgba(15,23,42,0.08)',
                        }}
                    >
                        {/* Header */}
                        <div
                            style={{
                                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #7F1D1D 100%)',
                                padding: '1rem 1.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Diagonal light streak */}
                            <div style={{
                                position: 'absolute', top: 0, left: '-10%',
                                width: '40%', height: '100%',
                                background: 'linear-gradient(105deg, transparent 0%, rgba(220,38,38,0.12) 50%, transparent 100%)',
                                pointerEvents: 'none',
                            }} />
                            <div
                                style={{
                                    width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem',
                                    background: 'linear-gradient(135deg, #DC2626, #991B1B)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 2px 10px rgba(220,38,38,0.5)',
                                    flexShrink: 0,
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1rem', height: '1rem', color: '#fff' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                                </svg>
                            </div>
                            <div>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1px' }}>
                                    Resources
                                </p>
                                <h3 style={{ color: '#F8FAFC', fontWeight: 800, fontSize: '1rem', margin: 0 }}>
                                    Course Outline
                                </h3>
                            </div>
                        </div>

                        {/* Body */}
                        <div
                            style={{
                                background: '#fff',
                                padding: '1.5rem 1.75rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.875rem',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {/* Download Course Outline */}
                            <a
                                href="https://drive.google.com/file/d/1CqCVrE1E0HfQoTNak_HEpIoEjeyTbMoA/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '0.65rem',
                                    fontSize: '0.82rem',
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #DC2626, #991B1B)',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 14px rgba(220,38,38,0.35)',
                                    transition: 'all 0.22s ease',
                                    letterSpacing: '0.01em',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(220,38,38,0.55)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(220,38,38,0.35)';
                                    e.currentTarget.style.transform = 'none';
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '0.95rem', height: '0.95rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Course Outline
                            </a>

                            {/* Divider dot */}
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(15,23,42,0.15)', display: 'inline-block', flexShrink: 0 }} />

                            {/* Watch Demo Video */}
                            <a
                                href="https://drive.google.com/file/d/1RCdhBf9gigAhePxzoAgRc6yAiDPB4mDy/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '0.65rem',
                                    fontSize: '0.82rem',
                                    fontWeight: 700,
                                    background: '#0F172A',
                                    color: '#F8FAFC',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 14px rgba(15,23,42,0.2)',
                                    transition: 'all 0.22s ease',
                                    letterSpacing: '0.01em',
                                    border: '1.5px solid rgba(220,38,38,0.25)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(15,23,42,0.35)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.borderColor = 'rgba(220,38,38,0.6)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(15,23,42,0.2)';
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.borderColor = 'rgba(220,38,38,0.25)';
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '0.95rem', height: '0.95rem', color: '#DC2626' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                                </svg>
                                Watch Talerang Portal Demo
                            </a>
                        </div>
                    </div>

                    {/* Step cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {steps.map((step, index) => (
                            <StepCard key={step.id} step={step} index={index} />
                        ))}
                    </div>


                    {/* Bottom CTA */}
                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <div
                            style={{
                                background: 'linear-gradient(135deg, #1a0a0a 0%, #1E293B 100%)',
                                borderRadius: '1.25rem',
                                padding: '3rem 2rem',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(220,38,38,0.2)',
                                boxShadow: '0 20px 60px rgba(220,38,38,0.1)',
                            }}
                        >
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.12) 0%, transparent 65%)',
                            }} />

                            {/* Decorative corner lines */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0,
                                width: '4rem', height: '4rem',
                                borderTop: '2px solid rgba(220,38,38,0.4)',
                                borderLeft: '2px solid rgba(220,38,38,0.4)',
                                borderRadius: '0.25rem 0 0 0',
                            }} />
                            <div style={{
                                position: 'absolute', bottom: 0, right: 0,
                                width: '4rem', height: '4rem',
                                borderBottom: '2px solid rgba(220,38,38,0.4)',
                                borderRight: '2px solid rgba(220,38,38,0.4)',
                                borderRadius: '0 0 0.25rem 0',
                            }} />

                            <div style={{ position: 'relative' }}>
                                <p style={{ color: '#DC2626', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                                    Ready to begin?
                                </p>
                                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 900, color: '#F8FAFC', marginBottom: '1rem', lineHeight: 1.2 }}>
                                    We help you fly, we help you{' '}
                                    <span style={{
                                        backgroundImage: 'linear-gradient(90deg, #DC2626, #F87171)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>
                                        SOAR
                                    </span>
                                </h3>
                                <p style={{ color: '#64748B', marginBottom: '2rem', maxWidth: '28rem', margin: '0 auto 2rem', fontSize: '0.875rem', lineHeight: 1.7 }}>
                                    Start with Step 1 today and unlock your personalised career path built by industry experts at Talerang.
                                </p>
                                <a
                                    href="/login"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.85rem 2rem',
                                        background: 'linear-gradient(135deg, #DC2626, #991B1B)',
                                        color: '#fff',
                                        fontWeight: 800,
                                        fontSize: '0.875rem',
                                        borderRadius: '0.75rem',
                                        textDecoration: 'none',
                                        boxShadow: '0 6px 24px rgba(220,38,38,0.45)',
                                        transition: 'all 0.2s ease',
                                        border: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.boxShadow = '0 10px 32px rgba(220,38,38,0.6)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.boxShadow = '0 6px 24px rgba(220,38,38,0.45)';
                                        e.currentTarget.style.transform = 'none';
                                    }}
                                >
                                    Start Your Journey <ArrowRight style={{ width: '1rem', height: '1rem' }} />
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
