'use client'

import Link from "next/link";
import { TbCategory2 } from "react-icons/tb";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function MainHeader() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white p-2 shadow-md lg:hidden">
      <ul className="flex items-center justify-around">
        <li>
          <Link
            href="/categories"
            className={cn(
              "flex flex-col items-center gap-1 text-gray-700",
              pathname === "/categories" && "text-amber-500/90"
            )}
          >
            <TbCategory2 size={25} />
            <p className="text-xs font-semibold">Categories</p>
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center gap-1 text-gray-700",
              pathname === "/" && "text-amber-500/90"
            )}
          >
            <AiOutlineHome size={25} />
            <p className="text-xs font-semibold">Home</p>
          </Link>
        </li>

        <li>
          <Link
            href="/panel"
            className={cn(
              "flex flex-col items-center gap-1 text-gray-700",
              pathname === "/panel" && "text-amber-500/90"
            )}
          >
            <AiOutlineUser size={25} />
            <p className="text-xs font-semibold">Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainHeader;
