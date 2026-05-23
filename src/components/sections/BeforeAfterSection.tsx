"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Case {
  id: string;
  label: string;
  description: string;
  before: string;
  after: string;
}

const cases: Case[] = [
  {
    id: "case-1",
    label: "8 виниров E.max",
    description:
      "Исправление формы, цвета и пропорций. Установка 8 виниров E.max Press. Срок работы: 5 дней.",
    before: "/before-after/case1-before.jpg",
    after: "/before-after/case1-after.jpg",
  },
  {
    id: "case-2",
    label: "Цифровая имплантация",
    description:
      "Установка имплантов Nobel Active в зоны отсутствующих зубов. Постоянные коронки на 3-й день.",
    before: "/before-after/case2-before.jpg",
    after: "/before-after/case2-after.jpg",
  },
  {
    id: "case-3",
    label: "Комплексная реставрация",
    description:
      "Художественная реставрация 12 зубов. Изменение оттенка на 5 тонов. Срок: 10 дней.",
    before: "/before-after/case3-before.jpg",
    after: "/before-after/case3-after.jpg",
  },
];

function SliderCard({ case: c, index }: { case: Case; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const calcPct = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPct((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging.current) calcPct(e.clientX);
    },
    [calcPct]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      calcPct(e.touches[0].clientX);
    },
    [calcPct]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.12 }}
      className="flex flex-col gap-4"
    >
      {/* Slider */}
      <div
        ref={containerRef}
        id={`ba-slider-${c.id}`}
        className="ba-slider relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#1e2530] select-none"
        onMouseDown={() => (dragging.current = true)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        role="img"
        aria-label={`Сравнение До/После: ${c.label}`}
      >
        {/* AFTER (full bg) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0f3a2e 0%, #1a4a3a 50%, #0d2a20 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="font-serif text-[#10b981]/40 text-6xl font-bold">
            После
          </span>
        </div>

        {/* BEFORE overlay clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="font-serif text-[#94a3b8]/40 text-6xl font-bold">
              До
            </span>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 text-xs text-[#94a3b8] font-medium tracking-wider uppercase bg-[#0b0e13]/60 backdrop-blur-sm px-3 py-1 rounded-full">
          До
        </span>
        <span className="absolute top-4 right-4 text-xs text-[#10b981] font-medium tracking-wider uppercase bg-[#0b0e13]/60 backdrop-blur-sm px-3 py-1 rounded-full">
          После
        </span>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 z-10 cursor-col-resize"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute inset-y-0 left-1/2 w-[2px] bg-[#10b981] -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center shadow-lg shadow-[#10b981]/30">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M5 8H11M5 8L3 6M5 8L3 10M11 8L13 6M11 8L13 10"
                stroke="#0b0e13"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-1">
        <p className="text-sm font-semibold text-[#f1f5f9]">{c.label}</p>
        <p className="text-xs text-[#64748b] mt-1 leading-relaxed">{c.description}</p>
      </div>
    </motion.div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section
      id="before-after"
      className="py-28 md:py-36 bg-[#0b0e13]"
      aria-label="Работы клиники — До и После"
    >
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs tracking-widest text-[#10b981] uppercase font-medium">
            Результаты
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#f1f5f9] mt-3 leading-tight">
            Работы говорят сами за себя
          </h2>
          <p className="mt-4 text-[#64748b] max-w-lg text-base leading-relaxed">
            Перетащите ползунок, чтобы сравнить состояние до и после лечения.
          </p>
        </motion.div>

        {/* Sliders grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <SliderCard key={c.id} case={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
