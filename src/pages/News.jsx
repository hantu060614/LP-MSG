import { useEffect } from "react";
import { initAos } from "../lib/initAos.js";
import { Link } from "react-router-dom";
import { newsArticles } from "../data/siteData";

export default function News() {
  useEffect(() => { initAos(); }, []);

  return (
    <main className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-6 mb-14">
        <div className="max-w-3xl" data-aos="fade-up">
          <span className="text-[#D90429] font-bold text-sm uppercase tracking-widest mb-4 block">Berita & Insight</span>
          <h1 className="text-5xl font-bold text-zinc-900 mb-4">Wawasan Terbaru</h1>
          <p className="text-lg text-zinc-600">Dapatkan informasi terbaru mengenai pergerakan perusahaan, aktivitas unit bisnis, campaign, dan insight dari PT. Mari Sukses Gemilang.</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((art, idx) => (
            <Link
              key={art.id}
              to={`/news/${art.id}`}
              className="bg-white rounded-xl overflow-hidden group cursor-pointer border border-zinc-100 shadow-sm hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay={100 + (idx % 3) * 100}
            >
              <div className="h-56 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={art.image} alt={art.alt || art.title} loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-medium uppercase tracking-wider">
                  <span className="text-[#D90429] font-bold">{art.category}</span>
                  <span>{art.date}</span>
                </div>
                <h4 className="font-heading font-bold text-xl mb-3 text-zinc-900 group-hover:text-[#D90429] transition-colors line-clamp-2">{art.title}</h4>
                <p className="text-zinc-500 text-sm line-clamp-2 mb-4 leading-relaxed">{art.excerpt}</p>
                <span className="text-sm font-bold text-[#D90429] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Baca Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
