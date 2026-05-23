import { Phone, MapPin, Clock, Share2, Play } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="bg-[#080b10] border-t border-[#1e2530] pt-16 pb-8"
      aria-label="Контакты и подвал сайта"
    >
      <div className="section-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#1e2530]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#10b981] flex items-center justify-center text-[#0b0e13] font-bold text-xs">
                D
              </span>
              <span className="font-serif text-lg font-semibold tracking-widest text-[#f1f5f9] uppercase">
                Denta Elite
              </span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
              Эстетическая реабилитация и цифровая имплантация бизнес-класса
              в центре Москвы.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                id="footer-social-share"
                aria-label="Поделиться"
                className="w-9 h-9 rounded-full border border-[#1e2530] flex items-center justify-center text-[#475569] hover:text-[#10b981] hover:border-[#10b981]/40 transition-all duration-200"
              >
                <Share2 size={15} />
              </a>
              <a
                href="#"
                id="footer-video"
                aria-label="Видео"
                className="w-9 h-9 rounded-full border border-[#1e2530] flex items-center justify-center text-[#475569] hover:text-[#10b981] hover:border-[#10b981]/40 transition-all duration-200"
              >
                <Play size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs text-[#475569] uppercase tracking-widest font-medium mb-5">
              Навигация
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Услуги", href: "#services" },
                { label: "Технологии", href: "#tech" },
                { label: "Результаты", href: "#before-after" },
                { label: "Команда", href: "#team" },
                { label: "Стоимость", href: "#pricing" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xs text-[#475569] uppercase tracking-widest font-medium mb-5">
              Контакты
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-[#64748b]">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#10b981]" />
                <a
                  id="footer-phone"
                  href="tel:+74951234567"
                  className="hover:text-[#f1f5f9] transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#64748b]">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#10b981]" />
                <span>Москва, ул. Тверская, 12, офис 301</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#64748b]">
                <Clock size={14} className="mt-0.5 shrink-0 text-[#10b981]" />
                <span>Пн–Пт 9:00–20:00 · Сб 10:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#2d3748]">
            © 2024 Denta Elite. Все права защищены.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-xs text-[#2d3748] hover:text-[#475569] transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-xs text-[#2d3748] hover:text-[#475569] transition-colors"
            >
              Лицензия
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
