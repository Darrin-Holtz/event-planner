"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({
    href,
    children,
}: NavLinkProps) {
    const pathname = usePathname();
    const active = pathname === href;
  return (
    <Link
        href={href}
        className={`text-sm font-medium transition ${active
            ? "text-black"
            : "text-gray-500 hover:text-black"
        }`}
    >
        {children}
    </Link>
  )
}
