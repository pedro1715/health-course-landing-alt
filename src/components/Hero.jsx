import React, { useState } from 'react';
import { useApp } from '../App.jsx';

const AVATARS = [
  { bg: 'bg-navy',   label: 'МК' },
  { bg: 'bg-yellow', label: 'ОП' },
  { bg: 'bg-green',  label: 'АС' },
];

const MODULES = ['Харчування 🌿', 'Сон 💤', 'Рух 🏃', 'Стрес 🧠'];

export default function Hero() {
  const { openForm } = useApp();
  const [email, setEmail] = useState('');
  const scroll = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = (e) => {
    e.preventDefault();
    openForm();
  };

  return (
    <section id="hero" className="relative min-h-[92vh] bg-grain-sand overflow-hidden pt-28 md:pt-36 pb-20 md:pb-32 flex items-center">
      
      {/* Background ambient blur circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-yellow/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-center">

          {/* LEFT: Content & Email Form */}
          <div>
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-navy/15 bg-white/70 backdrop-blur-md mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-green animate-pulse" />
              <span className="text-xs font-sans font-semibold tracking-wide text-navy uppercase">
                Персоналізований курс здоров'я
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 max-w-2xl leading-[1.1]">
              Здоров'я як рутина,<br />
              <span className="text-navy font-serif italic font-normal">а не як випадкова подія</span>
              <span className="text-yellow">.</span>
            </h1>

            {/* Subheading */}
            <p className="text-muted-dark font-sans text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Отримай індивідуальні протоколи харчування, сну та відновлення, 
              розроблені спеціально під <strong className="text-navy font-semibold">твої унікальні показники та цілі</strong>.
            </p>

            {/* Email whitelist form (Jane app style) */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 mb-10 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Твоя електронна пошта"
                className="flex-1 px-6 py-4 rounded-full bg-white/90 border border-navy/15 text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 transition-all text-sm shadow-sm"
                required
              />
              <button type="submit" className="btn-dark whitespace-nowrap shadow-float">
                Хочу в бета →
              </button>
            </form>

            {/* Stats Badge */}
            <div className="inline-flex items-center gap-5 px-6 py-3.5 rounded-full bg-white/80 border border-navy/10 backdrop-blur-md shadow-card">
              <div className="flex -space-x-2.5">
                {AVATARS.map((a, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${a.bg} flex items-center justify-center text-[10px] font-bold ${a.bg === 'bg-yellow' ? 'text-navy' : 'text-white'}`}>
                    {a.label}
                  </div>
                ))}
              </div>
              <div className="text-xs font-sans">
                <span className="font-display font-bold text-navy text-sm mr-1.5">500+</span>
                <span className="text-muted-dark">вже проходять практику</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Doctor photo & Floating Glass Cards */}
          <div className="relative mt-6 lg:mt-0">
            {/* Doctor Photo Wrapper */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-deep border-4 border-white/80">
              <img src="/doctor-photo.svg" alt="Юлія Негрієнко" className="w-full h-full object-cover object-top" />
              
              {/* Bottom Card Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-6 pt-16">
                <div className="text-white">
                  <p className="text-xs font-sans text-yellow font-medium uppercase tracking-wider mb-1">
                    Лікар-терапевт & нутриціолог
                  </p>
                  <h3 className="text-xl font-display font-bold">Юлія Негрієнко</h3>
                </div>
              </div>
            </div>

            {/* Floating Glass Pill 1: Top Left */}
            <div className="absolute -top-4 -left-4 sm:-left-8 glass-card-light rounded-2xl p-4 shadow-float max-w-[200px] hidden sm:block">
              <p className="text-[11px] font-semibold text-navy uppercase tracking-wider mb-1">Клінічний підхід</p>
              <p className="text-xs text-muted-dark leading-snug">Аналізи, симптоми та харчування в єдиній системі</p>
            </div>

            {/* Floating Glass Pill 2: Bottom Right */}
            <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 glass-card-light rounded-2xl p-4 shadow-float w-48 hidden sm:block">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-navy/10">
                <span className="text-xs font-bold text-navy">Модулі програми</span>
                <span className="w-2 h-2 rounded-full bg-green" />
              </div>
              <div className="space-y-1.5">
                {MODULES.map(m => (
                  <div key={m} className="text-xs text-navy/80 font-medium">{m}</div>
                ))}
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 left-6 glass-card-navy text-white rounded-2xl px-5 py-3 shadow-float text-center">
              <div className="font-display font-bold text-2xl text-yellow">12 років</div>
              <div className="text-[11px] text-white/70 font-sans">практичного досвіду</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

