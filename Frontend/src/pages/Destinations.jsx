// src/pages/Destinations.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FixedHeader from '../Components/FIxedHeader';
import { destinationsData } from '../data/destinationsData';
import { Compass, MapPin, Calendar, Clock, ArrowRight, Mountain, Sparkles, Filter } from 'lucide-react';

export default function DestinationsIndexPage() {
  const [circuitFilter, setCircuitFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const destinationsList = Object.values(destinationsData);

  const circuits = [
    { id: 'all', label: 'All Historic & Wild Circuits' },
    { id: 'northern', label: 'Northern Historic Circuit' },
    { id: 'southern', label: 'Southern Cultural & Tribes' },
    { id: 'wildlife', label: 'Afro-Alpine & Wildlife' },
    { id: 'rift', label: 'Rift Valley & Eastern' },
  ];

  const filteredDestinations = destinationsList.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    if (circuitFilter === 'all') return matchesSearch;
    if (circuitFilter === 'northern') return matchesSearch && dest.circuit.includes('Northern');
    if (circuitFilter === 'southern') return matchesSearch && dest.circuit.includes('Southern');
    if (circuitFilter === 'wildlife') return matchesSearch && (dest.circuit.includes('Wild') || dest.circuit.includes('Alpine'));
    if (circuitFilter === 'rift') return matchesSearch && (dest.circuit.includes('Rift') || dest.circuit.includes('Eastern'));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col">
      <FixedHeader />

      {/* Hero */}
      <section className="bg-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <span>Expedition Directory</span>
            <span>·</span>
            <span>12 Sovereign Circuits</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight">
            Explore Ethiopia's Iconic Destinations
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            From the 12th-century subterranean rock monoliths of Lalibela to the dramatic 4,500m peaks of Simien and the ancient walled city of Harar.
          </p>
        </div>
      </section>

      {/* Main Content & Interactive Filter */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-10">
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200">
          {/* Segmented Circuit Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl overflow-x-auto max-w-full no-scrollbar">
            {circuits.map(c => (
              <button
                key={c.id}
                onClick={() => setCircuitFilter(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  circuitFilter === c.id
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-white/60'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72">
            <input 
              type="text"
              placeholder="Search by name or landmark..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-xs bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-stone-500">
          <span>Showing {filteredDestinations.length} Curated Ethiopian Destinations</span>
          <span>Official Ministry of Tourism Registered Circuits</span>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div 
              key={dest.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img 
                    src={dest.heroImage} 
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-amber-400 font-mono text-[11px] px-2.5 py-1 rounded-md font-semibold">
                    {dest.elevation}
                  </div>
                  {dest.unesco && (
                    <div className="absolute bottom-3 left-3 bg-amber-600/90 backdrop-blur-md text-stone-950 text-[10px] font-bold px-2 py-0.5 rounded">
                      UNESCO Heritage
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider">
                    {dest.circuit}
                  </div>
                  
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-stone-900 font-['Outfit'] group-hover:text-amber-600 transition-colors">
                      {dest.name}
                    </h3>
                    {dest.amharicName && (
                      <span className="text-xs text-stone-400 font-serif">
                        {dest.amharicName}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {dest.tagline}
                  </p>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {dest.recommendedDays}
                    </span>
                    <span className="font-mono font-semibold text-stone-900">
                      {dest.basePriceETB.toLocaleString()} ETB
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <Link
                  to={dest.route}
                  className="flex-1 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  <span>Explore Guide</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </Link>

                <Link
                  to={`/booking-form?destination=${encodeURIComponent(dest.name)}`}
                  className="px-4 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 font-semibold text-xs rounded-xl transition-colors text-center whitespace-nowrap"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
