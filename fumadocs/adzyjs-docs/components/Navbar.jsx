"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/docs" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-neutral-900/60 border-b border-gray-700/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 md:py-6">

        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/adzyjs-logo.png"
            alt="AdzyJS Logo"
            className="w-10 h-10 rounded-full shadow-md cursor-pointer"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/80x80/FFFFFF/000000?text=AdzyJS";
            }}
          />
          <span className="text-xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity cursor-pointer">
            AdzyJS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/docs"
            className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-zinc-800 via-gray-800 to-neutral-800 border border-gray-600/30 shadow-md hover:shadow-[0_0_25px_rgba(200,200,200,0.15)] hover:-translate-y-[1px] transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zinc-400 via-gray-400 to-neutral-400 opacity-0 hover:opacity-100 transition-opacity duration-500 p-[1px]">
              <div className="h-full w-full rounded-xl bg-gradient-to-r from-zinc-900 via-gray-900 to-neutral-900"></div>
            </div>
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-lg border-t border-gray-700/30">
          <nav className="flex flex-col gap-4 py-6 px-12 text-gray-300 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/docs"
              onClick={() => setIsOpen(false)}
              className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-zinc-800 via-gray-800 to-neutral-800 border border-gray-600/30 shadow-md hover:shadow-[0_0_25px_rgba(200,200,200,0.15)] transition-all duration-300 cursor-pointer max-w-[200px]"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
