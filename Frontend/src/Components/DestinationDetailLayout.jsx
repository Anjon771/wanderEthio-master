// src/Components/DestinationDetailLayout.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FixedHeader from './FIxedHeader';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Compass, 
  Mountain, 
  ShieldCheck, 
  Camera, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Utensils, 
  Bed, 
  Sun, 
  Info, 
  X,
  ChevronLeft
} from 'lucide-react';

export default function DestinationDetailLayout({ destination }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!destination) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center">
        <FixedHeader />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-stone-800">Destination Not Found</h2>
          <Link to="/" className="mt-4 inline-block text-amber-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const toggleFaq = (idx) => {
    setOpenFaq(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setSelectedImage(destination.galleryImages[idx]);
  };

  const nextLightboxImage = () => {
    const nextIdx = (lightboxIndex + 1) % destination.galleryImages.length;
    setLightboxIndex(nextIdx);
    setSelectedImage(destination.galleryImages[nextIdx]);
  };

  const prevLightboxImage = () => {
    const prevIdx = (lightboxIndex - 1 + destination.galleryImages.length) % destination.galleryImages.length;
    setLightboxIndex(prevIdx);
    setSelectedImage(destination.galleryImages[prevIdx]);
  };

  const handleBookNow = () => {
    navigate(`/booking-form?destination=${encodeURIComponent(destination.name)}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* 1. Immersive Hero Section */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-end pb-16 pt-28 bg-stone-950 overflow-hidden">
        {/* Background Image with layered gradient scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src={destination.heroImage} 
            alt={destination.name}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb & Metadata Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-3 tracking-wide">
            <Link to="/" className="text-stone-300 hover:text-white transition-colors">Home</Link>
            <span className="text-stone-500">/</span>
            <span className="text-stone-300">Destinations</span>
            <span className="text-stone-500">/</span>
            <span className="text-amber-400 font-semibold">{destination.name}</span>
            <span className="text-stone-600 hidden sm:inline">·</span>
            <span className="text-stone-300 hidden sm:inline">{destination.circuit}</span>
            {destination.unesco && (
              <>
                <span className="text-stone-600 hidden md:inline">·</span>
                <span className="text-amber-300 hidden md:inline">{destination.unesco}</span>
              </>
            )}
          </div>

          {/* Titles */}
          <div className="max-w-4xl">
            <div className="flex items-baseline gap-3 mb-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-['Outfit'] tracking-tight">
                {destination.name}
              </h1>
              {destination.amharicName && (
                <span className="text-xl sm:text-2xl font-normal text-amber-400/90 font-serif">
                  ({destination.amharicName})
                </span>
              )}
            </div>

            <p className="text-base sm:text-xl text-stone-200 font-light leading-relaxed mb-8 max-w-3xl">
              {destination.tagline}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={handleBookNow}
                className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm rounded-xl shadow-lg hover:shadow-amber-600/30 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>Book This Expedition</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href="#highlights"
                className="px-6 py-3.5 bg-stone-900/80 hover:bg-stone-800 text-stone-100 font-medium text-sm rounded-xl border border-stone-700/80 backdrop-blur-md transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Explore Sights</span>
              </a>

              <div className="hidden sm:flex items-center gap-2 ml-auto text-xs text-stone-300 bg-stone-900/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-stone-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Official Licensed Heritage Circuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics & Fast Facts Strip (Full-width row below hero) */}
      <section className="bg-stone-900 text-stone-200 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <Mountain className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Elevation</span>
                <span className="font-semibold text-white">{destination.elevation}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Best Season</span>
                <span className="font-semibold text-white truncate max-w-[170px] block">{destination.bestSeason}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Recommended</span>
                <span className="font-semibold text-white">{destination.recommendedDays}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Circuit</span>
                <span className="font-semibold text-white truncate max-w-[150px] block">{destination.circuit}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Base Daily Rate</span>
                <span className="font-bold text-amber-400 font-mono tabular-nums">
                  {destination.basePriceETB.toLocaleString()} ETB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sticky Sub-Navigation Tabs */}
      <nav className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 sm:gap-4 overflow-x-auto py-2.5 no-scrollbar text-xs sm:text-sm font-medium">
            {[
              { id: 'overview', label: 'Overview & History' },
              { id: 'highlights', label: 'Marquee Highlights' },
              { id: 'gallery', label: 'Photo Archive' },
              { id: 'hospitality', label: 'Hotels & Dining' },
              { id: 'logistics', label: 'Traveler Logistics' },
              { id: 'faqs', label: 'Questions & Answers' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  const el = document.getElementById(tab.id);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 130;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}

            <button
              onClick={handleBookNow}
              className="ml-auto hidden md:flex items-center gap-2 px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Book Expedition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* 4. Main Body Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Section A: Overview & Historical Narrative */}
        <section id="overview" className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
              Historical & Cultural Significance
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
              An Enduring Monument in the Horn of Africa
            </h2>

            <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4 text-sm sm:text-base">
              {destination.overview.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Travel Experience Quote */}
            <div className="p-6 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-stone-800 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block">
                Expedition Leader Field Note
              </span>
              <p className="text-sm italic text-stone-700">
                "{destination.tagline} Visiting here reveals centuries of unbroken traditions and spiritual reverence that leaves every traveler humbled."
              </p>
              <div className="text-xs text-stone-500 font-medium">
                — Wander Ethio Senior Naturalist & Heritage Team
              </div>
            </div>
          </div>

          {/* Quick Overview Sidebar Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-stone-900 font-['Outfit']">
              Expedition Summary
            </h3>
            
            <div className="space-y-3.5 text-xs text-stone-600">
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-400">Location</span>
                <span className="font-medium text-stone-900">{destination.coordinates}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-400">Circuit</span>
                <span className="font-medium text-stone-900">{destination.circuit}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-400">Altitude</span>
                <span className="font-medium text-stone-900">{destination.elevation}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-400">Ideal Timing</span>
                <span className="font-medium text-stone-900">{destination.bestSeason}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-400">Permit Status</span>
                <span className="font-medium text-emerald-600">Included in Package</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleBookNow}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Reserve Expedition Permit</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </section>

        {/* Section B: Marquee Highlights & Sights */}
        <section id="highlights" className="scroll-mt-36 space-y-8">
          <div>
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
              Top Experiences
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
              Marquee Sights & Protected Monuments
            </h2>
            <p className="text-sm text-stone-500 max-w-2xl mt-1">
              Carefully curated cultural, geological, and historical landmarks included in our official itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destination.highlights.map((highlight, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-400 font-mono text-xs px-2.5 py-1 rounded-md font-semibold">
                    0{idx + 1}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-['Outfit'] mb-2 group-hover:text-amber-600 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {highlight.desc}
                    </p>
                  </div>

                  {highlight.tip && (
                    <div className="pt-3 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-500 bg-stone-50 p-3 rounded-lg">
                      <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Explorer Tip:</strong> {highlight.tip}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section C: Curated Photo Gallery */}
        <section id="gallery" className="scroll-mt-36 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
                Visual Archive
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
                Authentic Photography Showcase
              </h2>
            </div>
            <p className="text-xs text-stone-500">
              Click any image to expand high-resolution view & archival notes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {destination.galleryImages.map((imgObj, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 cursor-pointer border border-stone-200"
              >
                <img 
                  src={imgObj.path} 
                  alt={imgObj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/60 transition-colors flex items-end p-3">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs font-semibold leading-tight">{imgObj.title}</p>
                    <span className="text-[10px] text-amber-300 flex items-center gap-1 mt-1">
                      <Camera className="w-3 h-3" /> View Photo
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section D: Accommodations & Local Gastronomy */}
        <section id="hospitality" className="scroll-mt-36 space-y-12">
          {/* Hotels */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
                Hospitality & Lodging
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
                Where to Stay in {destination.name}
              </h2>
              <p className="text-sm text-stone-500 max-w-2xl mt-1">
                From cliffside eco-retreats to dependable heritage hotels inspected for cleanliness, comfort, and local character.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destination.hotels.map((hotel, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                      <span className="font-semibold text-amber-600">{hotel.type}</span>
                      <span className="font-mono">{hotel.price}</span>
                    </div>
                    <h3 className="text-base font-bold text-stone-900 mb-2">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {hotel.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium pt-3 border-t border-stone-100">
                    <Bed className="w-3.5 h-3.5" />
                    <span>Included in Custom Itineraries</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dining */}
          {destination.restaurants && destination.restaurants.length > 0 && (
            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
                  Gastronomy
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-['Outfit']">
                  Curated Local Dining & Coffee Houses
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.restaurants.map((rest, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-stone-900">{rest.name}</h4>
                      <span className="text-xs text-amber-600 font-medium block mb-1">{rest.cuisine}</span>
                      <p className="text-xs text-stone-600 leading-relaxed">{rest.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Section E: Practical Logistics, Climate & Etiquette */}
        <section id="logistics" className="scroll-mt-36 space-y-8">
          <div>
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
              Traveler Essentials
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
              Logistics, Climate & Cultural Etiquette
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Sun className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Climate & Temperatures</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {destination.logistics.climate}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Dress Code & Customs</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {destination.logistics.clothing}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Currency & Banking</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {destination.logistics.currency}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-stone-900">Getting There</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {destination.logistics.transport}
              </p>
            </div>
          </div>
        </section>

        {/* Section F: Interactive FAQ Accordion */}
        <section id="faqs" className="scroll-mt-36 space-y-6">
          <div>
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
              Common Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 max-w-4xl">
            {destination.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-stone-900 hover:text-amber-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq[idx] ? (
                    <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>
                {openFaq[idx] && (
                  <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section G: Direct Expedition Booking Strip */}
        <section className="bg-gradient-to-tr from-stone-950 via-stone-900 to-stone-950 rounded-3xl p-8 sm:p-12 text-white border border-stone-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>Ready for Departure</span>
              <span>·</span>
              <span>10% Member Voucher Eligible</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-white">
              Reserve Your {destination.name} Journey
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
              Every Wander Ethio expedition is fully customizable and backed by dedicated 4WD fleets, licensed naturalists, and certified local guides.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="text-center sm:text-right">
              <span className="text-[11px] text-stone-400 block uppercase tracking-wider">Package from</span>
              <span className="text-xl sm:text-2xl font-bold text-amber-400 font-mono tabular-nums">
                {destination.basePriceETB.toLocaleString()} ETB
              </span>
            </div>

            <button
              onClick={handleBookNow}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm rounded-xl shadow-lg hover:shadow-amber-600/30 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Book Expedition</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
              <img 
                src={selectedImage.path} 
                alt={selectedImage.title}
                className="max-h-[75vh] max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              <button 
                onClick={prevLightboxImage}
                className="absolute left-4 p-2 rounded-full bg-stone-900/80 text-white hover:text-amber-400 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button 
                onClick={nextLightboxImage}
                className="absolute right-4 p-2 rounded-full bg-stone-900/80 text-white hover:text-amber-400 transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center mt-4 text-white max-w-2xl">
              <h4 className="text-base font-bold font-['Outfit']">{selectedImage.title}</h4>
              <p className="text-xs text-stone-300 mt-1">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
