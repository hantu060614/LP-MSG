import { useEffect } from "react";
import { initAos } from "../lib/initAos.js";
import { Link } from "react-router-dom";
import { businessUnits, businessCategories, newsArticles, isInfoPending } from "../data/siteData";

const directors = [
  { name: "Budi Santoso", role: "President Director (CEO)", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" },
  { name: "Siti Rahmawati", role: "Chief Financial Officer (CFO)", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" },
  { name: "Hendra Wijaya", role: "Chief Operating Officer (COO)", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974" },
  { name: "Anita Setiawan", role: "Chief Marketing Officer (CMO)", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961" },
];

export default function Home() {
  useEffect(() => {
    initAos();
  }, []);

  const renderUnit = (unit, index) => {
    // url: null = belum ada detail; string = eksternal; undefined = /unit/:id
    const href =
      unit.url === null
        ? null
        : typeof unit.url === "string" && unit.url.length
          ? unit.url
          : `/unit/${unit.id}/`;
    const isPending = isInfoPending(unit.hours);
    const hasStatus = Boolean(unit.status);
    const cardStateClass = hasStatus || !href ? " opacity-80" : "";
    const imgClass = hasStatus ? " mix-blend-luminosity opacity-70" : "";
    const labelClass = hasStatus ? "bg-zinc-800/90 text-white" : "bg-white/90 text-[#D90429]";
    const cardClass = `bg-white rounded-xl shadow-sm transition-all duration-300 overflow-hidden group border border-zinc-100 flex flex-col h-full${cardStateClass}${href ? " cursor-pointer hover:shadow-xl" : " cursor-default"}`;

    const inner = (
      <>
        <div className="relative h-48 overflow-hidden">
          <img className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105${imgClass}`} src={unit.image} alt={unit.name} loading="lazy" />
          {hasStatus && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
              <span className="text-white font-bold tracking-widest text-sm uppercase px-4 py-2 border-2 border-white rounded-lg">{unit.status}</span>
            </div>
          )}
          <div className={`absolute top-4 left-4 ${labelClass} backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider`}>{unit.label}</div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-heading font-bold text-xl text-zinc-900 mb-2">{unit.name}</h3>
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

    const aosProps = {
      "data-aos": "fade-up",
      "data-aos-delay": 100 + ((index || 0) % 8) * 50,
    };

    if (!href) {
      return (
        <div key={unit.id} className={cardClass} {...aosProps}>
          {inner}
        </div>
      );
    }
    if (href.startsWith("http")) {
      return (
        <a key={unit.id} href={href} target="_blank" rel="noopener noreferrer" className={cardClass} {...aosProps}>
          {inner}
        </a>
      );
    }
    return (
      <Link key={unit.id} to={href} className={cardClass} {...aosProps}>
        {inner}
      </Link>
    );
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <img src="/assets/img/banner_home.jpeg" alt="Aktivitas Bisnis" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/50 to-zinc-900/80" />
        </div>
        <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center mt-4 md:mt-0" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-xl">Kami saksi di setiap moment terbaik kamu.</h1>
          <p className="text-lg md:text-xl text-zinc-200 mb-12 font-medium max-w-2xl drop-shadow-md leading-relaxed">Membangun brand lifestyle yang tidak hanya dipercaya, tetapi juga menjadi bagian dari kehidupan sehari-hari Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link to="/business/" className="bg-[#D90429] hover:bg-[#B00020] text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(217,4,41,0.4)] flex justify-center items-center gap-2 w-full sm:w-auto text-lg">Rasakan Pengalaman Baru</Link>
            <Link to="/gallery/" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white px-10 py-4 rounded-xl font-bold transition-all duration-300 w-full sm:w-auto text-lg">Explore & Taste</Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1" data-aos="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img className="rounded-2xl w-full h-48 object-cover shadow-md" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070" alt="Food" />
                  <img className="rounded-2xl w-full h-64 object-cover shadow-md" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070" alt="Customer" />
                </div>
                <div className="space-y-4 pt-8">
                  <img className="rounded-2xl w-full h-64 object-cover shadow-md" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071" alt="Barista" />
                  <img className="rounded-2xl w-full h-48 object-cover shadow-md" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" alt="Lifestyle" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-up">
              <span className="text-[#D90429] font-bold tracking-widest text-xs uppercase mb-4 block">Tentang Kami</span>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-zinc-900 leading-[1.1]">Menjadi Bagian dari Kehidupan Sehari-hari.</h2>
              <p className="text-lg text-zinc-500 mb-6 leading-relaxed">Kami mengintegrasikan standar tinggi dalam setiap aspek bisnis, mulai dari pemilihan bahan baku, proses produksi, hingga pelayanan kepada pelanggan. Setiap detail diperhatikan untuk memastikan pengalaman yang konsisten dan memuaskan.</p>
              <p className="text-lg text-zinc-500 mb-6 leading-relaxed">Di sisi lifestyle, personalisasi menjadi kunci. Konsumen ingin merasa terhubung secara personal dengan brand. Oleh karena itu, storytelling, identitas visual, dan komunikasi yang autentik menjadi faktor penting dalam membangun loyalitas.</p>
              <p className="text-lg text-zinc-500 mb-10 leading-relaxed">Sebagai holding di Cirebon, MSG mengelola portofolio F&B, cafe, olahraga, hiburan, dan retail agar setiap brand saling memperkuat ekosistem — memberikan nilai bagi pelanggan, mitra, dan komunitas lokal.</p>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D90429]/10 text-[#D90429] flex items-center justify-center"><span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span></div>
                  <div><h4 className="font-heading font-bold text-xl mb-2 text-zinc-900">Kualitas & Inovasi</h4><p className="text-zinc-500 text-sm leading-relaxed">Melalui kombinasi antara kualitas dan inovasi, kami ingin menjadi brand yang selalu dipercaya.</p></div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D90429]/10 text-[#D90429] flex items-center justify-center"><span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span></div>
                  <div><h4 className="font-heading font-bold text-xl mb-2 text-zinc-900">Pengalaman Personal</h4><p className="text-zinc-500 text-sm leading-relaxed">Membangun loyalitas melalui komunikasi yang autentik dan pelayanan sepenuh hati.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business portfolio */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-[#D90429] font-bold tracking-widest text-xs uppercase mb-4 block">Unit Bisnis</span>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-zinc-900 leading-[1.1]">Portofolio Bisnis Kami</h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">Jaringan bisnis yang terus berkembang, menghadirkan produk dan layanan terbaik untuk gaya hidup Anda.</p>
          </div>
          <div className="space-y-16 w-full">
            {businessCategories.map((cat, catIdx) => {
              const units = businessUnits.filter((u) => u.categoryId === cat.id);
              return (
                <div key={cat.id} className={catIdx > 0 ? "pt-8" : ""}>
                  <div className="flex items-center gap-4 mb-8 border-b border-zinc-100 pb-4">
                    <div className="w-12 h-12 bg-[#D90429]/10 rounded-xl flex items-center justify-center text-[#D90429]"><span className="material-symbols-outlined text-2xl">{cat.icon}</span></div>
                    <div><h3 className="font-heading font-bold text-2xl text-zinc-900">{cat.title}</h3><p className="text-zinc-500 text-sm mt-1">{cat.description}</p></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{units.map(renderUnit)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-[#D90429] font-bold tracking-widest text-xs uppercase mb-4 block">Kepemimpinan Kami</span>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-zinc-900 leading-[1.1]">Dewan Direksi</h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">Para visioner di balik kesuksesan dan inovasi berkelanjutan PT. Mari Sukses Gemilang.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {directors.map((d, i) => (
              <div key={i} className="bg-[#F8F9FA] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
                <div className="h-80 overflow-hidden relative"><img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={d.img} alt={d.name} /></div>
                <div className="p-8 text-center"><h3 className="font-heading font-bold text-2xl text-zinc-900 mb-2">{d.name}</h3><p className="text-[#D90429] font-bold text-sm tracking-widest uppercase">{d.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6" data-aos="fade-up">
            <div>
              <span className="text-[#D90429] font-bold tracking-widest text-xs uppercase mb-4 block">Berita & Insight</span>
              <h2 className="font-heading font-bold text-4xl text-zinc-900 mb-4">Wawasan Terbaru</h2>
              <p className="text-zinc-500 max-w-xl text-lg">Dapatkan informasi terbaru mengenai pergerakan perusahaan dan laporan industri kami.</p>
            </div>
            <Link to="/news/" className="text-[#D90429] font-bold flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">Lihat Semua Berita <span className="material-symbols-outlined">arrow_forward</span></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsArticles.slice(0, 3).map((art, idx) => (
              <Link key={art.id} to={`/news/${art.id}/`} className="bg-white rounded-xl overflow-hidden group cursor-pointer" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
                <div className="h-64 overflow-hidden rounded-xl mb-6">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={art.image} alt={art.alt} />
                </div>
                <div>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-medium uppercase tracking-wider">
                    <span className="text-[#D90429] font-bold">{art.category}</span>
                    <span>{art.date}</span>
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-3 text-zinc-900 group-hover:text-[#D90429] transition-colors line-clamp-2">{art.title}</h4>
                  <p className="text-zinc-500 text-sm line-clamp-2 mb-4 leading-relaxed">{art.excerpt}</p>
                  <span className="text-sm font-bold text-[#D90429] flex items-center gap-1 group-hover:gap-2 transition-all">Baca Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-zinc-900 rounded-xl p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 text-center" data-aos="fade-up">
            <h2 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">Siap Mengakselerasi Kesuksesan Anda?</h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">Bermitra dengan PT. Mari Sukses Gemilang untuk membuka potensi baru dan mendorong bisnis Anda menuju pertumbuhan berkelanjutan.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact/" className="bg-[#D90429] text-white hover:bg-[#B00020] px-10 py-4 rounded-lg font-bold shadow-xl transition-all">Bekerja Sama</Link>
              <Link to="/about/" className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">Jadwalkan Konsultasi</Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D90429]/20 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D90429]/10 rounded-full blur-[100px] -ml-48 -mb-48" />
        </div>
      </section>
    </main>
  );
}
