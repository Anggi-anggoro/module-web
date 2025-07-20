'use client';

import Link from "next/link";
import { useState } from "react";

const WhatsAppButton = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  return (
    <Link
      href="https://wa.me/?phone=6282387594402&text=Irvan%20Dwi%20Novaldi&lang=id"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-0 float-right mb-3 mr-6 z-50 
                 text-white 
                "
      title="Chat via WhatsApp"
    >
      <div onMouseEnter={()=>setShowWhatsApp(!showWhatsApp)} onMouseLeave={()=>setShowWhatsApp(!showWhatsApp)}  className="flex flex-col relative items-center justify-center text-xs md:text-sm">
        <div className="z-50 bg-[#25D366] hover:bg-green-600 size-12 md:size-16 rounded-full shadow-lg  flex items-center justify-center transition">
        <svg    
        className="max-md:size-6 "
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 32 32"
          fill="white"
          >
          <path d="M16 0C7.163 0 0 7.162 0 16a15.94 15.94 0 002.332 8.355L0 32l8.023-2.108A15.945 15.945 0 0016 32c8.837 0 16-7.162 16-16S24.837 0 16 0zm0 29.412c-2.444 0-4.833-.653-6.929-1.887l-.497-.293-4.732 1.242 1.26-4.598-.323-.539A13.38 13.38 0 012.588 16c0-7.388 6.023-13.412 13.412-13.412S29.412 8.612 29.412 16 23.388 29.412 16 29.412zm7.229-10.36c-.396-.198-2.342-1.153-2.707-1.287-.364-.135-.63-.198-.897.198s-1.027 1.286-1.26 1.55c-.229.261-.479.295-.875.099-.396-.198-1.671-.617-3.184-1.969-1.177-1.05-1.971-2.347-2.2-2.743-.229-.396-.025-.609.172-.806.176-.174.396-.453.594-.681.199-.229.263-.392.396-.652.13-.261.065-.49-.033-.688-.099-.198-.877-2.11-1.202-2.888-.316-.76-.638-.656-.877-.668h-.75c-.261 0-.688.099-1.049.49s-1.376 1.344-1.376 3.281c0 1.937 1.408 3.802 1.602 4.066.198.261 2.774 4.236 6.723 5.932 2.365 1.02 3.29 1.107 4.485.93 1.155-.174 2.342-.958 2.674-1.881.333-.923.333-1.713.23-1.881-.101-.166-.363-.262-.76-.46z" />
        </svg>
          </div>     
        <p
          className={
            `absolute right-5 font-bold w-32 md:w-40 p-2.5 px-4 md:text-sm z-10 bg-[#4fbbea] border-2 border-[#34B7F1] rounded-full
            transition-all duration-300 delay-100
            ${showWhatsApp ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`
          }
        >
          Hubungi Kami
        </p>
      </div>
    </Link>
  );
};

export default WhatsAppButton;
