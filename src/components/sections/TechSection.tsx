"use client";

import { motion } from "framer-motion";
import { Aperture, FlaskConical, Zap } from "lucide-react";

const technologies = [
  {
    id: "microscope",
    icon: Aperture,
    title: "Лечение под увеличением",
    subtitle: "Carl Zeiss OPMI pico",
    description:
      "Микроскоп с 24-кратным увеличением позволяет видеть то, что недоступно невооружённому глазу. Каждый шаг лечения фиксируется на видео — вы видите всё так же, как видим мы.",
    points: ["24× увеличение", "Видеофиксация процесса", "Субмикронная точность"],
  },
  {
    id: "lab",
    icon: FlaskConical,
    title: "Цифровая лаборатория",
    subtitle: "CAD/CAM Cerec Primescan",
    description:
      "Собственное производство керамических реставраций. Цифровой слепок — коронка готова за один день. Без временных конструкций, без лишних визитов.",
    points: ["Коронка за 1 день", "Точность 5 мкм", "E.max / Zirconia"],
  },
  {
    id: "anesthesia",
    icon: Zap,
    title: "Анестезия без боли",
    subtitle: "Система The Wand",
    description:
      "Компьютерный контроль скорости и давления подачи анестетика исключает болевые ощущения от укола. Применяется для пациентов с дентофобией.",
    points: ["Компьютерная подача", "Без укольного ощущения", "Подходит детям"],
  },
];



export default function TechSection() {
  return (
    <section
      id="tech"
      className="py-28 md:py-36 bg-[#080b10] relative overflow-hidden"
      aria-label="Технологии клиники"
    >
      {/* Background accent lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full opacity-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #10b981 40%, #10b981 60%, transparent)",
          }}
        />
      </div>

      <div className="section-wrapper relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs tracking-widest text-[#10b981] uppercase font-medium">
            Технологии
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#f1f5f9] mt-3 max-w-2xl mx-auto leading-tight">
            Стоимость обоснована оборудованием
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl mx-auto text-base leading-relaxed">
            Мы не скрываем, во что инвестируем. Каждый инструмент напрямую
            влияет на результат и вашу безопасность.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.12 }}
                className="group relative flex flex-col gap-6 p-7 rounded-2xl border border-[#1e2530] bg-[#13181f] hover:border-[#10b981]/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(16,185,129,0.08)]"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#10b981]/10 group-hover:bg-[#10b981]/20 transition-colors duration-300 border border-[#10b981]/15">
                  <Icon size={26} className="text-[#10b981]" />
                </div>

                {/* Text */}
                <div>
                  <p className="text-xs text-[#475569] tracking-widest uppercase mb-2 font-medium">
                    {tech.subtitle}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-[#f1f5f9] leading-snug mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Points */}
                <ul className="mt-auto flex flex-col gap-2">
                  {tech.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-[#94a3b8]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Subtle number label */}
                <span className="absolute top-7 right-7 font-serif text-5xl font-bold text-[#1e2530] select-none pointer-events-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
