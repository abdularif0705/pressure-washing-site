import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Pressure Pro | Top-Rated Exterior Cleaning",
  description: "Professional pressure washing, soft washing, gutter cleaning, and roof cleaning services. Restore your property's original glory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
        <FloatingCTA />
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: '#0B1120', // secondary color
            color: '#fff',
            borderRadius: '9999px',
          },
          success: {
            iconTheme: {
              primary: '#D4AF37', // primary gold color
              secondary: '#fff',
            },
          },
        }} />
      </body>
    </html>
  );
}
