'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home', icon: 'home' },
  { href: '#services', label: 'Services', icon: 'briefcase' },
  { href: '#projects', label: 'Projects', icon: 'code' },
  { href: '#education', label: 'Education', icon: 'book' },
  { href: '#contact', label: 'Contact', icon: 'mail' },
];

export function BottomNav() {
  const [active, setActive] = useState('home');

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'home':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v7a1 1 0 001 1h12a1 1 0 001-1V9m-9 9l-1 1m6-6l1 1" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m0 0v10l8 4" />
          </svg>
        );
      case 'code':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'book':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25s4.5 11 10 11.25m0-13c5.5-.25 10-4.998 10-11.25S17.5 5.75 12 5.75" />
          </svg>
        );
      case 'mail':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around items-center h-16 max-w-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setActive(item.label.toLowerCase())}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              active === item.label.toLowerCase()
                ? 'text-blue-600 border-t-2 border-t-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {getIcon(item.icon)}
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
