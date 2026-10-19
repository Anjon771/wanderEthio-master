// src/pages/wildLife.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { ShieldCheck, Compass, ArrowRight, Eye, CheckCircle2, AlertTriangle } from 'lucide-react';

import GeladaImage from '../assets/images/semen/semen1.jpg';
import WolfImage from '../assets/images/Bale/accommodation1.jpg';
import WaliaImage from '../assets/images/semen/semen2.jpg';
import AwashOryx from '../assets/images/Awash/awashNationalPark.jpg';
import BaleForest from '../assets/images/Bale/bale2.jpg';
import LakeTanaPelican from '../assets/images/Bahirdar/lakaTana.jpg';

export default function WildlifeSafarisPage() {
  const wildlifeRoster = [
    {
      name: 'Gelada Baboon ("The Bleeding Heart Monkey")',
      scientific: 'Theropithecus gelada',
      status: 'Endemic Herbivorous Primate',
      location: 'Simien Mountains & Debre Libanos Gorge',
      image: GeladaImage,
      desc: 'The last surviving species of ancient grass-grazing primates. Known for the vivid crimson hourglass patch on their chest and golden manes. Living in peaceful troops of up to 400 individuals, they are calm and habituated to human observation.',
      bookingDest: 'Semen Mountains'
    },
    {
      name: 'Ethiopian Red Wolf (Simien Fox)',
      scientific: 'Canis simensis',
      status: 'Critically Endangered (Fewer than 500 in Wild)',
      location: 'Bale Mountains — Sanetti Plateau (4,000m)',
      image: WolfImage,
      desc: 'The rarest canid in the world and Africa’s most threatened carnivore. Specialized hunters with elongated muzzles perfectly adapted for extracting giant African mole-rats from high-altitude alpine burrows.',
      bookingDest: 'Bale'
    },
    {
      name: 'Walia Ibex (Mountain Monarch)',
      scientific: 'Capra walie',
      status: 'Strictly Endemic to Simien Mountains',
      location: 'Chennek & Bwahit Escarpments (3,600m – 4,400m)',
      image: WaliaImage,
      desc: 'A magnificent wild mountain goat with thick, ribbed backward-curving horns up to one meter long. They negotiate sheer vertical basalt cliffs with gravity-defying agility to evade predators.',
      bookingDest: 'Semen Mountains'
    },
    {
      name: 'Beisa Oryx & Hamadryas Baboons',
      scientific: 'Oryx beisa & Papio hamadryas',
      status: 'Savanna & Semi-Arid Specialists',
      location: 'Awash National Park & Rift Valley',
      image: AwashOryx,
      desc: 'Regal antelopes with straight, spear-like horns and striking black-and-white facial masks roaming the acacia savanna alongside large multi-family clans of sacred Hamadryas baboons.',
      bookingDest: 'Awash NP'
    },
    {
      name: 'Mountain Nyala & Menelik’s Bushbuck',
      scientific: 'Tragelaphus buxtoni & Tragelaphus scriptus meneliki',
      status: 'Highland Endemic Antelopes',
      location: 'Bale Mountains Juniper & Erica Woodlands',
      image: BaleForest,
      desc: 'The majestic spiral-horned Mountain Nyala, discovered by science only in 1908, browses quietly in the high misty forests of Dinsho and Goba.',
      bookingDest: 'Bale'
    },
    {
      name: 'Endemic Birds & Lake Tana Waterfowl',
      scientific: 'Over 860 Avian Species (16 Strictly Endemics)',
      status: 'Birdwatcher’s Paradise',
      location: 'Lake Tana, Blue Nile Basin & Bale Moorlands',
      image: LakeTanaPelican,
      desc: 'Spot rare specialties including the Blue-winged Goose, Rouget’s Rail, Prince Ruspoli’s Turaco, Spot-breasted Lapwing, and giant colonies of Great White Pelicans.',
      bookingDest: 'Bahidar'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="relative w-full py-24 sm:py-32 bg-stone-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={GeladaImage} 
            alt="Ethiopian Endemic Wildlife" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Natural History Expeditions</span>
            <span>·</span>
            <span>Over 30 Endemic Mammals</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            Ethiopian Endemic Wildlife & Safari Journeys
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Spot the world’s rarest canid in Bale, walk alongside gentle Gelada troops on Simien escarpments, and track Rift Valley oryx with certified wildlife biologists.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-1">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
            Species Spotlight
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900">
            Endemic Creatures Found Nowhere Else on Earth
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Because Ethiopia’s high plateaus have been isolated for millions of years by surrounding arid lowlands, evolutionary speciation has produced an extraordinary concentration of endemic wildlife.
          </p>
        </div>

        {/* Wildlife Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wildlifeRoster.map((animal, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-emerald-400 font-mono text-[10px] px-2.5 py-1 rounded-md font-semibold">
                    {animal.status}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider block">
                    {animal.location}
                  </span>
                  
                  <h3 className="text-lg font-bold font-['Outfit'] text-stone-900">
                    {animal.name}
                  </h3>
                  <span className="text-xs italic text-stone-400 block -mt-1">
                    {animal.scientific}
                  </span>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {animal.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/booking-form?destination=${encodeURIComponent(animal.bookingDest)}`}
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book Safari Circuit</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Wildlife Conservation & Ethical Viewing Guidelines */}
        <section className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Conservation First Philosophy</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
            Ethical Wildlife Viewing Protocols in Protected National Parks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300">
            <div className="p-5 bg-stone-950/60 rounded-xl border border-stone-800 space-y-2">
              <span className="font-bold text-amber-400 block text-sm">Strict Distance Rules</span>
              <p>Maintain at least 15 meters distance from wild wolves and ibex. Gelada baboons are relaxed around humans, but touching or encroaching on mothers and infants is prohibited.</p>
            </div>
            <div className="p-5 bg-stone-950/60 rounded-xl border border-stone-800 space-y-2">
              <span className="font-bold text-amber-400 block text-sm">No Feeding Policy</span>
              <p>Feeding wild animals disrupts natural foraging behaviors, habituates wildlife to unnatural foods, and poses transmission risks of human illnesses.</p>
            </div>
            <div className="p-5 bg-stone-950/60 rounded-xl border border-stone-800 space-y-2">
              <span className="font-bold text-amber-400 block text-sm">Park Conservation Levies</span>
              <p>100% of all national park entry, ranger, and scout fees go directly to the Ethiopian Wildlife Conservation Authority (EWCA) to fund anti-poaching patrols.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
