import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PATHS, normalizePath } from "../seo/pages.js";

const navLinks = [
  { label: "Beranda", to: PATHS.home },
  { label: "Tentang Kami", to: PATHS.about },
  { label: "Unit Bisnis", to: PATHS.business },
  { label: "Galeri", to: PATHS.gallery },
  { label: "Berita", to: PATHS.news },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const current = normalizePath(pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white z-[1000] border-b border-gray-200 flex items-center shadow-sm">
      <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-6 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex justify-start">
          <Link to={PATHS.home} className="flex items-center py-1 transition-opacity hover:opacity-90">
            <img src="/logo.svg" alt="PT. Mari Sukses Gemilang" className="h-10 md:h-11 w-auto object-contain" />
          </Link>
        </div>

        <div className="hidden items-center justify-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={current === normalizePath(item.to) ? "text-[#D90429]" : "text-zinc-500 transition-colors hover:text-zinc-900"}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end">
          <Link
            to={PATHS.contact}
            className="hidden rounded-lg bg-[#D90429] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#B00020] md:inline-flex"
          >
            Hubungi Kami
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-900 transition-colors hover:bg-zinc-50 focus:outline-none md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-2xl flex flex-col z-[1001] md:hidden">
          <div className="max-w-7xl mx-auto w-full px-6 py-8 flex flex-col space-y-5">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={current === normalizePath(item.to) ? "text-[#D90429] font-bold text-lg block" : "text-zinc-600 font-bold text-lg hover:text-[#D90429] block"}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 mt-2 border-t border-zinc-100">
              <Link
                to={PATHS.contact}
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-[#D90429] text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
