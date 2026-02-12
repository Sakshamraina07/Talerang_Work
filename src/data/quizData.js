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
        sections: [
            {
                id: "m3a_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m3a_u_q1",
                        text: "How is the elevator pitch different from any other introduction speech that you present?",
                        options: [
                            { text: "It is more focused compared to the introduction speech. The main idea of the elevator pitch is to end the speech with a follow up.", score: 10 },
                            { text: "There is no difference. Both the speeches are same. The idea is to make your introduction unique and interesting for the listener.", score: 5 },
                            { text: "I am unsure.", score: 0 },
                            { text: "None of the above.", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m3a_u_q2",
                        text: "Of the different components in effective communication, which component is completely in your control and which ones can be unpredictable?",
                        options: [
                            { text: "Everything is in my control. What I say, how I say it and when. Nothing feels unpredictable to me.", score: 5 },
                            { text: "The content and the structure of what I am saying is in my control. I decide what to include and how to deliver. However, the setting and the circumstances of the delivery can be unpredictable.", score: 10 },
                            { text: "I am not sure.", score: 0 },
                            { text: "I feel everything is unpredictable.", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m3a_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m3a_a_q1",
                        text: "Based on the video recording activity, what changes will make your presentation skills better?",
                        options: [
                            { text: "I notice the errors in my posture and hands. I will consciously focus on keeping them more appropriately so that my delivery can become better", score: 5 },
                            { text: "I notice that I stammer while speaking without even realizing that. I will focus on making my pace of the speech more moderate so that I can avoid stammering.", score: 5 },
                            { text: "From the video I notice all the elements that affected my speech. My posture, my pace, my tone, my body language, my content and my voice modulation.", score: 10 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m3a_a_q2",
                        text: "You have been preparing for your Gala Night speech from weeks now... How will you get things in order?",
                        options: [
                            { text: "Calm myself and remember the main points of the speech. Play it in my mind and structure it accordingly. Even if the context may change.", score: 5 },
                            { text: "I will call my office and ask someone to bring me my flash cards. This means delaying the start of the speech. I will ask the organizers to announce the delay and wait for the cards to arrive.", score: 0 },
                            { text: "I have practiced the speech enough to remember all the main ideas I will simply deliver the speech focusing on what I remember well and relating it to the crowd.", score: 10 },
                            { text: "I will not feel confident enough to deliver the speech without any aid. I will cancel the event and reschedule it for another day.", score: 0 }
                        ],
                        type: "scenario"
                    }
                ]
            }
        ]
    },
    {
        id: "module_3b",
        title: "Cover Letter",
        description: "Cover letter and Email activity",
        preWork: "Cover letter and Email activity",
        sections: [
            {
                id: "m3b_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m3b_u_q1",
                        text: "Does the CODER principle always apply to writing any formal written communication?",
                        options: [
                            { text: "Yes, this principle is quite effective in writing any formal or informal communication. Applying this principle will always help create effective write-ups.", score: 10 },
                            { text: "No, this principle is very circumstantial. It does not apply to all formal written communications.", score: 0 },
                            { text: "I am not quite sure.", score: 0 },
                            { text: "None of the above.", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m3b_u_q2",
                        text: "Why does email content change even though both emails are professional?",
                        options: [
                            { text: "While one is for a colleague, the other is for a senior member of the team.", score: 10 },
                            { text: "I did not find any change in the messaging. The audience does not decide on the content.", score: 0 },
                            { text: "I am not quite sure of this.", score: 0 },
                            { text: "None of the above.", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m3b_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m3b_a_q1",
                        text: "CSR FMCG cover letter scenario — what points will you focus on?",
                        options: [
                            { text: "I will focus on the mixture of my experience from social and corporate jobs and contextualize that to the company’s focus and growth benefits.", score: 10 },
                            { text: "I will focus on the corporate experience. I will not mention the social work experience as this is a corporate job", score: 5 },
                            { text: "I will focus only on the social work experience as the main work of the CSR is to focus on social development.", score: 5 },
                            { text: "I will mention all my experience to show that I have a long work experience which makes me a suitable candidate for the job.", score: 5 }
                        ],
                        type: "scenario"
                    },
                    {
                        id: "m3b_a_q2",
                        text: "Hate mail from client — how will you respond?",
                        options: [
                            { text: "I will focus on the solution rather than the problem. I will give reassurances of this incident not repeating.", score: 10 },
                            { text: "I will bullet out the main points of the incident and inform the client about the various fault points.", score: 0 },
                            { text: "I will forward the case internally and ask them to respond to the client.", score: 5 },
                            { text: "I will seek help from my manager and draft the email focusing mainly on solutions.", score: 5 }
                        ],
                        type: "scenario"
                    }
                ]
            }
        ]
    },
    {
        id: "module_4a",
        title: "Ethics",
        description: "Ethics and Analyst’s Dilemma",
        preWork: "The Analyst’s Dilemma case study and business ethics session",
        sections: [
            {
                id: "m4a_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m4a_u_q1",
                        text: "Why is it essential to work with ethics in a professional setup?",
                        options: [
                            { text: "Ethics define our basic values. They reflect in our thinking and actions on all fronts in life.", score: 10 },
                            { text: "Working ethically at all times is not practical. I need to choose what to do depending on the situation.", score: 0 },
                            { text: "Ethics are very subjective and individuals flout someone’s ethical boundaries most times.", score: 0 },
                            { text: "None of the above.", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m4a_u_q2",
                        text: "Your value system differs from colleagues — should you change it?",
                        options: [
                            { text: "Yes. When colleagues share my values they respond to situations like I do.", score: 10 },
                            { text: "No. Just because colleagues share my values doesn’t mean they should respond like I do.", score: 5 },
                            { text: "I don't know.", score: 0 },
                            { text: "None of the above.", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m4a_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m4a_a_q1",
                        text: "Two internship offers scenario",
                        options: [
                            { text: "Decline the second offer since I have already committed to the first", score: 10 },
                            { text: "Weigh benefits and choose maximum advantage", score: 0 },
                            { text: "I don't know.", score: 0 },
                            { text: "Choose best offer and apologize to first company", score: 5 },
                            { text: "None of the above", score: 0 }
                        ],
                        type: "scenario"
                    },
                    {
                        id: "m4a_a_q2",
                        text: "Team members may leave during major project — what do you do?",
                        options: [
                            { text: "Tell HR and supervisor to take action", score: 0 },
                            { text: "Call team meeting and reason with them ethically", score: 10 },
                            { text: "Call competitor manager and warn them", score: 0 },
                            { text: "Do nothing", score: 0 }
                        ],
                        type: "scenario"
                    }
                ]
            }
        ]
    },
    {
        id: "module_4b",
        title: "Planner",
        description: "Weekly planner, SMART goals, Prioritization game",
        preWork: "Jar activity, weekly planner, SMART goals activity, Prioritization game",
        sections: [
            {
                id: "m4b_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m4b_u_q1",
                        text: "How does jar activity relate to weekly planning?",
                        options: [
                            { text: "I see a direct correlation between tasks and jar items", score: 10 },
                            { text: "I did not see correlation", score: 0 },
                            { text: "I know there is correlation but not sure what", score: 0 },
                            { text: "None of the above", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m4b_u_q2",
                        text: "Which quadrants are misunderstood most?",
                        options: [
                            { text: "Urgent & Important & Not Urgent & Not Important", score: 0 },
                            { text: "Urgent & Important & Not Urgent & Important", score: 0 },
                            { text: "Not Urgent & Important & Urgent & Not Important", score: 0 },
                            { text: "Urgent & Important & Urgent & Not Important", score: 10 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m4b_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m4b_a_q1",
                        text: "Weekly plan failure — what will you do?",
                        options: [
                            { text: "Honestly analyze and correct failures", score: 10 },
                            { text: "Increase time for long tasks, reduce others", score: 0 },
                            { text: "Do nothing", score: 0 },
                            { text: "None of the above", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m4b_a_q2",
                        text: "Weekly plan task list: Daily check in, Clear In-tray, Meetings, PTM, Gym, Dinner, Trip, Guitar. Which task represents an 'Important but Not Urgent' (Quadrant 2) activity?",
                        options: [
                            { text: "Daily check in with team", score: 0 },
                            { text: "Clear In-tray", score: 0 },
                            { text: "Plan anniversary trip", score: 10 },
                            { text: "Weekly marketing meeting", score: 0 }
                        ],
                        type: "scenario"
                    }
                ]
            }
        ]
    },
    {
        id: "module_4c",
        title: "Problem Solving",
        description: "Thinking Hats & Problem Solving",
        preWork: "Case study based problem solving activity",
        sections: [
            {
                id: "m4c_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m4c_u_q1",
                        text: "Do thinking hats change based on circumstances?",
                        options: [
                            { text: "Yes, people change hats depending on situations", score: 10 },
                            { text: "Mature individuals remain stable", score: 0 },
                            { text: "I am not quite sure", score: 0 },
                            { text: "None of the above", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m4c_u_q2",
                        text: "Thinking hats for professional vs personal thinking",
                        options: [
                            { text: "All hats apply to both", score: 10 },
                            { text: "Only for professional thinking", score: 0 },
                            { text: "I am not sure", score: 0 },
                            { text: "None", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m4c_u_q3",
                        text: "When 3-step problem solving cannot be used?",
                        options: [
                            { text: "Can be used anywhere", score: 10 },
                            { text: "Cannot be used in personal issues", score: 0 },
                            { text: "Not always usable professionally", score: 0 },
                            { text: "None", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m4c_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m4c_a_q1",
                        text: "Boss criticizes your work — which hats affect emotion?",
                        options: [
                            { text: "Blue & Black", score: 0 },
                            { text: "Red & Yellow/Green", score: 10 },
                            { text: "Black & White", score: 0 },
                            { text: "None", score: 0 }
                        ],
                        type: "scenario"
                    },
                    {
                        id: "m4c_a_q2",
                        text: "Coffee shop case — what will you do?",
                        options: [
                            { text: "Create report using 5 Whys and root cause", score: 10 },
                            { text: "Support closing the division", score: 0 },
                            { text: "Let board decide", score: 0 },
                            { text: "Not sure", score: 0 }
                        ],
                        type: "scenario"
                    }
                ]
            }
        ]
    },
    {
        id: "module_5",
        title: "Etiquette",
        description: "Dining etiquette and grooming",
        preWork: "Dining etiquettes, grooming and dressing session",
        sections: [
            {
                id: "m5_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m5_u_q1",
                        text: "Most important dining etiquette elements?",
                        options: [
                            { text: "Engage politely", score: 5 },
                            { text: "Sit with right posture", score: 5 },
                            { text: "Use right cutlery", score: 5 },
                            { text: "Avoid inappropriate conversations", score: 5 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m5_u_q2",
                        text: "Identify the common misconception about grooming:",
                        options: [
                            { text: "Proper grooming is not needed", score: 10 },
                            { text: "Regular grooming is required", score: 0 },
                            { text: "None", score: 0 },
                            { text: "All", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m5_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m5_a_q1",
                        text: "Team dinner scenario",
                        options: [
                            { text: "Put food down and respond to manager", score: 10 },
                            { text: "Speak while chewing", score: 0 },
                            { text: "Ignore manager", score: 0 },
                            { text: "None", score: 0 }
                        ],
                        type: "scenario"
                    },
                    {
                        id: "m5_a_q2",
                        text: "Shower broken — board meeting day",
                        options: [
                            { text: "Fresh clothes + deodorant + hair gel", score: 5 },
                            { text: "Use water bottles + fresh clothes + deodorant", score: 10 },
                            { text: "Personality matters more", score: 0 },
                            { text: "Cancel meeting", score: 0 }
                        ],
                        type: "scenario"
                    }
                ]
            }
        ]
    },
    {
        id: "module_6",
        title: "Final Skills",
        description: "Excel, PPT, Resume, Interviewing",
        preWork: "Excel, Power Point, Resume and Interviewing session",
        sections: [
            {
                id: "m6_understanding",
                title: "Assessment of Understanding",
                questions: [
                    {
                        id: "m6_u_q1",
                        text: "Why PowerPoint is used? Biggest mistake?",
                        options: [
                            { text: "PPT supports learning; mistake = overcrowding slides", score: 10 },
                            { text: "Using ppt only for visuals", score: 0 },
                            { text: "Not sure", score: 0 },
                            { text: "None", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m6_u_q2",
                        text: "What is must in resume?",
                        options: [
                            { text: "Work experience & academics must; hobbies not needed", score: 10 },
                            { text: "Everything should be added", score: 0 },
                            { text: "I am confused", score: 0 },
                            { text: "None", score: 0 }
                        ],
                        type: "mcq"
                    },
                    {
                        id: "m6_u_q3",
                        text: "Why panel interviews are preferred?",
                        options: [
                            { text: "Tests ability to handle multiple viewpoints", score: 10 },
                            { text: "Saves time", score: 0 },
                            { text: "Not sure", score: 5 },
                            { text: "None", score: 0 }
                        ],
                        type: "mcq"
                    }
                ]
            },
            {
                id: "m6_application",
                title: "Assessment of Application",
                questions: [
                    {
                        id: "m6_placeholder",
                        text: "End of Assessment. You have completed the Talerang Certification Journey.",
                        options: [
                            { text: "Finish", score: 10 }
                        ],
                        type: "mcq"
                    }
                ]
            }
        ]
    }
];
