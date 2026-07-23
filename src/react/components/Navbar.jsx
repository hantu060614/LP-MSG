import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Kami", to: "/about" },
  { label: "Unit Bisnis", to: "/business" },
  { label: "Galeri", to: "/gallery" },
  { label: "Berita", to: "/news" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white z-[1000] border-b border-gray-200 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#D90429] tracking-tighter leading-none flex-shrink-0" style={{ fontFamily: "sans-serif" }}>
          MSG
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-1 px-8 space-x-8 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={pathname === item.to ? "text-[#D90429]" : "text-zinc-500 hover:text-zinc-900 transition-colors"}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <Link to="/contact" className="bg-[#D90429] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#B00020] transition-colors shadow-sm">
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center text-zinc-900 w-10 h-10 -mr-2 focus:outline-none hover:bg-zinc-50 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-2xl flex flex-col z-[1001] md:hidden">
          <div className="max-w-7xl mx-auto w-full px-6 py-8 flex flex-col space-y-5">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={pathname === item.to ? "text-[#D90429] font-bold text-lg block" : "text-zinc-600 font-bold text-lg hover:text-[#D90429] block"}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 mt-2 border-t border-zinc-100">
              <Link
                to="/contact"
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
