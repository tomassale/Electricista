import type { Metadata } from "next";
import "./globals.scss";
import Header from "./_components/Header";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Electricista Matriculado",
  description: "Electricista Matriculado en Buenos Aires,  Zona Oeste. Urgencias en instalaciones eléctricas de tu vivienda y/o negocio",
  keywords: [
      "Electricista",
      "Electricista matriculado",
      "Urgencia eléctrica 24hs",
      "Electricista a domicilio",
      "Electricista en Zona Oeste",
      "Electricista en La Matanza",
      "Electricista en San Justo",
      "Electricista en Ramos Mejía",
      "Electricista en Haedo",
      "Electricista en Morón",
      "Electricista en Lomas del Mirador",
      "Puesta a tierra y jabalinas",
      "Instalación de disyuntores",
      "Cambio de térmicas",
      "Cableado y recableado",
      "Iluminación LED",
      "Fotocélulas y automáticos",
      "Porteros eléctricos",
      "Reparación de cortocircuitos",
      "Instalación de Aires Acondicionados",
      "Automatización de portones",
      "Protectores de tensión",
      "Mantenimiento eléctrico para consorcios",
      "Electricidad para locales comerciales",
      "Medición de consumo",
      "Presupuesto eléctrico sin cargo",
      "Electricista de confianza",
      "Soluciones técnicas para el hogar"
  ],
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
