import { useEffect, useState } from "react";
import { initAos } from "../lib/initAos.js";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => { initAos(); }, []);

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-[#D90429] font-bold uppercase tracking-widest text-sm mb-4 block">Hubungi Kami</span>
          <h1 className="text-5xl font-bold text-zinc-900 mb-6">Mari Bangun Masa Depan Bersama</h1>
          <p className="text-zinc-500 text-lg mb-4">Tim ahli kami siap mendiskusikan peluang kemitraan, menjawab pertanyaan Anda, dan memberikan solusi strategis untuk bisnis Anda.</p>
          <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">Head Office MSG berlokasi di Jl. Tuparev, Kedawung, Cirebon. Gunakan formulir di bawah, email korporat, atau telepon hunting untuk pertanyaan umum, kerja sama brand, maupun informasi lokasi unit usaha dalam jaringan lifestyle kami.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10" data-aos="fade-right">
            <div className="bg-white rounded-xl p-8 border border-zinc-100 shadow-xl shadow-zinc-100/50">
              <h3 className="text-2xl font-bold mb-8 text-zinc-900 border-b border-zinc-100 pb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                {[
                  { icon: "location_on", title: "Kantor Pusat", content: "Jl. Tuparev No.20, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45153, Indonesia" },
                  { icon: "mail", title: "Email Korporat", content: "info@msg-group.co.id\npartnerships@msg-group.co.id" },
                  { icon: "call", title: "Telepon", content: "+62 21 5555 8888 (Hunting)\n+62 21 5555 8899 (Fax)" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-[#D90429] group-hover:bg-[#D90429] group-hover:text-white transition-colors flex-shrink-0">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-[300px] border border-zinc-100 shadow-xl shadow-zinc-100/50 relative">
              <iframe
                title="Lokasi PT. Mari Sukses Gemilang"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=-6.711548381765316,108.54680958059676&z=16&output=embed"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <a
                  href="https://www.google.com/maps?q=-6.711548381765316,108.54680958059676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-zinc-900 px-5 py-2.5 rounded-lg font-bold shadow-lg text-sm flex items-center gap-2 hover:bg-[#D90429] hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span> Buka di Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white rounded-xl p-8 md:p-12 border border-zinc-100 shadow-xl shadow-zinc-100/50">
              <h3 className="text-2xl font-bold mb-2 text-zinc-900">Kirimkan Pesan</h3>
              <p className="text-zinc-500 mb-8 text-sm">Isi formulir di bawah ini dan perwakilan kami akan segera menghubungi Anda kembali dalam waktu 1x24 jam kerja.</p>

              {submitted ? (
                <div className="text-center py-16">
                  <span className="material-symbols-outlined text-[#D90429] text-6xl block mb-4">check_circle</span>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-2">Pesan Terkirim!</h4>
                  <p className="text-zinc-500">Kami akan menghubungi Anda dalam 1x24 jam kerja.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Nama Lengkap</label>
                      <input type="text" required className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D90429]/20 focus:border-[#D90429] transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Perusahaan / Instansi</label>
                      <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D90429]/20 focus:border-[#D90429] transition-all" placeholder="PT. Nama Perusahaan" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Email Kerja</label>
                      <input type="email" required className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D90429]/20 focus:border-[#D90429] transition-all" placeholder="john@perusahaan.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Nomor Telepon</label>
                      <input type="tel" required className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D90429]/20 focus:border-[#D90429] transition-all" placeholder="+62 812 3456 7890" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Subjek / Keperluan</label>
                    <select className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D90429]/20 focus:border-[#D90429] transition-all appearance-none cursor-pointer">
                      <option>Pilih Keperluan...</option>
                      <option>Kemitraan & Bisnis</option>
                      <option>Layanan Infrastruktur</option>
                      <option>Konsultasi Manajemen</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Pesan Anda</label>
                    <textarea required rows={5} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D90429]/20 focus:border-[#D90429] transition-all resize-none" placeholder="Deskripsikan pesan atau pertanyaan Anda di sini..." />
                  </div>
                  <button type="submit" className="w-full bg-[#D90429] text-white font-bold rounded-lg px-6 py-4 hover:bg-[#B00020] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D90429]/20">
                    <span className="material-symbols-outlined text-xl">send</span> Kirim Pesan Sekarang
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
