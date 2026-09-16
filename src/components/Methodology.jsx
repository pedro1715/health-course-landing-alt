import React from 'react';

const STEPS = [
  {
    n: '01',
    badge: 'КРОК 1',
    emoji: '📋',
    title: 'Розкажіть про свої звички та скарги',
    subtitle: 'Анкета від лікаря',
    desc: 'Детальна діагностика вашого способу життя, рівня стресу, сну та скарг. Асистент врахує все в індивідуальній програмі.',
    bg: 'bg-white',
    textColor: 'text-navy',
    badgeBg: 'bg-sand border-navy/10 text-navy',
  },
  {
    n: '02',
    badge: 'КРОК 2',
    emoji: '🩸',
    title: 'Персоналізований список аналізів',
    subtitle: 'Лабораторний чек',
    desc: 'Тільки ті показники, які потрібні саме вам на основі анкети. Здайте у будь-якій зручній лабораторії та завантажте результат.',
    bg: 'bg-[#F4F8FE]',
    textColor: 'text-navy',
    badgeBg: 'bg-white border-navy/10 text-navy',
  },
  {
    n: '03',
    badge: 'КРОК 3',
    emoji: '🔍',
    title: 'Розшифровка для вас, а не для лікаря',
    subtitle: 'Клінічна аналітика',
    desc: 'Не просто "В нормі / Не в нормі", а детальний разбір: як саме ваші показники впливають на самопочуття, вагу та енергію.',
    bg: 'bg-navy',
    textColor: 'text-white',
    badgeBg: 'bg-white/10 border-white/20 text-yellow',
  },
  {
    n: '04',
    badge: 'КРОК 4',
    emoji: '🎯',
    title: 'Конкретний план дій та добавок',
    subtitle: 'Персональний протокол',
    desc: 'Чіткі рекомендації: які добавки і навіщо вживати, що змінити в харчуванні та які звички впровадити першими.',
    bg: 'bg-[#FFFBEA]',
    textColor: 'text-navy',
    badgeBg: 'bg-yellow/20 border-yellow text-navy',
  },
  {
    n: '05',
    badge: 'КРОК 5',
    emoji: '📈',
    title: 'Вимірюваний результат та динаміка',
    subtitle: 'Супровід і результат',
    desc: 'Відстежуємо динаміку вашого стану, порівнюємо повторні аналізи та фіксуємо покращення.',
    bg: 'bg-white',
    textColor: 'text-navy',
    badgeBg: 'bg-green/10 border-green/20 text-green',
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="relative py-28 lg:py-36 bg-grain-sand">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-navy/15 bg-white/80 backdrop-blur-md mb-6">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-navy">
              5 КРОКІВ ДО СИСТЕМИ
            </span>
          </div>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            Як відбувається <br />
            <span className="font-serif italic font-normal text-navy">ваша трансформація</span>
            <span className="text-yellow">.</span>
          </h2>
          <p className="text-muted-dark font-sans text-base sm:text-lg max-w-xl mx-auto">
            Покроковий шлях від незрозумілих симптомів до чіткого персонального плану дій.
          </p>
        </div>

        {/* Sticky Card Stack Container */}
        <div className="space-y-6 relative pb-12">
          {STEPS.map((s, index) => (
            <div
              key={s.n}
              style={{
                top: `${100 + index * 24}px`,
              }}
              className={`sticky z-${(index + 1) * 10} rounded-[2.5rem] p-8 md:p-12 shadow-float border border-navy/10 transition-all duration-300 ${s.bg} ${s.textColor}`}
            >
              <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 items-center">
                
                {/* Left Info */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${s.badgeBg}`}>
                      {s.badge}
                    </span>
                    <span className="text-3xl">{s.emoji}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm font-semibold opacity-75 mb-4">
                    {s.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed opacity-85 font-sans">
                    {s.desc}
                  </p>
                </div>

                {/* Right Interactive Graphic Box */}
                <div className="rounded-2xl bg-black/5 p-6 border border-black/5 flex items-center justify-center min-h-[160px]">
                  <div className="text-center">
                    <div className="font-display font-bold text-5xl mb-2 opacity-30">{s.n}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider opacity-60">Етап практики</div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

