import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { businessUnits, unitDetails } from "../data/siteData";
import NotFound from "./NotFound";

export default function UnitDetail() {
  const { id } = useParams();
  const [lightbox, setLightbox] = useState(null);

  const baseUnit = businessUnits.find((u) => u.id === id);
  const detail = unitDetails[id] || {};
  const unit = { ...baseUnit, ...detail };

  useEffect(() => { window.AOS?.init({ duration: 600, once: true }); }, []);

  if (!baseUnit) return <NotFound />;

  const cover = unit.coverImage || unit.image;
  const address = unit.fullAddress || unit.location || "[Detail Alamat Menyusul]";
  const mapQuery = unit.mapQuery || `${unit.name} ${address}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const photos = Array.isArray(unit.photos) && unit.photos.length ? unit.photos : [cover].filter(Boolean);
  const videos = Array.isArray(unit.videos) ? unit.videos : [];

  return (
    <>
      {/* Hero Header */}
      <header className="relative w-full h-[50vh] min-h-[400px] bg-zinc-900 overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover opacity-60" src={cover} alt={unit.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 max-w-7xl mx-auto w-full" data-aos="fade-up">
          <span className="inline-block px-3 py-1 bg-[#D90429] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">{unit.label}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">{unit.name}</h1>
          <p className="text-zinc-300 text-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">location_on</span>
            <span>{address}</span>
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Tentang Kami</h2>
          <div className="text-zinc-600 mb-12 text-justify space-y-4 leading-relaxed">
            {(Array.isArray(unit.description) ? unit.description : ["Data unit bisnis belum tersedia."]).map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <h2 className="text-3xl font-bold text-zinc-900 mb-6 border-b border-zinc-200 pb-4">Galeri Visual</h2>

          {/* Videos */}
          {videos.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#D90429]">play_circle</span> Video Profil
              </h3>
              <div className="space-y-4">
                {videos.map((vid, i) => (
                  <div key={i} className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black aspect-video border border-zinc-200">
                    <video className="w-full h-full object-contain" controls poster={cover}>
                      <source src={vid} type="video/mp4" />
                      Browser Anda tidak mendukung pemutar video.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Photos */}
          <div>
            <h3 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D90429]">photo_library</span> Foto Bisnis
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {photos.map((photo, i) => (
                <div key={i} onClick={() => setLightbox(photo)} className="gallery-item aspect-square rounded-2xl overflow-hidden cursor-pointer relative group shadow-md border border-zinc-100">
                  <img src={photo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`${unit.name} photo ${i + 1}`} loading="lazy" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-4xl drop-shadow-lg">zoom_in</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info card */}
        <div className="space-y-8">
          <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-2xl shadow-sm">
            <h3 className="font-bold text-xl text-zinc-900 mb-6">Informasi Operasional</h3>
            <div className="space-y-6">
              {[
                { icon: "schedule", label: "Jam Buka", value: unit.hours || "Jam Operasional: TBC" },
                { icon: "call", label: "Kontak", value: unit.contact || "Kontak: TBC" },
                { icon: "map", label: "Alamat Lengkap", value: address },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D90429] text-xl mt-0.5">{row.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">{row.label}</p>
                    <p className="text-zinc-700 text-sm leading-relaxed">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Facilities */}
            {Array.isArray(unit.facilities) && unit.facilities.length > 0 && (
              <div className="mt-8 pt-8 border-t border-zinc-200">
                <h4 className="font-bold text-sm text-zinc-900 mb-4 uppercase tracking-wider">Fasilitas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {unit.facilities.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-zinc-600">
                      <span className="material-symbols-outlined text-base text-[#D90429]">check_circle</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Booking links */}
            {Array.isArray(unit.bookingLinks) && unit.bookingLinks.length > 0 && (
              <div className="mt-8 pt-8 border-t border-zinc-200">
                <h4 className="font-bold text-sm text-zinc-900 mb-4 uppercase tracking-wider">Booking</h4>
                <div className="space-y-3">
                  {unit.bookingLinks.map((bl) => (
                    <a key={bl.label} href={bl.href} target="_blank" rel="noopener noreferrer" className="w-full bg-white border border-zinc-200 text-zinc-800 font-bold py-3 px-4 rounded-xl hover:border-[#D90429] hover:text-[#D90429] transition-colors shadow-sm flex items-center justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-lg text-[#D90429]">{bl.icon || "arrow_outward"}</span>
                        <span>{bl.label}</span>
                      </span>
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="w-full mt-8 bg-[#D90429] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#B00020] transition-colors shadow-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">directions</span>
              Buka di Maps
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white p-2 bg-white/10 rounded-full hover:bg-white/20" onClick={() => setLightbox(null)} aria-label="Close">
            <span className="material-symbols-outlined text-3xl block">close</span>
          </button>
          <img src={lightbox} alt="Gallery Preview" className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
