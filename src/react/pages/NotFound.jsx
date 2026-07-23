import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center pt-32 pb-20 bg-white relative z-10">
      <div className="text-center px-6 max-w-2xl mx-auto">
        <h1 className="text-9xl font-bold text-[#D90429] mb-4 drop-shadow-sm leading-none tracking-tighter">404</h1>
        <h2 className="text-3xl font-bold text-zinc-900 mb-6">Halaman Tidak Ditemukan</h2>
        <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
          Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[#D90429] text-white font-bold py-3.5 px-8 rounded-lg hover:bg-[#B00020] transition-colors shadow-lg hover:shadow-xl active:scale-[0.98]"
        >
          <span className="material-symbols-outlined mr-2 text-[20px]">arrow_back</span>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
