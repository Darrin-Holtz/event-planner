"use client";

import { portalNavigation } from '@/lib/navigation'
import { usePathname } from 'next/navigation';
import Link from 'next/dist/client/link'
import { useSidebar } from '../providers/sidebar-provider';
import { ExternalLink, X } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();

  return (
    <>
      <aside className="hidden w-64 text-gray-800 bg-white lg:flex lg:flex-col">
        <div className="p-6 text-gray-800">
          <h2 className="text-lg font-bold">
            Ministry Events
          </h2>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {portalNavigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || (item.href !== '/portal' && pathname.startsWith(item.href));

              return (<li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                    active
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 transition"
          >
            <ExternalLink size={16} />
            Visit Site
          </Link>
        </div>
      </aside>
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/50 lg:hidden"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed left-0 top-0 z-50 h-full w-64 bg-white text-gray-800 shadow-lg lg:hidden">
            <div className="flex items-center justify-between border-b p-6">
              <h2 className="font-bold">
                Ministry Events
              </h2>

              <button
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {portalNavigation.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href || (item.href !== '/portal' && pathname.startsWith(item.href));

                  return (<li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                        active
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 hover:text-gray-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
                })}
              </ul>
            </nav>
            <div className="p-4 border-t">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                <ExternalLink size={16} />
                Visit Site
              </Link>
            </div>
          </aside>
        </>      
      )}
    </>
  )
}
