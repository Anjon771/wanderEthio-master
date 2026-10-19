// src/pages/FoodsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { Utensils, Coffee, Heart, Sparkles, Check, Info, ArrowRight } from 'lucide-react';

import InjeraImage from '../assets/images/Food/injera.jpg';
import DoroWatImage from '../assets/images/Food/doror-wat.jpg';
import KitfoImage from '../assets/images/Food/kitfo.jpg';
import ShiroImage from '../assets/images/Food/shiro.jpg';
import TibsImage from '../assets/images/Food/tibs.jpg';
import BeyaynetuImage from '../assets/images/Food/beyeaynet.jpg';

export default function FoodsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const foodCatalog = [
    {
      id: 'injera',
      name: 'Injera (The Soul of Ethiopian Tables)',
      category: 'staple',
      image: InjeraImage,
      tag: 'Ancient Supergrain',
      desc: 'A spongy, naturally gluten-free sourdough flatbread fermented for three days from Teff—the world’s smallest grain, native strictly to the Ethiopian highlands. It serves simultaneously as platter, utensil, and food.',
      flavor: 'Tangy, airy, mildly sour notes that balance rich spicy sauces.'
    },
    {
      id: 'doro-wat',
      name: 'Doro Wat (The Queen of Ethiopian Stews)',
      category: 'meat',
      image: DoroWatImage,
      tag: 'Holiday Feast Dish',
      desc: 'Ethiopia’s national celebratory dish. Tender chicken drumsticks and hard-boiled eggs slow-simmered for up to twelve hours in caramelized red onions, garlic, ginger, and fiery crimson Berbere spice blend.',
      flavor: 'Deeply aromatic, complex chili heat smoothed by slow-cooked sweet onions.'
    },
    {
      id: 'kitfo',
      name: 'Kitfo (Gurage Spiced Tartare)',
      category: 'meat',
      image: KitfoImage,
      tag: 'Highland Specialty',
      desc: 'Finely minced lean grass-fed beef infused with warmed Niter Kibbeh (clarified butter clarified with kosseret, ginger, and fenugreek) and pungent Mitmita chili powder. Served with homemade Ayib cottage cheese and chopped Gomen collard greens.',
      flavor: 'Silky, herbal, fiery, and deeply comforting.'
    },
    {
      id: 'shiro',
      name: 'Shiro Tagamino (Clay Pot Chickpea Stew)',
      category: 'vegan',
      image: ShiroImage,
      tag: 'Beloved Comfort Classic',
      desc: 'Velvety puree of sun-dried chickpeas, broad beans, and dried peas spiced with berbere, garlic, and onions. Served piping hot and bubbling inside an unglazed rustic earthenware clay pot.',
      flavor: 'Rich, savory, nutty, and gently spiced; a national daily staple.'
    },
    {
      id: 'tibs',
      name: 'Derek Tibs (Sizzling Pan-Seared Beef)',
      category: 'meat',
      image: TibsImage,
      tag: 'Grill Masterpiece',
      desc: 'Cubed beef or tender mountain lamb flash-seared at high heat with fresh rosemary springs, slivered red onions, and sliced green jalapeño peppers. Often served over a charcoal-fired clay brazier.',
      flavor: 'Smoky, herbaceous with fresh green pepper crunch.'
    },
    {
      id: 'beyaynetu',
      name: 'Yetsom Beyaynetu (Fasting Rainbow Banquet)',
      category: 'vegan',
      image: BeyaynetuImage,
      tag: '100% Plant-Based Feast',
      desc: 'A magnificent colorful painter’s palette of vegetarian stews arrayed across an expansive wheel of injera: red Misir Wat (spicy lentils), yellow Kik Alicha (split peas), Atkilt Wat (cabbage & carrots), and spiced beetroot.',
      flavor: 'A kaleidoscope of textures, spice levels, and naturally vegan nutrition.'
    }
  ];

  const filteredFoods = foodCatalog.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="relative w-full py-24 sm:py-32 bg-stone-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={InjeraImage} 
            alt="Ethiopian Traditional Feast" 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Culinary Heritage & Gastronomy</span>
            <span>·</span>
            <span>Communal Dining</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            The Flavors & Rituals of Ethiopia
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the teff sourdough fermentation, complex berbere spice blends, fasting vegan feasts, and the world’s most poetic coffee ceremony.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-1">
        
        {/* Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <h2 className="text-xl font-bold font-['Outfit'] text-stone-900">
              Signature Traditional Dishes
            </h2>
            <p className="text-xs text-stone-500">
              Filter by dietary preference or culinary tradition.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl">
            {[
              { id: 'all', label: 'All Dishes' },
              { id: 'meat', label: 'Meat & Poultry' },
              { id: 'vegan', label: 'Vegan / Fasting' },
              { id: 'staple', label: 'Teff Staples' },
            ].map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === c.id 
                    ? 'bg-stone-900 text-white shadow-sm' 
                    : 'text-stone-700 hover:text-stone-950 hover:bg-white/60'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFoods.map((dish) => (
            <div 
              key={dish.id}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-amber-400 font-mono text-[11px] px-2.5 py-1 rounded-md font-semibold">
                    {dish.tag}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold font-['Outfit'] text-stone-900">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {dish.desc}
                  </p>

                  <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600 border border-stone-100">
                    <span className="font-semibold text-amber-700 block text-[10px] uppercase">Flavor Character:</span>
                    {dish.flavor}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/booking-form?destination=Addis%20Ababa"
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Experience Culinary Tour</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* The Sacred Buna Coffee Ceremony */}
        <section className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Coffee className="w-4 h-4" />
              <span>Cradle of Arabica Coffee</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-white">
              The Sacred Three-Round Buna Ceremony
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              In Ethiopia, coffee is never rushed. It is a slow, spiritual meditation of community hospitality. The host hand-washes green Arabica beans, roasts them over glowing embers, and invites guests to inhale the divine fragrance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-stone-950/70 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-amber-400 font-mono text-xs font-bold block">ROUND 01</span>
              <h4 className="text-base font-bold text-white font-['Outfit']">Abol (The Awakening)</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                The first and strongest extraction brewed inside the black earthenware Jebena pot. Served in handleless Cini cups, it initiates deep reflection and conversation.
              </p>
            </div>

            <div className="p-6 bg-stone-950/70 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-amber-400 font-mono text-xs font-bold block">ROUND 02</span>
              <h4 className="text-base font-bold text-white font-['Outfit']">Tona (The Connection)</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Fresh boiling water is added to the same grounds, creating a milder, smoother second cup that fosters warmth, storytelling, and friendship.
              </p>
            </div>

            <div className="p-6 bg-stone-950/70 rounded-2xl border border-stone-800 space-y-2">
              <span className="text-amber-400 font-mono text-xs font-bold block">ROUND 03</span>
              <h4 className="text-base font-bold text-white font-['Outfit']">Baraka (The Blessing)</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                The final brew. Bestowing blessings of peace, health, and safe travels upon every person present before parting. Leaving before Baraka is considered bad luck.
              </p>
            </div>
          </div>
        </section>

        {/* Ethiopian Dining Etiquette & Gursha Tradition */}
        <section className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
            <Heart className="w-4 h-4 text-amber-700" />
            <span>Communal Love & Fellowship</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-stone-900">
            The Tradition of Gursha: Hand-Feeding as Honor
          </h3>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-4xl">
            In Ethiopian culture, food is served on a single communal mesob basket to signify unity. During a meal, it is customary to perform <em>Gursha</em>: gently tearing a morsel of injera, wrapping a choice bite of spicy stew, and placing it directly into the mouth of a dining partner or honored guest. To receive a Gursha is a gesture of love, gratitude, and unbreakable bond.
          </p>
        </section>

      </main>
    </div>
  );
}
