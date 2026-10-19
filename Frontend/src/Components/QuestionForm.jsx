import React, { useState } from 'react';
import axios from 'axios';
import FixedHeader from './FIxedHeader';

const QuestionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      q: 'Do international travelers need a visa before arriving in Ethiopia?',
      a: 'Most nationalities can easily obtain an official e-Visa online via www.evisa.gov.et prior to departure, or get a tourist visa upon arrival at Addis Ababa Bole International Airport (ADD). Passport validity must exceed 6 months.',
    },
    {
      q: 'How should travelers prepare for the altitude in Simien and Bale?',
      a: 'Addis Ababa sits at 2,355m, which provides a natural initial acclimatization. For treks ascending above 3,500m in Simien and Bale, we recommend spending 1-2 days at moderate elevation, staying hydrated, and packing thermal alpine layers.',
    },
    {
      q: 'What is the best season to visit the historic rock churches and highlands?',
      a: 'October through March brings crisp, dry, sunny days and lush green landscapes following the rainy season. This period also coincides with the legendary religious celebrations: Gena (Christmas in Lalibela) and Timkat (Epiphany in Gondar).',
    },
    {
      q: 'Is it safe to travel through the Omo Valley and southern regions?',
      a: 'Yes. All Wander Ethio expeditions are accompanied by certified bilingual local facilitators and licensed 4x4 drivers. We maintain close contact with regional elders and park rangers to ensure respectful and secure cultural interactions.',
    },
    {
      q: 'What currency is used and how do payments work during the tour?',
      a: 'The local currency is the Ethiopian Birr (ETB). Major hotels in Addis Ababa accept international cards, but cash in ETB is necessary for village markets and tipping. We assist travelers with official bank exchange upon arrival.',
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback({ message: '', type: '' });
    try {
      const response = await axios.post('/api/questions', {
        name,
        email,
        phone,
        question,
      });
      if (response.status === 201) {
        setFeedback({
          message: 'Question submitted successfully! Our travel specialist will email you an answer within 12 hours.',
          type: 'success',
        });
        setName('');
        setEmail('');
        setPhone('');
        setQuestion('');
      } else {
        setFeedback({ message: 'Submission failed. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting question:', error);
      const msg = error.response?.data?.message || 'Sorry, submission failed. Please try again.';
      setFeedback({ message: msg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
            Traveler Inquiries & Advice
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
            Frequently Asked Questions & Expert Inquiries
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Essential preparation for your Horn of Africa expedition. Have a specific question? Ask our field guides directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* FAQ Accordion Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-2">
              Common Expedition Inquiries
            </h3>

            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-stone-900 font-['Outfit']">
                      {faq.q}
                    </span>
                    <i
                      className={`fas fa-chevron-down text-stone-400 text-xs transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    ></i>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Ask Form Column */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-sm">
            <h3 className="text-lg font-bold text-stone-900 font-['Outfit'] mb-1">
              Ask an Expedition Specialist
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Our Addis Ababa advisory team will respond with personalized guidance.
            </p>

            {feedback.message && (
              <div
                className={`p-4 mb-6 rounded-xl text-xs flex items-center gap-2 ${
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
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Thomas Wright"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="thomas@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Your Specific Question *
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="Ask about road conditions, custom permits, festival dates, or difficulty levels..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{loading ? 'Submitting Question...' : 'Submit Question to Guide'}</span>
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default QuestionForm;
