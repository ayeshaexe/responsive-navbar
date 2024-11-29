"use client";
import Link from "next/link"
import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center h-[80px]">
        <div className="text-lg font-bold text-[#42454A]">LOGO</div>
        <button
          onClick={() => setIsMenuOpen((see) => !see)}
          className="lg:hidden text-[#42454A] focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <nav className="hidden lg:flex space-x-8 text-[#42454A]">
          <Link href="/">HOME</Link>
          <Link href="#">CONTACT</Link>
          <Link href="#">PRODUCT</Link>
        </nav>
        <div className="hidden lg:flex space-x-4">
          <Link href="#" className="text-[#42454A] px-4 py-2">
            LOG IN
          </Link>
          <Link href="#" className="bg-[#42454A] text-white px-4 py-2 rounded">
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden flex flex-col items-center space-y-4 py-4 bg-white text-[#42454A] shadow-md">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            HOME
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>
            CONTACT
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>
            PRODUCT
          </Link>
          <Link href="#" className="text-[#42454A]">
            LOG IN
          </Link>
          <Link href="#" className="bg-[#42454A] text-white px-4 py-2 rounded">
            SIGN UP
          </Link>
        </nav>
      )}
    </header>
  );
}
