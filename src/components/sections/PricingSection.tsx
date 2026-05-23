"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    id: "plan-diagnostics",
    name: "Диагностика",
    tagline: "Точка отсчёта",
    price: "8 900",
    note: "Фиксированная стоимость",
    includes: [
      "Консультация главного врача",
      "3D-томография CBCT",
      "Фото-протокол улыбки",
      "Персональный план лечения",
      "Смета без скрытых статей",
    ],
    accent: false,
    cta: "Записаться",
  },
  {
    id: "plan-implant",
    name: "Имплантация",
    tagline: "Всё включено",
    price: "от 89 000",
    note: "За единицу · под ключ",
    includes: [
      "Диагностика + томография",
      "Хирургический шаблон CAD/CAM",
      "Имплант Nobel Active / Straumann",
      "Формирователь + постоянная коронка",
      "Анестезия The Wand",
      "Гарантия 5 лет",
    ],
    accent: true,
    cta: "Записаться на консультацию",
  },
  {
    id: "plan-veneers",
    name: "Виниры",
    tagline: "Дизайн улыбки",
    price: "от 24 000",
    note: "За единицу · E.max Press",
    includes: [
      "Фото- и видео-анализ улыбки",
      "Цифровое wax-up моделирование",
      "Временные виниры",
      "Виниры E.max Press / Lumineer",
      "Пожизненная гарантия цвета",
    ],
    accent: false,
    cta: "Записаться",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-28 md:py-36 bg-[#0b0e13]"
      aria-label="Стоимость лечения"
    >
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs tracking-widest text-[#10b981] uppercase font-medium">
            Стоимость
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#f1f5f9] mt-3 leading-tight">
            Пакеты «всё включено»
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl mx-auto text-base leading-relaxed">
            Фиксированная стоимость снимает страх скрытых платежей.
            Вы знаете итоговую цифру до начала лечения.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="flex"
            >
              <Card
                className={`flex flex-col w-full border transition-all duration-500 ${
                  plan.accent
                    ? "border-[#10b981]/50 bg-gradient-to-b from-[#0f2218] to-[#13181f] shadow-[0_0_60px_rgba(16,185,129,0.12)]"
                    : "border-[#1e2530] bg-[#13181f] hover:border-[#10b981]/25 hover:shadow-[0_8px_40px_rgba(16,185,129,0.07)]"
                }`}
              >
                <CardHeader className="pb-0">
                  {plan.accent && (
                    <span className="inline-block mb-4 text-[10px] tracking-widest text-[#10b981] uppercase font-semibold bg-[#10b981]/10 border border-[#10b981]/25 rounded-full px-3 py-1">
                      Популярный выбор
                    </span>
                  )}
                  <p className="text-xs text-[#475569] tracking-widest uppercase font-medium">
                    {plan.tagline}
                  </p>
                  <CardTitle className="font-serif text-2xl text-[#f1f5f9] mt-1">
                    {plan.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 gap-6">
                  {/* Price */}
                  <div className="border-t border-[#1e2530] pt-5">
                    <p
                      className={`font-serif text-3xl md:text-4xl font-semibold ${
                        plan.accent ? "text-[#10b981]" : "text-[#f1f5f9]"
                      }`}
                    >
                      {plan.price}{" "}
                      <span className="text-base font-sans font-normal text-[#475569]">
                        ₽
                      </span>
                    </p>
                    <p className="text-xs text-[#475569] mt-1">{plan.note}</p>
                  </div>

                  {/* Includes */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                        <Check
                          size={14}
                          className={`mt-0.5 shrink-0 ${
                            plan.accent ? "text-[#10b981]" : "text-[#475569]"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    id={`pricing-cta-${plan.id}`}
                    className={`w-full rounded-full h-11 font-medium text-sm transition-all duration-300 border-0 ${
                      plan.accent
                        ? "bg-[#10b981] hover:bg-[#059669] text-[#0b0e13]"
                        : "bg-[#1e2530] hover:bg-[#252e3d] text-[#94a3b8] hover:text-[#f1f5f9]"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          className="mt-10 text-center text-xs text-[#475569] max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Цены фиксированы. Никаких скрытых платежей. Точная стоимость
          рассчитывается после диагностики и утверждается письменно.
        </motion.p>
      </div>
    </section>
  );
}
