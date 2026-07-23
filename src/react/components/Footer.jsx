import { Link } from "react-router-dom";

const navLinks = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Kami", to: "/about" },
  { label: "Unit Bisnis", to: "/business" },
  { label: "Galeri", to: "/gallery" },
  { label: "Berita", to: "/news" },
  { label: "Hubungi Kami", to: "/contact" },
];

const socialLinks = [
  "J Chicken", "Ulon Signature", "Araichi Ramen", "Padelnis Sport",
  "Luuca", "Momoyo", "Toko Mas An An", "Toko Mas Complete Mulia",
  "Victory Billiard", "Grandmonde",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F5F7] font-sans text-sm text-gray-600 border-t border-gray-200 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-full opacity-[0.15] pointer-events-none z-0 mix-blend-multiply">
        <img src="https://pmpland.co.id/sub-www/images/maps.jpg" alt="Indonesia Map" className="w-full h-full object-contain object-right" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 lg:gap-16 relative z-10">
        {/* Brand */}
        <div className="w-full md:w-1/4 flex flex-col space-y-4">
          <div className="flex items-center mb-4">
            <h4 className="font-bold text-[#1e293b] text-sm tracking-wide uppercase">PT. Mari Sukses Gemilang</h4>
            <svg className="ml-3 rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.15)]" style={{ width: 24, height: 16, minWidth: 24 }} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
              <rect width="3" height="2" fill="#ffffff" />
              <rect width="3" height="1" fill="#ce1126" />
            </svg>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Membangun jaringan bisnis lifestyle terkemuka di Indonesia, berfokus pada kualitas, inovasi, dan pengalaman pelanggan yang luar biasa.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#D90429] hover:text-white transition-all shadow-sm" aria-label="Email">
              <span className="material-symbols-outlined text-[16px]">mail</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#25D366] hover:text-white transition-all shadow-sm" aria-label="Call">
              <span className="material-symbols-outlined text-[16px]">call</span>
            </a>
          </div>
        </div>

        {/* Menu */}
        <div className="w-full md:w-1/4 flex flex-col space-y-4">
          <h4 className="font-bold text-[#1e293b] text-sm tracking-wide mb-2 uppercase">Menu Utama</h4>
          <div className="flex flex-col space-y-3 text-sm">
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to} className="text-gray-600 hover:text-[#D90429] font-medium transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="w-full md:w-2/4 flex flex-col space-y-4">
          <h4 className="font-bold text-[#1e293b] text-sm tracking-wide mb-2 uppercase">Jaringan Sosial Media</h4>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
            {socialLinks.map((name) => (
              <a key={name} href="#" className="text-gray-600 hover:text-[#D90429] font-medium transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">link</span>
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-gray-300 text-center text-gray-500 font-medium">
        © Copyright 2026 PT. MARI SUKSES GEMILANG
      </div>
    </footer>
  );
}
