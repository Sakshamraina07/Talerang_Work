import React, { useMemo } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';
import { ArrowLeft, Award, Download, Share2 } from 'lucide-react';

const CompetencyReport = ({ moduleData, score, answers, onBack }) => {
    // 1. Process Data for Charts
    const processedData = useMemo(() => {
        let understandingScore = 0;
        let understandingMax = 0;
        let applicationScore = 0;
        let applicationMax = 0;

        moduleData.sections.forEach(section => {
            const isUnderstanding = section.title.toLowerCase().includes('understanding');
            const isApplication = section.title.toLowerCase().includes('application');

            section.questions.forEach(q => {
                const answer = answers[q.id];
                const maxQScore = Math.max(...q.options.map(o => o.score || 0));

                if (isUnderstanding) {
                    understandingScore += answer?.score || 0;
                    understandingMax += maxQScore;
                } else if (isApplication) {
                    applicationScore += answer?.score || 0;
                    applicationMax += maxQScore;
                }
            });
        });

        // Normalize to 10-point scale
        const uNorm = understandingMax ? (understandingScore / understandingMax) * 10 : 0;
        const aNorm = applicationMax ? (applicationScore / applicationMax) * 10 : 0;

        // Simulate other dimensions based on uNorm/aNorm for fuller chart
        const radarData = [
            { subject: 'Concept', A: uNorm, fullMark: 10 },
            { subject: 'Application', A: aNorm, fullMark: 10 },
            { subject: 'Strategy', A: (uNorm + aNorm) / 2, fullMark: 10 },
            { subject: 'Values', A: aNorm > 6 ? 9 : 6, fullMark: 10 },
            { subject: 'Logic', A: uNorm > 6 ? 9 : 6, fullMark: 10 },
        ];

        const barData = [
            { name: 'Understanding', score: Number(uNorm.toFixed(1)), fill: '#D32F2F' },
            { name: 'Application', score: Number(aNorm.toFixed(1)), fill: '#1E3A8A' },
            { name: 'Values', score: Number(((uNorm + aNorm) / 2).toFixed(1)), fill: '#D32F2F' },
        ];

        return { radarData, barData, totalMax: understandingMax + applicationMax };
    }, [moduleData, answers]);

    const { radarData, barData, totalMax } = processedData;
    const percentage = Math.round((score / totalMax) * 100);

    let feedback = {
        variant: 'neutral',
        text: 'Good start, but room for improvement.',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50'
    };

    if (percentage >= 80) {
        feedback = { variant: 'success', text: 'Excellent! You have mastered this module.', color: 'text-green-600', bg: 'bg-green-50' };
    } else if (percentage < 50) {
        feedback = { variant: 'danger', text: 'Needs Improvement. Review the material again.', color: 'text-red-600', bg: 'bg-red-50' };
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in-up">
            <button
                onClick={onBack}
                className="flex items-center text-gray-500 hover:text-primary mb-6 transition-colors font-medium group"
            >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
            </button>

            <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-800 mb-2">Competency Analysis Report</h1>
                <p className="text-gray-500 font-medium uppercase tracking-wider">Module: <span className="text-gray-900">{moduleData.title}</span></p>
            </div>

            {/* Top Section: Score & Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Score Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Award className="w-32 h-32" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Overall Readiness</h3>
                    <div className="flex items-end mb-4">
                        <span className="text-6xl font-extrabold text-gray-900">{score}</span>
                        <span className="text-2xl font-bold text-gray-400 mb-2">/ {totalMax}</span>
                    </div>
                    <div className={`px-6 py-2 rounded-full font-bold text-sm ${feedback.bg} ${feedback.color}`}>
                        {percentage >= 80 ? 'High Proficiency' : percentage >= 50 ? 'Moderate Proficiency' : 'Needs Improvement'}
                    </div>
                </div>

                {/* Insights Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-800 mb-6 border-b pb-2">Detailed Insights</h3>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Key Strengths</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>Strong grasp of foundational concepts.</li>
                                {percentage > 70 && <li>Good application of theory in scenarios.</li>}
                                <li>Consistent logic in decision making.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Areas for Improvement</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                {percentage < 80 && <li>Revisit the case studies for deeper nuances.</li>}
                                <li>Try to align your decisions closer to the recommended framework.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Radar Chart */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center">
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-800 mb-4">Competency Radar</h3>
                    <div className="w-full h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                <PolarGrid stroke="#e5e7eb" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                                <Radar
                                    name="Student"
                                    dataKey="A"
                                    stroke="#D32F2F"
                                    strokeWidth={2}
                                    fill="#D32F2F"
                                    fillOpacity={0.2}
                                />
                                <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center">
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-800 mb-4">Score Breakdown</h3>
                    <div className="w-full h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis domain={[0, 10]} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="score" radius={[4, 4, 0, 0]} animationDuration={1500}>
                                    {barData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetencyReport;
