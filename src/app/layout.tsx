import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Koło Natury Nowy Młyn - Agroturystyka",
  description:
    "Odkryj magię prawdziwej natury w swoim sercu. Komfortowe noclegi, świeże powietrze i autentyczne doświadczenia.",
  icons: {
    icon: "kolo-natury-nowy-mlyn/public/tiny-kolo-natury-transparent.png",
    shortcut: "kolo-natury-nowy-mlyn/public/tiny-kolo-natury-transparent.png",
    apple: "kolo-natury-nowy-mlyn/public/tiny-kolo-natury-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
