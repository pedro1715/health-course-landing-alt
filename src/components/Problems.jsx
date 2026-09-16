import React from 'react';
import DotMatrixPattern from './DotMatrixPattern.jsx';
import ConcentricRings from './ConcentricRings.jsx';

const MARQUEE_ITEMS = [
  'ВІДНОВЛЕННЯ СНУ 💤',
  'РІВЕНЬ ЕНЕРГІЇ ⚡',
  'ДЕФІЦИТ ВІТАМІНІВ 💊',
  'ГОРМОНАЛЬНИЙ БАЛАНС ⚖️',
  'ЗДОРОВЕ ТРАВЛЕННЯ 🌿',
  'КОНЦЕНТРАЦІЯ УВАГИ 🧠',
  'ЗНИЖЕННЯ СТРЕСУ 🛡️',
  'ІМУННИЙ ЗАХИСТ 🛡️',
];

export default function Problems() {
  return (
    <section id="problems" className="relative py-28 lg:py-36 bg-grain-blue text-white overflow-hidden">
      
      {/* Dot matrix radial background */}
      <DotMatrixPattern />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-yellow">
              Клінічна логіка
            </span>
          </div>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Опоненти вашого самопочуття:<br />
            <span className="font-serif italic font-normal text-yellow">чому звичайний відпочинок не допомагає?</span>
          </h2>
          <p className="text-white/70 font-sans text-base sm:text-lg max-w-2xl mx-auto">
            Організм працює за біологічними годинниками. Світло екранів, прихована тривога та дефіцити збивають внутрішній ритм.
          </p>
        </div>

        {/* Main Graphic Section: Concentric Rings + Callout Points */}
        <div className="relative my-12">
          
          {/* Top Left Callout Text Box */}
          <div className="absolute top-4 left-4 sm:left-12 lg:left-24 z-20 max-w-xs glass-card-navy p-5 rounded-2xl border border-white/15 shadow-float hidden md:block">
            <span className="text-[11px] font-bold text-yellow uppercase tracking-wider block mb-1">
              БІОЛОГІЧНИЙ ЗБІЙ
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              Синє світло від моніторів та телефонів блокує виділення мелатоніну. Для мозку о півночі — це все ще сонячний ранок.
            </p>
          </div>

          {/* Bottom Left Callout Text Box */}
          <div className="absolute bottom-12 left-4 sm:left-12 lg:left-24 z-20 max-w-xs glass-card-navy p-5 rounded-2xl border border-white/15 shadow-float hidden md:block">
            <span className="text-[11px] font-bold text-yellow uppercase tracking-wider block mb-1">
              ПРИХОВАНІ ДЕФІЦИТИ
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              Навіть 8 годин сну не повертають енергію, якщо клітинам бракує коферментів та мікроелементів для клітинного дихання.
            </p>
          </div>

          {/* Top Right Callout Text Box */}
          <div className="absolute top-4 right-4 sm:right-12 lg:right-24 z-20 max-w-xs glass-card-navy p-5 rounded-2xl border border-white/15 shadow-float hidden md:block">
            <span className="text-[11px] font-bold text-yellow uppercase tracking-wider block mb-1">
              РЕАКЦІЯ ТІЛА НА СВІТЛО
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              Тепле світло дає сигнал "Час відпочинку". Холодне світло екрану говорить вашим наднирникам: "За залишок дня тримай бадьорість!".
            </p>
          </div>

          {/* Bottom Right Callout Text Box */}
          <div className="absolute bottom-12 right-4 sm:right-12 lg:right-24 z-20 max-w-xs glass-card-navy p-5 rounded-2xl border border-white/15 shadow-float hidden md:block">
            <span className="text-[11px] font-bold text-yellow uppercase tracking-wider block mb-1">
              СИНХРОНІЗАЦІЯ РИТМІВ
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              Коли циркадні ритми відновлюються, глибокий сон повертається за 7-10 дней без фармакології.
            </p>
          </div>

          {/* Central 3D Concentric Planet Rings SVG */}
          <ConcentricRings />
        </div>

      </div>

      {/* Infinite Marquee Running Banner */}
      <div className="mt-20 border-y border-white/10 py-5 bg-navy-deep/60 backdrop-blur-md overflow-hidden">
        <div className="flex w-max animate-marquee space-x-6">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-sans font-semibold tracking-wider text-white/90 whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

