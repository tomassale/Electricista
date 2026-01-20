import type { Metadata } from "next";
import "./globals.scss";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Electricista",
  description: "Página electricista",
  keywords: ["Electricista", "Zona Oeste"],
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
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
