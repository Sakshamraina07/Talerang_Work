import React, { useState, useEffect } from 'react';
import { quizModules } from '../data/quizData';
import ModuleCard from '../components/quiz/ModuleCard';
import QuestionCard from '../components/quiz/QuestionCard';
import JourneyProgress from '../components/quiz/JourneyProgress';
import CompetencyReport from '../components/quiz/CompetencyReport';
import { Share2, ArrowLeft, ArrowRight, Save, Award, AlertCircle, CheckCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const TalerangQuizPage = () => {
    const { user, logout } = useAuth(); // Destructure logout
    // State
    const [view, setView] = useState('dashboard'); // dashboard, module-intro, assessment, results
    const [activeModuleId, setActiveModuleId] = useState(null);
    const [activeModuleData, setActiveModuleData] = useState(null);

    // Progress State
    const [moduleStatus, setModuleStatus] = useState({});
    const [moduleScores, setModuleScores] = useState({});
    const [userAnswers, setUserAnswers] = useState(() => {
        const saved = localStorage.getItem('talerang_user_answers');
        return saved ? JSON.parse(saved) : {};
    });

    // Assessment Runtime State
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [currentAnswers, setCurrentAnswers] = useState({});

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    // Initial Fetch
    useEffect(() => {
        if (user) {
            fetch(`${API_URL}/api/user/${user.id}/progress`)
                .then(res => {
                    if (!res.ok) {
                        if (res.status === 404) {
                            console.warn("User not found in DB. Logging out.");
                            logout(); // Validation Failed
                            return null;
                        }
                        throw new Error("Failed to fetch progress");
                    }
                    return res.json();
                })
                .then(data => {
                    if (!data) return; // Stopped by logout

                    const initialStatus = {};
                    const initialScores = data.scores || {};

                    quizModules.forEach((m, index) => {
                        // Default to locked if not found, or active if first
                        const dbStatus = data.status[m.id];
                        if (dbStatus) {
                            initialStatus[m.id] = dbStatus;
                        } else {
                            initialStatus[m.id] = index === 0 ? 'active' : 'locked';
                        }
                    });

                    setModuleStatus(initialStatus);
                    setModuleScores(initialScores);
                })
                .catch(err => console.error("Error fetching progress", err));
        }
    }, [user]);

    // Persistence Effects (Local for answers only as backup)
    useEffect(() => { localStorage.setItem('talerang_user_answers', JSON.stringify(userAnswers)); }, [userAnswers]);

    // Derived Values
    const overallProgress = Math.round((Object.values(moduleStatus).filter(s => s === 'completed').length / quizModules.length) * 100);

    // Handlers
    const handleModuleClick = (moduleId) => {
        const module = quizModules.find(m => m.id === moduleId);
        setActiveModuleId(moduleId);
        setActiveModuleData(module);
        setView('module-intro');
        setCurrentSectionIndex(0);
        setCurrentAnswers({});
    };

    const startAssessment = () => {
        setView('assessment');
        window.scrollTo(0, 0);
    };

    const handleAnswerSelect = (questionId, option) => {
        setCurrentAnswers(prev => ({
            ...prev,
            [questionId]: option
        }));
    };

    const handleNextSection = () => {
        if (currentSectionIndex < activeModuleData.sections.length - 1) {
            setCurrentSectionIndex(prev => prev + 1);
            window.scrollTo(0, 0);
        } else {
            finishModule();
        }
    };

    const finishModule = async () => {
        let totalScore = 0;
        activeModuleData.sections.forEach(section => {
            section.questions.forEach(q => {
                const answer = currentAnswers[q.id];
                if (answer) {
                    totalScore += answer.score || 0;
                }
            });
        });

        const newScores = { ...moduleScores, [activeModuleId]: totalScore };
        const newStatus = { ...moduleStatus, [activeModuleId]: 'completed' };

        // Optimistic Update
        setModuleScores(newScores);
        setModuleStatus(newStatus);
        setUserAnswers(prev => ({ ...prev, ...currentAnswers }));

        // Unlock Next
        const currentIndex = quizModules.findIndex(m => m.id === activeModuleId);
        if (currentIndex < quizModules.length - 1) {
            const nextModuleId = quizModules[currentIndex + 1].id;
            if (newStatus[nextModuleId] === 'locked') {
                newStatus[nextModuleId] = 'active';
            }
        }
        setModuleStatus(newStatus);

        // API Save
        try {
            await fetch(`${API_URL}/api/quiz/progress`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user.id,
                    moduleId: activeModuleId,
                    score: totalScore,
                    status: 'completed'
                })
            });

            // Also unlock next module in DB
            if (currentIndex < quizModules.length - 1) {
                const nextModuleId = quizModules[currentIndex + 1].id;
                await fetch(`${API_URL}/api/quiz/progress`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userId: user.id,
                        moduleId: nextModuleId,
                        status: 'active'
                    })
                });
            }

        } catch (err) {
            console.error("Failed to save progress", err);
        }

        setView('results');
        window.scrollTo(0, 0);
    };

    const returnToDashboard = () => {
        setActiveModuleId(null);
        setActiveModuleData(null);
        setView('dashboard');
        window.scrollTo(0, 0);
    };

    // Render Helpers
    const renderHeader = () => (
        <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center group">
                    <img src="/talerang-full-logo.jpg" alt="Talerang Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
                </Link>
                <div className="flex items-center gap-4">
                    {view !== 'dashboard' && (
                        <button onClick={returnToDashboard} className="text-sm font-medium text-gray-500 hover:text-primary transition-colors flex items-center">
                            <Home className="w-4 h-4 mr-1" /> Dashboard
                        </button>
                    )}
                    <div className="hidden sm:flex items-center px-3 py-1 bg-red-50 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                        Assessment Portal
                    </div>
                </div>
            </div>
        </header>
    );

    const renderDashboard = () => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12 animate-fade-in-up">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-800 mb-4 tracking-tight">
                    Your Learning Journey
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Complete the modules below to unlock your certification. Each step brings you closer to mastering the Talerang curriculum.
                </p>
            </div>

            <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12 relative overflow-hidden">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-800 mb-2">Overall Progress</h2>
                            <p className="text-gray-500">Track your milestones and achievements.</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-bold text-primary">{overallProgress}%</span>
                            <span className="text-gray-400 text-sm block">Completed</span>
                        </div>
                    </div>

                    <div className="py-4">
                        <JourneyProgress
                            modules={quizModules}
                            moduleStatus={moduleStatus}
                            onModuleClick={handleModuleClick}
                        />
                    </div>

                    {overallProgress === 100 && (
                        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center justify-center font-bold animate-bounce shadow-sm">
                            <Award className="w-8 h-8 mr-3 text-green-600" />
                            <span className="text-lg">CONGRATULATIONS! YOU ARE CERTIFIED!</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {quizModules.map((module, idx) => (
                    <div key={module.id} className="transform transition-all duration-300 hover:-translate-y-1">
                        <ModuleCard
                            module={module}
                            status={moduleStatus[module.id]}
                            score={moduleScores[module.id]}
                            onClick={() => handleModuleClick(module.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    const renderModuleIntro = () => (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <button onClick={returnToDashboard} className="group flex items-center text-gray-500 hover:text-primary mb-8 transition-colors font-medium">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
            </button>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-primary to-red-800 p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <img src="/talerang-full-logo.jpg" className="w-64 h-auto filter brightness-0 invert" alt="" />
                    </div>
                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4 border border-white/30">
                            MODULE {quizModules.findIndex(m => m.id === activeModuleId) + 1}
                        </span>
                        <h2 className="text-4xl font-extrabold mb-4">{activeModuleData.title}</h2>
                        <p className="text-lg text-red-100 max-w-2xl leading-relaxed">{activeModuleData.description}</p>
                    </div>
                </div>

                <div className="p-10">
                    <div className="mb-10 bg-orange-50 rounded-xl p-8 border border-orange-100">
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-800 mb-4 flex items-center">
                            <AlertCircle className="w-6 h-6 text-orange-500 mr-3" />
                            Pre-Work & Milestones
                        </h3>
                        <div className="prose prose-orange text-gray-700 leading-relaxed">
                            {activeModuleData.preWork}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={startAssessment}
                            className="w-full md:w-auto px-12 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center"
                        >
                            Start Assessment <ArrowRight className="ml-3 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAssessment = () => {
        const currentSection = activeModuleData.sections[currentSectionIndex];
        if (!currentSection) return <div>Error</div>;

        const isLastSection = currentSectionIndex === activeModuleData.sections.length - 1;
        const answeredCount = currentSection.questions.filter(q => currentAnswers[q.id]).length;
        const totalQuestions = currentSection.questions.length;
        const canProceed = answeredCount === totalQuestions;
        const progressPercent = ((currentSectionIndex) / activeModuleData.sections.length) * 100;

        return (
            <div className="max-w-3xl mx-auto px-4 py-8">
                {/* Progress Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                {activeModuleData.title}
                            </span>
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-800 mt-1">{currentSection.title}</h2>
                        </div>
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            Section {currentSectionIndex + 1} / {activeModuleData.sections.length}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div
                            className="bg-primary h-full transition-all duration-500"
                            style={{ width: `${progressPercent + (100 / activeModuleData.sections.length) / 2}%` }}
                        />
                    </div>
                </div>

                <div className="space-y-8 animate-fade-in">
                    {currentSection.questions.map((q, idx) => (
                        <div key={q.id} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                            <QuestionCard
                                question={q}
                                selectedOption={currentAnswers[q.id]}
                                onSelect={(option) => handleAnswerSelect(q.id, option)}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-end sticky bottom-8">
                    <button
                        onClick={handleNextSection}
                        disabled={!canProceed}
                        className={`
                    flex items-center px-10 py-4 rounded-xl font-bold text-lg transition-all transform shadow-xl
                    ${canProceed
                                ? 'bg-primary text-white hover:bg-red-700 hover:-translate-y-1'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                `}
                    >
                        {isLastSection ? 'Submit Module' : 'Next Section'}
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </button>
                </div>
            </div>
        );
    };

    const renderResults = () => {
        const score = moduleScores[activeModuleId];

        return (
            <CompetencyReport
                moduleData={activeModuleData}
                score={score}
                answers={userAnswers}
                onBack={returnToDashboard}
            />
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-900 selection:bg-primary/20 selection:text-primary">
            {renderHeader()}
            <main>
                {view === 'dashboard' && renderDashboard()}
                {view === 'module-intro' && renderModuleIntro()}
                {view === 'assessment' && renderAssessment()}
                {view === 'results' && renderResults()}
            </main>
        </div>
    );
};

export default TalerangQuizPage;
