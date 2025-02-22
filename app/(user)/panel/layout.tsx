"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import MainHeader from "@/layouts/MainHeader";
import DesktopHeader from "@/layouts/DesktopHeader";
import MainFooter from "@/layouts/MainFooter";
import {
  PiAddressBook,
  PiCalendarHeart,
  PiShoppingBagOpenDuotone,
  PiPhoneCall,
  PiUserCircle
} from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

const menuItems = [
  { name: "Dashboard", icon: <RxDashboard />, href: "/panel" },
  { name: "Profile", icon: <PiUserCircle />, href: "/panel/profile" },
  { name: "Orders", icon: <PiShoppingBagOpenDuotone />, href: "/panel/orders" },
  { name: "Addresses", icon: <PiAddressBook />, href: "/panel/addresses" },
  { name: "Wishlist", icon: <PiCalendarHeart />, href: "/panel/wishlist" },
  { name: "Support", icon: <PiPhoneCall />, href: "/panel/support" },
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

      <div className="m-auto flex h-screen gap-4 overflow-auto px-4 pb-20 pt-10 lg:pt-52">
        {/* Sidebar */}
        <div className="w-64 rounded-bl-lg rounded-tl-lg border-l bg-white p-4 shadow-md">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-gray-600 hover:bg-customPrimary hover:text-white",
                  pathname === item.href && "bg-customPrimary text-white",
                )}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <main className="w-full rounded-br-lg rounded-tr-lg bg-white p-5 shadow-md">
          {children}
        </main>
      </div>

      <div className="hidden lg:block">
        <MainFooter />
      </div>
    </>
  );
}
