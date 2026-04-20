import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppPopup from "./components/whatsapp";
import ScrollButton from "./components/scrollbutton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Invoicing Compliance Solutions UAE | Mac & Ross",
  description: "Prepare your business for the UAE Federal Tax Authority's mandatory e-invoicing mandate starting January 2027. Expert guidance, technology & compliance support by Mac & Ross.",
  keywords: "E-invoicing, federal tax authority, uae e-invoicing, erp systems, e-invoicing compliance, audit and tax advisory firm, e-invoicing solutions, Mac & Ross UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WhatsAppPopup/>
        {children}
        <ScrollButton/>
      </body>
    </html>
  );
}
