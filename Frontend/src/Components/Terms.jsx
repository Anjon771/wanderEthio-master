// src/Components/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from './FIxedHeader';
import { ShieldCheck, FileText, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Header Banner */}
      <section className="bg-stone-950 py-16 text-white text-center border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Policy & Legal Framework</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight mb-3">
            Terms of Service & Expedition Compact
          </h1>
          <p className="text-sm text-stone-400 max-w-xl mx-auto">
            Last Updated: January 2026 · Wander Ethio Tourism & Wilderness Expeditions
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-12">
        
        {/* Intro Card */}
        <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Welcome to <strong>Wander Ethio</strong>. By accessing our platform, booking tours, or utilizing our expedition advisory services, you enter into a binding agreement governed by the commercial laws of the Federal Democratic Republic of Ethiopia and international travel standards.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-['Outfit'] text-stone-900 flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-stone-900 text-amber-400 text-xs flex items-center justify-center font-bold">1</span>
            Acceptance of Terms
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            By browsing our website, registering an account, or purchasing tour packages, you agree to comply with all stated terms and conditions. If you disagree with any portion of these provisions, you should discontinue using our services immediately.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-['Outfit'] text-stone-900 flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-stone-900 text-amber-400 text-xs flex items-center justify-center font-bold">2</span>
            Expedition Reservations & Payments
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            All expedition bookings are subject to confirmation following availability of national park permits, licensed guides, and specialized vehicle logistics.
          </p>
          <ul className="space-y-2 text-sm text-stone-600 list-disc pl-5">
            <li><strong>Deposit & Balance:</strong> A minimum 30% advance deposit confirms your expedition dates. The remaining balance is payable 14 days prior to departure.</li>
            <li><strong>Pricing Currency:</strong> Rates are quoted in Ethiopian Birr (ETB) and equivalent USD/EUR. Foreign exchange conversions adhere to the National Bank of Ethiopia daily official fixing.</li>
            <li><strong>Permit Fees:</strong> National park entrance, UNESCO heritage passes, and scout escort fees are non-refundable once issued by government regional authorities.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-['Outfit'] text-stone-900 flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-stone-900 text-amber-400 text-xs flex items-center justify-center font-bold">3</span>
            Cancellations & Refunds
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Expedition itineraries require advance coordination of remote camps, vehicles, and community leaders. Our cancellation policy is structured as follows:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <span className="text-xs font-bold text-emerald-600 uppercase block mb-1">30+ Days Prior</span>
              <p className="text-xs text-stone-600 font-medium">90% refund of refundable tour fees (excluding issued permits).</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <span className="text-xs font-bold text-amber-600 uppercase block mb-1">15 – 29 Days Prior</span>
              <p className="text-xs text-stone-600 font-medium">50% refund of land package rates.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <span className="text-xs font-bold text-rose-600 uppercase block mb-1">Under 14 Days</span>
              <p className="text-xs text-stone-600 font-medium">Non-refundable due to pre-committed vehicle and scout allocations.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-['Outfit'] text-stone-900 flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-stone-900 text-amber-400 text-xs flex items-center justify-center font-bold">4</span>
            Cultural Heritage & Ethical Code
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Travelers participating in Wander Ethio tours are guests of ancient living cultures. We enforce a zero-tolerance policy against unethical tourist conduct:
          </p>
          <ul className="space-y-2 text-sm text-stone-600 list-disc pl-5">
            <li><strong>Sacred Spaces:</strong> Modest attire (covering shoulders and knees) and removal of shoes are strictly observed in all Ethiopian Orthodox churches and Harari mosques.</li>
            <li><strong>Respectful Photography:</strong> Always seek consent before photographing indigenous peoples in the Omo Valley or highland elders. Our guides facilitate respectful remuneration directly through community elders.</li>
            <li><strong>Leave No Trace:</strong> In national parks (Simien, Bale, Awash), all non-biodegradable waste must be packed out. Harassment of endemic wildlife (Gelada baboons, Ethiopian wolves) is prohibited.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-['Outfit'] text-stone-900 flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-stone-900 text-amber-400 text-xs flex items-center justify-center font-bold">5</span>
            Health, Altitude & Insurance
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Travel in high-altitude environments (Simien up to 4,550m, Bale up to 4,377m) and desert extremes (Danakil Depression) requires reasonable physical fitness. Travelers must hold valid comprehensive international travel and medical evacuation insurance prior to departure.
          </p>
        </section>

        <div className="pt-8 border-t border-stone-200 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            to="/booking"
            className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl transition-all shadow-sm"
          >
            Proceed to Booking
          </Link>
        </div>
      </main>
    </div>
  );
}
