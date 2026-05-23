"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sparkles, ScanFace, Smile, Microscope } from "lucide-react";

const services = [
  {
    id: "implant",
    icon: Sparkles,
    label: "Имплантация",
    tag: "Цифровая навигация",
    title: "Цифровая имплантация под ключ",
    description:
      "Полный цикл — от 3D-планирования до установки коронки за 1 визит. Навигационные хирургические шаблоны. Нагрузка в день операции.",
    accent: true,
    large: true,
  },
  {
    id: "veneers",
    icon: Smile,
    label: "Реставрация",
    tag: "Premium керамика",
    title: "Виниры и художественная реставрация",
    description:
      "Виниры E.max и Lumineer. Восстановление формы, цвета и анатомии зуба. Изготовление в собственной CAD/CAM-лаборатории.",
    accent: false,
    large: false,
  },
  {
    id: "aligners",
    icon: ScanFace,
    label: "Ортодонтия",
    tag: "Экспертный уровень",
    title: "Исправление прикуса элайнерами",
    description:
      "Цифровое моделирование результата до начала лечения. Невидимые элайнеры. Контроль каждые 6 недель.",
    accent: false,
    large: false,
  },
  {
    id: "microscope",
    icon: Microscope,
    label: "Диагностика",
    tag: "Точность и контроль",
    title: "Диагностика под микроскопом",
    description:
      "Carl Zeiss OPMI pico — 24-кратное увеличение. Выявляем патологии на ранней стадии. Лечение кариеса без сверления в 60% случаев.",
    accent: false,
    large: false,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-28 md:py-36 bg-[#0b0e13]"
      aria-label="Услуги клиники"
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
            Направления
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#f1f5f9] mt-3 max-w-2xl leading-tight">
            Комплексные решения высокого уровня
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl text-base leading-relaxed">
            Специализируемся на высокочековых процедурах, где каждый шаг
            задокументирован и гарантирован.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: (i + 1) * 0.1 }}
                className={service.large ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <Card
                  className={`h-full group cursor-default border-[#1e2530] transition-all duration-500 hover:border-[#10b981]/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)] ${
                    service.accent
                      ? "bg-gradient-to-br from-[#0f1e18] to-[#13181f]"
                      : "bg-[#13181f]"
                  }`}
                >
                  <CardHeader className="pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          service.accent
                            ? "bg-[#10b981]/20 group-hover:bg-[#10b981]/30"
                            : "bg-[#1e2530] group-hover:bg-[#10b981]/15"
                        }`}
                      >
                        <Icon
                          size={22}
                          className={service.accent ? "text-[#10b981]" : "text-[#64748b] group-hover:text-[#10b981] transition-colors duration-300"}
                        />
                      </div>
                      <span className="text-[10px] tracking-widest text-[#475569] uppercase font-medium border border-[#1e2530] rounded-full px-3 py-1">
                        {service.tag}
                      </span>
                    </div>
                    <CardTitle
                      className={`font-serif leading-snug ${
                        service.large
                          ? "text-2xl md:text-3xl"
                          : "text-lg md:text-xl"
                      } text-[#f1f5f9]`}
                    >
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#64748b] text-sm leading-relaxed mt-1">
                      {service.description}
                    </CardDescription>
                    {service.large && (
                      <div className="mt-8 flex flex-wrap gap-2">
                        {["Nobel Biocare", "Straumann", "Zimmer"].map((brand) => (
                          <span
                            key={brand}
                            className="text-xs px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
