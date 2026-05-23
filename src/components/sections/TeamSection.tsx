"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe } from "lucide-react";

const doctors = [
  {
    id: "dr-morozov",
    name: "Дмитрий Морозов",
    role: "Главный врач, имплантолог",
    experience: "18 лет практики",
    degree: "к.м.н.",
    credentials: ["ITI Fellow", "EAO Member", "Нобель Биокар сертификация"],
    initials: "ДМ",
    color: "#10b981",
  },
  {
    id: "dr-volkova",
    name: "Елена Волкова",
    role: "Эстетическая стоматология",
    experience: "14 лет практики",
    degree: "к.м.н.",
    credentials: ["Академия эстетической стоматологии", "AACD Member"],
    initials: "ЕВ",
    color: "#34d399",
  },
  {
    id: "dr-petrov",
    name: "Андрей Петров",
    role: "Ортодонт",
    experience: "12 лет практики",
    degree: "Д.м.н.",
    credentials: ["Invisalign Platinum Provider", "WFO Member"],
    initials: "АП",
    color: "#6ee7b7",
  },
  {
    id: "dr-kuznetsova",
    name: "Мария Кузнецова",
    role: "Терапевт, эндодонтист",
    experience: "10 лет практики",
    degree: "к.м.н.",
    credentials: ["Микроскопная эндодонтия", "ESE Member"],
    initials: "МК",
    color: "#10b981",
  },
];

const iconMap: Record<string, React.ElementType> = {
  degree: GraduationCap,
  credentials: Award,
  intl: Globe,
};

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-28 md:py-36 bg-[#080b10] overflow-hidden"
      aria-label="Команда врачей"
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
            Команда
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#f1f5f9] mt-3 leading-tight">
            К врачу — не в клинику
          </h2>
          <p className="mt-4 text-[#64748b] max-w-lg text-base leading-relaxed">
            В премиум-сегменте выбирают конкретного специалиста. Наши врачи —
            авторы результатов, которые вы видели выше.
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on md+ */}
        <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              id={`doctor-card-${doc.id}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="group flex-none w-72 md:w-auto snap-start flex flex-col gap-5 p-6 rounded-2xl border border-[#1e2530] bg-[#13181f] hover:border-[#10b981]/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(16,185,129,0.07)]"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[#0b0e13] font-semibold text-lg shrink-0"
                  style={{ backgroundColor: doc.color }}
                >
                  {doc.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f1f5f9] leading-snug">
                    {doc.name}
                  </p>
                  <p className="text-xs text-[#64748b] mt-0.5">{doc.degree}</p>
                </div>
              </div>

              {/* Role & exp */}
              <div className="border-t border-[#1e2530] pt-4">
                <p className="text-xs text-[#10b981] font-medium tracking-wide">
                  {doc.role}
                </p>
                <p className="text-xs text-[#475569] mt-1">{doc.experience}</p>
              </div>

              {/* Credentials */}
              <ul className="flex flex-col gap-1.5">
                {doc.credentials.map((cred) => (
                  <li
                    key={cred}
                    className="flex items-start gap-2 text-xs text-[#64748b]"
                  >
                    <span className="mt-1 w-1 h-1 rounded-full bg-[#10b981] shrink-0" />
                    {cred}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
