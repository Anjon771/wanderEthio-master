import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';

import AboutImage from '../assets/images/backgrounds/newBakcgrounds/locatoinOfETO.jpg';
import MissionImage from '../assets/images/team/addisEthio.jpg';
import TeamImage from '../assets/images/backgrounds/makeTrip.jpg';
import ServiceImage from '../assets/images/backgrounds/Flight.jpg';
import ValuesImage from '../assets/images/backgrounds/hiking3.jpg';
import PartnersImage from '../assets/images/backgrounds/helping2.jpg';
import SemenPanorama from '../assets/images/semen/semen5.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero Banner */}
      <section className="relative w-full py-24 sm:py-32 bg-stone-950 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={SemenPanorama} 
            alt="Ethiopian Highlands" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            <span>About Wander Ethio</span>
            <span aria-hidden="true">·</span>
            <span>Ethical Tourism Collective</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4 text-balance">
            Stewards of Ethiopia’s Living Heritage
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Founded in Addis Ababa by seasoned expedition leaders, cultural historians, and wildlife biologists dedicated to authentic Horn of Africa travel.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Story & Origins */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
              Our Origins
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] tracking-tight">
              Bridging Millennia of History with Responsible Modern Exploration
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Wander Ethio was established to share the profound, untold stories of Ethiopia with travelers seeking depth rather than mass tourism. We work hand-in-hand with the Ethiopian Tourism Organization and regional cultural bureaus across Amhara, Tigray, Oromia, and Southern Nations.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Our expeditions prioritize fair-wage local employment: we employ native park scouts from Simien villages, Hamer and Mursi cultural facilitators in the Omo, and certified church historians in Lalibela and Gondar.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-6 text-xs text-stone-700 font-medium border-t border-stone-200">
              <div className="flex items-center gap-2">
                <i className="fas fa-certificate text-amber-600"></i>
                <span>Ministry of Tourism Licensed #ET-TO-4921</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-leaf text-emerald-600"></i>
                <span>100% Leave-No-Trace Alpine Certified</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900 aspect-4/3">
              <img 
                src={AboutImage} 
                alt="Wander Ethio Headquarters Addis Ababa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs text-white">
                <p className="font-bold">Headquarters & Expedition Hub</p>
                <p className="text-stone-300">Churchill Avenue, Post Office Square, Addis Ababa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars Bento */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-2">
              Our Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit']">
              The Four Commitments of Every Expedition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg mb-4">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">Community Direct Benefit</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Over 70% of tour expedition fees remain directly within the host communities, supporting local village schools, eco-guides, and community muleteers.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg mb-4">
                <i className="fas fa-seedling"></i>
              </div>
              <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">Wildlife Conservation</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Active partners with the Ethiopian Wildlife Conservation Authority (EWCA) in protecting the habitats of the Walia Ibex, Gelada, and Ethiopian Wolf.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">Rigorous Safety Logistics</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Satellite phone communication on remote alpine treks, dedicated emergency medical evacuation protocols, and customized 4WD Toyota Land Cruisers.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg mb-4">
                <i className="fas fa-landmark"></i>
              </div>
              <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">Cultural Integrity</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We strictly ban intrusive tourist behaviors. Visits to sacred monasteries and tribal villages observe strict local cultural etiquette and consent.
              </p>
            </div>

          </div>
        </section>

        {/* Expedition Team & Leadership */}
        <section className="bg-stone-900 text-white rounded-3xl p-8 sm:p-14 border border-stone-800">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
              Our Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              Led by Accredited Local Naturalists & Historians
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Every lead guide holds national accreditation, wilderness first-aid credentials, and multilingual fluency in English, Amharic, Oromo, and regional languages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/60">
              <div className="w-16 h-16 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl mb-4 font-['Outfit']">
                HK
              </div>
              <h4 className="text-base font-bold text-white font-['Outfit']">Hailemeskel Kindie</h4>
              <p className="text-xs text-amber-400 font-medium mb-2">Head of Expeditions & Logistics</p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Over 14 years leading high-altitude alpine traverses across Simien and Bale mountains. Certified wilderness rescue specialist.
              </p>
            </div>

            <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/60">
              <div className="w-16 h-16 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xl mb-4 font-['Outfit']">
                BT
              </div>
              <h4 className="text-base font-bold text-white font-['Outfit']">Birhanu Tadesse</h4>
              <p className="text-xs text-amber-400 font-medium mb-2">Senior Cultural Historian</p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Specialist in Ge'ez ancient manuscripts and 12th-century Lalibela sacred architecture. Former curator at the National Museum in Addis Ababa.
              </p>
            </div>

            <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/60">
              <div className="w-16 h-16 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-xl mb-4 font-['Outfit']">
                SE
              </div>
              <h4 className="text-base font-bold text-white font-['Outfit']">Selamawit Endale</h4>
              <p className="text-xs text-amber-400 font-medium mb-2">Director of Traveler Experience</p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Coordinates bespoke travel itineraries, diplomatic travel, and international photography teams with tailored private logistics.
              </p>
            </div>
          </div>
        </section>

        {/* Institutional Call to Action */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-['Outfit'] mb-3">
            Ready to Plan Your Journey to Ethiopia?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-xl mx-auto leading-relaxed">
            Whether you are planning a solo trek across Mount Ras Dejen, an Orthodox spiritual pilgrimage, or a family cultural journey, our expedition team is here to assist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/booking"
              className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-md transition-all"
            >
              Book an Expedition
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white border border-stone-300 hover:bg-stone-50 text-stone-900 font-bold text-xs rounded-xl transition-all"
            >
              Contact Our Advisors
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AboutPage;
