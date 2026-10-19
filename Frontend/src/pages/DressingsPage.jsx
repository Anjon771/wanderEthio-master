// src/pages/DressingsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { Sparkles, ShieldCheck, Heart, ArrowRight, Check } from 'lucide-react';

import TraditionalDress from '../assets/images/Dressing/traditional-dress.jpg';
import WomenDress from '../assets/images/Dressing/women-dress.jpg';
import MenDress from '../assets/images/Dressing/men-dress.jpg';
import CulturalEvent from '../assets/images/Dressing/cultural-event.jpg';
import JewelryImage from '../assets/images/Dressing/jewelry.jpg';
import ModernEthio from '../assets/images/Dressing/modern-ethiopian.jpg';

export default function DressingsPage() {
  const textileTraditions = [
    {
      title: 'Habesha Kemis (The Handwoven Cotton Dress)',
      image: TraditionalDress,
      tag: 'Handspun Cotton (Shemma)',
      desc: 'Woven on manual wooden pit-looms from gossamer-fine unbleached Ethiopian cotton. Decorated along the hemline, cuffs, and neckline with elaborate woven Tibeb geometric bands in gold, crimson, and deep emerald.',
      significance: 'Worn for weddings, Sunday Orthodox liturgies, and sacred national holidays.'
    },
    {
      title: 'Netela & Gabi (The Communicative Shawls)',
      image: WomenDress,
      tag: 'Everyday Sacred Layer',
      desc: 'The Netela is a gauzy two-layered cotton shawl with a decorative woven border. The way it is draped across the shoulders conveys deep social signals—mourning, celebration, prayer, or casual warmth. The Gabi is a thicker four-layered version used for cool highland evenings.',
      significance: 'An essential item for every Ethiopian, universally revered across generations.'
    },
    {
      title: 'Royal Velvet Kaba (Ceremonial Cloak)',
      image: CulturalEvent,
      tag: 'Imperial & Wedding Regalia',
      desc: 'Heavy midnight-blue, burgundy, or black velvet capes richly embroidered with real gold and silver metallic wire threads. Historically worn by emperors, empresses, and royal courtiers, today it is the centerpiece of Habesha wedding ceremonies.',
      significance: 'Symbolizes sovereignty, royal dignity, and matrimonial covenant.'
    },
    {
      title: 'Men’s Traditional Cotton Attire',
      image: MenDress,
      tag: 'Highland Dignity',
      desc: 'Crisp handwoven cotton tunic shirts with embroidered stand collars, paired with tapered jodhpur trousers (Suri) and a broad white Gabi draped with commanding posture.',
      significance: 'Conveys grace, dignity, and martial honor.'
    },
    {
      title: 'Filigree Gold & Silver Cross Jewelry',
      image: JewelryImage,
      tag: 'Metalsmithing Heritage',
      desc: 'Lost-wax cast and filigree neck crosses, ear-picks, and bangles crafted in distinctive regional styles—including the delicate floral Lalibela cross, the interlocking geometric Gondar cross, and the ancient Aksum cross.',
      significance: 'Spiritual protection, ancestral pride, and generational family heirloom.'
    },
    {
      title: 'Contemporary Ethical Ethiopian Haute Couture',
      image: ModernEthio,
      tag: 'Global Runway Renaissance',
      desc: 'Contemporary Ethiopian designers blending ancient manual loom weaving techniques with modern architectural silhouettes, creating sustainable luxury worn on international runways from Paris to New York.',
      significance: 'Supporting sustainable livelihoods for generational master weavers in Addis Ababa.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="relative w-full py-24 sm:py-32 bg-stone-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={TraditionalDress} 
            alt="Ethiopian Traditional Dressing" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Textiles & Living Craft</span>
            <span>·</span>
            <span>Handspun Shemma Cotton</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            Habesha Textiles, Weaving & Royal Regalia
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Millennia of manual pit-loom artistry, communicative cotton shawls, and gold-embroidered velvet cloaks that embody Ethiopian grace.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-1">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
            The Weaving Tradition
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900">
            Intricate Geometric Symmetry & Living Craft
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            In districts like Shiro Meda in Addis Ababa and Chencha in the Gamo highlands, master weavers operate manual wooden looms using techniques passed down unbroken for over a thousand years.
          </p>
        </div>

        {/* Textiles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textileTraditions.map((item, idx) => (
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
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-amber-400 font-mono text-[10px] px-2.5 py-1 rounded-md font-semibold">
                    {item.tag}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold font-['Outfit'] text-stone-900">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600 border border-stone-100">
                    <span className="font-semibold text-amber-700 block text-[10px] uppercase">Cultural Context:</span>
                    {item.significance}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/booking-form?destination=Addis%20Ababa"
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book Artisan Textile Tour</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Shiro Meda Artisan Workshop Visits */}
        <section className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Preserving Generational Weavers</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
            Visit the Historic Shiro Meda Weaving Guilds in Addis Ababa
          </h3>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-4xl">
            Our cultural city itineraries in Addis Ababa include guided walking tours through Shiro Meda at the foot of Mount Entoto. Travelers observe the spinning of raw organic Ethiopian cotton on hand spindles, watch rhythmic treadle looms weaving complex multicolored Tibeb borders, and can purchase custom-tailored Habesha Kemis directly from master artisan cooperatives.
          </p>
        </section>

      </main>
    </div>
  );
}
