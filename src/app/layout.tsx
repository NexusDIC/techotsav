import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techotsav 2.0",
  description:
    "Techotsav2.0 is an amazing opportunity to explore the constant change in the world of technology, that you don't want to miss. It doesn't matter if you're an experienced programmer, a new enthusiast, or just excited by the endless possibilities of tech, this event is designed especially for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
