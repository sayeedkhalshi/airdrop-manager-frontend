"use client";


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@rainbow-me/rainbowkit/styles.css";
import { ReduxProvider } from "@/redux/Provider";
import "./globals.css";

import { RainbowProviders } from "@/lib/RainbowProvider";
//import Footer from "@/components/Footer/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Okabul",
  description: "Manage Airdrops",
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
        <RainbowProviders>
                    <ReduxProvider>
                        
                        {children}
                      
                    </ReduxProvider>
                </RainbowProviders>
                <GoogleAnalytics gaId="G-J9E9LGZ479" />
      </body>
    </html>
  );
}
