'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import MainHeader from "@/layouts/MainHeader";
import DesktopHeader from "@/layouts/DesktopHeader";
import MainFooter from "@/layouts/MainFooter";

const menuItems = [
  { name: "dashboard", href: "/panel" },
  { name: "orders", href: "/panel/orders" },
  { name: "addresses", href: "/panel/addresses" },
  { name: "profile", href: "/panel/profile" },
  { name: "wishlist", href: "/panel/wishlist" },
  { name: "support", href: "/panel/support" },
  { name: "settings", href: "/panel/settings" },
];

export default function PanelLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="block lg:hidden">
        <MainHeader />
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>

      <div className="m-auto overflow-auto px-4 pb-20 pt-10 lg:pt-52 flex gap-4 h-screen">
        {/* Sidebar */}
        <div className="w-64 border-l bg-white p-4 shadow-md rounded-tl-lg rounded-bl-lg">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-4 py-2 text-gray-600 hover:text-white hover:bg-customPrimary font-semibold",
                  pathname === item.href && "bg-customPrimary text-white",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <main className="bg-white w-full p-5 rounded-tr-lg rounded-br-lg shadow-md">{children}</main>
      </div>

      <div className="hidden lg:block">
        <MainFooter />
      </div>
    </>
  );
}
