"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const t = (delay: number) => ({ duration: 0.8, ease: "easeOut" as const, delay });

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0e13]"
      aria-label="Главный экран клиники DENTA ELITE"
    >
      {/* Background texture / gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Radial glow top-right */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Bottom fade to surface */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0b0e13] to-transparent" />
      </div>

      {/* Centered content */}
      <div className="section-wrapper relative z-10 flex flex-col items-center text-center pt-28 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0)}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-xs font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            Премиальная стоматология · Москва
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-[#f1f5f9] max-w-5xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.12)}
        >
          Эстетическая{" "}
          <em className="not-italic text-gradient-accent">реабилитация</em>
          <br />
          и цифровая имплантация
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="mt-8 max-w-2xl text-lg md:text-xl text-[#64748b] leading-relaxed"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.24)}
        >
          Восстанавливаем эстетику и функцию на уровне международных стандартов.
          Лечение под микроскопом Carl&nbsp;Zeiss. Собственная цифровая лаборатория.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.36)}
        >
          <a href="#pricing">
            <Button
              id="hero-primary-cta"
              className="group relative h-14 px-8 rounded-full bg-[#10b981] hover:bg-[#059669] text-[#0b0e13] font-semibold text-base transition-all duration-300 border-0 overflow-hidden"
            >
              Записаться на консультацию
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
              />
            </Button>
          </a>
          <a href="#before-after">
            <Button
              id="hero-secondary-cta"
              variant="outline"
              className="h-14 px-8 rounded-full border-[#1e2530] bg-transparent text-[#94a3b8] hover:text-[#f1f5f9] hover:border-[#10b981]/40 text-base font-normal transition-all duration-300"
            >
              Смотреть результаты
            </Button>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e2530] rounded-2xl overflow-hidden border border-[#1e2530]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.48)}
        >
          {[
            { value: "14+", label: "лет опыта" },
            { value: "3 200+", label: "имплантаций" },
            { value: "1 день", label: "изготовление коронок" },
            { value: "Carl Zeiss", label: "микроскопы" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#13181f] flex flex-col items-center justify-center py-6 px-4 gap-1"
            >
              <span className="font-serif text-2xl md:text-3xl font-semibold text-[#f1f5f9]">
                {stat.value}
              </span>
              <span className="text-xs text-[#475569] tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
