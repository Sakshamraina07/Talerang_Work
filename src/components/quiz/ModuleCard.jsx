import React from 'react';
import { Lock, CheckCircle, PlayCircle } from 'lucide-react';

const ModuleCard = ({ module, status, onClick, score }) => {
    const isLocked = status === 'locked';
    const isCompleted = status === 'completed';
    const isActive = status === 'active';

    return (
        <div
            onClick={() => !isLocked && onClick()}
            className={`
        relative overflow-hidden rounded-xl border p-6 transition-all duration-300
        ${isLocked ? 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-75' : 'bg-white border-gray-200 cursor-pointer hover:shadow-lg hover:border-primary/20'}
        ${isActive ? 'ring-2 ring-primary ring-offset-2' : ''}
      `}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-gray-100">
                    {isLocked && <Lock className="w-6 h-6 text-gray-400" />}
                    {isCompleted && <CheckCircle className="w-6 h-6 text-green-600" />}
                    {isActive && <PlayCircle className="w-6 h-6 text-primary" />}
                </div>
                {score !== undefined && (
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${score >= 70 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        Score: {score}
                    </span>
                )}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{module.description}</p>

            <div className="flex items-center text-sm font-medium">
                {isLocked ? (
                    <span className="text-gray-400">Locked</span>
                ) : isCompleted ? (
                    <span className="text-green-600">Completed</span>
                ) : (
                    <span className="text-primary group-hover:underline">Start Module &rarr;</span>
                )}
            </div>

            {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary animate-pulse"></div>
            )}
        </div>
    );
};

export default ModuleCard;
