import React from 'react';
import { LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboardKotak = () => {
    const { logout: userLogout } = useAuth();
    const navigate = useNavigate();

    const handleAdminLogout = () => {
        localStorage.removeItem('isAdminAuthenticated');
        userLogout();
        navigate('/admin-login');
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <LayoutDashboard className="w-6 h-6 text-primary" />
                        <h1 className="text-xl font-bold text-gray-800">KOTAK Admin Dashboard</h1>
                    </div>
                    <div>
                        <button onClick={handleAdminLogout} className="text-sm font-medium text-gray-500 hover:text-red-600 flex items-center gap-2">
                            <LogOut className="w-4 h-4" /> Logout
                        </button>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">
                    Welcome to the KOTAK Admin Panel. Feature content will be added here.
                </div>
            </main>
        </div>
    );
};

export default AdminDashboardKotak;
