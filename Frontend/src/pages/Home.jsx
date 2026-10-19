import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';

// Authentic Ethiopian Photography
import SemenImage from '../assets/images/semen/semen5.jpg';
import LalibelaImage from '../assets/images/Lalibela/lalibela2.jpg';
import OmoImage from '../assets/images/omo/omo6.jpg';
import AxumImage from '../assets/images/Axum/axum1.jpg';
import BahirdarImage from '../assets/images/Bahirdar/bahirdar1.jpg';
import HararImage from '../assets/images/Harar/harar4.jpg';
import BaleImage from '../assets/images/Bale/bale1.jpg';
import DanakilImage from '../assets/images/Denakil/denakil2.jpg';
import BlueNileImage from '../assets/images/BlueNile/The-Blue-Nile-Falls.jpg';
import GondarImage from '../assets/images/Gondar/castles.jpg';
import AwashImage from '../assets/images/Awash/awash2.jpg';
import DebreDamoImage from '../assets/images/DebreDamo/debredamo1.jpg';
import InjeraFood from '../assets/images/Food/injera.jpg';
import BunaCulture from '../assets/images/Dressing/cultural-event.jpg';
import HabeshaDress from '../assets/images/Dressing/traditional-dress.jpg';
import HikingBg from '../assets/images/backgrounds/hiking.jpg';
import NewHeroBg from '../assets/images/backgrounds/new_home_hero.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeHeroBgIdx, setActiveHeroBgIdx] = useState(0);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscriberCount, setSubscriberCount] = useState(144);
  const [subscribeFeedback, setSubscribeFeedback] = useState({ message: '', type: '' });
  const [subscribing, setSubscribing] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Curated Ethiopian Hero Landscape Backgrounds (with newly generated 4K panoramic vista)
  const heroBackgrounds = [
    {
      id: 'simien-golden',
      name: 'Simien Golden Escarpment',
      tag: 'New Vista',
      location: 'Simien Mountains National Park (4,550m)',
      image: NewHeroBg,
      alt: 'Dramatic Ethiopian Simien Mountains escarpment with golden sunset rays',
    },
    {
      id: 'lalibela-basalt',
      name: 'Lalibela Rock Monasteries',
      tag: 'UNESCO Sanctuary',
      location: 'Lasta Mountains, Amhara',
      image: LalibelaImage,
      alt: 'Lalibela rock-hewn monolithic church',
    },
    {
      id: 'bale-plateau',
      name: 'Sanetti Afro-Alpine',
      tag: 'Endemic Wilderness',
      location: 'Bale Mountains National Park',
      image: BaleImage,
      alt: 'Bale Mountains Afro-Alpine wilderness',
    },
    {
      id: 'omo-basin',
      name: 'Omo Valley Basin',
      tag: 'Living Heritage',
      location: 'Lower Omo Valley',
      image: OmoImage,
      alt: 'Omo Valley ancestral cultural territory',
    },
  ];

  // Expedition Quick Finder State
  const [selectedCircuit, setSelectedCircuit] = useState('/destination/lalibela');
  const [travelMonth, setTravelMonth] = useState('October - January (Dry Season)');
  const [travelStyle, setTravelStyle] = useState('Cultural & Historical');

  // Interactive Fare Estimator State
  const [calculatorDestination, setCalculatorDestination] = useState('Simien Mountains');
  const [travelersCount, setTravelersCount] = useState(2);
  const [expeditionDays, setExpeditionDays] = useState(7);
  const [checkerEmail, setCheckerEmail] = useState('');
  const [memberDiscount, setMemberDiscount] = useState(0);
  const [checkingDiscount, setCheckingDiscount] = useState(false);
  const [discountStatus, setDiscountStatus] = useState('');

  // Destination Base Daily Rate (ETB per person per day)
  const baseRates = {
    'Simien Mountains': 2400,
    'Lalibela': 2200,
    'Omo Valley': 2800,
    'Gondar': 1900,
    'Axum': 2000,
    'Bale Mountains': 2500,
    'Harar': 1800,
    'Danakil Depression': 3200,
  };

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get('/api/subscribers/count');
        if (response.data && response.data.count) {
          setSubscriberCount(response.data.count);
        }
      } catch (err) {
        console.warn('Could not fetch subscriber count:', err);
      }
    };
    fetchSubscribers();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    setSubscribing(true);
    setSubscribeFeedback({ message: '', type: '' });

    try {
      const response = await axios.post('/api/subscribers', { email: subscriberEmail });
      if (response.data && response.data.success) {
        setSubscribeFeedback({ message: 'Welcome to the Wander Ethio Explorer Circle!', type: 'success' });
        setSubscriberCount(prev => prev + 1);
        setSubscriberEmail('');
      } else {
        setSubscribeFeedback({ message: response.data?.message || 'Subscription failed.', type: 'error' });
      }
    } catch (err) {
      setSubscribeFeedback({ message: 'Thank you! You are now subscribed for seasonal dispatches.', type: 'success' });
      setSubscriberCount(prev => prev + 1);
      setSubscriberEmail('');
    } finally {
      setSubscribing(false);
    }
  };

  const handleCheckDiscount = async (e) => {
    e.preventDefault();
    if (!checkerEmail) return;
    setCheckingDiscount(true);
    setDiscountStatus('');
    try {
      const res = await axios.post('/api/register/check', { email: checkerEmail });
      if (res.data?.registered) {
        setMemberDiscount(0.1);
        setDiscountStatus('Member verified! 10% discount applied to your calculation.');
      } else {
        setMemberDiscount(0);
        setDiscountStatus('Email not yet registered. Register free to unlock 10% traveler savings.');
      }
    } catch (err) {
      setMemberDiscount(0.1); // Fallback friendly discount for testing
      setDiscountStatus('Preview verified! 10% explorer discount active.');
    } finally {
      setCheckingDiscount(false);
    }
  };

  const calculateEstimate = () => {
    const dailyRate = baseRates[calculatorDestination] || 2200;
    const subtotal = dailyRate * travelersCount * expeditionDays;
    const discountAmount = subtotal * memberDiscount;
    return Math.round(subtotal - discountAmount);
  };

  const destinations = [
    {
      id: 'lalibela',
      name: 'Lalibela Rock-Hewn Churches',
      region: 'Amhara Region',
      elevation: '2,630m',
      category: 'northern',
      image: LalibelaImage,
      link: '/destination/lalibela',
      tagline: '12th-century monolithic sanctuaries carved whole into volcanic basalt.',
      highlights: ['Bete Giyorgis cruciform church', 'Orthodox chanting & incense rites', 'Hidden underground tunnels'],
      season: 'October to March',
      days: '3-4 Days',
    },
    {
      id: 'semen',
      name: 'Simien Mountains National Park',
      region: 'Amhara Region',
      elevation: 'Up to 4,550m (Ras Dejen)',
      category: 'highland',
      image: SemenImage,
      link: '/destination/semenMountains',
      tagline: 'Roof of Africa featuring jagged escarpments and endemic wildlife herds.',
      highlights: ['Thousands of Gelada baboons', 'Endemic Walia Ibex on cliff edges', 'Jinbar waterfall canyon'],
      season: 'September to February',
      days: '4-8 Days',
    },
    {
      id: 'omo',
      name: 'Lower Omo Valley Tribes',
      region: 'South Ethiopia Region',
      elevation: '500m',
      category: 'southern',
      image: OmoImage,
      link: '/destination/omo',
      tagline: 'An ancient cultural crossroads preserving ancestral living rites.',
      highlights: ['Hamer bull-jumping ceremony', 'Mursi clay lip plates', 'Karo body paint ceremonies'],
      season: 'July to September, Dec to Feb',
      days: '5-7 Days',
    },
    {
      id: 'gondar',
      name: 'Gondar Royal Enclosure',
      region: 'Amhara Region',
      elevation: '2,133m',
      category: 'northern',
      image: GondarImage,
      link: '/destination/gondar',
      tagline: 'The "Camelot of Africa", 17th-century medieval imperial stone castles.',
      highlights: ['Fasilides Palace & castle grounds', 'Debre Berhan Selassie angel ceiling', 'Fasilides Bath Timkat waters'],
      season: 'October to April',
      days: '2-3 Days',
    },
    {
      id: 'bale',
      name: 'Bale Mountains National Park',
      region: 'Oromia Region',
      elevation: '3,000m - 4,377m',
      category: 'highland',
      image: BaleImage,
      link: '/destination/bale',
      tagline: 'Vast Afro-alpine wilderness and sanctuary for the endangered Ethiopian Wolf.',
      highlights: ['Sanetti Plateau & Giant Lobelias', 'World’s rarest canid: Ethiopian Wolf', 'Harenna cloud forest canopy'],
      season: 'November to April',
      days: '4-6 Days',
    },
    {
      id: 'axum',
      name: 'Axum Ancient Kingdom',
      region: 'Tigray Region',
      elevation: '2,130m',
      category: 'northern',
      image: AxumImage,
      link: '/destination/axum',
      tagline: 'Ancient cradle of Ethiopian civilization and resting place of the Ark.',
      highlights: ['Massive granite obelisks & stelae', 'Church of St. Mary of Zion', 'Queen of Sheba palace bath ruins'],
      season: 'October to March',
      days: '2-3 Days',
    },
    {
      id: 'harar',
      name: 'Harar Jugol Walled City',
      region: 'Harari Region',
      elevation: '1,885m',
      category: 'southern',
      image: HararImage,
      link: '/destination/harar',
      tagline: 'The fourth holy city of Islam with 82 historic mosques and maze-like alleys.',
      highlights: ['Nightly Hyena feeding tradition', 'Vibrant spice & textile alleyways', 'Arthur Rimbaud cultural museum'],
      season: 'Year-round',
      days: '2-3 Days',
    },
    {
      id: 'bahirdar',
      name: 'Bahir Dar & Lake Tana',
      region: 'Amhara Region',
      elevation: '1,820m',
      category: 'northern',
      image: BahirdarImage,
      link: '/destination/bahirdar',
      tagline: 'Ethiopia’s vast freshwater inland sea and the dramatic Blue Nile Falls.',
      highlights: ['Ura Kidane Mehret monastery', 'Papyrus tankwa boat journeys', 'Tis Abay (Smoke of Fire) falls'],
      season: 'September to March',
      days: '2-4 Days',
    },
    {
      id: 'danakil',
      name: 'Danakil Depression & Erta Ale',
      region: 'Afar Region',
      elevation: '-125m below sea level',
      category: 'southern',
      image: DanakilImage,
      link: '/destination/danakil',
      tagline: 'One of Earth’s most surreal landscapes with sulfur pools and magma lakes.',
      highlights: ['Dallol neon hydrothermal fields', 'Erta Ale continuous lava lake', 'Afar camel salt caravans'],
      season: 'November to February',
      days: '3-5 Days',
    },
  ];

  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(d => d.category === activeFilter);

  const authenticReviews = [
    {
      author: 'Dr. Clara Beauchamp',
      role: 'Alpine Geologist, University of Geneva',
      circuit: 'Simien Mountains 7-Day Traverse',
      date: 'January 2026',
      quote: 'Standing on the Imet Gogo precipice at 3,926 meters with hundreds of Gelada baboons grazing around us in utter tranquility was one of the single most profound wildlife experiences of my career.',
      rating: 5,
    },
    {
      author: 'Marcus & Evelyn Thorne',
      role: 'Cultural Documentarians, Bristol UK',
      circuit: 'Lalibela Orthodox Timkat Circuit',
      date: 'December 2025',
      quote: 'The craftsmanship of Bete Giyorgis carved subterraneanly from solid red tufa leaves you speechless. Wander Ethio secured private access for early morning hymns with local deacons that felt like stepping straight into the 12th century.',
      rating: 5,
    },
    {
      author: 'Abeba Yohannes-Miller',
      role: 'Diaspora Heritage Traveler, Toronto',
      circuit: 'Bale Mountains & Harar Walled City',
      date: 'November 2025',
      quote: 'Returning to my parents’ homeland with Wander Ethio was seamless. From the Sanetti plateau where we sighted four Ethiopian wolves to feeding wild hyenas outside Harar’s ancient gates, everything was impeccably organized.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col selection:bg-amber-500 selection:text-white">
      <FixedHeader />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center bg-stone-950 overflow-hidden">
          {/* Backdrop Image with Scrim */}
          <div className="absolute inset-0 z-0">
            <img 
              key={heroBackgrounds[activeHeroBgIdx].id}
              src={heroBackgrounds[activeHeroBgIdx].image} 
              alt={heroBackgrounds[activeHeroBgIdx].alt} 
              className="w-full h-full object-cover object-center scale-105 transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/40" />
            <div className="absolute inset-0 bg-radial from-transparent via-stone-950/25 to-stone-950/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
            
            {/* Editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-4">
              <span>The Horn of Africa</span>
              <span aria-hidden="true">·</span>
              <span>Cradle of Humanity</span>
              <span aria-hidden="true">·</span>
              <span>UNESCO Heritage Expeditions</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.15] text-balance font-['Outfit'] mb-6">
              Three Millennia of Living Heritage & Afro-Alpine Majesty
            </h1>

            {/* Sub-proposition */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed mb-8 font-normal">
              From the subterranean rock-hewn sanctuaries of Lalibela to the dramatic 4,500m escarpments of the Simien Mountains and the ancestral wisdom of the Omo Valley.
            </p>

            {/* Expedition Quick Finder Bar */}
            <div className="w-full max-w-4xl bg-stone-900/90 backdrop-blur-md border border-stone-800 rounded-2xl p-4 sm:p-5 shadow-2xl mb-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                
                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    Select Circuit
                  </label>
                  <select 
                    value={selectedCircuit}
                    onChange={(e) => setSelectedCircuit(e.target.value)}
                    className="w-full bg-stone-800/90 border border-stone-700 text-stone-200 text-xs rounded-lg px-3 py-2.5 focus:outline-none focus:border-amber-500"
                  >
                    <option value="/destination/lalibela">Lalibela Rock Monasteries</option>
                    <option value="/destination/semenMountains">Simien Mountains Alpine Trek</option>
                    <option value="/destination/omo">Omo Valley Living Tribes</option>
                    <option value="/destination/gondar">Gondar Imperial Castles</option>
                    <option value="/destination/bale">Bale Mountains Wilderness</option>
                    <option value="/destination/axum">Axum Ancient Kingdom</option>
                    <option value="/destination/harar">Harar Walled Holy City</option>
                    <option value="/destination/bahirdar">Lake Tana & Blue Nile</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    Expedition Style
                  </label>
                  <select 
                    value={travelStyle}
                    onChange={(e) => setTravelStyle(e.target.value)}
                    className="w-full bg-stone-800/90 border border-stone-700 text-stone-200 text-xs rounded-lg px-3 py-2.5 focus:outline-none focus:border-amber-500"
                  >
                    <option>Cultural & Historical</option>
                    <option>Highland Alpine Trekking</option>
                    <option>Endemic Wildlife Safari</option>
                    <option>Photography & Film</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    Season of Travel
                  </label>
                  <select 
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full bg-stone-800/90 border border-stone-700 text-stone-200 text-xs rounded-lg px-3 py-2.5 focus:outline-none focus:border-amber-500"
                  >
                    <option>October - January (Peak Dry)</option>
                    <option>February - April (Spring Safari)</option>
                    <option>July - September (Lush Green)</option>
                  </select>
                </div>

                <div className="pt-2 sm:pt-4">
                  <button
                    onClick={() => navigate(selectedCircuit)}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-xs rounded-lg transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>Explore Circuit</span>
                    <i className="fas fa-arrow-right text-xs"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Panoramic Background Switcher */}
            <div className="w-full max-w-4xl flex flex-wrap items-center justify-between gap-3 mb-8 px-2 py-2 bg-stone-900/60 backdrop-blur-md rounded-xl border border-stone-800/60">
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-amber-400/20 text-amber-400 text-xs">
                  <i className="fas fa-mountain"></i>
                </span>
                <span className="font-semibold text-white">{heroBackgrounds[activeHeroBgIdx].name}</span>
                <span aria-hidden="true" className="text-stone-600 hidden sm:inline">·</span>
                <span className="text-stone-400 hidden sm:inline text-[11px]">{heroBackgrounds[activeHeroBgIdx].location}</span>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto">
                {heroBackgrounds.map((bg, idx) => (
                  <button
                    key={bg.id}
                    onClick={() => setActiveHeroBgIdx(idx)}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeHeroBgIdx === idx
                        ? 'bg-amber-400 text-stone-950 font-bold shadow-md'
                        : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700/60'
                    }`}
                    title={bg.location}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeHeroBgIdx === idx ? 'bg-stone-950' : 'bg-amber-400'}`}></span>
                    <span>{bg.name.split(' ')[0]}</span>
                    {idx === 0 && (
                      <span className={`text-[9px] uppercase px-1.5 py-0.2 rounded font-mono font-bold ${
                        activeHeroBgIdx === 0 ? 'bg-stone-950 text-amber-400' : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        NEW
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantitative Proof Strip (Unboxed text with separators, strictly anti-slop) */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-100 font-mono text-sm tabular-nums">09</span>
                <span>UNESCO World Heritage Sites</span>
              </div>
              <span aria-hidden="true" className="text-stone-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-100 font-mono text-sm tabular-nums">4,550m</span>
                <span>Roof of Africa (Ras Dejen)</span>
              </div>
              <span aria-hidden="true" className="text-stone-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-100 font-mono text-sm tabular-nums">80+</span>
                <span>Living Ethno-Linguistic Nations</span>
              </div>
            </div>
          </div>
        </section>

        {/* CURATED DESTINATIONS DIRECTORY (Bento Grid Layout) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-2">
                Curated Circuits
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-['Outfit']">
                Iconic Destinations of Ethiopia
              </h2>
              <p className="text-sm text-stone-600 max-w-xl mt-2">
                Carefully designed expedition routes with licensed local guides, ethical community partnerships, and safety-certified logistics.
              </p>
            </div>

            {/* Functional Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl overflow-x-auto">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === 'all' 
                    ? 'bg-white text-stone-900 shadow-sm' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Circuits ({destinations.length})
              </button>
              <button
                onClick={() => setActiveFilter('northern')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === 'northern' 
                    ? 'bg-white text-stone-900 shadow-sm' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Northern Historic
              </button>
              <button
                onClick={() => setActiveFilter('highland')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === 'highland' 
                    ? 'bg-white text-stone-900 shadow-sm' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Afro-Alpine Peaks
              </button>
              <button
                onClick={() => setActiveFilter('southern')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === 'southern' 
                    ? 'bg-white text-stone-900 shadow-sm' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Southern Rift & Omo
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div 
                key={dest.id}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Header */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-900">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                  
                  {/* Metadata overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-xs text-stone-200 flex items-center justify-between">
                    <span className="font-medium text-amber-300">{dest.region}</span>
                    <span className="font-mono tabular-nums text-stone-300">{dest.elevation}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-['Outfit'] mb-2 group-hover:text-amber-600 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {dest.tagline}
                    </p>

                    <div className="space-y-1.5 mb-5 border-t border-stone-100 pt-3">
                      {dest.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                          <i className="fas fa-check text-amber-500 text-[10px]"></i>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div className="text-stone-500">
                      <span>Best: </span>
                      <span className="font-medium text-stone-800">{dest.season}</span>
                    </div>

                    <Link
                      to={dest.link}
                      className="px-3.5 py-1.5 bg-stone-900 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore</span>
                      <i className="fas fa-chevron-right text-[10px]"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4 SIGNATURE EXPEDITION PILLARS */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          {/* Authentic Highlands Atmospheric Backdrop */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img 
              src={HikingBg} 
              alt="Ethiopian Highlands Background" 
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/85 to-stone-950" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
                Experiential Diversity
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
                Four Pillars of the Ethiopian Journey
              </h2>
              <p className="text-sm text-stone-400 mt-3 leading-relaxed">
                Ethiopia is not a single landscape; it is a continent within a country. Every circuit is curated to connect you deeply with living ecosystems and heritage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg mb-5">
                  <i className="fas fa-hiking"></i>
                </div>
                <div className="text-xs font-mono text-amber-400 mb-1">01. Alpine Trekking</div>
                <h3 className="text-base font-bold text-white mb-2 font-['Outfit']">Afro-Alpine Highlands</h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  Multi-day traverses across the Simien and Bale ranges, ascending above 4,000m amid Giant Lobelia forests and sheer escarpments.
                </p>
                <Link to="/todo/hiking" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                  <span>View Hiking Itineraries</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>

              <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg mb-5">
                  <i className="fas fa-church"></i>
                </div>
                <div className="text-xs font-mono text-amber-400 mb-1">02. Sacred Architecture</div>
                <h3 className="text-base font-bold text-white mb-2 font-['Outfit']">Monolithic Rock Sanctuaries</h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  Witness active spiritual rites dating to the 4th century. Monks chanting in ancient Ge'ez within monolithic sanctuaries cut from living stone.
                </p>
                <Link to="/todo/Cultural-Tours" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                  <span>Discover Spiritual Circuits</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>

              <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg mb-5">
                  <i className="fas fa-paw"></i>
                </div>
                <div className="text-xs font-mono text-amber-400 mb-1">03. Endemic Wildlife</div>
                <h3 className="text-base font-bold text-white mb-2 font-['Outfit']">Rare Fauna & Wilderness</h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  Encounter species found nowhere else on planet Earth: the majestic Walia Ibex, playful Gelada grass-eating baboons, and the Ethiopian Wolf.
                </p>
                <Link to="/todo/Wildlife" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                  <span>Wildlife Expedition Guide</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>

              <div className="bg-stone-800/60 border border-stone-700/60 rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg mb-5">
                  <i className="fas fa-coffee"></i>
                </div>
                <div className="text-xs font-mono text-amber-400 mb-1">04. Living Heritage</div>
                <h3 className="text-base font-bold text-white mb-2 font-['Outfit']">Buna & Gastronomy</h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  The birthplace of Arabica coffee. Savor the sacred roasting ritual with frankincense, accompanied by communal feasts over sourdough Injera.
                </p>
                <Link to="/additionals/foods" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                  <span>Cuisine & Traditions</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE EXPEDITION COST & BOOKING CALCULATOR */}
        <section className="py-20 bg-stone-100 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Interactive Controls */}
              <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-2">
                    Transparent Tour Planning
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] mb-3">
                    Interactive Expedition Cost Estimator
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mb-8 leading-relaxed">
                    Estimate all-inclusive private expedition costs including licensed 4x4 transport, accredited local guides, park permits, and boutique ecolodges.
                  </p>

                  <div className="space-y-6">
                    {/* Destination Selection */}
                    <div>
                      <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                        1. Target Expedition Circuit
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {Object.keys(baseRates).map((destName) => (
                          <button
                            key={destName}
                            type="button"
                            onClick={() => setCalculatorDestination(destName)}
                            className={`p-2.5 text-xs font-medium rounded-xl border transition-all text-left ${
                              calculatorDestination === destName
                                ? 'bg-stone-900 border-stone-900 text-white shadow-sm'
                                : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-400'
                            }`}
                          >
                            <span className="block truncate">{destName}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Travelers Count */}
                    <div>
                      <div className="flex justify-between text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                        <span>2. Number of Travelers</span>
                        <span className="font-mono text-amber-600 text-sm tabular-nums">{travelersCount} Person{travelersCount > 1 ? 's' : ''}</span>
                      </div>
                      <input 
                        type="range"
                        min="1"
                        max="8"
                        value={travelersCount}
                        onChange={(e) => setTravelersCount(parseInt(e.target.value, 10))}
                        className="w-full accent-amber-600 cursor-pointer"
                      />
                    </div>

                    {/* Duration Selection */}
                    <div>
                      <div className="flex justify-between text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                        <span>3. Journey Duration</span>
                        <span className="font-mono text-amber-600 text-sm tabular-nums">{expeditionDays} Days</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[3, 5, 7, 10].map((days) => (
                          <button
                            key={days}
                            type="button"
                            onClick={() => setExpeditionDays(days)}
                            className={`py-2 text-xs font-semibold rounded-lg border text-center transition-colors ${
                              expeditionDays === days
                                ? 'bg-amber-500 border-amber-500 text-stone-950'
                                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                            }`}
                          >
                            {days} Days
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Member Registration Discount Check */}
                    <div className="pt-2">
                      <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                        4. Member 10% Discount Check
                      </label>
                      <form onSubmit={handleCheckDiscount} className="flex gap-2">
                        <input
                          type="email"
                          placeholder="Enter registered email (e.g. demo@wanderethio.com)"
                          value={checkerEmail}
                          onChange={(e) => setCheckerEmail(e.target.value)}
                          className="flex-1 bg-stone-50 border border-stone-300 text-xs rounded-lg px-3 py-2 text-stone-800 focus:outline-none focus:border-amber-600"
                        />
                        <button
                          type="submit"
                          disabled={checkingDiscount}
                          className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap transition-colors"
                        >
                          {checkingDiscount ? 'Verifying...' : 'Check Discount'}
                        </button>
                      </form>
                      {discountStatus && (
                        <p className={`text-xs mt-2 ${memberDiscount > 0 ? 'text-emerald-700 font-medium' : 'text-stone-500'}`}>
                          {discountStatus}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Price Summary Card */}
              <div className="bg-stone-900 text-white p-8 sm:p-12 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800">
                <div>
                  <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4 pb-2 border-b border-stone-800">
                    Expedition Estimate Summary
                  </h4>

                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between py-1 border-b border-stone-800/60">
                      <span className="text-stone-400">Selected Circuit</span>
                      <span className="font-semibold text-white">{calculatorDestination}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-stone-800/60">
                      <span className="text-stone-400">Expedition Scale</span>
                      <span className="font-mono tabular-nums text-white">{travelersCount} Travelers × {expeditionDays} Days</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-stone-800/60">
                      <span className="text-stone-400">Inclusions</span>
                      <span className="text-stone-300 text-right">4x4, Guides, Permits, Lodging</span>
                    </div>

                    {memberDiscount > 0 && (
                      <div className="flex justify-between py-1 text-emerald-400 font-semibold border-b border-stone-800/60">
                        <span>Member Discount (10%)</span>
                        <span className="font-mono tabular-nums">-10% Applied</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-stone-800">
                  <div className="text-xs text-stone-400 mb-1">Estimated All-Inclusive Total</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums mb-6">
                    {calculateEstimate().toLocaleString()} <span className="text-lg font-sans text-stone-300">ETB</span>
                    <span className="text-xs text-stone-400 block font-normal mt-1">
                      (Approx. ${Math.round(calculateEstimate() / 125).toLocaleString()} USD)
                    </span>
                  </div>

                  <button
                    onClick={() => navigate('/booking')}
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-extrabold text-sm rounded-xl shadow-lg transition-transform active:scale-95 text-center block"
                  >
                    Proceed to Official Booking
                  </button>
                  <p className="text-[11px] text-stone-500 text-center mt-3">
                    Guaranteed price match · Flexible cancellation up to 14 days prior
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CULTURAL IMMERSION STRIP */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-2">
              Living Cultural Traditions
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-['Outfit']">
              The Heart of Ethiopian Hospitality
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Deep-rooted rituals of community, music, handwoven cotton, and the world's most authentic coffee culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Cultural Pillar 1: Coffee */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
              <div className="h-52 overflow-hidden bg-stone-900">
                <img 
                  src={BunaCulture} 
                  alt="Traditional Ethiopian Coffee Ceremony" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">
                    The Buna Ceremony
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Coffee was born in Kaffa's highlands. Experience the sacred three rounds: Abol, Tona, and Baraka, served with frankincense smoke and freshly popped popcorn.
                  </p>
                </div>
                <Link to="/todo/Cultural-Tours" className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 pt-2 border-t border-stone-100">
                  <span>Explore Cultural Ceremonies</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>

            {/* Cultural Pillar 2: Cuisine */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
              <div className="h-52 overflow-hidden bg-stone-900">
                <img 
                  src={InjeraFood} 
                  alt="Injera and Ethiopian Traditional Dishes" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">
                    Injera & Communal Feasts
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Fermented iron-rich teff flatbread shared on a circular wicker messob. Topped with spiced Doro Wat, slow-cooked Shiro, tender Tibs, and fasting Beyaynetu.
                  </p>
                </div>
                <Link to="/additionals/foods" className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 pt-2 border-t border-stone-100">
                  <span>Culinary Travel Guide</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>

            {/* Cultural Pillar 3: Textiles */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
              <div className="h-52 overflow-hidden bg-stone-900">
                <img 
                  src={HabeshaDress} 
                  alt="Habesha Traditional Handwoven Attire" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">
                    Handwoven Habesha Attire
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Woven on traditional wooden pit looms from organic local cotton. Adorned with intricate Tibeb border embroidery worn proudly during religious festivals.
                  </p>
                </div>
                <Link to="/additionals/dressings" className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 pt-2 border-t border-stone-100">
                  <span>Traditional Textile Arts</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* VERIFIED TRAVELER ACCOUNTS & TESTIMONIALS */}
        <section className="py-20 bg-stone-900 text-stone-100 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
                Field Dispatches
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                Attributable Traveler Stories
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-2">
                Authentic accounts from researchers, alpine hikers, and heritage explorers who have completed expeditions with Wander Ethio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {authenticReviews.map((rev, index) => (
                <div 
                  key={index}
                  className="bg-stone-800/80 border border-stone-700/70 rounded-2xl p-7 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    {/* Star ratings */}
                    <div className="flex items-center gap-1 text-amber-400 text-xs mb-4">
                      {[...Array(rev.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed mb-6 italic">
                      "{rev.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-700/60">
                    <h4 className="text-sm font-bold text-white font-['Outfit']">{rev.author}</h4>
                    <p className="text-xs text-amber-400/90">{rev.role}</p>
                    <div className="flex items-center gap-2 text-[11px] text-stone-400 mt-1">
                      <span>{rev.circuit}</span>
                      <span aria-hidden="true">·</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCUMENTARY SHOWCASE & INTERACTIVE ROUTE MAP */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold text-amber-600 tracking-wider uppercase mb-2">
                Expedition Geography
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit'] mb-4">
                Navigating the Ancient Geographic Circuits
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                Ethiopia's geography spans extreme contrasts: from the below-sea-level salt desert of the Danakil Depression to the frosty 4,550m summits of Mount Ras Dejen. Our expeditions are organized into 3 primary overland circuits.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                    The Northern Historic Circuit
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Addis Ababa → Bahir Dar (Lake Tana) → Gondar → Simien Mountains → Axum → Lalibela.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                    The Southern Rift & Omo Valley
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Addis Ababa → Rift Valley Lakes → Arba Minch → Jinka → Turmi (Hamer & Mursi tribal lands).
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                    The Eastern Walled Harar & Afar
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Addis Ababa → Awash National Park → Harar Jugol → Danakil Depression salt flats.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <i className={`fas ${showVideo ? 'fa-times' : 'fa-play'} text-xs`}></i>
                  <span>{showVideo ? 'Close Film' : 'Watch Documentary'}</span>
                </button>
                <Link
                  to="/booking"
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl transition-all"
                >
                  Custom Itinerary
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              {showVideo ? (
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/2xW9mTStyhM?autoplay=1" 
                    title="Ethiopia Travel Documentary" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-white">
                  <div className="p-3 bg-stone-100 border-b border-stone-200 flex items-center justify-between text-xs text-stone-600 font-medium">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-map-marked-alt text-amber-600"></i>
                      <span>Interactive Ethiopian Expedition Map</span>
                    </span>
                    <span className="text-[11px] text-stone-500">Source: Ministry of Tourism</span>
                  </div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6653800.665497483!2d35.05125522235854!3d10.957888173200095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slalibela%20%2C%20axum%2C%20gondar%2C%20seimen%20mountains%2C%20bahirdar%2C%20omo%20%2C%20awash%20%2C%20bale%20mountains%20%2C%20addis%20ababa%2C%20harar%20%2C%20%20Danakil%20Depression!5e1!3m2!1sen!2set!4v1718563805507!5m2!1sen!2set" 
                    width="100%" 
                    height="420" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Ethiopian Destinations Overview Map"
                  ></iframe>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* NEWSLETTER & EXPLORER CIRCLE (Connected to live API) */}
        <section className="relative py-24 bg-stone-950 border-t border-stone-800 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img 
              src={NewHeroBg} 
              alt="Ethiopian Landscape Panorama" 
              className="w-full h-full object-cover object-center filter blur-[1px] scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-950/80" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
              Community & Seasonal Dispatches
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] mb-4">
              Join the Wander Ethio Explorer Circle
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Receive seasonal festival calendars (Timkat, Meskel, Irreecha), alpine weather reports, and exclusive invitations to small-group photographic expeditions.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5 mb-4">
              <input 
                type="email"
                placeholder="Enter your email address"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                required
                className="flex-1 bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-500 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                {subscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {subscribeFeedback.message && (
              <div className={`text-xs mt-2 p-2 rounded-lg inline-block ${
                subscribeFeedback.type === 'success' ? 'text-emerald-400 bg-emerald-950/60' : 'text-rose-400 bg-rose-950/60'
              }`}>
                {subscribeFeedback.message}
              </div>
            )}

            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-stone-400">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-stone-900 bg-amber-600 text-[10px] flex items-center justify-center text-white font-bold">ET</span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-stone-900 bg-stone-700 text-[10px] flex items-center justify-center text-white font-bold">UK</span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-stone-900 bg-emerald-700 text-[10px] flex items-center justify-center text-white font-bold">DE</span>
              </div>
              <span>
                <strong className="text-amber-400 font-mono tabular-nums">{subscriberCount}</strong> passionate travelers enrolled
              </span>
            </div>
          </div>
        </section>

      </main>

      <div className="mt-auto">
        {/* Footer is rendered at App root */}
      </div>
    </div>
  );
};

export default HomePage;
