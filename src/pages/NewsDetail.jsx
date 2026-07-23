import { useEffect } from "react";
import { initAos } from "../lib/initAos.js";
import { Link, useParams } from "react-router-dom";
import { newsArticles } from "../data/siteData";
import NotFound from "./NotFound";

export default function NewsDetail() {
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === id) || newsArticles[0];
  const related = newsArticles.filter((a) => a.id !== article.id).slice(0, 3);

  useEffect(() => { initAos(); }, []);

  if (!article) return <NotFound />;

  const firstLetter = article.lead?.trim().charAt(0) || "";
  const leadRest = article.lead?.trim().slice(1) || "";

  return (
    <>
      {/* Header */}
      <header className="pt-32 pb-12 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 text-sm mb-6">
            <Link to="/news" className="text-zinc-500 hover:text-red-600 transition-colors">Berita Utama</Link>
            <span className="text-zinc-300">/</span>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold text-xs tracking-wider uppercase">{article.category}</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">{article.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight mb-8 tracking-tight">{article.title}</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm border-t border-zinc-200 pt-8 mt-8">
            <div className="flex items-center gap-3">
              <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&background=ef4444&color=fff`} alt={article.author} className="w-10 h-10 rounded-full" />
              <div className="text-left">
                <div className="font-bold text-zinc-900">{article.author}</div>
                <div className="text-zinc-500">{article.authorRole}</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-zinc-200" />
            <div className="flex items-center gap-3">
              <span className="text-zinc-500 font-medium">Bagikan Artikel:</span>
              <button className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-red-50 text-zinc-600 hover:text-[#D90429] flex items-center justify-center transition-all" type="button"><span className="material-symbols-outlined text-sm">link</span></button>
              <button className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-blue-50 text-zinc-600 hover:text-blue-600 flex items-center justify-center transition-all" type="button"><span className="material-symbols-outlined text-sm">share</span></button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden mb-16 shadow-2xl" data-aos="fade-up">
            <img className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" src={article.image} alt={article.alt || article.title} />
          </div>

          <article className="prose prose-lg md:prose-xl prose-zinc max-w-none leading-relaxed" data-aos="fade-up">
            {article.lead && (
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light mb-10">
                <span className="float-left text-7xl font-black text-[#D90429] mr-4 mt-2 leading-[0.8]">{firstLetter}</span>{leadRest}
              </p>
            )}
            {(article.content || []).map((para, i) => (
              <p key={i} className="mb-8 text-zinc-700 leading-relaxed">{para}</p>
            ))}
            {article.quote && (
              <div className="my-16 pl-8 py-4 border-l-4 border-[#D90429] bg-red-50/50 rounded-r-xl">
                <blockquote className="text-2xl font-semibold italic text-zinc-800 m-0 leading-snug">"{article.quote.text}"</blockquote>
                <div className="mt-4 font-bold text-zinc-900">— {article.quote.by}</div>
              </div>
            )}
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-zinc-100" data-aos="fade-up">
            {(article.tags || []).map((tag) => (
              <span key={tag} className="px-4 py-2 bg-zinc-100 text-zinc-600 text-sm rounded-full font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </main>

      {/* Related */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12" data-aos="fade-up">
            <div>
              <h2 className="font-bold text-3xl mb-2">Berita Terkait</h2>
              <p className="text-zinc-500">Jelajahi informasi dan pembaruan lain dari perusahaan kami.</p>
            </div>
            <Link to="/news" className="text-[#D90429] font-bold flex items-center gap-2 hover:gap-3 transition-all hidden md:flex">
              Lihat Semua Berita <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((rel, idx) => (
              <Link key={rel.id} to={`/news/${rel.id}`} className="bg-white rounded-xl overflow-hidden border border-zinc-100 group shadow-sm hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
                <div className="h-48 overflow-hidden"><img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={rel.image} alt={rel.alt || rel.title} loading="lazy" /></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                    <span className="bg-red-50 text-[#D90429] px-3 py-1 rounded-full font-semibold">{rel.category}</span>
                    <span>{rel.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-[#D90429] transition-colors line-clamp-2">{rel.title}</h4>
                  <p className="text-zinc-500 text-sm line-clamp-3 mb-6">{rel.excerpt}</p>
                  <span className="text-sm font-bold text-[#D90429] flex items-center gap-1">Baca Selengkapnya <span className="material-symbols-outlined text-sm">chevron_right</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
