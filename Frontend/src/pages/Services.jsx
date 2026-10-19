import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';

import tourGuidesImage from '../assets/images/semen/trekkingSemen.jpg';
import travelPackagesImage from '../assets/images/Denakil/denakil.jpg';
import hotelBookingsImage from '../assets/images/semen/hotelSemen.jpg';
import transportationImage from '../assets/images/backgrounds/EthioFlight.jpg';
import culturalToursImage from '../assets/images/backgrounds/culture1.jpg';
import adventureToursImage from '../assets/images/Bahirdar/bahirdar3.jpg';

const Services = () => {
  const servicesList = [
    {
      num: '01',
      title: 'Accredited Naturalist & Cultural Guides',
      desc: 'Nationally licensed guides with deep expertise in Ethiopian Orthodox history, wildlife biology, anthropology, and indigenous customs.',
      image: tourGuidesImage,
      features: ['Multilingual fluency (EN, FR, DE, IT)', 'First-aid and wilderness certified', 'Direct village introductions'],
    },
    {
      num: '02',
      title: 'Custom Private & Bespoke Itineraries',
      desc: 'Tailor-made expedition planning for solo travelers, families, diplomatic delegations, and specialized birdwatching or research groups.',
      image: travelPackagesImage,
      features: ['Flexible travel pacing', 'Private vehicle dedicated solely to your group', 'Personalized chef for remote camping'],
    },
    {
      num: '03',
      title: 'Boutique Eco-Lodges & Wilderness Camping',
      desc: 'From cliffside luxury retreats like Limalimo Lodge to fully equipped mobile alpine safari camps in Bale and Danakil.',
      image: hotelBookingsImage,
      features: ['High-insulation 4-season alpine tents', 'Locally sourced hot organic meals', 'Warm showers and charging stations'],
    },
    {
      num: '04',
      title: 'Dedicated 4WD Overland Fleet',
      desc: 'Modern, rigorously maintained Toyota Land Cruiser 4x4 vehicles equipped with VHF radios, high-lift jacks, and experienced drivers.',
      image: transportationImage,
      features: ['Full comprehensive vehicle insurance', 'Air conditioning and high clearance', 'Domestic flight connection transfers'],
    },
    {
      num: '05',
      title: 'Living Cultural & Festival Immersion',
      desc: 'Curated access to major Ethiopian sacred celebrations including Timkat in Gondar, Meskel in Addis Ababa, and Gena in Lalibela.',
      image: culturalToursImage,
      features: ['Reserved VIP viewing positions', 'Traditional Buna coffee banquets', 'Etiquette and respectful photography guidance'],
    },
    {
      num: '06',
      title: 'Specialized Adventure & Media Expeditions',
      desc: 'Technical trekking across Mount Ras Dejen (4,550m), geological descents into Erta Ale volcano, and official film crew logistics.',
      image: adventureToursImage,
      features: ['Permit assistance with Ethiopian Wildlife Authority', 'Film & drone equipment clearances', 'Armed national park scout escort'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero Header */}
      <section className="relative w-full py-20 sm:py-28 bg-stone-950 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={adventureToursImage} 
            alt="Travel Expeditions in Ethiopia" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-3">
            Full-Service Expedition Management
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight mb-4 text-balance">
            Comprehensive Expedition Services
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            From remote Afro-alpine logistic support to VIP festival arrangements, our Addis Ababa team manages every detail of your Horn of Africa journey.
          </p>
        </div>
      </section>

      {/* Service Offerings */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((svc) => (
            <div 
              key={svc.num}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 w-full overflow-hidden bg-stone-900">
                <img 
                  src={svc.image} 
                  alt={svc.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-amber-400">
                  {svc.num}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2 group-hover:text-amber-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {svc.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-stone-100">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                        <i className="fas fa-check text-amber-600 text-[10px]"></i>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100">
                  <Link
                    to="/booking"
                    className="w-full py-2 px-3 bg-stone-900 hover:bg-amber-600 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Service</span>
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Inquiry Callout */}
        <div className="mt-16 bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider block mb-1">
              Have Specialized Requirements?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-['Outfit']">
              Diplomatic Missions, Research Grants & Film Productions
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-xl">
              We handle complex countrywide permits, security escorts, customs clearances, and remote satellite communications across all regional states.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              Contact Operations Desk
            </Link>
            <Link
              to="/ask"
              className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded-xl transition-all whitespace-nowrap"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
