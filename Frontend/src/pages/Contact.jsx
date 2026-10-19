import React, { useState } from 'react';
import axios from 'axios';
import FixedHeader from '../Components/FIxedHeader';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Expedition Planning',
    message: '',
  });

  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ message: '', type: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 201) {
        setFeedback({
          message: 'Thank you! Your inquiry has been routed to our expedition operations team. We respond within 12 business hours.',
          type: 'success',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Expedition Planning',
          message: '',
        });
      } else {
        setFeedback({ message: 'Submission failed. Please reach out via phone or email.', type: 'error' });
      }
    } catch (error) {
      console.error('Contact error:', error);
      const msg = error.response?.data?.message || 'Sorry, transmission failed. Please email us directly.';
      setFeedback({ message: msg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
            Connect With Our Team
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
            Contact Expedition Operations
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
            Directly reach our certified trip planners, permit specialists, and field dispatch desks in Addis Ababa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details & Regional Stations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-stone-900 font-['Outfit'] pb-3 border-b border-stone-100">
                Central Operations Hub
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Addis Ababa Headquarters</h4>
                    <p className="text-stone-500 mt-0.5">
                      Churchill Avenue, Post Office Square, 4th Floor<br />
                      P.O. Box 2183, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Direct Telephone Desk</h4>
                    <p className="text-stone-500 mt-0.5">
                      +251 956 319 463 (Mobile & WhatsApp)<br />
                      +251 115 517 999 (Landline Central)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Official Correspondence</h4>
                    <p className="text-stone-500 mt-0.5">
                      expeditions@wanderethio.org<br />
                      info@ethiopiantourism.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Operating Hours (East Africa Time)</h4>
                    <p className="text-stone-500 mt-0.5">
                      Monday - Friday: 08:30 – 18:00 EAT<br />
                      Saturday: 09:00 – 14:00 EAT<br />
                      24/7 Satellite Emergency Duty for Active Treks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Field Stations */}
            <div className="bg-stone-900 text-white rounded-3xl border border-stone-800 p-8 shadow-sm">
              <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
                Regional Dispatch Stations
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-stone-800">
                  <span className="font-bold text-stone-200">Lalibela Field Desk</span>
                  <span className="text-stone-400">Adjacent Roha Hotel</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-800">
                  <span className="font-bold text-stone-200">Simien Mountains (Debark)</span>
                  <span className="text-stone-400">Park Scout HQ</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-800">
                  <span className="font-bold text-stone-200">Omo Valley (Jinka)</span>
                  <span className="text-stone-400">Museum Compound</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm">
            <h3 className="text-lg font-bold text-stone-900 font-['Outfit'] mb-2">
              Send an Official Inquiry
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Fill in your expedition preferences and our coordinators will prepare a bespoke itinerary proposal.
            </p>

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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 or +44 ..."
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Topic / Circuit
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  >
                    <option>Expedition Planning & Pricing</option>
                    <option>Northern Historic Circuit</option>
                    <option>Simien or Bale Alpine Trek</option>
                    <option>Omo Valley Cultural Tour</option>
                    <option>Danakil & Erta Ale Lava Trip</option>
                    <option>Filming or Academic Permit</option>
                    <option>Other Questions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Message Details * (Travel dates, group size, specific interests)
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us about your proposed dates, group size, and must-see destinations..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Transmitting Message...' : 'Submit Inquiry'}</span>
                  <i className="fas fa-paper-plane text-xs"></i>
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}

export default ContactPage;
