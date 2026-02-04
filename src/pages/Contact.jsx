import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <Layout>
            <Section className="pt-32 pb-16">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-dark">
                            Get in <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10">
                            Have questions? We'd love to hear from you. Reach out to our team.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <MapPin />, title: "Visit Us", content: "Mumbai, India" },
                                { icon: <Mail />, title: "Email Us", content: "team@talerang.com" },
                                { icon: <Phone />, title: "Call Us", content: "+91 999 999 9999" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-indigo-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg mb-1">{item.title}</div>
                                        <div className="text-slate-600">{item.content}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-dark">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-dark">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button variant="primary" className="w-full justify-center py-4">
                                Send Message <Send size={18} className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default Contact;
