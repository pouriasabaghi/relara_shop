import type { Metadata } from "next";
import MainHeader from "@/layouts/MainHeader";
import DesktopHeader from "@/layouts/DesktopHeader";
import MainFooter from "@/layouts/MainFooter";

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
    <>
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
    </>
  );
}
