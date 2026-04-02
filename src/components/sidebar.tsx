"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "AMBALAJ", href: "/" },
  { label: "LOGOTYPE", href: "/logotype" },
  { label: "KATALOG & BROŞÜR", href: "/katalog-brosur" },
  { label: "KEY VISUAL & AFİŞ", href: "/key-visual-afis" },
  { label: "TABELA & TOTEM", href: "/tabela-totem" },
  { label: "MOTION GRAPHIC & VIDEO", href: "/motion-graphic-video" },
  { label: "DİĞER ÇALIŞMALAR", href: "/diger-calismalar" },
  { label: "MANİFESTOMUZ", href: "/manifestomuz" },
  { label: "İLETİŞİM", href: "/iletisim" },
  {
    label: "BİZE KATIL",
    href: "https://forms.gle/J8B7Zpz5vJVThLMM6",
    external: true,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rubatodesignist/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rubatodesign",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rubatodesignist/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-brand-dark text-brand-yellow p-2 rounded"
        aria-label="Menü"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[320px] bg-brand-yellow z-40 flex flex-col justify-between py-12 px-10 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div>
          <Link href="/" className="block mb-10" onClick={() => setMobileOpen(false)}>
            <h1 className="text-4xl font-black leading-none tracking-tight">
              RUBATO
              <br />
              <span className="text-brand-dark/80">DESIGN.</span>
            </h1>
          </Link>

          {/* Menu */}
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold tracking-wide hover:text-brand-dark/60 transition-colors py-1"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-bold tracking-wide transition-colors py-1 ${
                    isActive ? "text-white" : "text-brand-dark hover:text-brand-dark/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Social */}
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark hover:text-brand-dark/60 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
