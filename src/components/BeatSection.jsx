import React from 'react';
import PulseWaveGraphic from './PulseWaveGraphic.jsx';

export default function BeatSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-grain-blue text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono font-bold text-yellow">
              02
            </div>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-white/70">
              Циркадні ритми & пульс
            </span>
          </div>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white max-w-xl text-right md:text-right leading-tight">
            Важливість правильного<br />
            <span className="font-serif italic font-normal text-yellow">біологічного ритму</span>.
          </h2>
        </div>

        {/* Central Active Pulsating Wave Graphic */}
        <div className="my-12">
          <PulseWaveGraphic />
        </div>

        {/* Bottom Callouts Row */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-12">
          
          {/* Left Text Box */}
          <div className="glass-card-navy p-8 rounded-3xl border border-white/15 shadow-float">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-yellow animate-ping" />
              <span className="text-xs font-bold text-yellow uppercase tracking-widest">
                ВНУТРІШНІЙ ПУЛЬС ТІЛА
              </span>
            </div>
            <p className="text-sm text-white/80 font-sans leading-relaxed">
              Серце задає темп кожній клітинній системі. При тривозі чи надлишку кофеїну пульс прискорюється. 
              Вночі серцевий ритм повинен спокійно знижуватись, запускаючи відновлення мелатоніну.
            </p>
          </div>

          {/* Right Text Box */}
          <div className="glass-card-navy p-8 rounded-3xl border border-white/15 shadow-float">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-sky animate-ping" />
              <span className="text-xs font-bold text-sky uppercase tracking-widest">
                СТАБІЛЬНИЙ РИТМ = ГЛИБОКИЙ ВІДПОЧИНОК
              </span>
            </div>
            <p className="text-sm text-white/80 font-sans leading-relaxed">
              Ритмічність — це не просто здоров'я, це біологічна гармонія. Глибоке повільне дихання та приглушене світло 
              повертають ваш внутрішній метроном до ідеальної норми.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
