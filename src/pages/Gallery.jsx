import { useEffect, useState } from "react";
import { initAos } from "../lib/initAos.js";
import { galleryItems, galleryFilters } from "../data/siteData";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => { initAos(); }, []);

  const filtered = activeFilter === "all" ? galleryItems : galleryItems.filter((i) => i.categoryId === activeFilter);

  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="max-w-3xl">
          <span className="text-[#D90429] font-bold text-sm uppercase tracking-widest mb-4 block">Dokumentasi Visual</span>
          <h1 className="text-5xl font-bold text-zinc-900 mb-4">Galeri Ekosistem Bisnis</h1>
          <p className="text-lg text-zinc-600 mb-8">Melihat lebih dekat fasilitas, suasana, dan operasional dari jaringan unit bisnis unggulan di bawah naungan PT. Mari Sukses Gemilang.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 border-b border-zinc-200 pb-6">
          {galleryFilters.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${activeFilter === f.id ? "bg-[#D90429] text-white shadow-sm" : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600"}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightbox(item.image)}
              className="cursor-pointer group relative overflow-hidden rounded-xl bg-white border border-zinc-100 transition-all hover:shadow-xl"
              data-aos="fade-up"
            >
              <img className="gallery-img w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt={item.alt || item.title} loading="lazy" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl drop-shadow-lg">zoom_in</span>
              </div>
              <div className="p-5">
                <span className="text-[#D90429] font-bold text-xs block mb-1">{item.categoryLabel}</span>
                <h4 className="font-bold text-base text-zinc-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats callout */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-[#D90429] rounded-xl p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-3xl text-white mb-3">Our Presence in Frame</h2>
            <p className="text-white/80 text-lg">Documentation from across 15+ years of corporate development and industrial success.</p>
          </div>
          <div className="grid grid-cols-2 gap-12 w-full md:w-auto">
            <div className="text-center"><span className="block text-5xl font-bold text-white">500+</span><span className="text-white/70 text-xs font-bold uppercase tracking-widest">Acara Captured</span></div>
            <div className="text-center"><span className="block text-5xl font-bold text-white">12</span><span className="text-white/70 text-xs font-bold uppercase tracking-widest">Unit Facilities</span></div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white p-2 bg-white/10 rounded-full hover:bg-white/20" onClick={() => setLightbox(null)} aria-label="Close">
            <span className="material-symbols-outlined text-3xl block">close</span>
          </button>
          <img src={lightbox} alt="Preview" className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
