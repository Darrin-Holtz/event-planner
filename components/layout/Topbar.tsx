"use client";

import { getPageTitle } from "@/lib/get-page-title";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSidebar } from "../providers/sidebar-provider";

export default function Topbar() {
  const pathname = usePathname();
  const { setOpen } = useSidebar();

  return (
    <header className="bg-white">
      <div className="flex h-19 items-center justify-between px-6">
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-gray-800"
        >
          <Menu />
        </button>
        <h1 className="font-semibold text-gray-800">
          {getPageTitle(pathname)}
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800">
            JD
          </div>
        </div>
      </div>
    </header>
  )
}
