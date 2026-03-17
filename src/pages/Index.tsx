import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  { id: 0, label: "ВВЕДЕНИЕ", code: "SL-01" },
  { id: 1, label: "МАШИНА ОБВЯЗКИ", code: "SL-02" },
  { id: 2, label: "ЭЛЕКТРООБОРУДОВАНИЕ", code: "SL-03" },
  { id: 3, label: "СТРУКТУРА КОЛЛЕКТИВА", code: "SL-04" },
  { id: 4, label: "ПРОЦЕСС РЕМОНТА", code: "SL-05" },
  { id: 5, label: "ИНСТРУМЕНТЫ И МАТЕРИАЛЫ", code: "SL-06" },
  { id: 6, label: "ВЫВОДЫ", code: "SL-07" },
];

function CircuitDecor({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="280" height="180" viewBox="0 0 280 180" fill="none">
      <line x1="10" y1="40" x2="80" y2="40" stroke="rgba(0,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="80" cy="40" r="4" stroke="rgba(0,255,255,0.3)" strokeWidth="1" fill="rgba(0,255,255,0.08)" />
      <line x1="80" y1="40" x2="80" y2="100" stroke="rgba(0,255,255,0.15)" strokeWidth="1" />
      <line x1="80" y1="100" x2="160" y2="100" stroke="rgba(0,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      <rect x="155" y="85" width="28" height="28" stroke="rgba(0,255,255,0.25)" strokeWidth="1" fill="none" />
      <line x1="183" y1="99" x2="240" y2="99" stroke="rgba(0,255,255,0.15)" strokeWidth="1" />
      <circle cx="240" cy="99" r="4" stroke="rgba(0,255,255,0.3)" strokeWidth="1" fill="rgba(0,255,255,0.08)" />
      <line x1="240" y1="99" x2="240" y2="160" stroke="rgba(0,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="115" y1="40" x2="190" y2="40" stroke="rgba(0,255,255,0.1)" strokeWidth="1" />
      <circle cx="115" cy="40" r="3" fill="rgba(0,255,255,0.3)" />
      <line x1="115" y1="40" x2="115" y2="68" stroke="rgba(0,255,255,0.1)" strokeWidth="1" />
      <rect x="104" y="68" width="22" height="11" stroke="rgba(0,255,255,0.25)" strokeWidth="1" fill="none" />
    </svg>
  );
}

