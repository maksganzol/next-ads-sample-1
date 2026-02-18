import type { Metadata } from "next";
import "./globals.css";
import NextAdsScript from "@/components/NextAdsScript";

export const metadata: Metadata = {
  title: "Новостной портал - Главные новости дня",
  description: "Актуальные новости из мира политики, технологий, спорта и культуры",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <NextAdsScript />
      </body>
    </html>
  );
}
