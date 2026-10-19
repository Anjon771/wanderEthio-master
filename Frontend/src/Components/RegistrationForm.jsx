import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FixedHeader from './FIxedHeader';
import axios from 'axios';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    nationality: 'Ethiopian',
    passport: '',
    dob: '1995-01-01',
    gender: 'Male',
    country: 'Ethiopia',
    address: '',
    zip: '1000',
    city: 'Addis Ababa',
    emergencyContact: '',
    emergencyPhone: '',
    allergies: 'None',
  });

  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ message: '', type: '' });

    try {
      const response = await axios.post('/api/register/registration', formData);
      if (response.status === 201) {
        setFeedback({
          message: 'Registration successful! Your 10% traveler voucher is active. Redirecting to sign in...',
          type: 'success',
        });
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setFeedback({ message: 'Registration failed. Please check your details.', type: 'error' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      const msg = error.response?.data?.message || 'Registration failed. Please try again.';
      setFeedback({ message: msg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-8 sm:p-12">
          
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
              Traveler Enrollment
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit']">
              Register Traveler Profile
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              Create an official traveler profile for national park permits, safety manifests, and receive an instant 10% voucher for your next journey.
            </p>
          </div>

          {feedback.message && (
            <div
              className={`p-4 mb-6 rounded-xl text-xs flex items-center gap-2.5 ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border border-rose-200 text-rose-900'
              }`}
            >
              <i
                className={`fas ${
                  feedback.type === 'success' ? 'fa-check-circle text-emerald-600' : 'fa-exclamation-circle text-rose-600'
                }`}
              ></i>
              <span>{feedback.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Personal & Contact */}
            <div>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-4 pb-2 border-b border-stone-200">
                1. Personal & Contact Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Almaz Bekele"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="almaz@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Account Password *</label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Create a secure password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+251 911 234 567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Travel Details */}
            <div>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-4 pb-2 border-b border-stone-200">
                2. Travel Document & Permitting Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Nationality *</label>
                  <input
                    type="text"
                    name="nationality"
                    required
                    placeholder="e.g. Ethiopian, Canadian"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Passport / National ID *</label>
                  <input
                    type="text"
                    name="passport"
                    required
                    placeholder="ID or Passport Number"
                    value={formData.passport}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Safety & Emergency */}
            <div>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-4 pb-2 border-b border-stone-200">
                3. Safety & Emergency Contact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Emergency Contact Person</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    placeholder="Contact Name"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Emergency Phone</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    placeholder="+251 ..."
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Dietary / Alpine Medical Notes</label>
                  <input
                    type="text"
                    name="allergies"
                    placeholder="e.g. Vegetarian, None"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200">
              <p className="text-xs text-stone-500">
                Already registered?{' '}
                <Link to="/login" className="text-amber-600 font-bold hover:underline">
                  Sign in to your account
                </Link>
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                {loading ? 'Creating Profile...' : 'Complete Registration'}
              </button>
            </div>
          </form>

        </div>
      </main>
    </div>
  );
};

export default RegistrationForm;
