import type { Metadata } from "next";
import MainHeader from "@/layouts/MainHeader";
import DesktopHeader from "@/layouts/DesktopHeader";
import MainFooter from "@/layouts/MainFooter";
import Hero from "./hero";

export const metadata: Metadata = {
  title: "Relara",
  description: "An open source ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="block lg:hidden">
        <MainHeader />
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      
        <Hero/>
     
      <div className="mx-auto overflow-auto px-4 pb-20 pt-10">
        {children}
      </div>
      <div className="hidden lg:block">
        <MainFooter />
      </div>
    </>
  );
}
