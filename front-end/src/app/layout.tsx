import type { Metadata } from "next";
import { Nunito, Arvo } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const nunito = Nunito({ subsets: ['latin'], variable: '--font-sans'});
const arvo = Arvo({subsets: ['latin'], variable: '--font-serif', weight: ['400']});


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Tom Nguyen Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        nunito.variable, 
        arvo.variable,
        ("bg-gray-900 text-white font-sans")
        )}>{children}</body>
    </html>
  );
}