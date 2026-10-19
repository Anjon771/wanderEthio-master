// src/pages/hikingPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { Mountain, Compass, Calendar, Clock, ArrowRight, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-react';

import SimienImage from '../assets/images/semen/semen1.jpg';
import SimienTrek from '../assets/images/semen/trekkingSemen.jpg';
import BaleImage from '../assets/images/Bale/bale1.jpg';
import DanakilImage from '../assets/images/Denakil/denakil2.jpg';
import BlueNileImage from '../assets/images/BlueNile/The-Blue-Nile-Falls.jpg';
import DebreDamoRope from '../assets/images/DebreDamo/mountain.jpg';

export default function HikingPage() {
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const trails = [
    {
      id: 'simien-ras-dejen',
      title: 'Simien Mountains Ras Dejen Summit Traverse',
      elevation: '4,550 m (14,928 ft)',
      duration: '5 – 7 Days',
      difficulty: 'Challenging',
      terrain: 'Afro-Alpine Plateau, Basalt Pinnacles & Giant Lobelia',
      bestMonths: 'October – April',
      image: SimienImage,
      summary: 'Ascend to the highest point in Ethiopia and fourth highest in Africa. Camp at Sankaber, Geech, and Chennek along vertical 1,500m escarpments alongside hundreds of wild Gelada baboons and endemic Walia ibex.',
      bookingDest: 'Semen Mountains'
    },
    {
      id: 'bale-sanetti',
      title: 'Bale Mountains Sanetti & Harenna Cloud Forest',
      elevation: '4,377 m (Mount Tullu Dimtu)',
      duration: '4 – 5 Days',
      difficulty: 'Moderate to Challenging',
      terrain: 'Glacial Tarns, Moorland & Ancient Cloud Forest',
      bestMonths: 'November – April',
      image: BaleImage,
      summary: 'Trek across the largest Afro-alpine plateau in Africa, home to the endangered Ethiopian wolf. Descend through the mystical bamboo and wild coffee canopy of the Harenna Forest.',
      bookingDest: 'Bale'
    },
    {
      id: 'danakil-erta-ale',
      title: 'Erta Ale Volcano & Dallol Caldera Expedition',
      elevation: '613 m (Basalt Shield Volcano)',
      duration: '3 – 4 Days',
      difficulty: 'Extreme Endurance',
      terrain: 'Solidified Pahoehoe Lava, Salt Pans & Sulfur Springs',
      bestMonths: 'November – February (Cooler Desert Months)',
      image: DanakilImage,
      summary: 'A nocturnal trek across cooling volcanic basalt to peer into the glowing, bubbling subterranean lava lake of Erta Ale, one of only six persistent lava lakes on Earth.',
      bookingDest: 'Danakil Depression'
    },
    {
      id: 'blue-nile-falls',
      title: 'Tis Issat Blue Nile Canyon & Portuguese Bridge',
      elevation: '1,800 m',
      duration: 'Half-Day / 1 Day',
      difficulty: 'Easy',
      terrain: 'River Gorges, Farmland & Tropical Mist Basin',
      bestMonths: 'September – November (Peak Water Volume)',
      image: BlueNileImage,
      summary: 'A gentle trek across a 17th-century Portuguese stone bridge through pastoral villages, emerging directly opposite the thunderous 45-meter curtain of the Blue Nile Falls.',
      bookingDest: 'Bahidar'
    },
    {
      id: 'debre-damo-cliff',
      title: 'Debre Damo Cliff Ascent & Tigray Spires',
      elevation: '2,211 m',
      duration: '1 – 2 Days',
      difficulty: 'Exposed Rock Climb',
      terrain: 'Vertical Sandstone Mesa & Plaited Ox-Hide Rope',
      bestMonths: 'October – April',
      image: DebreDamoRope,
      summary: 'Scale a sheer 15-meter vertical cliff face with the aid of monastic leather ropes to reach the 6th-century fortress monastery of Saint Aregawi. (Male travelers only per ancient monastic canon).',
      bookingDest: 'Debre Damo'
    }
  ];

  const gearItems = [
    { title: 'Footwear', items: ['Sturdy waterproof hiking boots with ankle support', 'Moisture-wicking merino wool socks (4 pairs)', 'Light camp sandals for evenings'] },
    { title: 'Thermal Layers', items: ['Waterproof & windproof breathable shell jacket', 'High-loft down jacket (0°C to -5°C rated for Simien/Bale camps)', 'Thermal base layer top and bottoms'] },
    { title: 'Accessories', items: ['Polarized UV sunglasses (essential for high-altitude glare)', 'Wide-brim sun hat and fleece beanie', 'Lightweight trekking poles with rubber tips'] },
    { title: 'Hydration & Health', items: ['Reusable 2-liter water bottle or bladder', 'High-SPF 50+ sunscreen and lip balm', 'Personal blister kit and altitude headache tablets'] },
  ];

  const filteredTrails = trails.filter(trail => {
    if (filterDifficulty === 'all') return true;
    return trail.difficulty.toLowerCase().includes(filterDifficulty.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="relative w-full py-24 sm:py-32 bg-stone-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={SimienTrek} 
            alt="Ethiopian Highlands Trekking" 
            className="w-full h-full object-cover object-center opacity-35 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Wilderness & Mountaineering</span>
            <span>·</span>
            <span>Roof of Africa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            Highland Trekking & Alpine Expeditions
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Traverse jagged basalt escarpments, glacial plateaus, and ancient cloud forests accompanied by licensed national park scouts and pack mule logistics.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-1">
        
        {/* Interactive Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <h2 className="text-xl font-bold font-['Outfit'] text-stone-900">
              Curated Trail Itineraries
            </h2>
            <p className="text-xs text-stone-500">
              Select difficulty level to match your physical conditioning.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl overflow-x-auto">
            {['all', 'easy', 'moderate', 'challenging'].map(d => (
              <button
                key={d}
                onClick={() => setFilterDifficulty(d)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                  filterDifficulty === d 
                    ? 'bg-stone-900 text-white shadow-sm' 
                    : 'text-stone-700 hover:text-stone-950 hover:bg-white/60'
                }`}
              >
                {d === 'all' ? 'All Difficulties' : d}
              </button>
            ))}
          </div>
        </div>

        {/* Trail Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTrails.map((trail) => (
            <div 
              key={trail.id}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img 
                    src={trail.image} 
                    alt={trail.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-amber-400 font-mono text-xs px-2.5 py-1 rounded-md font-semibold">
                    {trail.elevation}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-stone-900/90 text-stone-200 text-xs px-2.5 py-1 rounded-md font-medium">
                    {trail.difficulty}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold font-['Outfit'] text-stone-900">
                    {trail.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {trail.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-stone-100 text-stone-500">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase">Duration</span>
                      <span className="font-semibold text-stone-800">{trail.duration}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase">Best Season</span>
                      <span className="font-semibold text-stone-800">{trail.bestMonths}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-stone-400 block text-[10px] uppercase">Terrain Character</span>
                      <span className="font-medium text-stone-700">{trail.terrain}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  to={`/booking-form?destination=${encodeURIComponent(trail.bookingDest)}`}
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Expedition on This Trail</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Gear Checklist Section */}
        <section className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div>
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-1">
              Preparation Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-stone-900">
              Highland Expedition Gear Checklist
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 max-w-2xl mt-1">
              Temperatures on high Afro-alpine plateaus like Simien and Bale fluctuate from warm daytime sunshine (+22°C) to freezing nights (-5°C). Layering is critical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gearItems.map((group, idx) => (
              <div key={idx} className="p-5 bg-stone-50 rounded-2xl border border-stone-100 space-y-3">
                <h4 className="text-sm font-bold text-stone-900 font-['Outfit'] flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  {group.title}
                </h4>
                <ul className="space-y-2 text-xs text-stone-600">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-3 text-xs text-stone-800">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>High-Altitude Acclimatization Note:</strong> Addis Ababa sits at 2,355 meters, giving all travelers a natural head start. For treks ascending above 3,500m, stay well-hydrated, avoid alcohol on arrival day, and walk at a steady, rhythmic cadence.
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
