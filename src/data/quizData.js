export const quizModules = [
    {
        id: "module_1a",
        title: "Milestone Activity",
        description: "Milestone activity and initial self-reflection.",
        preWork: "Milestone activity.",
        sections: [
            {
                id: "m1a_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m1a_u_q1",
                        text: "Has the milestones activity changed in your perception of the team you are working with?",
                        options: [
                            { text: "Yes", score: 0 }, // Score not specified for Yes/No, assuming 0/10 or just informational. Prompt doesn't specify score for this Q. Wait, looking at Q2, it has scores. Let's assume this is a non-scored reflection or check prompt again. Prompt says "Yes" "No" without scores in brackets. I will treat as 0 for now or maybe just survey.
                            { text: "No", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m1a_u_q2",
                        text: "What is your most vital take away from the milestones activity?",
                        options: [
                            { text: "Understanding how different people operate. It is important to not judge someone based on first impressions.", score: 10 },
                            { text: "It is good to poke and find out about the past from people.", score: 0 },
                            { text: "Knowing someone’s past experiences does not really make any difference. I still do not feel comfortable working with certain individuals.", score: 0 },
                            { text: "Both a and b.", score: 5 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m1a_u_q3",
                        text: "You have joined a new team with the organization you work with. Over the course of your tenure, you have been hearing a lot of things about the different members of this team. Do you feel that conducting a milestones session with this team will benefit you by making you less judgmental about the team?",
                        options: [
                            { text: "Yes, it is important to really understand the team members and their behaviors from a neutral perspective.", score: 10 },
                            { text: "No, conducting such a session will not benefit the team. Getting down to work and performing in the team is more important. Personal relationships can be built over time.", score: 0 },
                            { text: "I am uncertain of what to do.", score: 5 },
                            { text: "None of the above.", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m1a_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m1a_a_q1",
                        text: "The organization you are joining has most employees who have a minimum of 10 years of experience. You are their youngest recruit. You observe that most of your colleagues form strong judgemental opinions that create preconceived notions of new clients or new ventures.\n\nYour job is to work with your team to ensure that they approach people and tasks with rational and neutral thinking. You will:",
                        options: [
                            { text: "Organize a team meeting and discuss the importance of understanding each other’s styles.", score: 5 },
                            { text: "Organize a life map session with a prior agenda and meeting invite for the team.", score: 5 },
                            { text: "Observe the team and make self-adjustments to fit the team.", score: 0 },
                            { text: "Discuss your life map session with the HR and organize a departmental wide session for everyone.", score: 10 },
                            { text: "You do not engage in any activity and work on your own.", score: 0 }
                        ],
                        type: "scenario"
                    }
                ]
            }
        ]
    },
    {
        id: "module_1b",
        title: "Starbucks Case Study",
        description: "Starbucks Case Study and discussion session.",
        preWork: "Starbucks Case Study and discussion session.",
        sections: [
            {
                id: "m1b_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m1b_u_q1",
                        text: "From the Starbucks case study, what do you think is that most vital element that made the Starbucks success story possible?",
                        options: [
                            { text: "The values that Starbucks was created on made all the difference. Consistently following them brought success.", score: 5 },
                            { text: "The original values had only given the base on which Starbucks operates now. It is now just a good business.", score: 0 },
                            { text: "The original values have been supplemented with new values and systems that have made this success story possible.", score: 10 },
                            { text: "I disagree with all the above.", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m1b_u_q2",
                        text: "Values are as important for success as hard work and intelligence.",
                        options: [
                            { text: "I agree, without strong values, irrespective of one’s capabilities, people cannot create lasting success stories in the world of business.", score: 10 },
                            { text: "I disagree, values do not get work done. Individual capabilities and skills are what matter.", score: 0 },
                            { text: "I feel that values are important, but they are not the sole criteria for success. Intelligence and skills are equal partners.", score: 5 },
                            { text: "I really dont understand.", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m1b_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m1b_a_q1",
                        text: "Imagine you have been promoted to be the CEO of a global departmental store chain...",
                        options: [
                            { text: "Check with the local management team to understand the root cause and ask them to device new policies.", score: 10 },
                            { text: "You consult the regional heads to make policy enforcement ignoring feedback.", score: 0 },
                            { text: "Get the marketing team to figure out new regional policies based on customer feedback.", score: 5 },
                            { text: "Layoff the entire SEA team and hire a new one.", score: 0 }
                        ],
                        type: "scenario"
                    },
                    {
                        id: "m1b_a_q2",
                        text: "While entering into a new work environment, which values do you feel are necessary?",
                        options: [
                            { text: "Confidence", score: 5 },
                            { text: "Honesty", score: 5 },
                            { text: "Dedication", score: 5 },
                            { text: "Open-mindedness", score: 5 }
                        ],
                        type: "mcq" // treated as mcq even though simple
                    }
                ]
            }
        ]
    },
    {
        id: "module_2",
        title: "Life Vision Session",
        description: "Life Vision session with Guest Speaker.",
        preWork: "Life Vision session with Guest Speaker. 80th Birthday vision board. Write up on 5 year reunion speech.",
        sections: [
            {
                id: "m2_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m2_u_q1",
                        text: "Should life vision be categorized into personal, professional and community buckets?",
                        options: [
                            { text: "Yes, these three categories cover every aspect.", score: 10 },
                            { text: "No, also include environmental and nature.", score: 5 },
                            { text: "Both the above.", score: 5 },
                            { text: "None of the above.", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m2_u_q2",
                        text: "Does having fewer vision board goals mean life failure?",
                        options: [
                            { text: "I disagree, I must reflect more.", score: 10 },
                            { text: "Yes, I feel inferior.", score: 0 },
                            { text: "I am unsure.", score: 0 },
                            { text: "None of the above.", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m2_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m2_a_q1",
                        text: "While your 5 year reunion speech...",
                        options: [
                            { text: "I was able to connect achievements as steps toward my goals.", score: 5 },
                            { text: "I feel events are still isolated.", score: 0 },
                            { text: "I saw ultimate goal and what mattered.", score: 10 },
                            { text: "I still feel achievements are isolated.", score: 0 }
                        ],
                        type: "scenario"
                    },
                    {
                        id: "m2_a_q2",
                        text: "When should personal, professional, and community goals be prioritized?",
                        options: [
                            { text: "Professional first, community second, personal last.", score: 5 },
                            { text: "Goals should integrate all buckets.", score: 10 },
                            { text: "No fixed pattern.", score: 0 },
                            { text: "None of the above.", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            }
        ]
    },
    {
        id: "module_3a",
        title: "Elevator Pitch",
        description: "Elevator pitch activity and video recording activity",
        preWork: "Elevator pitch activity and video recording activity",
        sections: [],
        placeholder: true
    },
    {
        id: "module_3b",
        title: "Module 3B: Cover Letter",
        description: "Cover letter and Email activity",
        preWork: "Cover letter and Email activity",
        sections: [],
        placeholder: true
    },
    {
        id: "module_4a",
        title: "Module 4A: Ethics",
        description: "Ethics and Analyst’s Dilemma",
        preWork: "Ethics and Analyst’s Dilemma",
        sections: [],
        placeholder: true
    },
    {
        id: "module_4b",
        title: "Module 4B: Planner",
        description: "Weekly planner, SMART goals, Prioritization game",
        preWork: "Weekly planner, SMART goals, Prioritization game",
        sections: [],
        placeholder: true
    },
    {
        id: "module_4c",
        title: "Module 4C: Problem Solving",
        description: "Thinking Hats & Problem Solving",
        preWork: "Thinking Hats & Problem Solving",
        sections: [],
        placeholder: true
    },
    {
        id: "module_5",
        title: "Module 5: Etiquette",
        description: "Dining etiquette and grooming",
        preWork: "Dining etiquette and grooming",
        sections: [],
        placeholder: true
    },
    {
        id: "module_6",
        title: "Module 6: Final Skills",
        description: "Excel, PPT, Resume, Interviewing",
        preWork: "Excel, PPT, Resume, Interviewing",
        sections: [],
        placeholder: true
    }
];
