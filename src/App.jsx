import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Alumni from './pages/Alumni';
import About from './pages/About';

import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminDashboardKotak from './pages/AdminDashboardKotak';
import AdminDashboardSndt from './pages/AdminDashboardSndt';
import AdminDashboardAkdn from './pages/AdminDashboardAkdn';
import TalerangQuizPage from './pages/TalerangQuizPage';
import WrapTest from './pages/WrapTest';
import ScrollToTop from './components/layout/ScrollToTop';

import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

const ProtectedAdminRoute = ({ children }) => {
  const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
  if (!isAdminAuthenticated) return <Navigate to="/admin-login" replace />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wraptest" element={<WrapTest />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin-dashboard-kotak"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardKotak />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin-dashboard-sndt"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardSndt />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin-dashboard-akdn"
            element={
              <ProtectedAdminRoute>
                <AdminDashboardAkdn />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/assessment"
            element={
              <ProtectedRoute>
                <TalerangQuizPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
