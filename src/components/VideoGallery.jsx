import { useEffect, useRef, useState } from "react";

/**
 * Portrait reels gallery — light surface, modal player.
 */
export default function VideoGallery({ videos = [], poster, title = "Video" }) {
  const [active, setActive] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (active == null) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") {
        setActive((i) => (i == null ? 0 : (i + 1) % videos.length));
      }
      if (e.key === "ArrowLeft") {
        setActive((i) => (i == null ? 0 : (i - 1 + videos.length) % videos.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, videos.length]);

  useEffect(() => {
    const el = playerRef.current;
    if (!el || active == null) return;
    el.load();
    el.play().catch(() => {});
  }, [active]);

  if (!videos.length) return null;

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D90429]">
                Media
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
                Video Profil
              </h2>
            </div>
            <p className="text-sm text-zinc-500">{videos.length} video</p>
          </div>

          <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 xl:grid-cols-4">
            {videos.map((vid, i) => (
              <button
                key={vid}
                type="button"
                onClick={() => setActive(i)}
                className="group relative w-[200px] shrink-0 snap-center overflow-hidden rounded-2xl bg-zinc-100 text-left shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#D90429]/40 md:w-auto"
                aria-label={`Putar video ${i + 1} — ${title}`}
              >
                <div className="relative aspect-[9/16]">
                  <video
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    muted
                    playsInline
                    preload="metadata"
                    poster={poster}
                    src={`${vid}#t=0.35`}
                    tabIndex={-1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#D90429] shadow-lg ring-1 ring-zinc-200/80 transition group-hover:scale-110">
                      <span className="material-symbols-outlined text-3xl">play_arrow</span>
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2 py-1 text-[11px] font-bold tracking-wide text-zinc-800 shadow-sm backdrop-blur-sm">
                    Video {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active != null && (
        <div
          className="fixed inset-0 z-[2100] flex items-center justify-center bg-zinc-900/70 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Pemutar video"
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-white p-2 text-zinc-700 shadow-md transition hover:bg-zinc-100"
            onClick={() => setActive(null)}
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined block text-3xl">close</span>
          </button>

          {videos.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 text-zinc-800 shadow-md transition hover:bg-zinc-100 md:flex"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => (i - 1 + videos.length) % videos.length);
                }}
                aria-label="Video sebelumnya"
              >
                <span className="material-symbols-outlined text-3xl">chevron_left</span>
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 text-zinc-800 shadow-md transition hover:bg-zinc-100 md:flex"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => (i + 1) % videos.length);
                }}
                aria-label="Video berikutnya"
              >
                <span className="material-symbols-outlined text-3xl">chevron_right</span>
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-[min(100%,380px)] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[9/16] bg-zinc-100">
              <video
                key={videos[active]}
                ref={playerRef}
                className="absolute inset-0 h-full w-full object-cover"
                controls
                playsInline
                autoPlay
                preload="auto"
                poster={poster}
              >
                <source src={videos[active]} type="video/mp4" />
              </video>
            </div>
            <p className="bg-white px-4 py-3 text-center text-xs font-medium text-zinc-500">
              {title} · {String(active + 1).padStart(2, "0")} /{" "}
              {String(videos.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