function ElectricalDiagram() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 280" fill="none">
      <rect x="20" y="110" width="58" height="58" rx="2" stroke="rgba(0,255,255,0.5)" strokeWidth="1.5" fill="rgba(0,255,255,0.04)" />
      <text x="49" y="133" textAnchor="middle" fill="rgba(0,255,255,0.7)" fontSize="9" fontFamily="Share Tech Mono">~380V</text>
      <text x="49" y="146" textAnchor="middle" fill="rgba(0,255,255,0.5)" fontSize="8" fontFamily="Share Tech Mono">50Hz</text>
      <text x="49" y="158" textAnchor="middle" fill="rgba(0,255,255,0.4)" fontSize="7" fontFamily="Share Tech Mono">ИП</text>
      <line x1="78" y1="125" x2="138" y2="125" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5" />
      <line x1="78" y1="155" x2="138" y2="155" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5" />
      <rect x="138" y="112" width="40" height="58" rx="2" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" fill="rgba(251,191,36,0.04)" />
      <line x1="148" y1="125" x2="168" y2="135" stroke="rgba(251,191,36,0.7)" strokeWidth="1.5" />
      <line x1="168" y1="135" x2="168" y2="155" stroke="rgba(251,191,36,0.3)" strokeWidth="1" />
      <text x="158" y="162" textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize="7" fontFamily="Share Tech Mono">QF1</text>
      <line x1="178" y1="125" x2="238" y2="125" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5" />
      <line x1="178" y1="155" x2="238" y2="155" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5" />
      <rect x="238" y="100" width="50" height="78" rx="2" stroke="rgba(0,255,255,0.5)" strokeWidth="1.5" fill="rgba(0,255,255,0.04)" />
      <circle cx="250" cy="125" r="4" stroke="rgba(0,255,255,0.5)" strokeWidth="1" fill="none" />
      <circle cx="250" cy="155" r="4" stroke="rgba(0,255,255,0.5)" strokeWidth="1" fill="none" />
      <circle cx="276" cy="125" r="4" stroke="rgba(0,255,255,0.5)" strokeWidth="1" fill="none" />
      <circle cx="276" cy="155" r="4" stroke="rgba(0,255,255,0.5)" strokeWidth="1" fill="none" />
      <text x="263" y="143" textAnchor="middle" fill="rgba(0,255,255,0.6)" fontSize="7" fontFamily="Share Tech Mono">KM1</text>
      <line x1="288" y1="125" x2="340" y2="125" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5" />
      <line x1="288" y1="155" x2="340" y2="155" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5" />
      <rect x="328" y="107" width="22" height="68" rx="2" stroke="rgba(239,68,68,0.4)" strokeWidth="1" fill="rgba(239,68,68,0.04)" />
      <text x="339" y="148" textAnchor="middle" fill="rgba(239,68,68,0.6)" fontSize="6" fontFamily="Share Tech Mono" transform="rotate(-90 339 148)">KK1</text>
      <circle cx="388" cy="140" r="44" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5" fill="rgba(0,255,255,0.03)" />
      <circle cx="388" cy="140" r="34" stroke="rgba(0,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <text x="388" y="136" textAnchor="middle" fill="rgba(0,255,255,0.8)" fontSize="12" fontFamily="Share Tech Mono">M</text>
      <text x="388" y="150" textAnchor="middle" fill="rgba(0,255,255,0.5)" fontSize="8" fontFamily="Share Tech Mono">3~</text>
      <text x="388" y="197" textAnchor="middle" fill="rgba(0,255,255,0.35)" fontSize="7" fontFamily="Share Tech Mono">АД 4кВт</text>
      <line x1="350" y1="125" x2="346" y2="125" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5" />
      <line x1="350" y1="155" x2="346" y2="155" stroke="rgba(0,255,255,0.4)" strokeWidth="1.5" />
      <line x1="388" y1="184" x2="388" y2="218" stroke="rgba(0,255,255,0.25)" strokeWidth="1" />
      <line x1="374" y1="218" x2="402" y2="218" stroke="rgba(0,255,255,0.35)" strokeWidth="1.5" />
      <line x1="379" y1="224" x2="397" y2="224" stroke="rgba(0,255,255,0.25)" strokeWidth="1" />
      <line x1="384" y1="230" x2="392" y2="230" stroke="rgba(0,255,255,0.15)" strokeWidth="1" />
      <text x="49" y="92" textAnchor="middle" fill="rgba(0,255,255,0.25)" fontSize="6" fontFamily="Share Tech Mono">ИП</text>
      <text x="158" y="92" textAnchor="middle" fill="rgba(251,191,36,0.25)" fontSize="6" fontFamily="Share Tech Mono">АВТОМАТ</text>
      <text x="263" y="88" textAnchor="middle" fill="rgba(0,255,255,0.25)" fontSize="6" fontFamily="Share Tech Mono">КОНТАКТОР</text>
      <text x="388" y="88" textAnchor="middle" fill="rgba(0,255,255,0.25)" fontSize="6" fontFamily="Share Tech Mono">ДВИГАТЕЛЬ</text>
    </svg>
  );
}

