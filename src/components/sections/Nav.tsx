"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Технологии", href: "#tech" },
  { label: "Результаты", href: "#before-after" },
  { label: "Команда", href: "#team" },
  { label: "Стоимость", href: "#pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="section-wrapper">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="DENTA ELITE — главная"
          >
            <span className="w-7 h-7 rounded-full bg-[#10b981] flex items-center justify-center text-[#0b0e13] font-bold text-xs">
              D
            </span>
            <span className="font-serif text-lg font-semibold tracking-widest text-[#f1f5f9] uppercase">
              Denta Elite
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#pricing">
              <Button
                id="nav-cta-btn"
                className="bg-[#10b981] hover:bg-[#059669] text-[#0b0e13] font-semibold text-sm px-5 h-9 rounded-full transition-all duration-300 border-0"
              >
                Записаться
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Открыть меню"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#13181f]/95 backdrop-blur-xl border-t border-[#1e2530]">
          <div className="section-wrapper py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              <Button
                id="mobile-nav-cta-btn"
                className="w-full bg-[#10b981] hover:bg-[#059669] text-[#0b0e13] font-semibold rounded-full border-0"
              >
                Записаться
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
