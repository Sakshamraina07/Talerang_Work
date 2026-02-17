import React, { useState, useEffect } from 'react';
import { quizModules } from '../data/quizData';
import { LayoutDashboard, LogOut, Search, ExternalLink, Loader } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL || 'https://talerang-work.onrender.com';

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await fetch(`${API_URL}/api/admin/users`);
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            }
        } catch (error) {
            console.error("Failed to fetch users", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSyncSheets = async () => {
        try {
            const res = await fetch(`${API_URL}/api/admin/sync-sheets`, { method: 'POST' });
            if (res.ok) {
                alert('Synced to Google Sheets successfully!');
            } else {
                alert('Sync failed.');
            }
        } catch (error) {
            console.error("Sync error", error);
            alert('Sync failed due to network error.');
        }
    };

    const filteredUsers = users.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );

    // Helper to get score for a specific module
    const getModuleScore = (user, moduleId) => {
        const progress = user.ModuleProgresses?.find(mp => mp.moduleId === moduleId);
        return progress ? progress.score : '-';
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader className="w-8 h-8 animate-spin text-primary" /></div>;

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <LayoutDashboard className="w-6 h-6 text-primary" />
                        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                    </div>
                    <div>
                        <button onClick={logout} className="text-sm font-medium text-gray-500 hover:text-red-600 flex items-center gap-2">
                            <LogOut className="w-4 h-4" /> Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-[95%] mx-auto px-4 py-8">
                {/* Stats / Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button
                            onClick={handleSyncSheets}
                            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition w-full md:w-auto justify-center shadow-sm"
                        >
                            <LayoutDashboard className="w-4 h-4" /> Sync to Sheets
                        </button>
                        <a
                            href="https://docs.google.com/spreadsheets/d/1DfLdFRdJhbFTzvDGMrSM-B81cTgv2348lyfj7RPnfeI/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition w-full md:w-auto justify-center shadow-sm"
                        >
                            <ExternalLink className="w-4 h-4" /> Open Sheet
                        </a>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white whitespace-nowrap">
                            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold border-b border-gray-100">
                                <tr>
                                    <th className="p-4 sticky left-0 bg-gray-50 z-10">Name</th>
                                    <th className="p-4">Contact</th>
                                    <th className="p-4">Login Time</th>
                                    {/* Dynamic Module Headers */}
                                    {quizModules.map(module => (
                                        <th key={module.id} className="p-4 text-center min-w-[150px]">
                                            {module.title}
                                        </th>
                                    ))}
                                    <th className="p-4 text-center sticky right-0 bg-gray-50 z-10">Total Score</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredUsers.map(user => {
                                    // Calculate Stats
                                    const totalScore = user.ModuleProgresses?.reduce((sum, mp) => sum + (mp.score || 0), 0) || 0;

                                    return (
                                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 sticky left-0 bg-white z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                                <div className="font-semibold text-gray-900">{user.name}</div>
                                            </td>
                                            <td className="p-4">
                                                <div className="text-sm text-gray-600">{user.email}</div>
                                                <div className="text-xs text-gray-400">{user.phone}</div>
                                            </td>
                                            <td className="p-4 text-sm text-gray-500">
                                                {user.loginTime ? new Date(user.loginTime).toLocaleString() : '-'}
                                            </td>

                                            {/* Dynamic Module Scores */}
                                            {quizModules.map(module => (
                                                <td key={module.id} className="p-4 text-center text-sm text-gray-600">
                                                    {getModuleScore(user, module.id)}
                                                </td>
                                            ))}

                                            <td className="p-4 text-center font-bold text-gray-900 sticky right-0 bg-white z-10 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                                {totalScore}
                                            </td>
                                        </tr>
                                    );
                                })}
                                {filteredUsers.length === 0 && (
                                    <tr>
                                        <td colSpan={5 + quizModules.length} className="p-8 text-center text-gray-500">
                                            No users found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
