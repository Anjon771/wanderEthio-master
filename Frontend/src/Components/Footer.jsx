import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white group">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 via-amber-500 to-emerald-600 flex items-center justify-center text-stone-950 font-black text-sm">
                WE
              </span>
              <span className="font-['Outfit'] font-bold text-xl text-stone-100">
                Wander<span className="text-amber-500">Ethio</span>
              </span>
            </Link>
            
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Ethiopia's premier cultural tourism and wilderness expedition collective. Dedicated to regenerative travel, cultural preservation, and unforgettable journeys across the Horn of Africa.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-amber-500 w-4"></i>
                <span>Churchill Avenue, Post Office Square, Addis Ababa</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-phone-alt text-amber-500 w-4"></i>
                <span>+251 956 319 463 / +251 115 517 999</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-envelope text-amber-500 w-4"></i>
                <span>expeditions@wanderethio.org</span>
              </p>
            </div>
          </div>

          {/* Col 2: Historic Circuits */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-4">
              Iconic Circuits
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link to="/destination/lalibela" className="hover:text-amber-400 transition-colors">Lalibela Rock Churches</Link></li>
              <li><Link to="/destination/semenMountains" className="hover:text-amber-400 transition-colors">Simien Mountains Alpine</Link></li>
              <li><Link to="/destination/gondar" className="hover:text-amber-400 transition-colors">Royal Gondar Castles</Link></li>
              <li><Link to="/destination/axum" className="hover:text-amber-400 transition-colors">Axum Obelisks & Ruins</Link></li>
              <li><Link to="/destination/bahirdar" className="hover:text-amber-400 transition-colors">Lake Tana Monasteries</Link></li>
              <li><Link to="/destination/harar" className="hover:text-amber-400 transition-colors">Harar Jugol Walled City</Link></li>
            </ul>
          </div>

          {/* Col 3: Experiences & Heritage */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-4">
              Travel Themes
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link to="/destination/omo" className="hover:text-amber-400 transition-colors">Omo Valley Tribes</Link></li>
              <li><Link to="/destination/bale" className="hover:text-amber-400 transition-colors">Bale Mountains Wildlife</Link></li>
              <li><Link to="/todo/hiking" className="hover:text-amber-400 transition-colors">Highland Trekking</Link></li>
              <li><Link to="/todo/Cultural-Tours" className="hover:text-amber-400 transition-colors">Cultural & Coffee Tours</Link></li>
              <li><Link to="/additionals/foods" className="hover:text-amber-400 transition-colors">Traditional Gastronomy</Link></li>
              <li><Link to="/additionals/dressings" className="hover:text-amber-400 transition-colors">Habesha Textile Arts</Link></li>
            </ul>
          </div>

          {/* Col 4: Traveler Services & Planning */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-4">
              Planning & Support
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link to="/booking" className="hover:text-amber-400 transition-colors">Plan & Book a Tour</Link></li>
              <li><Link to="/register" className="hover:text-amber-400 transition-colors">Traveler Registration</Link></li>
              <li><Link to="/login" className="hover:text-amber-400 transition-colors">Member Sign In</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Private Guided Expeditions</Link></li>
              <li><Link to="/ask" className="hover:text-amber-400 transition-colors">Travel Inquiries & FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-amber-400 transition-colors">Terms & Traveler Safety</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Trust */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Wander Ethio & Ethiopian Tourism Organization. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
            <span aria-hidden="true" className="text-stone-700">·</span>
            <Link to="/terms" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
            <span aria-hidden="true" className="text-stone-700">·</span>
            <span className="text-amber-500/90 font-medium">Licensed Tour Operator No. ET-TO-4921</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
