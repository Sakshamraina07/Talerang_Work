import React from 'react';

const QuestionCard = ({ question, selectedOption, onSelect }) => {
    const isScenario = question.type === 'scenario';

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4 whitespace-pre-line leading-relaxed">
                {question.text}
            </h4>

            <div className="space-y-3">
                {question.options.map((option, index) => {
                    const isSelected = selectedOption?.text === option.text;

                    return (
                        <button
                            key={index}
                            onClick={() => onSelect(option)}
                            className={`
                w-full text-left p-4 rounded-lg border-2 transition-all duration-200
                ${isSelected
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                }
              `}
                        >
                            <div className="flex items-start">
                                <div className={`
                      flex-shrink-0 w-5 h-5 rounded-full border mr-3 mt-0.5
                      ${isSelected ? 'border-primary bg-primary' : 'border-gray-300'}
                      flex items-center justify-center
                  `}>
                                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <span className={`${isSelected ? 'font-medium' : 'text-gray-700'}`}>
                                    {option.text}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuestionCard;
