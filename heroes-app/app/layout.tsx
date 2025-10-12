/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superhero project",
  description: "my final react project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Sora:wght@100..800&display=swap" rel="stylesheet"/>
        
      </head>
      <body className="min-w-screen min-h-screen bg-[#1e5464]">
        {children}
      </body>
    </html>
  );
}
