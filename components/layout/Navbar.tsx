"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "../navigation/NavLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          Ministry Events
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/portal"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Portal
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="btn-primary rounded-lg px-4 py-2 text-sm"
          >
            Sign Up
          </Link>
        </div>
        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 bg-white border-t border-gray-200 overflow-y-auto md:hidden">
          <div className="h-full flex flex-col items-center justify-center p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-foreground hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/portal"
              className="mt-4 text-sm font-medium text-foreground hover:text-primary"
            >
              Portal
            </Link>
            <Link
              href="/login"
              className="mt-4 text-sm font-medium text-foreground hover:text-primary"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="mt-4 btn-primary rounded-lg px-4 py-2 text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>    
  );
}
