import React, { useState, useEffect } from 'react';
import { useApp } from '../App.jsx';

const NAV = [
  { label: 'Чому ми', href: '#problems' },
  { label: 'Методологія', href: '#methodology' },
  { label: 'Програма', href: '#program' },
  { label: 'Про лікаря', href: '#about' },
  { label: 'Відгуки', href: '#testimonials' },
];

export default function Header() {
  const { openForm } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-5 px-4 sm:px-8 transition-all duration-300">
      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-6 py-3 flex items-center justify-between ${
        scrolled ? 'glass-header shadow-float' : 'bg-sand/80 backdrop-blur-md border border-navy/5'
      }`}>

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-sm shadow-sm">
            ЮН
          </div>
          <span className="font-display font-bold text-navy text-lg tracking-tight">
            Юлія Негрієнко<span className="text-yellow">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={e => go(e, n.href)}
               className="text-sm font-sans font-medium text-navy/70 hover:text-navy transition-colors duration-200">
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={openForm} className="btn-dark text-xs py-2.5 px-6">
            Записатися в бета →
          </button>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-full bg-white/60 border border-navy/10" aria-label="Меню">
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block w-5 h-0.5 bg-navy transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-navy transition-all ${open ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-navy transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}/>
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden mt-2 rounded-3xl overflow-hidden transition-all duration-300 glass-header shadow-deep max-w-6xl mx-auto ${open ? 'max-h-96 opacity-100 p-6' : 'max-h-0 opacity-0 p-0'}`}>
        <nav className="flex flex-col gap-2">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={e => go(e, n.href)}
               className="text-base font-sans font-medium text-navy py-2.5 border-b border-navy/5 last:border-0">
              {n.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); openForm(); }} className="btn-dark mt-4 w-full py-3.5 justify-center">
            Записатися на курс →
          </button>
        </nav>
      </div>
    </header>
  );
}

