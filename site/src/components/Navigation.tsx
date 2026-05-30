"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/who-we-help", label: "Who We Help" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

/* AZ Security Consulting — shield with lock icon, no text */
function BrandIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield outer */}
      <path d="M20 2L36 8V22C36 31.5 29 39 20 42C11 39 4 31.5 4 22V8L20 2Z" fill="#1D4ED8" />
      {/* Shield inner bevel */}
      <path d="M20 5.5L33.5 11V22C33.5 30 27.5 37 20 39.5C12.5 37 6.5 30 6.5 22V11L20 5.5Z" fill="#2563EB" />
      {/* Lock shackle (arc) */}
      <path d="M15 21V18.5a5 5 0 0110 0V21" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Lock body */}
      <rect x="13.5" y="21" width="13" height="10" rx="2" fill="white" />
      {/* Keyhole circle */}
      <circle cx="20" cy="25.5" r="2" fill="#1D4ED8" />
      {/* Keyhole slot */}
      <rect x="19.2" y="25.5" width="1.6" height="2.8" rx="0.8" fill="#1D4ED8" />
    </svg>
  );
}

const btnBase = "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wide transition-colors";
const primaryBtn = `${btnBase} bg-blue-700 text-white hover:bg-blue-800`;

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Trust bar */}
      <div className="bg-blue-700 text-white text-xs font-medium text-center py-2 px-4 flex items-center justify-center gap-2">
        <BrandIcon size={16} />
        Backed by the building security experience of AZ Security Consulting — remote doorman, access control, CCTV, visitor verification, and real-time operator support.
      </div>

      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <BrandIcon size={36} />
              <div className="leading-tight">
                <span className="block text-slate-900 font-extrabold text-sm tracking-tight whitespace-nowrap">
                  AZ SECURITY
                </span>
                <span className="block text-blue-700 font-semibold text-xs tracking-widest uppercase">
                  Consulting
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-blue-700"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/get-a-quote" className={primaryBtn}>
                GET A QUOTE
              </Link>
              <a href="tel:6464229626" className={primaryBtn}>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                CALL US (646) 422-9626
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${
                  pathname === link.href ? "text-blue-700" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="tel:6464229626" className={`${outlineBtn} flex-1 justify-center`}>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                CALL US
              </a>
              <Link
                href="/get-a-quote"
                onClick={() => setMenuOpen(false)}
                className={`${primaryBtn} flex-1 justify-center`}
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
