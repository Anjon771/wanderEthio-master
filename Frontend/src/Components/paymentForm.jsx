import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import FixedHeader from './FIxedHeader';

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    date: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0],
    tickets: 1,
    destination: 'Lalibela',
    amount: 15530,
    currency: 'ETB',
    tx_ref: `tx-${Date.now()}`,
  });

  const [totalAmount, setTotalAmount] = useState(15530);
  const [discount, setDiscount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const ticketPrices = {
    'Lalibela': 15530,
    'Semen Mountains': 10822,
    'Gondar': 12335,
    'Axum': 10003,
    'Bahidar': 13593,
    'Omo': 18650,
    'Bale': 14430,
    'Harar': 8500,
    'Addis Ababa': 8000,
    'Awash NP': 8643,
    'Debre Libanos': 5000,
    'Debre Damo': 6500,
  };

  useEffect(() => {
    calculateTotal();
  }, [formData.tickets, formData.destination, discount]);

  const calculateTotal = () => {
    const price = ticketPrices[formData.destination] || 10000;
    const discountedPrice = price * (1 - discount);
    const finalTotal = Math.round(discountedPrice * formData.tickets);
    setTotalAmount(finalTotal);
    setFormData(prev => ({ ...prev, amount: finalTotal }));
  };

  const checkRegistration = async (email) => {
    if (!email || !email.includes('@')) return;
    try {
      const response = await axios.post('/api/register/check', { email });
      if (response.data && response.data.registered) {
        setDiscount(0.1);
        setFeedback({ message: 'Welcome back! 10% registered traveler discount applied.', type: 'info' });
      } else {
        setDiscount(0);
      }
    } catch (error) {
      console.warn('Error checking registration:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      checkRegistration(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback({ message: '', type: '' });

    try {
      const tx_ref = `tx-${Date.now()}`;
      const payload = { ...formData, tx_ref };

      // 1. Save booking to backend
      const bookingResponse = await axios.post('/api/bookings', payload);

      if (bookingResponse.status === 201) {
        // 2. Initialize payment with backend
        const paymentResponse = await axios.post('/api/create-payment', payload);

        if (paymentResponse.data?.data?.checkout_url) {
          // If in test/simulation, redirect to payment success
          window.location.href = paymentResponse.data.data.checkout_url;
        } else {
          setBookingSuccess({
            reference: tx_ref,
            destination: formData.destination,
            name: `${formData.first_name} ${formData.last_name}`,
            amount: totalAmount,
            date: formData.date,
          });
        }
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setFeedback({ 
        message: 'Could not complete online booking. Please verify your connection or contact our Addis Ababa desk.', 
        type: 'error' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
            Expedition Reservations
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
            Official Tour & Permit Booking
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Secure all-inclusive tour arrangements, certified national park scouts, and regional permits.
          </p>
        </div>

        {bookingSuccess ? (
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-xl text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto mb-6">
              <i className="fas fa-check"></i>
            </div>
            <h2 className="text-2xl font-extrabold text-stone-900 font-['Outfit'] mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-sm text-stone-600 mb-6">
              Thank you, <strong>{bookingSuccess.name}</strong>. Your expedition reservation for <strong>{bookingSuccess.destination}</strong> has been secured.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 text-left text-xs space-y-2.5 mb-8">
              <div className="flex justify-between">
                <span className="text-stone-500">Booking Reference:</span>
                <span className="font-mono font-bold text-stone-900">{bookingSuccess.reference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Departure Date:</span>
                <span className="font-medium text-stone-900">{bookingSuccess.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Total Settled:</span>
                <span className="font-mono font-bold text-amber-600 text-sm">{bookingSuccess.amount.toLocaleString()} ETB</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Link
                to="/"
                className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl transition-all"
              >
                Return to Home
              </Link>
              <button
                onClick={() => setBookingSuccess(null)}
                className="px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded-xl transition-all"
              >
                Make Another Booking
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-sm">
              {feedback.message && (
                <div className={`p-4 mb-6 rounded-xl text-xs flex items-center gap-2 ${
                  feedback.type === 'info' 
                    ? 'bg-amber-50 border border-amber-200 text-amber-900' 
                    : 'bg-rose-50 border border-rose-200 text-rose-900'
                }`}>
                  <i className={`fas ${feedback.type === 'info' ? 'fa-info-circle text-amber-600' : 'fa-exclamation-circle text-rose-600'}`}></i>
                  <span>{feedback.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      placeholder="e.g. Dawit"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      placeholder="e.g. Tadesse"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Email Address * (Enter registered email for 10% discount)
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="traveler@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Departure Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Number of Travelers (1-10) *
                    </label>
                    <input
                      type="number"
                      name="tickets"
                      required
                      min="1"
                      max="10"
                      value={formData.tickets}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Select Expedition Destination *
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                  >
                    {Object.keys(ticketPrices).map(dest => (
                      <option key={dest} value={dest}>
                        {dest} — {ticketPrices[dest].toLocaleString()} ETB / traveler
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-extrabold text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>{submitting ? 'Confirming Expedition...' : 'Confirm & Proceed to Payment'}</span>
                    <i className="fas fa-arrow-right text-xs"></i>
                  </button>
                </div>
              </form>
            </div>

            {/* Breakdown Column */}
            <div className="lg:col-span-5 bg-stone-900 text-white rounded-3xl border border-stone-800 p-8 shadow-xl space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4 pb-2 border-b border-stone-800">
                  Reservation Breakdown
                </h3>
                
                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Destination:</span>
                    <span className="font-semibold text-white">{formData.destination}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-stone-400">Rate per Traveler:</span>
                    <span className="font-mono text-stone-200 tabular-nums">
                      {(ticketPrices[formData.destination] || 0).toLocaleString()} ETB
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-stone-400">Travelers Count:</span>
                    <span className="font-mono text-stone-200 tabular-nums">{formData.tickets}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold py-1 border-t border-stone-800">
                      <span>Registered Member Discount:</span>
                      <span className="font-mono tabular-nums">-10%</span>
                    </div>
                  )}

                  <div className="flex justify-between text-xs text-stone-400 pt-1">
                    <span>Includes:</span>
                    <span className="text-stone-300 text-right">Scout Escort, 4x4, Park Fees</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-800">
                <div className="text-xs text-stone-400 mb-1">Total Payable Amount</div>
                <div className="text-3xl font-extrabold text-amber-400 font-mono tabular-nums mb-4">
                  {totalAmount.toLocaleString()} <span className="text-base text-stone-300 font-sans">ETB</span>
                </div>
                
                <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/60 text-[11px] text-stone-400 space-y-1.5">
                  <p className="flex items-center gap-1.5">
                    <i className="fas fa-check-circle text-amber-500"></i>
                    <span>Official Ethiopian Tourism Organization Operator</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <i className="fas fa-undo text-amber-500"></i>
                    <span>Full refund if cancelled 14 days in advance</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
};

export default BookingForm;
