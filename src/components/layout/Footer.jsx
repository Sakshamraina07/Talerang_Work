
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/logo.jpg" alt="Talerang Logo" className="h-10 w-auto object-contain bg-white rounded-md p-1" />
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Creating work-ready graduates for India through world-class training and mentorship.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-6 text-secondary">Programs</h4>
                        <ul className="space-y-3">
                            <li><Link to="/programs" className="text-slate-400 hover:text-white transition-colors">Future CEOs</Link></li>
                            <li><Link to="/programs" className="text-slate-400 hover:text-white transition-colors">Young Leaders Academy</Link></li>
                            <li><Link to="/programs" className="text-slate-400 hover:text-white transition-colors">Career Fair</Link></li>
                            <li><Link to="/programs" className="text-slate-400 hover:text-white transition-colors">Corporate Training</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-6 text-secondary">Company</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/#success-stories" className="text-slate-400 hover:text-white transition-colors">Success Stories</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-6 text-secondary">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                                <span>Mumbai, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="text-primary shrink-0" size={18} />
                                <a href="mailto:team@talerang.com" className="hover:text-white">team@talerang.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="text-primary shrink-0" size={18} />
                                <a href="tel:+919999999999" className="hover:text-white">+91 999 999 9999</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Talerang. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
