// src/pages/MusicsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { Music, Sparkles, Volume2, ArrowRight, Heart } from 'lucide-react';

import CulturalEvent from '../assets/images/Dressing/cultural-event.jpg';
import HararHyena from '../assets/images/Harar/harar3.jpg';
import MeskelSquare from '../assets/images/AddisAbaba/meskelSquare.jpg';

export default function MusicPage() {
  const musicalModes = [
    {
      name: 'Tizita (ትዝታ)',
      mood: 'Yearning, Nostalgia & Memory',
      desc: 'The defining soul mode of Ethiopia, often translated as "nostalgia" or "longing". Comparable to the American blues or Portuguese fado, it evokes profound memories of lost loves, distant homeland mountains, and bygone eras.',
      icon: '🎵'
    },
    {
      name: 'Bati (ባቲ)',
      mood: 'Romantic & Expansive',
      desc: 'Originating in the historic market town of Bati at the crossroads of the Afar desert and Amhara highlands. Celebrated for its sweeping romantic intervals that soundtrack great highland ballads and pastoral journeys.',
      icon: '🎻'
    },
    {
      name: 'Ambassel (አምባሰል)',
      mood: 'Introspective & Regal',
      desc: 'Named after the legendary fortress amba in Wollo province. Features a contemplative, solemn modal architecture frequently heard in acoustic masenqo ballads, spiritual reflections, and historical chronicles.',
      icon: '🎼'
    },
    {
      name: 'Anchihoye (አንቺሆዬ)',
      mood: 'Ecstatic, Celebratory & Fierce',
      desc: 'Vibrant, urgent, and rhythmic. The primary mode for celebratory wedding dances (Eskista shoulder dancing), triumphant warrior chants, and joyous communal harvest festivals.',
      icon: '🥁'
    }
  ];

  const instruments = [
    {
      name: 'The Krar (ክራር)',
      type: 'Ancient Bowl Lyre (5 or 6 Strings)',
      desc: 'Dating back to the Aksumite kingdom and biblical antiquity. Plucked with a plectrum or finger-picked, modern musicians play both traditional resonant wooden resonators and plugged-in electric distortion krars in urban Addis clubs.'
    },
    {
      name: 'The Masenqo (ማሲንቆ)',
      type: 'Single-String Bowed Diamond Lute',
      desc: 'A square or diamond-shaped wooden soundbox covered in stretched goatskin, bowed with horsehair strings. Played exclusively by Azmari minstrels who improvise witty, satirical lyrics on the spot.'
    },
    {
      name: 'The Washint (ዋሽንት)',
      type: 'Highland End-Blown Bamboo Flute',
      desc: 'A four-hole curved bamboo flute with an evocative, breathy timbre played by solitary highland shepherds while herding cattle across Simien mountain ridges.'
    },
    {
      name: 'The Kebero (ከበሮ)',
      type: 'Sacred Double-Headed Hand Drum',
      desc: 'Carved from hollowed cedar or mahogany tree trunks with raw cowhide drumheads. Used in Ethiopian Orthodox church services to accompany the sacred 6th-century liturgical chants of Saint Yared.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="relative w-full py-24 sm:py-32 bg-stone-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={CulturalEvent} 
            alt="Ethiopian Music & Jazz" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Soundscapes & Polyphony</span>
            <span>·</span>
            <span>Saint Yared to Ethio-Jazz</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            Ethiopian Musical Modes, Instruments & Ethio-Jazz
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            From the 6th-century sacred notation of Saint Yared to the smoky vibraphones of Mulatu Astatke and late-night Azmari Bet improvisation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-1">
        
        {/* Modal Scale Section */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
              The Pentatonic Grammar
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900">
              The Four Modal Scales (Qenet) of Ethiopia
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Unlike Western major and minor scales, traditional Ethiopian music is founded on four microtonal pentatonic systems that evoke deeply specific psychological states.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {musicalModes.map((mode, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-xl mb-3">
                    {mode.icon}
                  </div>
                  <h3 className="text-base font-bold text-stone-900 font-['Outfit']">
                    {mode.name}
                  </h3>
                  <span className="text-xs font-semibold text-amber-600 block mb-2">
                    {mode.mood}
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {mode.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Instruments */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
              Acoustic Treasures
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900">
              Traditional Ethiopian Acoustic Instruments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instruments.map((inst, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0 font-mono text-sm font-bold">
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-stone-900 font-['Outfit']">
                    {inst.name}
                  </h3>
                  <span className="text-xs text-amber-600 font-medium block">
                    {inst.type}
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {inst.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Golden Era of Ethio-Jazz */}
        <section className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>1960s – 1970s Golden Age</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-white">
              Ethio-Jazz: The Modern Global Sonic Revolution
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              In the late 1960s, Berklee-trained vibraphonist and percussionist Mulatu Astatke combined ancient Ethiopian five-tone modal scales with 12-tone American jazz harmonies, Latin congas, and Hammond organs. The resulting genre—Ethio-Jazz—mesmerized the world and experienced a massive global renaissance via the legendary <em>Éthiopiques</em> album series curated by Francis Falceto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-800 text-xs">
            <div>
              <span className="text-amber-400 font-bold block mb-1">Mulatu Astatke</span>
              <p className="text-stone-400">Father of Ethio-Jazz, composer of "Yèkèrmo Sèw" and "Tezeta".</p>
            </div>
            <div>
              <span className="text-amber-400 font-bold block mb-1">Mahmoud Ahmed</span>
              <p className="text-stone-400">Legendary imperial bodyguard turned soaring soul vocalist.</p>
            </div>
            <div>
              <span className="text-amber-400 font-bold block mb-1">Aster Aweke & Gigi</span>
              <p className="text-stone-400">Pioneering powerhouse female vocalists blending traditional ornaments with international funk.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
