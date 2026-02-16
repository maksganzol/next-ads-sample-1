import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
