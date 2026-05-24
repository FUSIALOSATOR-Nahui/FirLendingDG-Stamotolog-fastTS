# Инструкции для ИИ-агента — Dental Clinic Landing

> Прочитай этот файл **полностью** перед тем, как писать любой код.

---

## 1. Технологический стек

- **Фреймворк:** Next.js (App Router, TypeScript)
- **Стилизация:** Tailwind CSS v4
- **Компоненты:** shadcn/ui (на базе Radix UI)
- **Пакетный менеджер:** pnpm
- **Деплой:** Netlify + `@netlify/plugin-nextjs`
- **Репо:** https://github.com/FUSIALOSATOR-Nahui/FirLendingDG-Stamotolog-fastTS.git (ветка `master`)

---

## 2. Архитектурные правила

- Все базовые примитивы shadcn находятся строго в `@/components/ui/`.
- Пользовательские секции лендинга создавать в папке `@/components/sections/`.
- Разделение компонентов: по умолчанию компоненты являются Server Components. Директиву `"use client"` использовать только там, где необходима интерактивность (формы, триггеры, анимация).

---

## 3. Протокол работы с shadcn/ui (Критично)

1. ПЕРЕД генерацией любого интерфейса проверь наличие необходимых файлов в папке `components/ui/`.
2. Если нужного компонента (например, `card.tsx` или `accordion.tsx`) там нет, ИИ ЗАПРЕЩЕНО генерировать его код самостоятельно или использовать дефолтный HTML.
3. ИИ обязан выдать в чат точную команду для терминала: `npx shadcn@latest add [имя_компонента]` и дождаться, пока пользователь установит примитив.
4. Только после подтверждения установки ИИ приступает к сборке секции лендинга, импортируя компонент из `@/components/ui/`.

---

## 4. Требования к коду

- Чистый Tailwind без дублирования стилей, использование переменных из `globals.css` для соблюдения темы.
- Полная адаптивность (мобильный приоритет) с использованием префиксов `sm:`, `md:`, `lg:`.

---

## 5. Дизайн-система (не менять без причины)

- **Фон:** `#0B0E13` (тёмный почти-чёрный)
- **Акцент:** `#10B981` (изумрудный)
- **Заголовки:** Playfair Display (serif, Google Fonts)
- **Текст:** Inter (sans-serif, Google Fonts)
- **Концепция:** Премиум стоматология бизнес-класса. Никаких стоковых улыбок, никаких скидочных таймеров. Свободное пространство, технологии, доверие.

---

## 6. Статус проекта

### ✅ Сделано
- `src/app/globals.css` — дизайн-токены, импорт шрифтов
- `src/app/layout.tsx` — Playfair + Inter, RU локаль, SEO-метаданные
- `src/app/page.tsx` — собирает все секции
- `src/lib/utils.ts` — утилита `cn()`
- `src/components/ui/` — button, card, dialog, carousel (через shadcn CLI)
- `src/components/sections/Nav.tsx` — sticky-навигация
- `src/components/sections/HeroSection.tsx` — полноэкранный hero
- `src/components/sections/ServicesSection.tsx` — bento-сетка услуг
- `src/components/sections/TechSection.tsx` — 3 карточки технологий
- `src/components/sections/BeforeAfterSection.tsx` — drag-слайдер
- `src/components/sections/TeamSection.tsx` — горизонтальный скролл врачей
- `src/components/sections/PricingSection.tsx` — 3 пакета цен
- `src/components/sections/FooterSection.tsx` — контакты + навигация
- `netlify.toml` — правильный конфиг деплоя с `@netlify/plugin-nextjs`

### 🔲 В очереди / Не доделано
- (добавляй сюда задачи по мере работы)

---

## 7. Известные проблемы / Решённые костыли

- `lucide-react@1.16` не имеет `Instagram`/`Youtube` → используется `Share2`/`Play`
- framer-motion v12 несовместим с `Variants+custom` → все анимации через inline `initial/animate/whileInView` + явный `delay`
- Tailwind v4: `@import url(...)` для шрифтов должен быть **до** `@import "tailwindcss"` в CSS
- Netlify: НЕ использовать `public/_redirects` с SPA-правилом для Next.js — это ломает роутинг

---

## 8. Как начать новую сессию

1. Прочитай этот файл
2. Запусти `git status` и `git log --oneline -5` чтобы понять текущее состояние
3. Спроси пользователя что нужно сделать — не начинай писать код без задачи
