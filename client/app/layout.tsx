import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Electricista servicios y Urgencias 24hs",
  description: "Página electricista",
  keywords: ["Electricista", "Zona Oeste"],
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
