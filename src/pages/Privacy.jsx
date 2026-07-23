import { useEffect } from "react";
import { Link } from "react-router-dom";
import { initAos } from "../lib/initAos.js";

const sections = [
  {
    title: "1. Pendahuluan",
    body: [
      "PT. Mari Sukses Gemilang (“MSG”, “kami”) menghormati privasi setiap pengunjung situs, pelanggan outlet, dan mitra bisnis. Kebijakan Privasi ini menjelaskan jenis data yang kami kumpulkan, tujuan penggunaannya, serta hak Anda terkait data tersebut.",
      "Dengan menggunakan situs marisuksesgemilang.co.id atau mengirimkan informasi melalui formulir kontak, Anda memahami praktik yang diuraikan di halaman ini.",
    ],
  },
  {
    title: "2. Data yang Kami Kumpulkan",
    body: [
      "Data identitas dan kontak yang Anda berikan secara sukarela, misalnya nama, alamat email, nomor telepon, nama perusahaan, dan isi pesan pada formulir kontak.",
      "Data teknis dasar yang biasa tercatat pada log server, seperti alamat IP, jenis perangkat/browser, halaman yang dikunjungi, dan waktu akses — digunakan untuk keamanan, diagnostik, dan peningkatan layanan situs.",
      "Kami tidak sengaja mengumpulkan data sensitif (misalnya data kesehatan atau biometrik) melalui situs korporat ini.",
    ],
  },
  {
    title: "3. Tujuan Penggunaan Data",
    body: [
      "Menanggapi pertanyaan, permintaan kemitraan, atau umpan balik yang Anda kirimkan.",
      "Mengoperasikan, memelihara, dan meningkatkan keamanan serta performa situs web.",
      "Memenuhi kewajiban hukum atau permintaan otoritas yang sah apabila diwajibkan.",
      "Kami tidak menjual data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.",
    ],
  },
  {
    title: "4. Penyimpanan dan Keamanan",
    body: [
      "Data disimpan selama diperlukan untuk tujuan di atas atau sesuai jangka waktu yang diwajibkan peraturan. Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi data dari akses tidak sah, kehilangan, atau penyalahgunaan.",
      "Tidak ada transmisi data melalui internet yang sepenuhnya bebas risiko; kami mendorong Anda untuk berhati-hati saat mengirim informasi sensitif melalui email atau formulir publik.",
    ],
  },
  {
    title: "5. Berbagi dengan Pihak Ketiga",
    body: [
      "Kami dapat menggunakan penyedia layanan infrastruktur (hosting, email, peta, analitik) yang memproses data atas nama kami dengan kewajiban menjaga kerahasiaan.",
      "Data dapat dibagikan apabila diwajibkan hukum, untuk melindungi hak MSG, atau dengan persetujuan Anda.",
    ],
  },
  {
    title: "6. Cookie dan Teknologi Serupa",
    body: [
      "Situs dapat menggunakan cookie atau penyimpanan lokal yang diperlukan agar aplikasi web berfungsi (misalnya preferensi sesi). Cookie non-esensial, bila digunakan di kemudian hari, akan dijelaskan dan dikelola sesuai praktik yang berlaku.",
    ],
  },
  {
    title: "7. Hak Anda",
    body: [
      "Anda dapat meminta akses, koreksi, atau penghapusan data pribadi yang Anda berikan kepada kami, sepanjang tidak bertentangan dengan kewajiban hukum penyimpanan.",
      "Kirimkan permintaan ke info@msg-group.co.id dengan subjek “Permintaan Data Pribadi” dan sertakan identitas yang memadai agar kami dapat memverifikasi permintaan.",
    ],
  },
  {
    title: "8. Perubahan Kebijakan",
    body: [
      "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Tanggal “Terakhir diperbarui” di bagian atas halaman akan disesuaikan. Penggunaan situs setelah perubahan berarti Anda memahami versi terbaru.",
    ],
  },
  {
    title: "9. Kontak",
    body: [
      "PT. Mari Sukses Gemilang — Head Office: Jl. Tuparev No.20, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45153, Indonesia.",
      "Email: info@msg-group.co.id",
    ],
  },
];

export default function Privacy() {
  useEffect(() => {
    initAos();
  }, []);

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <article className="max-w-3xl mx-auto px-6">
        <header className="mb-12" data-aos="fade-up">
          <span className="text-[#D90429] font-bold uppercase tracking-widest text-sm mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 leading-tight">
            Kebijakan Privasi
          </h1>
          <p className="text-zinc-500 text-sm mb-6">
            Terakhir diperbarui: 23 Juli 2026
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Dokumen ini menjelaskan bagaimana PT. Mari Sukses Gemilang
            mengumpulkan, menggunakan, menyimpan, dan melindungi informasi
            pribadi yang terkait dengan penggunaan situs korporat kami.
          </p>
        </header>

        <div className="space-y-10" data-aos="fade-up" data-aos-delay="100">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                {section.title}
              </h2>
              <div className="space-y-3 text-zinc-600 leading-relaxed text-[15px]">
                {section.body.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-14 text-sm text-zinc-500 border-t border-zinc-100 pt-8">
          Kembali ke{" "}
          <Link to="/" className="text-[#D90429] font-semibold hover:underline">
            Beranda
          </Link>{" "}
          atau{" "}
          <Link
            to="/contact"
            className="text-[#D90429] font-semibold hover:underline"
          >
            Hubungi Kami
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
