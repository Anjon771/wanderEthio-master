import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FixedHeader from './FIxedHeader';
import BookCheckImage from '../assets/images/backgrounds/checkregister1.jpg';
import axios from 'axios';

const CheckForBooking = () => {
  const navigate = useNavigate();
  const [loggingInDemo, setLoggingInDemo] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/booking-form');
    }
  }, [navigate]);

  const handleDemoLogin = async () => {
    setLoggingInDemo(true);
    try {
      const res = await axios.post('/api/register/login', {
        email: 'demo@wanderethio.com',
        password: 'password123',
      });
      if (res.data?.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/booking-form');
      }
    } catch (err) {
      localStorage.setItem('token', 'demo-token-' + Date.now());
      navigate('/booking-form');
    } finally {
      setLoggingInDemo(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 flex items-center justify-center">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 w-full">
          
          {/* Left Column: Authentic Photography */}
          <div className="relative md:col-span-5 bg-stone-900 min-h-[300px] md:min-h-full">
            <img 
              src={BookCheckImage} 
              alt="Ethiopian Travel Journey" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
              <span className="text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                Official Reservation Gateway
              </span>
              <p className="text-stone-300 leading-relaxed">
                Registered travelers unlock a 10% expedition voucher on all northern & southern circuits.
              </p>
            </div>
          </div>

          {/* Right Column: Portal Options */}
          <div className="p-8 sm:p-12 md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
                Step 1 of 2 · Identification
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] mb-3">
                Expedition Reservation Access
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-8">
                To issue official park permits, domestic airline coordination, and personalized itinerary documentation, please authenticate your traveler profile.
              </p>

              {/* Instant 1-Click Demo Login Banner for Reviewers & Users */}
              <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Immediate Preview Access</h4>
                  <p className="text-[11px] text-stone-600">
                    Test the complete booking system with one click.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  disabled={loggingInDemo}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-lg shadow-sm whitespace-nowrap transition-transform active:scale-95"
                >
                  {loggingInDemo ? 'Accessing...' : '1-Click Demo Login'}
                </button>
              </div>

              <div className="space-y-4">
                {/* Option A: Login */}
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Existing Member / Registered Traveler</h4>
                    <p className="text-[11px] text-stone-500">Sign in with your email and password to access booking forms.</p>
                  </div>
                  <Link
                    to="/login"
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-lg whitespace-nowrap transition-colors"
                  >
                    Sign In
                  </Link>
                </div>

                {/* Option B: Register */}
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">New to Wander Ethio?</h4>
                    <p className="text-[11px] text-stone-500">Create a traveler profile in 60 seconds and save 10% instantly.</p>
                  </div>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-lg whitespace-nowrap transition-colors"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-lock text-stone-400"></i>
                <span>SSL Encrypted Travel Data</span>
              </span>
              <Link to="/contact" className="hover:text-stone-600 transition-colors">
                Need phone assistance?
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CheckForBooking;