function OrgChart() {
  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="50" y1="16" x2="16" y2="42" stroke="rgba(0,255,255,0.2)" strokeWidth="0.4" strokeDasharray="2 2" />
        <line x1="50" y1="16" x2="50" y2="42" stroke="rgba(0,255,255,0.2)" strokeWidth="0.4" strokeDasharray="2 2" />
        <line x1="50" y1="16" x2="84" y2="42" stroke="rgba(0,255,255,0.2)" strokeWidth="0.4" strokeDasharray="2 2" />
        <line x1="50" y1="58" x2="50" y2="78" stroke="rgba(251,191,36,0.15)" strokeWidth="0.4" strokeDasharray="2 2" />
      </svg>
      {[
        { label: "Мастер участка", x: 50, y: 9, color: "rgba(0,255,255,0.85)", bg: "rgba(0,255,255,0.08)" },
        { label: "Электрослесарь 5р.", x: 16, y: 50, color: "rgba(0,255,255,0.65)", bg: "rgba(0,255,255,0.05)" },
        { label: "Электрослесарь 4р.", x: 50, y: 50, color: "rgba(0,255,255,0.55)", bg: "rgba(0,255,255,0.04)" },
        { label: "Электрослесарь 3р.", x: 84, y: 50, color: "rgba(0,255,255,0.45)", bg: "rgba(0,255,255,0.03)" },
        { label: "Снабжение / кладовщик", x: 50, y: 88, color: "rgba(251,191,36,0.7)", bg: "rgba(251,191,36,0.05)" },
      ].map((n) => (
        <div
          key={n.label}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 px-2 py-1.5 tech-border text-center"
          style={{ left: `${n.x}%`, top: `${n.y}%`, minWidth: "100px", background: n.bg }}
        >
          <div className="font-mono-tech text-xs" style={{ color: n.color, fontSize: "10px" }}>{n.label}</div>
        </div>
      ))}
    </div>
  );
}

