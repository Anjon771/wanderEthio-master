// src/pages/culturalTours.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { Sparkles, Calendar, Heart, ShieldCheck, ArrowRight, Compass, Info } from 'lucide-react';

import TimkatImage from '../assets/images/Gondar/fasilidesBath1.jpg';
import LalibelaImage from '../assets/images/Lalibela/lalibela1.jpg';
import BunaCulture from '../assets/images/Dressing/cultural-event.jpg';
import OmoCulture from '../assets/images/omo/omo6.jpg';
import HararHyena from '../assets/images/Harar/harar3.jpg';
import AxumStMary from '../assets/images/Axum/churchOfStMary.jpg';

export default function CulturalTourPage() {
  const culturalJourneys = [
    {
      title: 'Timkat (Ethiopian Epiphany) in Gondar',
      timing: 'January 19 (Annually)',
      location: 'Gondar — Fasilides Bathing Pavilion',
      image: TimkatImage,
      desc: 'The most photogenic festival in Africa. The holy Tabot (replica of the Ark of the Covenant) is carried in grand procession wrapped in velvet and gold cloth to Fasilides’ Bath. At dawn, after all-night chants, the water is blessed and thousands leap in renewal.',
      dest: 'Gondar'
    },
    {
      title: 'Gena (Ethiopian Christmas) in Lalibela',
      timing: 'January 7 (Julian Calendar)',
      location: 'Lalibela — Rock-Hewn Basilicas',
      image: LalibelaImage,
      desc: 'Tens of thousands of pilgrims cloaked in pure white cotton shamma shawls walk for weeks across mountain ranges to sing ancient polyphonic Ge’ez chants along the edges of the 12th-century rock churches under starry night skies.',
      dest: 'Lalibela'
    },
    {
      title: 'The Sacred Buna (Coffee) Ceremony',
      timing: 'Daily Cultural Immersion',
      location: 'Every Traditional Ethiopian Household',
      image: BunaCulture,
      desc: 'Coffee was born in Ethiopia. Experience the sacred three-round coffee ritual (Abol, Tona, Baraka) prepared over glowing charcoal embers, surrounded by aromatic frankincense smoke, fresh grass, and roasted popcorn (fendisha).',
      dest: 'Addis Ababa'
    },
    {
      title: 'Omo Valley Ancestral Pastoral Traditions',
      timing: 'Year-Round (Best June–Sept & Dec–March)',
      location: 'Lower Omo Basin',
      image: OmoCulture,
      desc: 'Encounter the living heritage of the Hamar, Mursi, and Karo communities. Experience bull-jumping rites of passage, natural ochre and chalk body artistry, and weekly barter markets conducted under acacia canopies.',
      dest: 'Omo'
    },
    {
      title: 'The Nightly Hyena Brotherhood of Harar',
      timing: 'Every Evening at Dusk',
      location: 'Historic Harar Jugol Walled City',
      image: HararHyena,
      desc: 'A centuries-old tradition where generational "Hyena Men" call wild spotted hyenas by affectionate name and feed them raw meat from hand and mouth, preserving an ancient peaceful pact between human and wild predator.',
      dest: 'Harar'
    },
    {
      title: 'Sacred Solomonic Heritage & St. Mary of Zion',
      timing: 'Year-Round (Hidat Zion Festival in November)',
      location: 'Axum Historic Sanctuary',
      image: AxumStMary,
      desc: 'Trace the lineage of the Queen of Sheba and King Solomon. Tour the oldest Christian sanctuary in sub-Saharan Africa, repository of illuminated manuscripts dating to the 6th century.',
      dest: 'Axum'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="relative w-full py-24 sm:py-32 bg-stone-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={TimkatImage} 
            alt="Ethiopian Cultural Ceremony" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Living Heritage & Liturgies</span>
            <span>·</span>
            <span>Unbroken Traditions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            Ethiopian Cultural Expeditions & Sacred Festivals
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Witness millennia of living faith, vibrant ceremonies, and indigenous tribal customs preserved in the ancient cradle of humanity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-1">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
            Curated Experiences
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900">
            Unforgettable Sacred Rites & Cultural Encounters
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Every itinerary is led by native cultural facilitators who guide travelers through local etiquette, sacred taboos, and meaningful community interactions.
          </p>
        </div>

        {/* Cultural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culturalJourneys.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-amber-400 font-mono text-[11px] px-2.5 py-1 rounded-md font-semibold">
                    {item.timing}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider">
                    {item.location}
                  </div>
                  
                  <h3 className="text-lg font-bold font-['Outfit'] text-stone-900">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/booking-form?destination=${encodeURIComponent(item.dest)}`}
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book Cultural Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Tourism & Community Royalty Pledge */}
        <section className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Wander Ethio Ethical Travel Compact</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-stone-900">
            Preserving Dignity, Tradition & Community Livelihoods
          </h3>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-4xl">
            We reject staged human zoo tourism. In the Omo Valley and highland villages, our travelers are accompanied by native community facilitators who speak regional languages. All community fees, photography stipends, and scout honorariums are paid transparently directly to village elders, schools, and cultural preservation trusts.
          </p>
        </section>

      </main>
    </div>
  );
}
