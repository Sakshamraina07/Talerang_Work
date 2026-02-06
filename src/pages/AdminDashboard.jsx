
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { LogOut, LayoutDashboard, Users, FileText, Settings } from 'lucide-react';
import Card from '../components/ui/Card';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const stats = [
        { label: 'Total Users', value: '12,345', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Applications', value: '458', icon: FileText, color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'Active Programs', value: '8', icon: LayoutDashboard, color: 'text-purple-600', bg: 'bg-purple-50' },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Admin Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold">
                            AL
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-lg leading-tight">Admin Dashboard</h1>
                            <p className="text-xs text-slate-500">Welcome back, Admin</p>
                        </div>
                    </div>
                    <Button variant="ghost" onClick={handleLogout} className="text-slate-500 gap-2">
                        <LogOut size={18} /> Logout
                    </Button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                            <div className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color}`}>
                                <stat.icon size={28} />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                                <p className="text-2xl font-bold text-dark">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Placeholder Content */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-12 text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                        <Settings size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-dark mb-2">Dashboard Ready</h2>
                    <p className="text-slate-500 max-w-md mx-auto mb-8">
                        This is a placeholder dashboard. You can now build out the admin features like user management, content updates, and analytics.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline">Manage Users</Button>
                        <Button variant="primary">Create Post</Button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
