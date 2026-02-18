'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { portfolio } from '@/data/portfolio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#home"
            className="text-2xl font-bold text-blue-600"
          >
            NB
          </Link>
          
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#education" className="text-gray-700 hover:text-blue-600 transition">Education</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          <Link
            href={`mailto:${portfolio.personal.email}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
