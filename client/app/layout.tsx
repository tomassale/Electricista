import type { Metadata } from "next";
import "./globals.scss";
import Header from "./_components/Header";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Electricista Matriculado",
  description: "Página electricista",
  keywords: ["Electricista", "Zona Oeste", ""],
  icons: {
    icon: "/favicon.ico"
  }
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
