"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-300 text-sky-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link  href="#" className="text-2xl flex gap-3 font-bold tracking-wide"><img className="w-8  object-contain" src="/zenitsu-agatsuma-5120x2880-20236__1_-removebg-preview.png" alt="" />Lord.X</Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="hover:text-sky-600 transition">Home</Link>
            <Link href="/About" className="hover:text-sky-600 transition">About</Link>
            <Link href="/Services" className="hover:text-sky-600 transition">Services</Link>
            <Link href="#" className="hover:text-sky-600 transition">Contact</Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-sky-900 hover:bg-sky-400 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="block px-3 py-2 rounded-md text-base font-medium text-sky-900 hover:bg-sky-400 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/Services"
              className="block px-3 py-2 rounded-md text-base font-medium text-sky-900 hover:bg-sky-400 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-sky-900 hover:bg-sky-400 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
