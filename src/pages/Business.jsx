import { useEffect } from "react";
import { initAos } from "../lib/initAos.js";
import { Link } from "react-router-dom";
import { businessUnits, businessCategories, isInfoPending } from "../data/siteData";

/** url: null = belum ada detail; string = eksternal; undefined = /unit/:id */
function unitHref(unit) {
  if (unit.url === null) return null;
  if (typeof unit.url === "string" && unit.url.length) return unit.url;
  return `/unit/${unit.id}`;
}

function BusinessCard({ unit, compact = false }) {
  const href = unitHref(unit);
  const isPending = isInfoPending(unit.hours);
  const hasStatus = Boolean(unit.status);
  const imageH = compact ? "h-48" : "h-56";
  const cardStateClass = hasStatus || !href ? " opacity-80" : "";
  const imgClass = hasStatus ? " mix-blend-luminosity opacity-70" : "";
  const labelClass = hasStatus ? "bg-zinc-800/90 text-white" : "bg-white/90 text-[#D90429]";
  const cardClass = `bg-white rounded-xl shadow-sm transition-all duration-300 overflow-hidden group border border-zinc-100 flex flex-col h-full${cardStateClass}${href ? " cursor-pointer hover:shadow-xl" : " cursor-default"}`;

  const body = (
    <>
      <div className={`relative ${imageH} overflow-hidden`}>
        <img className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105${imgClass}`} src={unit.image} alt={unit.name} loading="lazy" />
        {hasStatus && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <span className="text-white font-bold tracking-widest text-sm uppercase px-4 py-2 border-2 border-white rounded-lg">{unit.status}</span>
          </div>
        )}
        <div className={`absolute top-4 left-4 ${labelClass} backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider`}>{unit.label}</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-zinc-900 mb-2">{unit.name}</h3>
        <p className="text-zinc-500 text-sm mb-4 flex items-start gap-2">
          <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
          <span>{unit.location || "Informasi alamat segera tersedia"}</span>
        </p>
        <div className="mt-auto pt-4 border-t border-zinc-100">
          <p className="text-zinc-600 text-sm flex items-center gap-2 font-medium">
            <span className="material-symbols-outlined text-base text-zinc-400">schedule</span>
            <span className={isPending ? "italic text-zinc-400" : ""}>{unit.hours || "Hubungi outlet untuk jam operasional"}</span>
          </p>
        </div>
      </div>
    </>
  );

  if (!href) return <div className={cardClass}>{body}</div>;
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {body}
      </a>
    );
  }
  return (
    <Link to={href} className={cardClass}>
      {body}
    </Link>
  );
}

export default function Business() {
  useEffect(() => { initAos(); }, []);

  return (
    <main className="pt-20">
      {/* Hero */}
      <header className="relative bg-white py-20 px-6 overflow-hidden mt-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-[#fde8eb] text-[#D90429] text-xs font-bold rounded-full mb-6 uppercase tracking-wider">Portofolio Kami</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 mb-6">Jaringan Bisnis &<br />Gaya Hidup</h1>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl mb-4">PT. Mari Sukses Gemilang mengelola portofolio bisnis yang berfokus pada pengalaman gaya hidup, F&B, dan retail berkualitas tinggi di Cirebon dan sekitarnya.</p>
            <p className="text-zinc-500 text-base leading-relaxed max-w-2xl">Dari restoran dan cafe hingga fasilitas olahraga, hiburan, serta retail perhiasan — setiap unit dirancang untuk menghadirkan standar layanan yang konsisten, suasana yang nyaman, dan nilai jangka panjang bagi pelanggan serta komunitas lokal.</p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
          <div className="w-full h-full bg-[#D90429] transform skew-x-12 translate-x-1/2" />
        </div>
      </header>

      {/* Category nav */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3">
          {businessCategories.map((cat, i) => (
            <a key={cat.id} href={`#kategori-${cat.id}`} className={`px-6 py-2 rounded-full text-sm transition-all ${i === 0 ? "bg-[#D90429] text-white font-bold shadow-sm hover:bg-[#B00020]" : "bg-zinc-100 text-zinc-600 font-medium hover:bg-zinc-200"}`}>
              {cat.navLabel}
            </a>
          ))}
        </div>
      </section>

      {/* Units grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20 space-y-16">
        {businessCategories.map((cat, catIdx) => {
          const units = businessUnits.filter((u) => u.categoryId === cat.id);
          return (
            <div key={cat.id} id={`kategori-${cat.id}`} className={`scroll-mt-32${catIdx > 0 ? " pt-8" : ""}`}>
              <div className="flex items-center gap-4 mb-8 border-b border-zinc-100 pb-4">
                <div className="w-12 h-12 bg-[#D90429]/10 rounded-xl flex items-center justify-center text-[#D90429]"><span className="material-symbols-outlined text-2xl">{cat.icon}</span></div>
                <div>
                  <h2 className="font-heading font-bold text-3xl text-zinc-900">{cat.title}</h2>
                  <p className="text-zinc-500 text-sm mt-1">{cat.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {units.map((u) => <BusinessCard key={u.id} unit={u} />)}
              </div>
            </div>
          );
        })}
      </section>

      {/* Stats */}
      <section className="bg-[#D90429] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[["15+","Business Units"],["250+","Client Partners"],["34","Provinces Reached"],["1.2k","Talented Professionals"]].map(([v,l]) => (
              <div key={l}><div className="text-5xl font-bold text-white mb-2">{v}</div><div className="text-white/70 text-xs font-bold uppercase tracking-widest">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-zinc-50 rounded-xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <h2 className="font-bold text-3xl text-zinc-900 mb-4">Partner with MSG</h2>
            <p className="text-zinc-600 text-lg">Looking to collaborate with one of our business units or explore investment opportunities? Our team is ready to assist you.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-[#D90429] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#B00020] transition-all">Get in Touch</Link>
            <Link to="/about" className="bg-white border-2 border-[#D90429] text-[#D90429] px-8 py-4 rounded-lg font-bold hover:bg-red-50 transition-all">Pelajari Lebih Lanjut</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
