import { useEffect, useState } from "react";
import { initAos } from "../lib/initAos.js";
import { useParams } from "react-router-dom";
import { businessUnits, unitDetails } from "../data/siteData";
import NotFound from "./NotFound";
import VideoGallery from "../components/VideoGallery";

export default function UnitDetail() {
  const { id } = useParams();
  const [lightbox, setLightbox] = useState(null);

  const baseUnit = businessUnits.find((u) => u.id === id);
  const detail = unitDetails[id] || {};
  const unit = { ...baseUnit, ...detail };

  useEffect(() => {
    initAos();
  }, []);

  if (!baseUnit) return <NotFound />;

  const cover = unit.coverImage || unit.image;
  const address = unit.fullAddress || unit.location || "Informasi alamat segera tersedia";
  const hours = unit.hours || "Hubungi outlet untuk jam operasional";
  const mapQuery = unit.mapQuery || `${unit.name} ${address}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const photos =
    Array.isArray(unit.photos) && unit.photos.length ? unit.photos : [cover].filter(Boolean);
  const videos = Array.isArray(unit.videos) ? unit.videos : [];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <header className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-zinc-900">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src={cover}
          alt={unit.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
        <div
          className="absolute inset-0 mx-auto flex w-full max-w-7xl flex-col items-start justify-end px-6 pb-16"
          data-aos="fade-up"
        >
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#D90429] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {unit.label}
          </span>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {unit.name}
          </h1>
          <p className="flex items-center gap-2 text-lg text-zinc-300">
            <span className="material-symbols-outlined text-xl">location_on</span>
            <span>{address}</span>
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-3xl font-bold text-zinc-900">Tentang Kami</h2>
          <div className="mb-4 space-y-4 text-justify leading-relaxed text-zinc-600">
            {(Array.isArray(unit.description)
              ? unit.description
              : ["Data unit bisnis belum tersedia."]
            ).map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>

        {/* Info card */}
        <div className="space-y-8">
          <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-zinc-900">Informasi Operasional</h3>
            <div className="space-y-6">
              {[
                { icon: "schedule", label: "Jam Buka", value: hours },
                { icon: "call", label: "Kontak", value: unit.contact || "Hubungi Head Office" },
                { icon: "map", label: "Alamat Lengkap", value: address },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-xl text-[#D90429]">
                    {row.icon}
                  </span>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-zinc-500">
                      {row.label}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-700">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {Array.isArray(unit.facilities) && unit.facilities.length > 0 && (
              <div className="mt-8 border-t border-zinc-200 pt-8">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-zinc-900">
                  Fasilitas
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {unit.facilities.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-zinc-600">
                      <span className="material-symbols-outlined text-base text-[#D90429]">
                        check_circle
                      </span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Array.isArray(unit.bookingLinks) && unit.bookingLinks.length > 0 && (
              <div className="mt-8 border-t border-zinc-200 pt-8">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-zinc-900">
                  Booking
                </h4>
                <div className="space-y-3">
                  {unit.bookingLinks.map((bl) => (
                    <a
                      key={bl.label}
                      href={bl.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 font-bold text-zinc-800 shadow-sm transition-colors hover:border-[#D90429] hover:text-[#D90429]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-lg text-[#D90429]">
                          {bl.icon || "arrow_outward"}
                        </span>
                        <span>{bl.label}</span>
                      </span>
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D90429] px-4 py-3 font-bold text-white shadow-sm transition-colors hover:bg-[#B00020]"
            >
              <span className="material-symbols-outlined text-lg">directions</span>
              Buka di Maps
            </a>
          </div>
        </div>
      </section>

      {/* Full-bleed video band — better desktop composition */}
      <VideoGallery videos={videos} poster={cover} title={unit.name} />

      {/* Photos */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 flex items-center gap-2 text-3xl font-bold text-zinc-900">
          <span className="material-symbols-outlined text-[#D90429]">photo_library</span>
          Galeri Foto
        </h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <div
              key={photo}
              onClick={() => setLightbox(photo)}
              className="gallery-item group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-zinc-100 shadow-md"
            >
              <img
                src={photo}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={`${unit.name} photo ${i + 1}`}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="material-symbols-outlined text-4xl text-white drop-shadow-lg">
                  zoom_in
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/50 hover:bg-white/20 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <span className="material-symbols-outlined block text-3xl">close</span>
          </button>
          <img
            src={lightbox}
            alt="Gallery Preview"
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
