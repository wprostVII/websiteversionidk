import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const loosBlack = localFont({
  src: "./LoosWideBlack.otf",
  variable: "--font-loos-black",
  weight: "100 900",
})

const newScience = localFont({
  src: "./NewScienceRegular.otf",
  variable: "--font-new-science",
  weight: "100 300",
})

const angelWish = localFont({
  src: "./AngelWish.ttf",
  variable: "--font-angel-wish",
  weight: "100 900",
})

const ubuntu = localFont({
  src: "./Ubuntu.ttf",
  variable: "--font-ubuntu",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "WprostVII",
  description: "A website all about a 2D digital artist called WprostVII.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${loosBlack.variable} ${newScience.variable} ${angelWish.variable} ${ubuntu.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
