import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Target, Eye, Users, Briefcase, Award, TrendingUp, Newspaper } from 'lucide-react';
import aboutEndCollage from '../assets/about-end-collage.png';

const mediaOutlets = [
    "Mid-day", "Sakal Times", "India Today", "BW Education", "Deccan Herald", "Entrepreneur India",
    "BW People", "Business Standard", "The New Indian Express", "The Times of India", "The Hindu",
    "The Economic Times", "Education Times", "Live Mint", "YourStory", "The Economist",
    "Smart Manager", "Indiaspora", "JobsForHer", "Open Magazine", "Amity Online", "Business India",
    "OpenIDEO", "VillageCapital", "10000 Startups", "The Hacker Street", "Lokvani", "DNA"
];

const leadership = [
    { name: "Shveta Raina", role: "Founder and CEO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shveta" },
    { name: "Sinhali Deshpande", role: "Head – Curriculum", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sinhali" },
    { name: "Shameen Bajaj", role: "Mentorship", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shameen" },
    { name: "Sri Sudharsan", role: "Business Operations", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sri" },
];

const advisors = [
    { name: "Sanjeev Bikhchandani", role: "Founder, Naukri.com" },
    { name: "Ashish Dhawan", role: "Founder, Chrys Capital" },
    { name: "Shaheen Mistri", role: "CEO, Teach For India" },
    { name: "Jack Gabarro", role: "Professor, HBS" },
    { name: "Ritu Anand", role: "Chief Leadership Officer, TCS" },
    { name: "Kirthiga Reddy", role: "Former MD, Facebook India" }
];

const About = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-indigo-50 to-transparent blur-3xl opacity-60"></div>
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 shadow-sm">
                        Since 2013
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-dark">
                        Who <span className="text-primary">We Are</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Talerang began as an independent research project at <span className="font-bold text-dark">Harvard Business School</span>.
                        Our goal is simple: To create a work-ready India.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <Section>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-t-4 border-t-primary bg-indigo-50/50">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                                <Eye size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                                <p className="text-slate-700 text-lg leading-relaxed">
                                    "A world where every graduate is work-ready and can access their dream job."
                                </p>
                            </div>
                        </div>
                    </Card>
                    <Card className="border-t-4 border-t-secondary bg-yellow-50/50">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-yellow-600 shrink-0">
                                <Target size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                                <p className="text-slate-700 text-lg leading-relaxed">
                                    "To bridge the gap between academic knowledge and the work world, one graduate at a time."
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Featured On (New Section) */}
            <Section className="py-12 border-y border-slate-100 bg-white">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-dark flex justify-center items-center gap-2">
                        <Newspaper className="text-red-500" /> Featured On
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 opacity-80">
                    {mediaOutlets.map((outlet, i) => (
                        <span key={i} className="text-lg font-bold text-slate-400 hover:text-primary cursor-default transition-colors">
                            {outlet}
                        </span>
                    ))}
                </div>
            </Section>

            {/* Our Story (Detailed) */}
            <Section id="our-story" className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-primary">Our Story</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="space-y-20">
                    {/* Chapter 1 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="text-secondary font-bold text-xl mb-2">The Beginning</div>
                            <h3 className="text-2xl font-bold mb-4">Born with a Determined Spirit</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                The initial hope was to put every student, no matter where they have been born or studied, on the right career path.
                                In her time as <strong>Director at Teach for India</strong>, our Founder and CEO <strong>Shveta Raina</strong> spoke to thousands of students across the country.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                The narrative was startling. They were <strong>confused about their career path</strong>, worried about following their passion, and felt unprepared for entering the work world.
                                Shveta realized the magnitude of the problem and the possibility it had to disillusion the Indian youth.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
                                alt="Students in classroom"
                                className="rounded-3xl shadow-xl w-full object-cover h-80"
                            />
                        </div>
                    </div>

                    {/* Chapter 2 */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="text-secondary font-bold text-xl mb-2">2012 - The Research</div>
                            <h3 className="text-2xl font-bold mb-4">Harvard Business School Origins</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Talerang's formal research began when Shveta was a student at <strong>Harvard Business School in 2012</strong>.
                                She conducted an independent project along with Professor Das Narayan Das.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Their pilots at some of <strong>India's best colleges</strong> found that <span className="text-red-500 font-bold">under 60% of students</span> felt ready to take on a job.
                                Doing deep research into the problem, they spoke to leading CEOs and HR heads at groups like <strong>Tata</strong> and <strong>Aditya Birla</strong>, finding that companies were equally worried about the work-readiness crisis.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                alt="Harvard Research"
                                className="rounded-3xl shadow-xl w-full object-cover h-80"
                            />
                        </div>
                    </div>

                    {/* Chapter 3 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="text-secondary font-bold text-xl mb-2">2013 - Launch</div>
                            <h3 className="text-2xl font-bold mb-4">A High Quality Solution</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Talerang was <strong>born in 2013</strong> to be a simple, high quality solution to India's work readiness crisis.
                                Our focus is helping candidates to <strong>know</strong> themselves, then <strong>prepare</strong> themselves (hard and soft skills), and eventually learn the art of <strong>proving</strong> themselves in the field they choose.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                In 2016, we visited several colleges in smaller towns across Andhra Pradesh in partnership with a <strong>Harvard-Stanford</strong> research team to bring our solution to every corner of the nation.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                alt="Team Launch"
                                className="rounded-3xl shadow-xl w-full object-cover h-80"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Leadership Team */}
            <Section bg="light">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-bold mb-4">Meet the Leadership</h2>
                    <p className="text-slate-600">The team driving the work-readiness revolution.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    {leadership.map((leader, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <img src={leader.image} alt={leader.name} className="w-24 h-24 rounded-full mx-auto mb-4 bg-slate-100" />
                            <h3 className="font-bold text-lg">{leader.name}</h3>
                            <p className="text-primary text-sm font-medium">{leader.role}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Advisors */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-bold mb-4">Our Advisors & Mentors</h2>
                    <p className="text-slate-600">Backed by industry stalwarts from across the globe.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {advisors.map((advisor, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:border-primary/20 transition-colors">
                            <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-primary font-bold shrink-0">
                                {advisor.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-dark">{advisor.name}</h4>
                                <p className="text-xs text-slate-500">{advisor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            {/* Community Collage */}
            <Section className="pb-20">
                <div className="container mx-auto px-4">
                    <img
                        src={aboutEndCollage}
                        alt="Talerang Community"
                        className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    />
                </div>
            </Section>

        </Layout>
    );
};

export default About;
