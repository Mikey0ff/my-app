import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Анна Петрова — Репетитор по математике | Подготовка к ЕГЭ",
  description:
    "Подготовка к ЕГЭ по математике на 80+ баллов. Индивидуальные занятия онлайн и очно. Запишитесь на бесплатное пробное занятие.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-slate-800">{children}</body>
    </html>
  );
}
