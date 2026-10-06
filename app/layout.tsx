import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kirevo.fr"),
  title: {
    default: "Kirevo | Automatisation IA pour les entreprises",
    template: "%s | Kirevo",
  },
  description:
    "Kirevo conçoit des automatisations IA simples et sur mesure pour libérer les entreprises de leurs tâches répétitives.",
  applicationName: "Kirevo",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Kirevo",
    title: "Kirevo | Automatisation IA pour les entreprises",
    description:
      "Des automatisations IA sur mesure pour simplifier les processus commerciaux et administratifs des entreprises.",
    images: [
      {
        url: "/kirevo-icon.png",
        width: 2048,
        height: 2048,
        alt: "Kirevo — automatisation IA sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirevo | Automatisation IA pour les entreprises",
    description:
      "Des automatisations IA sur mesure pour simplifier les processus commerciaux et administratifs des entreprises.",
    images: ["/kirevo-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
