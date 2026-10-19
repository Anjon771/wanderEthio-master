// src/pages/GalleryPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { Camera, X, ChevronLeft, ChevronRight, Compass, ArrowRight } from 'lucide-react';

// Authentic Ethiopian Photography
import LalibelaBeteGiyorgis from '../assets/images/Lalibela/beteGiyorgis.jpg';
import LalibelaRock1 from '../assets/images/Lalibela/rochHewnChurch1.jpg';
import GondarCastles from '../assets/images/Gondar/castles.jpg';
import GondarFasilides from '../assets/images/Gondar/fasilidesBath.jpg';
import SimienPanorama from '../assets/images/semen/semen5.jpg';
import SimienGelada from '../assets/images/semen/semen1.jpg';
import BaleWolf from '../assets/images/Bale/accommodation1.jpg';
import BalePlateau from '../assets/images/Bale/bale1.jpg';
import OmoTribal from '../assets/images/omo/omo6.jpg';
import OmoBodyArt from '../assets/images/omo/omo5.jpg';
import AxumObelisk from '../assets/images/Axum/stele.jpg';
import HararAlley from '../assets/images/Harar/harar4.jpg';
import BlueNileFalls from '../assets/images/BlueNile/The-Blue-Nile-Falls.jpg';
import DanakilSulfur from '../assets/images/Denakil/denakil2.jpg';
import InjeraPlatter from '../assets/images/Food/injera.jpg';
import CoffeeCeremony from '../assets/images/Dressing/cultural-event.jpg';
import DebreDamoClimb from '../assets/images/DebreDamo/monastery.jpg';
import DebreLibanosBridge from '../assets/images/debreLibanos/portugueseBridge.jpg';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const archive = [
    {
      id: 1,
      image: LalibelaBeteGiyorgis,
      title: 'Bete Giyorgis (Church of St. George)',
      location: 'Lalibela, Amhara',
      category: 'architecture',
      desc: 'The famed monolithic cross carved 12 meters down into solid volcanic basalt during the 12th century.',
      route: '/destination/lalibela'
    },
    {
      id: 2,
      image: SimienPanorama,
      title: 'Imet Gogo Escarpment (3,926m)',
      location: 'Simien Mountains National Park',
      category: 'landscapes',
      desc: 'Vertical 1,500-meter precipices plunging into the lowlands, forged by ancient volcanic eruptions.',
      route: '/destination/semenMountains'
    },
    {
      id: 3,
      image: SimienGelada,
      title: 'Gelada Baboon Troop',
      location: 'Simien Mountains Plateau',
      category: 'wildlife',
      desc: 'The endemic "Bleeding Heart" herbivorous primate of Ethiopia, foraging peacefully in the afro-alpine grasslands.',
      route: '/destination/semenMountains'
    },
    {
      id: 4,
      image: GondarCastles,
      title: 'Fasil Ghebbi Imperial Castle',
      location: 'Gondar ("Camelot of Africa")',
      category: 'architecture',
      desc: 'The 17th-century royal compound blending Portuguese, Moorish, and Aksumite architectural genius.',
      route: '/destination/gondar'
    },
    {
      id: 5,
      image: DanakilSulfur,
      title: 'Dallol Neon Hydrothermal Springs',
      location: 'Danakil Depression, Afar',
      category: 'landscapes',
      desc: 'Surreal sulfur chimneys, potassium salt deposits, and bubbling acidic geothermal pools 125m below sea level.',
      route: '/destination/lalibela'
    },
    {
      id: 6,
      image: OmoTribal,
      title: 'Hamar Bull Jumping Ceremony',
      location: 'Lower Omo Valley',
      category: 'culture',
      desc: 'Generational rite of passage where young initiates leap over cattle to achieve manhood and marriage rights.',
      route: '/destination/omo'
    },
    {
      id: 7,
      image: BaleWolf,
      title: 'Endangered Ethiopian Red Wolf',
      location: 'Bale Mountains Sanetti Plateau',
      category: 'wildlife',
      desc: 'The world’s rarest canid hunting giant African mole-rats above 4,000 meters elevation.',
      route: '/destination/bale'
    },
    {
      id: 8,
      image: BlueNileFalls,
      title: 'Tis Issat (The Blue Nile Falls)',
      location: 'Bahir Dar, Lake Tana Basin',
      category: 'landscapes',
      desc: 'Known as the "Smoking Water", cascading 45 meters over basalt cliffs into the tropical river basin.',
      route: '/destination/bahirdar'
    },
    {
      id: 9,
      image: AxumObelisk,
      title: 'The Great Granite Obelisk of King Ezana',
      location: 'Axum Historic Sanctuary',
      category: 'architecture',
      desc: 'Standing 24 meters tall, carved from a single piece of solid granite by 4th-century Aksumite engineers.',
      route: '/destination/axum'
    },
    {
      id: 10,
      image: HararAlley,
      title: 'Cobbled Indigo Alleys of Harar Jugol',
      location: 'Harar Walled City',
      category: 'culture',
      desc: 'Over 360 labyrinthine cobbled alleyways within the historic 16th-century walls of the 4th holiest Islamic city.',
      route: '/destination/harar'
    },
    {
      id: 11,
      image: CoffeeCeremony,
      title: 'The Sacred Buna Coffee Ritual',
      location: 'Addis Ababa & Regional Homes',
      category: 'culture',
      desc: 'The three-round traditional roasting ceremony over glowing charcoal embers with frankincense smoke.',
      route: '/additionals/foods'
    },
    {
      id: 12,
      image: InjeraPlatter,
      title: 'Communal Injera & Wat Banquet',
      location: 'Highland Dining Tradition',
      category: 'gastronomy',
      desc: 'Naturally gluten-free sourdough teff flatbread served with rich spicy chicken, lamb, and lentil wats.',
      route: '/additionals/foods'
    },
    {
      id: 13,
      image: DebreDamoClimb,
      title: 'Debre Damo Monastic Rope Ascent',
      location: 'Tigray Mountain Amba',
      category: 'architecture',
      desc: 'Scaling the 15-meter vertical cliff face with plaited ox-hide ropes to enter the 6th-century clifftop sanctuary.',
      route: '/destination/debre-damo'
    },
    {
      id: 14,
      image: DebreLibanosBridge,
      title: 'Portuguese Bridge over Jemma Gorge',
      location: 'Debre Libanos, Shewa',
      category: 'landscapes',
      desc: 'A 16th-century stone arch bridge spanning a roaring waterfall into the dizzying 1,000m canyon drop.',
      route: '/destination/debre-libanos'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'architecture', label: 'Sacred Architecture' },
    { id: 'landscapes', label: 'Highland Peaks & Gorges' },
    { id: 'wildlife', label: 'Endemic Wildlife' },
    { id: 'culture', label: 'Living Culture & Rites' },
    { id: 'gastronomy', label: 'Gastronomy & Coffee' },
  ];

  const filteredPhotos = archive.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedPhoto(filteredPhotos[index]);
  };

  const nextPhoto = () => {
    const next = (currentIndex + 1) % filteredPhotos.length;
    setCurrentIndex(next);
    setSelectedPhoto(filteredPhotos[next]);
  };

  const prevPhoto = () => {
    const prev = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentIndex(prev);
    setSelectedPhoto(filteredPhotos[prev]);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="bg-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <span>Visual Archive</span>
            <span>·</span>
            <span>Documentary Grade</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            The Photographic Archive of Ethiopia
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            A curated high-resolution visual repository capturing the geological marvels, sacred architecture, endemic wildlife, and cultural ceremonies across the Horn of Africa.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-10">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl overflow-x-auto max-w-full no-scrollbar">
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div 
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-amber-400 font-mono text-[10px] px-2.5 py-1 rounded-md font-semibold">
                  {photo.location}
                </div>
                <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="p-3 bg-white/90 text-stone-900 rounded-full shadow-lg">
                    <Camera className="w-5 h-5 text-amber-600" />
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold font-['Outfit'] text-stone-900 group-hover:text-amber-600 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {photo.desc}
                </p>
                <div className="pt-2 flex items-center text-[11px] font-semibold text-amber-700">
                  <span>Explore Destination</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center">
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title}
                className="max-h-[75vh] max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              <button 
                onClick={prevPhoto}
                className="absolute left-4 p-2.5 rounded-full bg-stone-900/80 text-white hover:text-amber-400 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button 
                onClick={nextPhoto}
                className="absolute right-4 p-2.5 rounded-full bg-stone-900/80 text-white hover:text-amber-400 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center mt-5 text-white max-w-2xl space-y-2">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                {selectedPhoto.location}
              </span>
              <h4 className="text-lg font-bold font-['Outfit']">{selectedPhoto.title}</h4>
              <p className="text-xs text-stone-300">{selectedPhoto.desc}</p>
              
              <div className="pt-2">
                <Link
                  to={selectedPhoto.route}
                  onClick={() => setSelectedPhoto(null)}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold hover:underline"
                >
                  <span>View Full Destination Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
