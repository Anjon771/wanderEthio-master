import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FixedHeader from './FIxedHeader';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUseDemo = () => {
    setLoginData({
      email: 'demo@wanderethio.com',
      password: 'password123',
    });
    setFeedback({ message: 'Demo credentials loaded! Click Sign In below.', type: 'info' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ message: '', type: '' });

    try {
      const response = await axios.post('/api/register/login', loginData);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token || 'demo-token');
        setFeedback({ message: 'Sign in successful! Redirecting to booking portal...', type: 'success' });
        setTimeout(() => {
          navigate('/booking-form');
        }, 800);
      } else {
        setFeedback({ message: 'Sign in failed. Please check your credentials.', type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      const msg = error.response?.data?.message || 'Sorry, sign in failed. Please verify credentials.';
      setFeedback({ message: msg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      <main className="max-w-md w-full mx-auto px-4 py-16 flex-1 flex items-center justify-center">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-8 sm:p-10 w-full">
          
          <div className="text-center mb-8">
            <span className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-lg mx-auto mb-3">
              <i className="fas fa-user-shield"></i>
            </span>
            <h1 className="text-2xl font-extrabold text-stone-900 font-['Outfit']">
              Traveler Sign In
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              Access your saved expedition itineraries and vouchers
            </p>
          </div>

          {/* Quick Demo Credentials Autofill Banner */}
          <div className="mb-6 p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-stone-900 block">Preview Credentials</span>
              <span className="text-[11px] text-stone-600">demo@wanderethio.com</span>
            </div>
            <button
              type="button"
              onClick={handleUseDemo}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-[11px] rounded-lg shadow-sm transition-transform active:scale-95"
            >
              Fill Demo
            </button>
          </div>

          {feedback.message && (
            <div
              className={`p-3.5 mb-6 rounded-xl text-xs flex items-center gap-2 ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                  : feedback.type === 'info'
                  ? 'bg-blue-50 border border-blue-200 text-blue-900'
                  : 'bg-rose-50 border border-rose-200 text-rose-900'
              }`}
            >
              <i
                className={`fas ${
                  feedback.type === 'success'
                    ? 'fa-check-circle text-emerald-600'
                    : feedback.type === 'info'
                    ? 'fa-info-circle text-blue-600'
                    : 'fa-exclamation-circle text-rose-600'
                }`}
              ></i>
              <span>{feedback.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                value={loginData.email}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider">
                  Password
                </label>
                <Link to="/contact" className="text-[11px] text-amber-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                value={loginData.password}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-stone-100 text-center text-xs text-stone-500">
            Don't have an account yet?{' '}
            <Link to="/register" className="text-amber-600 font-bold hover:underline">
              Register now for 10% off
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LoginForm;
