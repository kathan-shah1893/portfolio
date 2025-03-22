"use client"; // If using Next.js 13+
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between py-5 px-6 md:px-10 bg-gray-900">
        <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
          Kathan Shah
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/#Achievements", label: "ACHIEVEMENTS" },
            { href: "/#projects", label: "PROJECTS" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                className="text-sm text-white transition duration-300 hover:text-pink-600"
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu - Overlay with Proper Visibility */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center z-[100]">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          <ul className="space-y-6 text-center">
            {[
              { href: "/#about", label: "ABOUT" },
              { href: "/#experience", label: "EXPERIENCE" },
              { href: "/#skills", label: "SKILLS" },
              { href: "/#education", label: "EDUCATION" },
              { href: "/#Achievements", label: "ACHIEVEMENTS" },
              { href: "/#projects", label: "PROJECTS" },
            ].map(({ href, label }) => (
              <li key={href} onClick={() => setIsOpen(false)}>
                <Link
                  className="text-lg font-semibold transition duration-300 hover:text-pink-600"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;