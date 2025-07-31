"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface NavbarProps {
  logo: StaticImageData;
  authContent: React.ReactNode;
  headerLinks: React.ReactNode;
}

export default function Header({
  logo,
  authContent,
  headerLinks,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-orange-400 rounded-b-lg shadow-lg">
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center px-5 py-2 text-sm text-white relative">
        <div className="flex items-center font-semibold text-white">
          <Link className="px-4 py-2 rounded-b-md flex items-center" href="/">
            <Image
              src={logo}
              alt="Logo"
              className="w-32 h-auto max-h-12 object-contain"
            />
          </Link>
          {headerLinks}
        </div>

        {/* Desktop Auth Button */}
        <div className="hidden md:block">{authContent}</div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 z-[100] rounded-lg h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end items-center p-4 border-b-2 shadow-lg mx-2 border-[#e6834a]">
            <button
              onClick={closeMobileMenu}
              className="text-white text-2xl hover:bg-[#e6834a] w-8 h-8 rounded flex items-center justify-center"
              aria-label="Close mobile menu"
            >
              <svg
                className="fill-[#e6834a] size-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>

          <div className="px-5 py-6 space-y-4">
            <a
              href="/module"
              onClick={closeMobileMenu}
              className="block text-[#e6834a] p-4 rounded-md text-lg font-semibold transition-colors duration-200"
            >
              Modul
            </a>
            <a
              href="/pretest"
              onClick={closeMobileMenu}
              className="block text-[#e6834a] p-4 rounded-md text-lg font-semibold transition-colors duration-200"
            >
              Pre-test
            </a>

            {/* Mobile Auth Section */}
            <div className="pt-4 border-t border-[#e6834a]">{authContent}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
