import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/layouts/MainHeader";
import DesktopHeader from "@/layouts/DesktopHeader";
import MainFooter from "@/layouts/MainFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relara Shop",
  description: "An open source ecommerce platform",
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
        <div className="block lg:hidden">
          <MainHeader />
        </div>
        <div className="hidden lg:block">
          <DesktopHeader />
        </div>
        <div className="mx-auto overflow-auto px-4 pb-20 pt-10 lg:pt-52">
          {children}
        </div>
        <div className="hidden lg:block">
          <MainFooter />
        </div>
      </body>
    </html>
  );
}