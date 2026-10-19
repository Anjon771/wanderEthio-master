import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function NavHeader() {
  return null; // Integrated into main FixedHeader
}

export default function FixedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const [heritageOpen, setHeritageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDestinationsOpen(false);
    setExperiencesOpen(false);
    setHeritageOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const northernDestinations = [
    { name: 'Lalibela', path: '/destination/lalibela', desc: '12th-century monolithic rock-hewn churches' },
    { name: 'Simien Mountains', path: '/destination/semenMountains', desc: 'Roof of Africa, endemic wildlife & dramatic escarpments' },
    { name: 'Gondar', path: '/destination/gondar', desc: 'Medieval royal castles & Fasilides bath' },
    { name: 'Axum', path: '/destination/axum', desc: 'Ancient obelisks, stelae & Queen of Sheba palace' },
    { name: 'Debre Damo', path: '/destination/debre-damo', desc: '6th-century clifftop rope-climb monastery' },
  ];

  const southernDestinations = [
    { name: 'Omo Valley', path: '/destination/omo', desc: 'Living tribal traditions, Body painting & ancestral rites' },
    { name: 'Bale Mountains', path: '/destination/bale', desc: 'Afro-alpine sanctuary for the rare Ethiopian wolf' },
    { name: 'Bahir Dar & Lake Tana', path: '/destination/bahirdar', desc: 'Source of Blue Nile & ancient island monasteries' },
    { name: 'Harar Jugol', path: '/destination/harar', desc: 'Historic walled Islamic city & wild hyena men' },
    { name: 'Awash National Park', path: '/destination/awash-NP', desc: 'Acacia savanna wildlife & thermal hot springs' },
    { name: 'Addis Ababa', path: '/destination/Addis-Ababa', desc: 'Diplomatic capital, museums & Merkato markets' },
  ];

  const experiences = [
    { name: 'Highland Trekking', path: '/todo/hiking', desc: 'Simien & Bale multi-day alpine expeditions' },
    { name: 'Cultural Tours', path: '/todo/Cultural-Tours', desc: 'Timkat festivals, Coffee ceremonies & tribal journeys' },
    { name: 'Wildlife Safaris', path: '/todo/Wildlife', desc: 'Walya Ibex, Gelada Baboons & endemic birds' },
    { name: 'Photography Expeditions', path: '/todo/Photography', desc: 'Golden hour volcanic & architectural journeys' },
  ];

  const heritage = [
    { name: 'Traditional Foods', path: '/additionals/foods', desc: 'Injera, Doro Wat, Kitfo & Ethiopian spices' },
    { name: 'Habesha Dressings', path: '/additionals/dressings', desc: 'Shemma handwoven cotton & royal ceremonial robes' },
    { name: 'Ethiopian Music', path: '/additionals/musics', desc: 'Krar, Masenqo & legendary Ethio-jazz roots' },
    { name: 'Cinema & Films', path: '/additionals/films', desc: 'Ethiopian storytelling & documentary cinema' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      isScrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-stone-800 py-3' : 'bg-stone-900 text-white border-b border-stone-800/80 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Text Element Wordmark */}
          <Link to="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 via-amber-500 to-emerald-600 flex items-center justify-center text-stone-950 font-black text-sm shadow-md">
              WE
            </span>
            <span className="font-['Outfit'] font-bold text-lg sm:text-xl tracking-tight text-stone-100 group-hover:text-amber-400 transition-colors">
              Wander<span className="text-amber-500">Ethio</span>
            </span>
          </Link>

          {/* Zone 2: Navigation Links (Strictly Single-Line with Hover Underline) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            <Link 
              to="/" 
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${location.pathname === '/' ? 'text-amber-400 font-semibold' : ''}`}
            >
              Home
            </Link>

            {/* Destinations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2 focus:outline-none"
                onClick={() => setDestinationsOpen(!destinationsOpen)}
              >
                <span>Destinations</span>
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${destinationsOpen ? 'rotate-180 text-amber-400' : ''}`}></i>
              </button>

              {destinationsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-stone-900/98 backdrop-blur-md border border-stone-800 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div>
                    <h4 className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-3 pb-1 border-b border-stone-800">
                      Northern Historic Circuit
                    </h4>
                    <ul className="space-y-2.5">
                      {northernDestinations.map((d) => (
                        <li key={d.path}>
                          <Link 
                            to={d.path} 
                            className="block p-1.5 rounded-lg hover:bg-stone-800/70 transition-colors group"
                            onClick={() => setDestinationsOpen(false)}
                          >
                            <span className="text-sm font-medium text-stone-200 group-hover:text-amber-400 block">{d.name}</span>
                            <span className="text-xs text-stone-400 block line-clamp-1">{d.desc}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-3 pb-1 border-b border-stone-800">
                      Southern, Eastern & Rift Circuits
                    </h4>
                    <ul className="space-y-2.5">
                      {southernDestinations.map((d) => (
                        <li key={d.path}>
                          <Link 
                            to={d.path} 
                            className="block p-1.5 rounded-lg hover:bg-stone-800/70 transition-colors group"
                            onClick={() => setDestinationsOpen(false)}
                          >
                            <span className="text-sm font-medium text-stone-200 group-hover:text-amber-400 block">{d.name}</span>
                            <span className="text-xs text-stone-400 block line-clamp-1">{d.desc}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Experiences Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setExperiencesOpen(true)}
              onMouseLeave={() => setExperiencesOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2 focus:outline-none"
                onClick={() => setExperiencesOpen(!experiencesOpen)}
              >
                <span>Experiences</span>
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${experiencesOpen ? 'rotate-180 text-amber-400' : ''}`}></i>
              </button>

              {experiencesOpen && (
                <div className="absolute top-full left-0 w-80 bg-stone-900/98 backdrop-blur-md border border-stone-800 rounded-xl shadow-2xl p-4 space-y-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {experiences.map((exp) => (
                    <Link
                      key={exp.path}
                      to={exp.path}
                      className="block p-2 rounded-lg hover:bg-stone-800/70 transition-colors group"
                      onClick={() => setExperiencesOpen(false)}
                    >
                      <span className="text-sm font-medium text-stone-200 group-hover:text-amber-400 block">{exp.name}</span>
                      <span className="text-xs text-stone-400 block">{exp.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Heritage Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHeritageOpen(true)}
              onMouseLeave={() => setHeritageOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2 focus:outline-none"
                onClick={() => setHeritageOpen(!heritageOpen)}
              >
                <span>Heritage</span>
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${heritageOpen ? 'rotate-180 text-amber-400' : ''}`}></i>
              </button>

              {heritageOpen && (
                <div className="absolute top-full left-0 w-80 bg-stone-900/98 backdrop-blur-md border border-stone-800 rounded-xl shadow-2xl p-4 space-y-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {heritage.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-2 rounded-lg hover:bg-stone-800/70 transition-colors group"
                      onClick={() => setHeritageOpen(false)}
                    >
                      <span className="text-sm font-medium text-stone-200 group-hover:text-amber-400 block">{item.name}</span>
                      <span className="text-xs text-stone-400 block">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${location.pathname === '/about' ? 'text-amber-400 font-semibold' : ''}`}
            >
              About
            </Link>

            <Link 
              to="/services" 
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${location.pathname === '/services' ? 'text-amber-400 font-semibold' : ''}`}
            >
              Services
            </Link>

            <Link 
              to="/contact" 
              className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${location.pathname === '/contact' ? 'text-amber-400 font-semibold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Zone 3: 1 Primary Action + Clean Account Controls */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link 
                  to="/booking-form"
                  className="text-xs font-semibold text-stone-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <i className="fas fa-ticket-alt text-amber-500"></i>
                  <span>My Bookings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 text-xs text-stone-400 hover:text-rose-400 transition-colors"
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-xs font-semibold text-stone-300 hover:text-amber-400 transition-colors whitespace-nowrap"
              >
                Sign In
              </Link>
            )}

            <Link
              to="/booking"
              className="px-4 py-2 text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 rounded-lg shadow-sm transition-all transform active:scale-95 whitespace-nowrap shrink-0"
            >
              Book Tour
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              to="/booking"
              className="px-3 py-1.5 text-xs font-bold text-stone-950 bg-amber-400 rounded-md whitespace-nowrap shrink-0"
            >
              Book
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Adhering to <=15% height rule & uncluttered) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3 text-sm">
            <Link to="/" className="text-stone-200 py-1 border-b border-stone-800">Home</Link>
            <Link to="/about" className="text-stone-200 py-1 border-b border-stone-800">About Wander Ethio</Link>
            <Link to="/services" className="text-stone-200 py-1 border-b border-stone-800">Travel Services</Link>
            
            <div className="py-2 border-b border-stone-800">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block mb-2">Destinations</span>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 pl-2">
                <Link to="/destination/lalibela" className="py-1 hover:text-amber-400">Lalibela</Link>
                <Link to="/destination/semenMountains" className="py-1 hover:text-amber-400">Simien Mountains</Link>
                <Link to="/destination/gondar" className="py-1 hover:text-amber-400">Gondar</Link>
                <Link to="/destination/omo" className="py-1 hover:text-amber-400">Omo Valley</Link>
                <Link to="/destination/axum" className="py-1 hover:text-amber-400">Axum</Link>
                <Link to="/destination/harar" className="py-1 hover:text-amber-400">Harar</Link>
                <Link to="/destination/bahirdar" className="py-1 hover:text-amber-400">Bahir Dar</Link>
                <Link to="/destination/bale" className="py-1 hover:text-amber-400">Bale Mountains</Link>
              </div>
            </div>

            <div className="py-2 border-b border-stone-800">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block mb-2">Experiences & Heritage</span>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 pl-2">
                <Link to="/todo/hiking" className="py-1 hover:text-amber-400">Trekking & Hiking</Link>
                <Link to="/todo/Cultural-Tours" className="py-1 hover:text-amber-400">Cultural Tours</Link>
                <Link to="/todo/Wildlife" className="py-1 hover:text-amber-400">Wildlife Safaris</Link>
                <Link to="/additionals/foods" className="py-1 hover:text-amber-400">Ethiopian Cuisine</Link>
                <Link to="/additionals/dressings" className="py-1 hover:text-amber-400">Traditional Attire</Link>
                <Link to="/additionals/musics" className="py-1 hover:text-amber-400">Music & Arts</Link>
              </div>
            </div>

            <Link to="/contact" className="text-stone-200 py-1 border-b border-stone-800">Contact & Support</Link>
            <Link to="/ask" className="text-stone-200 py-1 border-b border-stone-800">Ask a Question</Link>

            <div className="pt-2 flex items-center justify-between">
              {isLoggedIn ? (
                <div className="flex items-center justify-between w-full">
                  <Link to="/booking-form" className="text-amber-400 font-semibold text-xs">My Account</Link>
                  <button onClick={handleLogout} className="text-rose-400 text-xs">Log out</button>
                </div>
              ) : (
                <div className="flex items-center gap-3 w-full">
                  <Link to="/login" className="text-stone-200 text-xs py-2 px-3 border border-stone-700 rounded-md flex-1 text-center">Sign In</Link>
                  <Link to="/register" className="text-amber-400 text-xs py-2 px-3 border border-amber-500/40 rounded-md flex-1 text-center">Register</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
