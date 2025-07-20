'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { EnvVarWarning } from './env-var-warning';
import { AuthButton } from './auth-button';

interface NavbarProps {
  Logo: StaticImageData;  
  hasEnv : boolean | undefined;  
}

export default function Navhead({ Logo, hasEnv }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasEnvVars, setHasEnvVars] = useState(hasEnv);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-[#F99452] rounded-b-lg shadow-md">
      {/* Desktop and Mobile Header */}
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center p-3 px-5 text-sm text-white">
        
        <div className="flex gap-5 items-center font-semibold text-white">
          <Link className="bg-white px-6 py-1.5 rounded-sm" href={"/"}>
            <Image src={Logo} alt="Logo" width={100} height={100} className="w-28" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex text-lg justify-between gap-x-5 ml-10">
            <Link className="hover:bg-[#ef8d4b] p-3.5 rounded-md" href={"/module"}>
              Modul
            </Link>
            <Link className="hover:bg-[#ef8d4b] p-3.5 rounded-md" href={"/pretest"}>
              Pre-test
            </Link>
          </div>
        </div>

        {/* Desktop Auth Button */}
        <div className="hidden md:block">
          {!hasEnvVars ? <EnvVarWarning /> : 
            <div>
              {/* <AuthButton /> */}
            </div>
          }
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#ef8d4b] px-5 py-3 space-y-3">
          <Link 
            href={"/module"}
            className="block text-white hover:bg-[#e6834a] p-3 rounded-md text-lg font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Modul
          </Link>
          <Link 
            href={"/pretest"}
            className="block text-white hover:bg-[#e6834a] p-3 rounded-md text-lg font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Pre-test
          </Link>
          
          {/* Mobile Auth Section */}
          <div className="pt-3 border-t border-[#e6834a]">
            {!hasEnvVars ? <EnvVarWarning /> : 
              <div>
                <AuthButton />
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}