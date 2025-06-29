"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          MyPortfolio
        </Link>
        <nav className="space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-gray-700 hover:text-black transition font-medium ${
                pathname === href ? "underline underline-offset-4" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
