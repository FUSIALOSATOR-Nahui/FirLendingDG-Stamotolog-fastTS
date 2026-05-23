import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DENTA ELITE — Эстетическая реабилитация и цифровая имплантация",
  description:
    "Премиальная стоматологическая клиника. Цифровая имплантация под ключ, художественная реставрация, виниры E.max. Лечение под микроскопом Carl Zeiss.",
  keywords: [
    "премиум стоматология",
    "цифровая имплантация",
    "виниры",
    "реставрация зубов",
    "стоматология бизнес-класса",
  ],
  openGraph: {
    title: "DENTA ELITE — Эстетическая стоматология",
    description:
      "Эстетическая реабилитация и цифровая имплантация в центре Москвы",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-[#0b0e13] text-[#f1f5f9]">
        {children}
      </body>
    </html>
  );
}
