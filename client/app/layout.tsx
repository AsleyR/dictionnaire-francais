import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/navbar/Navbar";
import Footer from "./(components)/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dictionnaire Français",
  description: "French dictionary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " grid grid-rows-[auto_1fr_auto] h-screen"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
