import { useEffect } from "react";
import { initAos } from "../lib/initAos.js";

// ─── Data ────────────────────────────────────────────────────────────────────

const coreValues = [
  { icon: "verified_user", title: "Integritas", desc: "Kami menjunjung standar etika tertinggi, membangun kepercayaan melalui transparansi." },
  { icon: "military_tech", title: "Keunggulan", desc: "Berusaha untuk kesempurnaan, terus meningkatkan proses dan layanan kami." },
  { icon: "lightbulb", title: "Inovasi", desc: "Merangkul perubahan dan secara aktif mencari metodologi baru untuk tetap terdepan." },
  { icon: "eco", title: "Keberlanjutan", desc: "Meminimalkan dampak lingkungan dan memaksimalkan kontribusi sosial positif." },
];

const directors = [
  { name: "Budi Santoso", role: "President Director (CEO)", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Siti Rahmawati", role: "Chief Financial Officer (CFO)", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Hendra Wijaya", role: "Chief Operating Officer (COO)", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Anita Setiawan", role: "Chief Marketing Officer (CMO)", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500" },
];

const timeline = [
  { year: "2009", title: "Fondasi Bisnis Retail", desc: "PT. Mari Sukses Gemilang memulai perjalanannya dengan fokus awal pada penyediaan produk retail berkualitas tinggi yang memahami kebutuhan masyarakat.", img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=1000" },
  { year: "2015", title: "Ekspansi ke Sektor Kuliner", desc: "Memperluas jangkauan ke industri F&B dengan membuka konsep kafe dan restoran yang menggabungkan cita rasa autentik dengan suasana modern.", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" },
  { year: "2020", title: "Diversifikasi Gaya Hidup & Olahraga", desc: "Menghadirkan fasilitas gaya hidup komprehensif, mengintegrasikan pusat kebugaran dan fasilitas olahraga premium untuk melengkapi ekosistem bisnis.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" },
  { year: "2024", title: "Integrasi Ekosistem Modern", desc: "Menyempurnakan seluruh unit operasional menjadi satu kesatuan holding yang tangguh, memperkuat komitmen pada kualitas layanan pelanggan tanpa kompromi.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000" },
];

const misiList = [
  "Menyediakan produk, layanan, dan pengalaman lifestyle yang aman, transparan, dan bertanggung jawab kepada pelanggan, mitra, dan komunitas.",
  "Menghadirkan standar layanan dan operasional yang unggul, konsisten, dan profesional di setiap unit usaha.",
  "Membangun hubungan jangka panjang dengan pelanggan serta menciptakan lingkungan kerja yang aman, adil, dan bertumbuh bagi tim.",
  "Mengembangkan unit usaha dan komunitas secara bertahap, disiplin, dan berkelanjutan sesuai kebutuhan pasar dan nilai perusahaan.",
  "Menyelesaikan setiap komitmen layanan, kegiatan operasional, dan tanggung jawab sosial dengan tuntas dan dapat dipertanggungjawabkan.",
];

// ─── SubNav ───────────────────────────────────────────────────────────────────

function SubNav() {
  const links = [
    { href: "#cerita", label: "Cerita Kami" },
    { href: "#visi-misi", label: "Visi & Misi" },
    { href: "#nilai", label: "Nilai Utama" },
    { href: "#kepemimpinan", label: "Kepemimpinan" },
    { href: "#perjalanan", label: "Perjalanan Kami" },
  ];

  return (
    <div className="fixed top-20 w-full z-40 bg-white/90 backdrop-blur-md border-b border-zinc-100 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-center">
        <div className="flex items-center space-x-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-zinc-600 hover:text-red-600 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section id="cerita" className="pt-40 pb-20 overflow-hidden bg-white">
      <div className="grid md:grid-cols-2 h-full w-full gap-8 md:gap-0">
        <div className="relative h-[400px] md:h-full min-h-[500px] w-full">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
            alt="MSG Lifestyle Concept"
            className="w-full h-full object-cover md:scale-105 transform origin-left md:absolute md:inset-0"
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:pt-32 md:pb-16">
          <span className="text-[#D90429] font-bold uppercase tracking-widest text-sm mb-4">Saksi Momen Terbaik Anda</span>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 text-zinc-900 tracking-tight">
            Menghadirkan<br />Pengalaman Baru.
          </h1>
          <div className="text-zinc-600 text-lg leading-relaxed space-y-6 max-w-xl">
            <p>PT. Mari Sukses Gemilang (MSG) adalah holding company yang berfokus pada sektor gaya hidup, F&B, dan retail. Kami hadir untuk menyajikan kualitas, inovasi, dan momen tak terlupakan bagi setiap pelanggan.</p>
            <p>Mulai dari secangkir kopi pagi hingga hidangan istimewa, dari kebutuhan gaya hidup hingga aktivitas olahraga, setiap unit bisnis kami dirancang untuk menemani dan merayakan setiap langkah keseharian Anda.</p>
            <p>Berbasis di Cirebon, MSG mengembangkan jaringan brand lokal yang relevan dengan komunitas — menjaga standar operasional, memperkuat identitas visual, dan membangun hubungan jangka panjang dengan pelanggan serta mitra.</p>
          </div>
          <div className="mt-12">
            <a href="#perjalanan" className="inline-block border-2 border-[#D90429] text-[#D90429] font-bold py-3 px-8 rounded-lg hover:bg-[#D90429] hover:text-white transition-all">
              Jelajahi Sejarah Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Visi & Misi ──────────────────────────────────────────────────────────────

function VisiMisiSection() {
  return (
    <section id="visi-misi" className="py-32 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Tujuan Besar Kami</h2>
            <p className="text-zinc-600 leading-relaxed text-lg">Membimbing setiap langkah operasional untuk selalu menghadirkan layanan terbaik yang menyentuh hati pelanggan.</p>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="bg-white p-10 rounded-xl border border-zinc-200 hover:border-[#D90429]/50 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[#D90429] text-5xl mb-8 font-light block" style={{ fontVariationSettings: "'wght' 200" }}>visibility</span>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Visi Kami</h3>
              <p className="text-zinc-600 leading-relaxed">Menjadi kelompok usaha lifestyle yang dipercaya, memberi pengalaman berkualitas, dan bertumbuh secara sehat melalui kejujuran dan kinerja unggul.</p>
            </div>
            <div className="bg-white p-10 rounded-xl border border-zinc-200 hover:border-[#D90429]/50 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[#D90429] text-5xl mb-8 font-light block" style={{ fontVariationSettings: "'wght' 200" }}>rocket_launch</span>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Misi Kami</h3>
              <ul className="space-y-4 text-zinc-600 text-[15px] leading-relaxed">
                {misiList.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-[#D90429] font-bold">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Core Values ──────────────────────────────────────────────────────────────

function CoreValuesSection() {
  return (
    <section id="nilai" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-zinc-900 mb-16 text-center">Nilai-Nilai Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((v, i) => (
            <div key={i} className="group">
              <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-[#D90429] transition-colors duration-300">
                <span className="material-symbols-outlined text-zinc-700 group-hover:text-white transition-colors text-2xl font-light">{v.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">{v.title}</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Leadership ───────────────────────────────────────────────────────────────

function LeadershipSection() {
  return (
    <section id="kepemimpinan" className="py-32 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-zinc-900 mb-4 text-center">Dewan Direksi</h2>
        <p className="text-zinc-600 text-lg text-center mb-16 max-w-2xl mx-auto">Pemimpin berpengalaman yang mengarahkan visi dan strategi PT. Mari Sukses Gemilang menuju masa depan yang inovatif.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {directors.map((d, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 group-hover:text-[#D90429] transition-colors">{d.name}</h4>
              <p className="text-zinc-600 text-sm">{d.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

function TimelineSection() {
  return (
    <section id="perjalanan" className="py-32 bg-white border-t border-zinc-100 relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Perjalanan Strategis Kami</h2>
          <p className="text-zinc-500 text-lg">Linimasa tonggak sejarah yang telah mendefinisikan lintasan pertumbuhan portofolio bisnis MSG.</p>
        </div>
        <div className="space-y-16">
          {timeline.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-full md:w-1/4 text-[#D90429] font-bold text-3xl pt-1">{item.year}</div>
              <div className="w-full md:w-3/4 pb-12 border-b border-zinc-200 last:border-0 relative">
                <div className="absolute -left-12 md:-left-16 top-3 w-3 h-3 rounded-full bg-[#D90429] ring-8 ring-white hidden md:block" />
                <h3 className="text-2xl font-bold mb-4 text-zinc-900">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed mb-6">{item.desc}</p>
                <img src={item.img} alt={`${item.year} ${item.title}`} className="w-full h-64 md:h-80 object-cover rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  useEffect(() => {
    initAos();
  }, []);

  return (
    <>
      <SubNav />
      <HeroSection />
      <VisiMisiSection />
      <CoreValuesSection />
      <LeadershipSection />
      <TimelineSection />
    </>
  );
}