function ProcessTimeline() {
  const steps = [
    { num: "01", title: "Диагностика", desc: "Визуальный осмотр, измерения сопротивлений, проверка цепей управления", color: "rgba(0,255,255,0.8)" },
    { num: "02", title: "Отключение", desc: "Снятие напряжения, установка заземления, вывеска предупреждений", color: "rgba(239,68,68,0.8)" },
    { num: "03", title: "Демонтаж", desc: "Разборка узлов, маркировка проводов, фиксация монтажных схем", color: "rgba(251,191,36,0.8)" },
    { num: "04", title: "Ремонт", desc: "Замена деталей, перемотка обмоток, пайка и восстановление контактов", color: "rgba(0,255,255,0.8)" },
    { num: "05", title: "Монтаж", desc: "Сборка, подключение согласно схемам, затяжка контактных соединений", color: "rgba(251,191,36,0.8)" },
    { num: "06", title: "Испытание", desc: "Проверка изоляции (R≥1МОм), пробный пуск, настройка защит", color: "rgba(34,197,94,0.8)" },
  ];
  return (
    <div className="grid grid-cols-3 gap-3 w-full h-full">
      {steps.map((s, i) => (
        <div
          key={s.num}
          className="tech-border p-3 animate-fade-up"
          style={{ animationDelay: `${i * 0.08}s`, background: "rgba(0,0,20,0.4)" }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono-tech text-xs opacity-50" style={{ color: s.color }}>{s.num}</span>
            <span className="font-display font-semibold text-sm" style={{ color: s.color }}>{s.title}</span>
          </div>
          <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(180,230,230,0.5)" }}>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

function ToolsGrid() {
  const cats = [
    { cat: "ИЗМЕРИТЕЛЬНЫЕ", items: ["Мегаомметр М4100", "Мультиметр DT-9205A", "Токоизмерительные клещи", "Фазоуказатель ФУ-2"], color: "rgba(0,255,255,0.7)" },
    { cat: "СЛЕСАРНЫЕ", items: ["Набор отвёрток (6 шт)", "Ключи рожковые 6–32мм", "Пассатижи, кусачки", "Молоток, зубило"], color: "rgba(251,191,36,0.7)" },
    { cat: "ЭЛЕКТРОМОНТАЖНЫЕ", items: ["Пресс-клещи КВТ", "Стриппер для кабеля", "Паяльник 40/60 Вт", "Термо-усадочная трубка"], color: "rgba(0,255,255,0.7)" },
    { cat: "РАСХОДНЫЕ МАТЕРИАЛЫ", items: ["Провод ПВС 1.5–4 мм²", "Контакторы КМИ-09310", "Автоматы ВА47-29", "Смазка ЦИАТИМ-201"], color: "rgba(34,197,94,0.7)" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {cats.map((t, i) => (
        <div
          key={t.cat}
          className="tech-border p-3 animate-fade-up"
          style={{ animationDelay: `${i * 0.1}s`, background: "rgba(0,0,20,0.4)" }}
        >
          <div className="font-mono-tech text-xs mb-2 pb-1.5 border-b" style={{ color: t.color, borderColor: t.color.replace("0.7", "0.15") }}>
            {t.cat}
          </div>
          <ul className="space-y-1">
            {t.items.map((item) => (
              <li key={item} className="flex items-center gap-2 font-body text-xs" style={{ color: "rgba(180,230,230,0.55)" }}>
                <span style={{ color: t.color, fontSize: "9px" }}>▶</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SlideContent({ id, animKey }: { id: number; animKey: number }) {
  const k = `${id}-${animKey}`;

  if (id === 0) return (
    <div className="flex flex-col items-center justify-center h-full text-center px-16 relative">
      <CircuitDecor className="absolute top-0 left-0 opacity-50 pointer-events-none" />
      <CircuitDecor className="absolute bottom-0 right-0 opacity-50 pointer-events-none" style={{ transform: "rotate(180deg)" }} />
      <div key={k} className="animate-fade-up font-mono-tech text-xs mb-4 tracking-[0.3em]" style={{ color: "rgba(0,255,255,0.45)" }}>
        ДИПЛОМНАЯ РАБОТА · 2026
      </div>
      <div className="animate-fade-up-1 mb-3">
        <span className="font-mono-tech text-xs px-3 py-1 border tracking-widest" style={{ borderColor: "rgba(251,191,36,0.25)", color: "rgba(251,191,36,0.65)", background: "rgba(251,191,36,0.04)" }}>
          СПЕЦИАЛЬНОСТЬ 13.02.11
        </span>
      </div>
      <h1 className="animate-fade-up-2 font-display font-bold leading-tight max-w-4xl mb-4" style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", color: "rgba(200,240,240,0.9)" }}>
        Организация работы коллектива исполнителей
        <span className="block cyan-glow mt-1" style={{ color: "rgba(0,255,255,0.95)" }}>по ремонту электрооборудования</span>
        <span className="block mt-1" style={{ fontSize: "0.8em", color: "rgba(200,240,240,0.65)" }}>машины обвязки пакетов труб</span>
      </h1>
      <div className="animate-fade-up-3 w-32 h-px my-4" style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,255,0.5), transparent)" }} />
      <p className="animate-fade-up-4 font-body text-sm leading-relaxed" style={{ color: "rgba(180,220,220,0.45)", maxWidth: "500px" }}>
        Техническая эксплуатация и обслуживание электрического<br />и электромеханического оборудования
      </p>
      <div className="animate-fade-up-5 mt-8 flex gap-5">
        {[["7", "СЛАЙДОВ"], ["3", "ДВИГАТЕЛЯ"], ["6", "ЭТАПОВ"]].map(([n, l]) => (
          <div key={l} className="tech-border px-5 py-3 text-center" style={{ background: "rgba(0,255,255,0.04)" }}>
            <div className="font-mono-tech text-2xl cyan-glow" style={{ color: "rgba(0,255,255,0.9)" }}>{n}</div>
            <div className="font-mono-tech text-xs mt-0.5" style={{ color: "rgba(0,255,255,0.35)", letterSpacing: "0.15em" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (id === 1) return (
    <div className="grid grid-cols-2 gap-8 h-full px-12 py-6">
      <div className="flex flex-col justify-center">
        <div key={k} className="animate-fade-up font-mono-tech text-xs mb-2 tracking-widest" style={{ color: "rgba(0,255,255,0.45)" }}>ОПИСАНИЕ ОБЪЕКТА</div>
        <h2 className="animate-fade-up-1 font-display font-bold text-2xl mb-5" style={{ color: "rgba(0,230,230,0.9)" }}>
          Машина обвязки<br />пакетов труб МОТ-1
        </h2>
        <div className="space-y-2.5">
          {[
            ["Назначение", "Обвязка пакетов металлических труб проволокой"],
            ["Производительность", "до 12 пакетов/час"],
            ["Масса пакета", "до 5 000 кг"],
            ["Диаметр проволоки", "4–6 мм"],
            ["Напряжение питания", "380 В / 3ф / 50 Гц"],
            ["Мощность электропривода", "4.5 кВт суммарно"],
            ["Год выпуска", "2005"],
          ].map(([label, val], i) => (
            <div key={label} className="animate-fade-up" style={{ animationDelay: `${0.18 + i * 0.07}s` }}>
              <div className="flex items-baseline gap-3">
                <span className="font-mono-tech text-xs min-w-[180px]" style={{ color: "rgba(0,255,255,0.4)" }}>{label}:</span>
                <span className="font-body text-sm" style={{ color: "rgba(200,235,235,0.8)" }}>{val}</span>
              </div>
              <div className="mt-1.5 h-px" style={{ background: "rgba(0,255,255,0.07)" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <div className="animate-fade-up-2 tech-border h-52 relative overflow-hidden flex items-center justify-center" style={{ background: "rgba(0,0,15,0.6)" }}>
          <div className="scanline" />
          <div className="text-center">
            <div className="font-mono-tech font-bold" style={{ fontSize: "5rem", color: "rgba(0,255,255,0.1)" }}>МОТ</div>
            <div className="font-mono-tech text-sm tracking-widest" style={{ color: "rgba(0,255,255,0.35)" }}>МАШИНА ОБВЯЗКИ ТРУБ</div>
          </div>
          <div className="absolute bottom-2 left-3 right-3 font-mono-tech text-xs flex justify-between" style={{ color: "rgba(0,255,255,0.25)" }}>
            <span>MODEL: МОТ-1</span><span className="animate-blink">● ACTIVE</span>
          </div>
        </div>
        <div className="animate-fade-up-3 grid grid-cols-2 gap-2">
          {[["⚡", "Мощность", "4.5 кВт"], ["🔧", "Двигателей", "3 шт."], ["⏱", "Цикл обвязки", "~45 сек"], ["🔩", "ТО каждые", "6 мес."]].map(([icon, label, val]) => (
            <div key={label} className="tech-border px-3 py-2 flex items-center gap-2" style={{ background: "rgba(0,255,255,0.03)" }}>
              <span className="text-lg">{icon}</span>
              <div>
                <div className="font-mono-tech text-xs" style={{ color: "rgba(0,255,255,0.35)", fontSize: "10px" }}>{label}</div>
                <div className="font-body text-sm font-medium" style={{ color: "rgba(180,230,230,0.8)" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (id === 2) return (
    <div className="grid grid-cols-5 gap-5 h-full px-10 py-6">
      <div className="col-span-2 flex flex-col justify-center">
        <div key={k} className="animate-fade-up font-mono-tech text-xs mb-2 tracking-widest" style={{ color: "rgba(0,255,255,0.45)" }}>ЭЛЕКТРООБОРУДОВАНИЕ</div>
        <h2 className="animate-fade-up-1 font-display font-bold text-2xl mb-4" style={{ color: "rgba(0,230,230,0.9)" }}>Состав<br />электросхемы</h2>
        <div className="space-y-1.5">
          {[
            { code: "М1–М3", name: "Асинхронные двигатели", type: "3~ 380В", color: "rgba(0,255,255,0.75)" },
            { code: "QF1–3", name: "Автоматические выключатели", type: "ВА47-29", color: "rgba(251,191,36,0.75)" },
            { code: "KM1–3", name: "Магнитные пускатели", type: "КМИ-09310", color: "rgba(0,255,255,0.65)" },
            { code: "KK1–3", name: "Тепловые реле защиты", type: "РТЛ-1016", color: "rgba(239,68,68,0.75)" },
            { code: "SB1–6", name: "Кнопки управления", type: "КМЕ 4111", color: "rgba(34,197,94,0.75)" },
            { code: "HL1–4", name: "Сигнальные лампы", type: "ЛС-71М", color: "rgba(251,191,36,0.55)" },
            { code: "SA1", name: "Переключатель режимов", type: "ПМУ-111", color: "rgba(0,255,255,0.5)" },
          ].map((item, i) => (
            <div
              key={item.code}
              className="animate-fade-up flex items-center gap-3 py-1.5 border-b"
              style={{ animationDelay: `${0.18 + i * 0.07}s`, borderColor: "rgba(0,255,255,0.07)" }}
            >
              <span className="font-mono-tech text-xs w-14 flex-shrink-0" style={{ color: item.color }}>{item.code}</span>
              <span className="font-body text-xs flex-1" style={{ color: "rgba(180,225,225,0.7)" }}>{item.name}</span>
              <span className="font-mono-tech text-xs" style={{ color: "rgba(0,255,255,0.3)", fontSize: "10px" }}>{item.type}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3 flex items-center">
        <div className="animate-fade-up-2 tech-border w-full h-full relative overflow-hidden" style={{ background: "rgba(0,0,15,0.6)" }}>
          <div className="scanline" />
          <div className="absolute top-2 left-3 font-mono-tech text-xs" style={{ color: "rgba(0,255,255,0.35)" }}>СХЕМА СИЛОВЫХ ЦЕПЕЙ</div>
          <div className="absolute top-2 right-3 font-mono-tech text-xs animate-blink" style={{ color: "rgba(0,255,255,0.35)" }}>● LIVE</div>
          <ElectricalDiagram />
        </div>
      </div>
    </div>
  );

  if (id === 3) return (
    <div className="grid grid-cols-2 gap-7 h-full px-12 py-6">
      <div className="flex flex-col justify-center">
        <div key={k} className="animate-fade-up font-mono-tech text-xs mb-2 tracking-widest" style={{ color: "rgba(0,255,255,0.45)" }}>СТРУКТУРА КОЛЛЕКТИВА</div>
        <h2 className="animate-fade-up-1 font-display font-bold text-2xl mb-4" style={{ color: "rgba(0,230,230,0.9)" }}>
          Распределение<br />ответственности
        </h2>
        <div className="space-y-2.5">
          {[
            { role: "Мастер участка", resp: "Общее руководство, допуск к работе, контроль нарядов-допусков, охрана труда", color: "rgba(0,255,255,0.85)" },
            { role: "Электрослесарь 5 разр.", resp: "Ремонт сложных узлов, перемотка двигателей, наладка схем управления", color: "rgba(0,255,255,0.7)" },
            { role: "Электрослесарь 4 разр.", resp: "Замена пускозащитной аппаратуры, прокладка кабелей, измерения", color: "rgba(0,255,255,0.58)" },
            { role: "Электрослесарь 3 разр.", resp: "Подготовка рабочего места, вспомогательные операции, монтаж", color: "rgba(0,255,255,0.45)" },
          ].map((r, i) => (
            <div
              key={r.role}
              className="animate-fade-up tech-border p-3"
              style={{ animationDelay: `${0.12 * i}s`, background: "rgba(0,255,255,0.025)" }}
            >
              <div className="font-mono-tech text-xs mb-1" style={{ color: r.color }}>{r.role}</div>
              <div className="font-body text-xs leading-relaxed" style={{ color: "rgba(180,225,225,0.5)" }}>{r.resp}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="animate-fade-up-2 font-mono-tech text-xs text-center mb-3 tracking-widest" style={{ color: "rgba(0,255,255,0.3)" }}>
          ИЕРАРХИЯ ПОДЧИНЕНИЯ
        </div>
        <div className="animate-fade-up-3 relative h-64">
          <OrgChart />
        </div>
        <div className="animate-fade-up-4 mt-4 tech-border p-3" style={{ background: "rgba(251,191,36,0.04)" }}>
          <div className="font-mono-tech text-xs mb-2" style={{ color: "rgba(251,191,36,0.65)" }}>НОРМАТИВНЫЕ ДОКУМЕНТЫ</div>
          <div className="flex flex-wrap gap-2">
            {["Наряд-допуск", "Журнал ТО", "Схемы ЭО", "ПТЭ", "ПТБЭ", "ГОСТы"].map((d) => (
              <span key={d} className="font-mono-tech text-xs px-2 py-0.5 border" style={{ borderColor: "rgba(251,191,36,0.2)", color: "rgba(251,191,36,0.55)", background: "rgba(251,191,36,0.04)", fontSize: "10px" }}>
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (id === 4) return (
    <div className="flex flex-col h-full px-12 py-5">
      <div key={k} className="animate-fade-up font-mono-tech text-xs mb-1 tracking-widest" style={{ color: "rgba(0,255,255,0.45)" }}>ПРОЦЕСС РЕМОНТА И ОБСЛУЖИВАНИЯ</div>
      <h2 className="animate-fade-up-1 font-display font-bold text-2xl mb-4" style={{ color: "rgba(0,230,230,0.9)" }}>Технологическая последовательность</h2>
      <div className="flex-1 min-h-0">
        <ProcessTimeline />
      </div>
      <div className="animate-fade-up-6 mt-3 tech-border p-3 flex items-start gap-3" style={{ background: "rgba(239,68,68,0.04)" }}>
        <Icon name="ShieldAlert" size={18} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(239,68,68,0.8)" }} />
        <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(220,160,160,0.7)" }}>
          <strong style={{ color: "rgba(239,68,68,0.85)" }}>Требования безопасности:</strong> все работы выполняются со снятием напряжения под руководством ответственного лица с группой ЭБ не ниже IV. Обязателен наряд-допуск по форме ЭБ-1.
        </p>
      </div>
    </div>
  );

  if (id === 5) return (
    <div className="flex flex-col h-full px-12 py-5">
      <div key={k} className="animate-fade-up font-mono-tech text-xs mb-1 tracking-widest" style={{ color: "rgba(0,255,255,0.45)" }}>НЕОБХОДИМЫЕ ИНСТРУМЕНТЫ И МАТЕРИАЛЫ</div>
      <h2 className="animate-fade-up-1 font-display font-bold text-2xl mb-4" style={{ color: "rgba(0,230,230,0.9)" }}>Техническое оснащение ремонта</h2>
      <div className="flex-1">
        <ToolsGrid />
      </div>
      <div className="animate-fade-up-6 mt-3 grid grid-cols-3 gap-3">
        {[
          { label: "Смета ремонта", val: "≈ 85 000 ₽", icon: "BarChart3", color: "rgba(0,255,255,0.7)" },
          { label: "Срок выполнения", val: "3–5 рабочих дней", icon: "Clock", color: "rgba(251,191,36,0.7)" },
          { label: "Межремонтный период", val: "каждые 6 месяцев", icon: "RefreshCw", color: "rgba(34,197,94,0.7)" },
        ].map((s) => (
          <div key={s.label} className="tech-border p-3 flex items-center gap-3" style={{ background: "rgba(0,255,255,0.03)" }}>
            <Icon name={s.icon} size={18} style={{ color: s.color, flexShrink: 0 }} />
            <div>
              <div className="font-mono-tech text-xs" style={{ color: s.color.replace("0.7", "0.45"), fontSize: "10px" }}>{s.label}</div>
              <div className="font-body text-sm font-medium" style={{ color: "rgba(200,235,235,0.8)" }}>{s.val}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (id === 6) return (
    <div className="flex flex-col items-center justify-center h-full px-16 text-center relative">
      <CircuitDecor className="absolute top-0 right-0 opacity-30 pointer-events-none" style={{ transform: "scaleX(-1)" }} />
      <div key={k} className="animate-fade-up font-mono-tech text-xs mb-4 tracking-widest" style={{ color: "rgba(0,255,255,0.45)" }}>ЗАКЛЮЧЕНИЕ</div>
      <h2 className="animate-fade-up-1 font-display font-bold text-3xl mb-6" style={{ color: "rgba(0,230,230,0.9)" }}>Выводы и результаты</h2>
      <div className="animate-fade-up-2 grid grid-cols-2 gap-4 max-w-3xl w-full mb-6">
        {[
          { icon: "CheckCircle", text: "Разработана оптимальная структура ремонтного коллектива из 4 специалистов с чётким распределением обязанностей", color: "rgba(34,197,94,0.8)" },
          { icon: "Zap", text: "Составлены карты осмотра, электросхемы и технологические карты ремонта машины МОТ-1", color: "rgba(0,255,255,0.8)" },
          { icon: "TrendingDown", text: "Сокращение простоев оборудования на 35% за счёт внедрения системы планового технического обслуживания", color: "rgba(251,191,36,0.8)" },
          { icon: "ShieldCheck", text: "Все регламенты разработаны в строгом соответствии с ПТЭ, ПТБЭ и нормами охраны труда", color: "rgba(34,197,94,0.8)" },
        ].map((item, i) => (
          <div
            key={i}
            className="animate-fade-up tech-border p-4 flex items-start gap-3 text-left"
            style={{ animationDelay: `${0.12 * i}s`, background: "rgba(0,0,15,0.4)" }}
          >
            <Icon name={item.icon} size={20} style={{ color: item.color, flexShrink: 0 }} />
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(180,225,225,0.7)" }}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="animate-fade-up-5 w-48 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,255,0.4), transparent)" }} />
      <div className="animate-fade-up-6 mt-5 font-mono-tech text-xs tracking-widest" style={{ color: "rgba(0,255,255,0.3)" }}>
        ТЕХНИЧЕСКАЯ ЭКСПЛУАТАЦИЯ И ОБСЛУЖИВАНИЕ ЭО · 2026
      </div>
    </div>
  );

  return null;
}

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (transitioning || idx === current || idx < 0 || idx >= SLIDES.length) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimKey((k) => k + 1);
      setTransitioning(false);
    }, 220);
  }, [current, transitioning]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goTo(current + 1);
      if (e.key === "ArrowLeft") goTo(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  return (
    <div className="w-screen h-screen overflow-hidden relative tech-grid" style={{ background: "hsl(222,47%,4.5%)" }}>
      <div className="scanline" style={{ zIndex: 50, pointerEvents: "none" }} />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-2.5 border-b" style={{ borderColor: "rgba(0,255,255,0.1)", background: "rgba(0,4,20,0.75)", backdropFilter: "blur(10px)" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full animate-glow" style={{ background: "rgba(0,255,255,0.8)" }} />
          <span className="font-mono-tech text-xs tracking-widest" style={{ color: "rgba(0,255,255,0.5)" }}>ELECTRO-REPAIR · МОТ-1</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {SLIDES.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className="font-mono-tech text-xs transition-all duration-200"
              style={{ color: current === s.id ? "rgba(0,255,255,0.9)" : "rgba(0,255,255,0.22)" }}
            >
              {s.code}
            </button>
          ))}
        </div>
        <div className="font-mono-tech text-xs" style={{ color: "rgba(0,255,255,0.35)" }}>
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </div>
      </div>

      {/* Slide */}
      <div
        className="absolute inset-0 pt-11 pb-14"
        style={{
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? "translateX(16px)" : "translateX(0)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
        }}
      >
        <SlideContent id={current} animKey={animKey} />
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-2.5 border-t" style={{ borderColor: "rgba(0,255,255,0.1)", background: "rgba(0,4,20,0.75)", backdropFilter: "blur(10px)" }}>
        <div className="flex items-center gap-1.5">
          {SLIDES.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: current === s.id ? "22px" : "6px",
                height: "6px",
                background: current === s.id ? "rgba(0,255,255,0.8)" : "rgba(0,255,255,0.18)",
              }}
            />
          ))}
        </div>
        <div className="font-mono-tech text-xs" style={{ color: "rgba(0,255,255,0.4)", letterSpacing: "0.1em" }}>
          {SLIDES[current].label}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="tech-border px-3 py-1 font-mono-tech text-xs transition-all duration-200 hover:opacity-80 disabled:opacity-15"
            style={{ color: "rgba(0,255,255,0.65)", background: "rgba(0,255,255,0.04)" }}
          >
            ← НАЗАД
          </button>
          <button
            onClick={() => goTo(current + 1)}
            disabled={current === SLIDES.length - 1}
            className="tech-border px-3 py-1 font-mono-tech text-xs transition-all duration-200 hover:opacity-80 disabled:opacity-15"
            style={{ color: "rgba(0,255,255,0.65)", background: "rgba(0,255,255,0.04)" }}
          >
            ДАЛЕЕ →
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 right-5 font-mono-tech text-xs hidden lg:block" style={{ color: "rgba(0,255,255,0.15)" }}>
        ← → клавиши / SPACE
      </div>
    </div>
  );
}