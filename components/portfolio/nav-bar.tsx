// components/portfolio/nav-bar.tsx
import React from 'react';

export function NavBar() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-10 bg-white px-8 py-3 rounded-full shadow-lg border border-gray-200">
        
        {/* Logo[cite: 4] */}
        <a href="#Hero" className="font-bold text-2xl  font-jaro  text-black">
          SHAN
        </a>

        {/* Navigation Links[cite: 4] */}
        <div className="flex items-center gap-6 text-base font-medium text-black font-mono">
          <a href="#About" className="hover:text-gray-500 transition-colors">
            About
          </a>
          {/* Maps to your #Technologies section */}
          <a href="#Technologies" className="hover:text-gray-500 transition-colors">
            Skills
          </a>
          <a href="#Projects" className="hover:text-gray-500 transition-colors">
            Projects
          </a>
          <a href="#Contact" className="hover:text-gray-500 transition-colors">
            Contact
          </a>
        </div>
        
      </div>
    </nav>
  );
}