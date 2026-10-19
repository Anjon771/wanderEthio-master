// src/pages/PhotographPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { Camera, Sun, ShieldCheck, ArrowRight, Sparkles, Check, AlertCircle } from 'lucide-react';

import LalibelaPhoto from '../assets/images/Lalibela/beteGiyorgis.jpg';
import DanakilPhoto from '../assets/images/Denakil/denakil2.jpg';
import SimienPhoto from '../assets/images/semen/semen5.jpg';
import OmoPhoto from '../assets/images/omo/omo6.jpg';
import BahirdarPhoto from '../assets/images/Bahirdar/bahirdar1.jpg';
import HararPhoto from '../assets/images/Harar/harar4.jpg';

export default function PhotographyPage() {
  const photoSpots = [
    {
      title: 'Bete Giyorgis at Golden Hour (Lalibela)',
      lighting: 'Late Afternoon (4:30 PM – 5:45 PM)',
      lens: '24-70mm f/2.8 & Ultra-Wide 16-35mm',
      image: LalibelaPhoto,
      desc: 'Shoot from the elevated rock plateau looking down onto the roof of the cruciform cross as low-angle raking sunlight illuminates the rich red volcanic tuff and yellow mountain lichen.',
      dest: 'Lalibela'
    },
    {
      title: 'Dallol Neon Hydrothermal Springs (Danakil)',
      lighting: 'Sunrise (6:00 AM – 7:30 AM before midday heat)',
      lens: 'Polarizing Filter + 35mm / 50mm Prime',
      image: DanakilPhoto,
      desc: 'Brilliant neon yellow sulfur chimneys, turquoise hypersaline ponds, and rust-orange potassium terraces create an extraterrestrial landscape under early morning desert light.',
      dest: 'Danakil Depression'
    },
    {
      title: 'Imet Gogo Escarpment Overlook (Simien)',
      lighting: 'Dawn & Morning Inversion Clouds',
      lens: '70-200mm Telephoto for Layered Ridges',
      image: SimienPhoto,
      desc: 'Towering 3,926m precipice catching the first rays of morning light above cascading sea-of-clouds inversions that fill the lower valleys.',
      dest: 'Semen Mountains'
    },
    {
      title: 'Natural Light Portraits in Omo Valley',
      lighting: 'Shaded Village Canopies & Soft Dawn Light',
      lens: '85mm f/1.4 or 50mm f/1.2 Portrait Prime',
      image: OmoPhoto,
      desc: 'Capture the intricate chalk body painting, brass ornamentation, and expressive gazes of Hamar and Karo pastoralists with shallow depth of field and authentic respect.',
      dest: 'Omo'
    },
    {
      title: 'Lake Tana Island Monasteries & Papyrus Boats',
      lighting: 'Early Morning Lake Mist & Golden Twilight',
      lens: '24-105mm All-Rounder + Fast Prime for Murals',
      image: BahirdarPhoto,
      desc: 'Fishermen paddling ancient papyrus tankwa canoes at sunrise, followed by warm diffused interior lighting on 14th-century monastery parchment frescoes.',
      dest: 'Bahidar'
    },
    {
      title: 'Harar Jugol Indigo Walled Labyrinths',
      lighting: 'Late Afternoon Shadows & Dusk Hyena Glow',
      lens: '35mm Street Lens & Low-Light f/1.4 for Dusk',
      image: HararPhoto,
      desc: 'Saturated cobalt and ochre alleyways in the historic walled citadel, transitioning into nocturnal photography of generational hyena handlers outside the city gates.',
      dest: 'Harar'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="relative w-full py-24 sm:py-32 bg-stone-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={LalibelaPhoto} 
            alt="Ethiopia Photography Expedition" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Visual Storytelling & Light</span>
            <span>·</span>
            <span>Documentary Grade</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            Ethiopia Photography Expeditions & Workshops
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            From neon sulfur vents and sacred highland rock basilicas to intimate tribal portraits under golden hour African illumination.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-1">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
            Signature Locations
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900">
            Iconic Vantage Points for Photographers
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Our photography departures are timed specifically around solar azimuths, golden hour lighting, and seasonal atmospheric inversions.
          </p>
        </div>

        {/* Photo Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoSpots.map((spot, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img 
                    src={spot.image} 
                    alt={spot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-amber-400 font-mono text-[10px] px-2.5 py-1 rounded-md font-semibold">
                    {spot.lighting}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Recommended Lens: {spot.lens}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold font-['Outfit'] text-stone-900">
                    {spot.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {spot.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/booking-form?destination=${encodeURIComponent(spot.dest)}`}
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book Photo Tour Circuit</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Harsh Environment Gear Advice & Ethics */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
            <h3 className="text-lg font-bold font-['Outfit'] text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              Camera Care in Harsh Horn of Africa Terrains
            </h3>
            <ul className="space-y-3 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Danakil Sulfur Protection:</strong> Bring zip-lock bags and a dedicated weather-sealed body. Acidic volcanic vapors require UV filters on all front glass.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Simien Mountain Cold:</strong> Sub-zero night temperatures drain lithium batteries quickly. Keep spare batteries inside inner down jacket pockets near body warmth.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Drone & Aerial Filming:</strong> Drones require formal written clearance from the Ethiopian Civil Aviation Authority. Wander Ethio assists with permit paperwork.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
            <h3 className="text-lg font-bold font-['Outfit'] text-stone-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-amber-600" />
              Human Dignity & Photography Ethics
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We uphold the highest ethical standards of documentary travel photography:
            </p>
            <ul className="space-y-3 text-xs text-stone-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Always establish rapport, smile, and ask consent before pointing a lens at individuals or children.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Inside active Orthodox sanctuaries, flash photography is prohibited during liturgies out of reverence for holy icons and praying monks.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Show subjects the photo on your LCD screen—it builds instant joy and mutual human connection.</span>
              </li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}
