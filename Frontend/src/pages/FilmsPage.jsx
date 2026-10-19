// src/pages/FilmsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { Film, Video, Award, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

import MeskelSquare from '../assets/images/AddisAbaba/meskelSquare.jpg';
import LalibelaFilm from '../assets/images/Lalibela/beteGiyorgis.jpg';
import SimienFilm from '../assets/images/semen/semen5.jpg';

export default function FilmsPage() {
  const landmarkFilms = [
    {
      title: 'Harvest: 3,000 Years (Mirt Sost Shi Amit)',
      director: 'Haile Gerima',
      year: '1976',
      accolades: 'Locarno International Film Festival Grand Prize',
      desc: 'A groundbreaking masterwork of Third Cinema filmed entirely in Amharic on location in rural post-feudal Ethiopia. Portrays peasant life, landlord exploitation, and revolutionary resilience through rich cinematic poetry.',
    },
    {
      title: 'Lamb',
      director: 'Yared Zeleke',
      year: '2015',
      accolades: 'First Ethiopian Official Selection at Cannes Film Festival (Un Certain Regard)',
      desc: 'A touching, lyrical drama set in the breathtaking misty highlands of northern Ethiopia. Follows a young boy and his loyal rust-colored sheep as they navigate loss, family, and agricultural change.',
    },
    {
      title: 'Difret',
      director: 'Zeresenay Berhane Mehari',
      year: '2014',
      accolades: 'Sundance Film Festival Audience Award & Berlinale Panorama Winner',
      desc: 'Based on the true story of trailblazing lawyer Meaza Ashenafi defending a 14-year-old girl who shot her abductor, transforming legal protections against child marriage across the nation. Executive produced by Angelina Jolie.',
    },
    {
      title: 'Sankofa',
      director: 'Haile Gerima',
      year: '1993',
      accolades: 'Berlinale Golden Bear Nominee',
      desc: 'A sweeping cinematic journey examining the African diaspora, spiritual resistance, and historical memory, recognized worldwide as one of the most vital works of independent Pan-African cinema.',
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="relative w-full py-24 sm:py-32 bg-stone-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={LalibelaFilm} 
            alt="Ethiopian Cinema & Landscapes" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Visual Arts & Cinema</span>
            <span>·</span>
            <span>Haile Gerima to Contemporary Cannes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            Ethiopian Cinema & Film Production
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            From classic revolutionary Third Cinema and Cannes selections to official documentary and media production logistics across the country.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-1">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
            Cinematic Masterworks
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900">
            Landmark Ethiopian Feature Films
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Stories forged on the ancient soil of the Horn of Africa that have captured audiences at Cannes, Sundance, Berlin, and Venice.
          </p>
        </div>

        {/* Film Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {landmarkFilms.map((film, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-amber-600 font-semibold mb-2">
                  <span>{film.year}</span>
                  <span className="flex items-center gap-1 text-stone-400">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    {film.accolades}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-['Outfit'] text-stone-900">
                  {film.title}
                </h3>
                <span className="text-xs text-stone-500 block mb-3">
                  Directed by {film.director}
                </span>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {film.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5 text-amber-600" />
                  Preserved in National Archives
                </span>
                <span className="font-medium text-stone-700">Archival Classic</span>
              </div>
            </div>
          ))}
        </div>

        {/* Media & Documentary Production Services */}
        <section className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Video className="w-4 h-4" />
              <span>Fixing & Location Scouting Services</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-white">
              Full-Scale Documentary & Media Logistics
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Wander Ethio provides comprehensive ground fixing and production assistance for international film crews, National Geographic productions, and broadcast journalists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-800 text-xs">
            <div className="p-4 bg-stone-950/60 rounded-xl border border-stone-800 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">Permit Assistance</span>
              <p className="text-stone-400">Government filming approvals, ATA Carnet customs clearance, and drone flight authorizations.</p>
            </div>
            <div className="p-4 bg-stone-950/60 rounded-xl border border-stone-800 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">Remote Expedition 4WD</span>
              <p className="text-stone-400">Off-road Toyota Land Cruisers with power inverters for battery charging in Danakil and Simien.</p>
            </div>
            <div className="p-4 bg-stone-950/60 rounded-xl border border-stone-800 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">Bilingual Fixers</span>
              <p className="text-stone-400">Seasoned production fixers fluent in Amharic, Oromo, Tigrinya, Afar, and regional dialects.</p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded-xl transition-colors"
            >
              <span>Inquire for Film Logistics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
