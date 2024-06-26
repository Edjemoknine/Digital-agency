"use client";
import React, { useState } from "react";

import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-black/[0.96]">
      <div className="p-6 flex items-center justify-between z-10">
        <div className="flex gap-2 items-center text-white">
          <Link href="/">
            <Image
              src="/arc_dark.svg"
              alt="logo"
              width={50}
              height={50}
              priority
              className="w-8 h-8 md:w-10 md:h-14"
            />
          </Link>
          <h2 className="text-2xl font-semibold">MADE</h2>
        </div>
        <div className="cursor-pointer hidden md:flex items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 space-x-10 to-neutral-400 bg-opacity-50 ">
          <div className="hover:text-gray-50">
            <a href="#projects">Website Design</a>
          </div>
          <div className="hover:text-gray-50">
            <a href="#portfolio">Portfolio</a>
          </div>
          <div className="hover:text-gray-50">
            <a href="#shopify">Shopify </a>
          </div>
          <div className="hover:text-gray-50">
            <a href="#services">Services</a>
          </div>
          <Link className="hover:text-gray-50" href={"/pricing"}>
            Pricing
          </Link>
        </div>
        <div className="flex md:hidden">
          {isOpen ? (
            <div className="w-8 h-8 text-slate-300 cursor-pointer">
              <X onClick={closeDropDown} />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={closeDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>
        <div className="hidden  md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
