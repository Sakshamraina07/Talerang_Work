
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Lock, Mail, ArrowRight } from 'lucide-react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        const allowedEmails = ['aditya@talerang.com', 'saksham.talerang@gmail.com'];
        const adminPassword = 'Admin@talerang4students';

        if (allowedEmails.includes(email) && password === adminPassword) {
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/admin-dashboard');
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 md:p-12 border border-slate-100 relative overflow-hidden">

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                            <Lock size={32} />
                        </div>
                        <h1 className="text-3xl font-heading font-bold text-dark mb-2">Admin Panel</h1>
                        <p className="text-slate-500">Sign in to manage the platform</p>
                        {error && (
                            <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                                {error}
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <Mail size={20} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="admin@talerang.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 ml-1">Password</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <Lock size={20} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <Button type="submit" variant="primary" className="w-full justify-center py-4 text-base">
                            Login into Dashboard <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <a href="/" className="text-sm text-slate-500 hover:text-primary transition-colors">
                            ← Back to Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
