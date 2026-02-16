import React from 'react';
import { Check, Lock, Play, Star, ChevronRight } from 'lucide-react';

const JourneyProgress = ({ modules, moduleStatus, onModuleClick }) => {
    return (
        <div className="w-full overflow-x-auto pb-4 pt-2 hide-scrollbar">
            <div className="flex items-start min-w-max px-4">
                {modules.map((module, index) => {
                    const status = moduleStatus[module.id];
                    const isCompleted = status === 'completed';
                    const isActive = status === 'active';
                    const isLocked = status === 'locked';
                    const isLast = index === modules.length - 1;

                    return (
                        <div key={module.id} className="flex relative items-start">
                            {/* Connector Line */}
                            {!isLast && (
                                <div className="absolute top-5 left-1/2 w-full h-1 bg-gray-200 -z-10">
                                    <div
                                        className={`h-full transition-all duration-1000 ease-out ${isCompleted ? 'bg-green-500' : 'bg-gray-200'
                                            }`}
                                        style={{ width: isCompleted ? '100%' : '0%' }}
                                    />
                                </div>
                            )}

                            <div className="flex flex-col items-center w-32 relative group">
                                {/* Node Circle */}
                                <button
                                    onClick={() => !isLocked && onModuleClick(module.id)}
                                    disabled={isLocked}
                                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 transform md:w-12 md:h-12
                    ${isCompleted
                                            ? 'bg-green-100 border-green-500 text-green-600 scale-100 hover:scale-110 hover:shadow-lg hover:shadow-green-200/50'
                                            : isActive
                                                ? 'bg-white border-primary text-primary shadow-lg shadow-primary/30 scale-110 ring-4 ring-primary/10 animate-pulse-slow'
                                                : 'bg-gray-50 border-gray-300 text-gray-400 cursor-not-allowed hover:bg-gray-100'
                                        }
                  `}
                                >
                                    {isCompleted ? (
                                        <Check className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                                    ) : isActive ? (
                                        <Play className="w-4 h-4 md:w-5 md:h-5 fill-current ml-0.5" />
                                    ) : (
                                        <Lock className="w-4 h-4 md:w-5 md:h-5" />
                                    )}
                                </button>

                                {/* Status Dot (for active) */}
                                {isActive && (
                                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                )}

                                {/* Label */}
                                <div className="mt-3 text-center px-1">
                                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isActive ? 'text-primary' : isCompleted ? 'text-green-600' : 'text-gray-400'
                                        }`}>
                                        {module.title.split(' ')[0]}
                                    </p>
                                    <p className={`text-[10px] font-medium leading-tight line-clamp-2 ${isActive ? 'text-gray-800' : 'text-gray-500'
                                        }`}>
                                        {module.title.split(' ').slice(1).join(' ')}
                                    </p>
                                </div>

                                {/* Tooltip on Hover */}
                                <div className="absolute bottom-full mb-2 hidden group-hover:block z-20 w-48 bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl -translate-y-1 transition-all">
                                    <p className="font-bold mb-1">{module.title}</p>
                                    <p className="opacity-80 font-light">{isCompleted ? "Completed" : isActive ? "Current Module" : "Locked"}</p>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                                </div>

                            </div>

                            {/* Connector spacer to next item */}
                            {!isLast && <div className="w-4 md:w-8 shrink-0"></div>}
                        </div>
                    );
                })}
            </div>

            {/* Scroll Hint (optional, if list is long) */}
            <div className="text-center mt-2 text-[10px] text-gray-400 italic md:hidden">
                Scroll to see more
            </div>
        </div>
    );
};

export default JourneyProgress;
