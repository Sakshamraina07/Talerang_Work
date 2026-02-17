import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, ArrowRight, Loader } from 'lucide-react';

const LoginPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Full Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit Phone is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'https://talerang-work.onrender.com';
            console.log('Attempting login to:', API_URL);
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (response.ok) {
                login(data);
                navigate('/assessment'); // Start Assessment
            } else {
                setErrors({ submit: data.error || 'Login failed' });
            }
        } catch (err) {
            console.error('Login Error:', err);
            setErrors({ submit: `Network error: ${err.message}. Ensure backend is running at ${API_URL}` });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-fade-in-up">
                <div className="bg-gradient-to-r from-primary to-red-800 p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">Welcome to Talerang</h2>
                    <p className="text-red-100 text-sm">Please enter your details to start the assessment.</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                                    placeholder="9876543210"
                                    maxLength={10}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                                />
                            </div>
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        {errors.submit && (
                            <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                                {errors.submit}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader className="w-5 h-5 animate-spin" /> : <>Start Assessment <ArrowRight className="ml-2 w-5 h-5" /></>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
