import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./(home)/components/footer/Footer";
import Header from "./(home)/components/header/Header";
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
  title: "Glory Fashion - Online clothing store",
  description:
    "Shop Men’s T-shirts, Oversized T-shirts, Joggers. Build your future with FREEDOM stitched into every design. Types: T-shirt, Polo Shirts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300 transition-all duration-200`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
