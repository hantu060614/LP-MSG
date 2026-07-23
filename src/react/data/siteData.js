// Centralized data — mirrors site-data.js but as ES module

export const site = {
  companyName: "PT. Mari Sukses Gemilang",
  shortName: "MSG",
  description: "Membangun jaringan bisnis lifestyle terkemuka di Indonesia.",
};

const numberedAssets = (folder, prefix, count, ext, start = 1) =>
  Array.from({ length: count }, (_, i) => {
    const n = String(start + i).padStart(2, "0");
    return `assets/img/${folder}/${prefix}-${n}.${ext}`;
  });

export const businessCategories = [
  { id: "fb", navLabel: "Makanan & Minuman (F&B)", title: "Makanan & Minuman (F&B)", description: "Jaringan kuliner dan kafe untuk melengkapi pengalaman Anda.", icon: "restaurant" },
  { id: "lifestyle", navLabel: "Olahraga & Hiburan", title: "Olahraga & Hiburan", description: "Fasilitas olahraga premium dan pusat hiburan keluarga.", icon: "sports_tennis" },
  { id: "retail", navLabel: "Retail & Perhiasan", title: "Retail & Perhiasan", description: "Koleksi perhiasan eksklusif dan layanan retail berkualitas tinggi.", icon: "diamond" },
];

export const businessUnits = [
  { id: "j-chicken-tuparev", name: "J Chicken Tuparev", categoryId: "fb", label: "F&B", image: "assets/img/j-chicken-tprv/j-chicken-tprv-photo-01.jpg", location: "Jl. Tuparev, Cirebon [Detail Alamat Menyusul]", hours: "Jam Operasional: TBC" },
  { id: "j-chicken-ciledug", name: "J Chicken Ciledug", categoryId: "fb", label: "F&B", image: "assets/img/j-chicken-ciledug/j-chicken-ciledug-photo-01.jpg", location: "Ciledug, Cirebon", hours: "Jam Operasional: TBC" },
  { id: "ulon-signature-tuparev", name: "Ulon Signature Tuparev", categoryId: "fb", label: "Cafe", image: "assets/img/ulon-signature/ulon-signature-photo-01.jpg", location: "Jl. Tuparev, Cirebon", hours: "09.00 - 22.00 WIB" },
  { id: "ulon-ciledug", name: "Ulon Ciledug", categoryId: "fb", label: "Cafe", image: "assets/img/ulon-coffee-cld/ulon-coffee-cld-photo-01.jpg", location: "[Detail Alamat Menyusul]", hours: "Jam Operasional: TBC" },
  { id: "araichi-ramen", name: "Araichi Ramen", categoryId: "fb", label: "F&B", image: "assets/img/araichi-ramen/araichi-ramen-photo-01.jpg", location: "[Detail Alamat Menyusul]", hours: "Jam Operasional: TBC" },
  { id: "luuca-ciledug", name: "Luuca Ciledug", categoryId: "fb", label: "Cafe", image: "assets/img/luuca-ciledug/luuca-ciledug-photo-01.jpg", location: "Ciledug, Cirebon", hours: "Jam Operasional: TBC" },
  { id: "momoyo", name: "Momoyo", categoryId: "fb", label: "F&B", image: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?q=80&w=2027", location: "[Detail Alamat Menyusul]", hours: "Jam Operasional: TBC", url: null },
  { id: "ulon-pekanbaru", name: "Ulon Pekanbaru", categoryId: "fb", label: "Cafe", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071", location: "[Detail Alamat Menyusul]", hours: "Jam Operasional: TBC" },
  { id: "grandmonde", name: "Grandmonde", categoryId: "fb", label: "Cafe", image: "assets/img/grandmonde/grandmonde-photo-01.jpg", location: "[Detail Alamat Menyusul]", hours: "Jam Operasional: TBC" },
  { id: "padelnis-sport", name: "Padelnis Sport", categoryId: "lifestyle", label: "Olahraga", image: "assets/img/padelnis-sport/padelnis-sport-photo-01.jpg", location: "Jln. Tanda Barat Kel. Kebonbaru Kec. Kejaksaan Kota Cirebon", hours: "Jam Operasional: TBC" },
  { id: "victory-billiard", name: "Victory Billiard", categoryId: "lifestyle", label: "Hiburan", image: "https://images.unsplash.com/photo-1587889150064-075e7a9e6eb1?q=80&w=2070", location: "[Detail Alamat Menyusul]", hours: "Jam Operasional: TBC", url: null },
  { id: "toko-mas-an-an", name: "Toko Mas An An", categoryId: "retail", label: "Retail", image: "https://images.unsplash.com/photo-1599643478524-fb66f70a00d8?q=80&w=2070", location: "[Detail Alamat Menyusul]", hours: "Jam Operasional: TBC", url: null },
  { id: "complete-mulia-arjawinangun", name: "Toko Mas Complete Mulia Arjawinangun", categoryId: "retail", label: "Retail", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070", location: "[Detail Alamat Menyusul]", hours: "Jam Operasional: TBC", url: null },
  { id: "complete-mulia-purwakarta", name: "Toko Mas Complete Mulia Purwakarta", categoryId: "retail", label: "Retail", image: "https://images.unsplash.com/photo-1573408301145-b98c4af01158?q=80&w=2069", location: "[Detail Alamat Menyusul]", hours: "Jam Operasional: TBC", url: null, status: "Masih Renovasi" },
];

export const unitDetails = {
  "j-chicken-tuparev": {
    fullAddress: "Jl. Tuparev, Cirebon, Jawa Barat, Indonesia.",
    contact: "+62 812-3456-7890",
    mapQuery: "J Chicken Tuparev Cirebon",
    description: ["J-Chicken Tuparev adalah restoran fast food ayam crispy di kawasan Tuparev, Cirebon, yang menghadirkan pengalaman makan cepat saji dengan suasana modern.", "Mengusung konsep fast food modern dengan cita rasa yang dekat dengan selera lokal, J-Chicken menghadirkan kombinasi kualitas rasa, pelayanan cepat, dan pengalaman dine-in yang nyaman.", "Berlokasi di kawasan strategis Tuparev yang dikenal sebagai salah satu pusat aktivitas kuliner dan lifestyle di Cirebon."],
    photos: numberedAssets("j-chicken-tprv", "j-chicken-tprv-photo", 11, "jpg"),
  },
  "j-chicken-ciledug": {
    fullAddress: "Ciledug, Cirebon, Jawa Barat, Indonesia.",
    contact: "+62 812-3456-7890",
    mapQuery: "J Chicken Ciledug Cirebon",
    description: ["J Chicken Ciledug adalah restoran ayam cepat saji dengan suasana kasual yang dirancang untuk makan bersama keluarga, teman, maupun pelanggan.", "Selain menghadirkan menu ayam crispy dan paket makan harian, J Chicken Ciledug juga aktif menjadi ruang aktivitas pelanggan.", "Berlokasi di kawasan Ciledug, memperluas jangkauan jaringan kuliner MSG."],
    facilities: ["Dine in", "Take away", "Area acara pelanggan", "Birthday package"],
    photos: numberedAssets("j-chicken-ciledug", "j-chicken-ciledug-photo", 5, "jpg"),
  },
  "ulon-signature-tuparev": {
    fullAddress: "Jl. Tuparev, Cirebon, Jawa Barat, Indonesia.",
    contact: "+62 812-3456-7890",
    mapQuery: "Ulon Signature Tuparev Cirebon",
    description: ["Ulon Signature adalah destinasi kuliner modern dengan konsep casual dining yang menghadirkan suasana nyaman, kekinian, dan ideal untuk bersantai.", "Berlokasi di pusat kota, Ulon Signature menawarkan pengalaman bersantap yang lengkap."],
    photos: numberedAssets("ulon-signature", "ulon-signature-photo", 26, "jpg"),
    videos: numberedAssets("ulon-signature", "ulon-signature-video", 3, "mp4"),
  },
  "ulon-ciledug": {
    fullAddress: "Ciledug, Cirebon, Jawa Barat, Indonesia.",
    contact: "+62 812-3456-7890",
    mapQuery: "Ulon Coffee Ciledug Cirebon",
    description: ["Ulon Coffee Ciledug adalah bagian dari Ulon Coffee yang hadir dengan konsep casual cafe modern, cocok untuk tempat bersantai, nongkrong, atau sekadar menikmati secangkir kopi.", "Berlokasi di kawasan strategis Ciledug, tempat ini menyediakan pilihan menu yang beragam."],
    photos: [...numberedAssets("ulon-coffee-cld", "ulon-coffee-cld-photo", 3, "jpg"), ...numberedAssets("ulon-coffee-cld", "ulon-coffee-cld-photo", 5, "png", 4)],
  },
  "ulon-pekanbaru": {
    coverImage: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070",
    fullAddress: "Pekanbaru, Riau, Indonesia.",
    contact: "+62 812-3456-7890",
    mapQuery: "Ulon Coffee Pekanbaru",
    description: ["Ulon Coffee Pekanbaru adalah bagian dari Ulon Coffee yang hadir dengan konsep casual cafe modern."],
    photos: ["https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070"],
  },
  "araichi-ramen": {
    fullAddress: "Cirebon, Jawa Barat, Indonesia.",
    contact: "+62 812-3456-7890",
    mapQuery: "Araichi Ramen Cirebon",
    description: ["Araichi Ramen adalah restoran ramen dengan konsep Japanese casual dining yang menghadirkan pengalaman menikmati ramen dengan rasa autentik.", "Tidak hanya berfokus pada ramen, Araichi juga menghadirkan berbagai side dish."],
    photos: numberedAssets("araichi-ramen", "araichi-ramen-photo", 5, "jpg"),
    videos: numberedAssets("araichi-ramen", "araichi-ramen-video", 6, "mp4"),
  },
  "luuca-ciledug": {
    fullAddress: "Ciledug, Cirebon, Jawa Barat, Indonesia.",
    contact: "+62 812-3456-7890",
    mapQuery: "Luuca Ciledug Cirebon",
    description: ["Luuca Ciledug adalah destinasi dessert dan coffee dengan karakter visual yang modern, hangat, dan mudah dikenali.", "Outlet ini hadir dengan karakter visual hitam dan emas yang kuat."],
    facilities: ["Dine in", "Coffee and dessert", "Soft serve", "Area aktivitas pelanggan"],
    photos: numberedAssets("luuca-ciledug", "luuca-ciledug-photo", 2, "jpg"),
  },
  "padelnis-sport": {
    fullAddress: "Jln. Tanda Barat Kel. Kebonbaru Kec. Kejaksaan Kota Cirebon",
    contact: "+62 859-7504-0780",
    mapQuery: "Padelnis Sports Jln. Tanda Barat Kebonbaru Kejaksaan Kota Cirebon",
    description: [
      '"Where Sport Meets Lifestyle" - PADELNIS hadir sebagai pusat olahraga padel & tenis modern yang dipadukan dengan kafe kontemporer GRANDMONDE.',
      "PADELNIS adalah pusat olahraga dan gaya hidup ikonik di kota Cirebon, tempat ini menghadirkan pengalaman padel & tenis kelas dunia dengan fasilitas berstandar internasional. Menyediakan lapangan padel dengan rumput premium Eropa, satu-satunya dan pertama di kota Cirebon. Menyediakan 6 lapangan padel dan 2 lapangan tenis berstandar turnamen.",
      "Menghadirkan kafe gaya hidup yang menyajikan makanan dan minuman sehat dengan konsep modern.",
    ],
    facilities: ["Parkir", "Mushola", "Toilet dan Kamar Mandi", "Free Wifi", "Caffee dan Resto", "Tribun Penonton", "6 Lapangan Padel", "2 Lapangan Tennis"],
    bookingLinks: [
      { label: "Reservasi by Ayo", href: "https://link.ayo.co.id/l/bp0StBnq7E-Padelnis-Sports", icon: "calendar_month" },
      { label: "Reservasi by WhatsApp", href: "https://wa.me/6285188204429", icon: "chat" },
      { label: "Layanan Customer Service", href: "https://wa.me/6285975040780", icon: "support_agent" },
    ],
    photos: numberedAssets("padelnis-sport", "padelnis-sport-photo", 10, "jpg"),
  },
  grandmonde: {
    fullAddress: "Jl. Tuparev, Cirebon, Jawa Barat, Indonesia.",
    contact: "+62 812-3456-7890",
    mapQuery: "Grandmonde Cafe Cirebon",
    description: ["Grandmonde adalah destinasi kuliner dan hiburan modern yang menggabungkan pengalaman makan dengan nuansa entertainment.", "Mengusung tema modern dan urban, Grandmonde menciptakan ambience yang hidup namun tetap terasa akrab."],
    photos: ["assets/img/grandmonde/grandmonde-photo-01.jpg"],
  },
};

export const newsArticles = [
  {
    id: "j-chicken-ciledug-birthday-package",
    title: "J Chicken Ciledug Menghadirkan Birthday Package untuk Keluarga",
    category: "Promo",
    date: "8 Mei 2026",
    dateISO: "2026-05-08",
    author: "Corporate Communications",
    authorRole: "PT. Mari Sukses Gemilang",
    image: "assets/img/j-chicken-ciledug/j-chicken-ciledug-photo-03.jpg",
    alt: "Birthday package J Chicken Ciledug",
    excerpt: "Program birthday package J Chicken Ciledug memperkuat pengalaman pelanggan melalui dekorasi, aktivitas anak, dan suasana makan bersama yang lebih meriah.",
    lead: "J Chicken Ciledug memperkenalkan birthday package sebagai pilihan perayaan keluarga dengan suasana ceria dan layanan yang praktis di dalam outlet.",
    content: [
      "Aktivasi birthday package menghadirkan dekorasi tematik, area foto, dan rangkaian kegiatan sederhana untuk anak-anak, sehingga pengalaman makan di J Chicken terasa lebih personal.",
      "Program ini memperluas fungsi outlet dari tempat makan cepat saji menjadi ruang perayaan yang mudah diakses oleh keluarga di kawasan Ciledug.",
      "Dengan pendekatan yang fun dan family-friendly, J Chicken Ciledug terus membangun hubungan yang lebih dekat dengan pelanggan.",
    ],
    quote: { text: "Kami ingin setiap kunjungan keluarga bisa menjadi pengalaman yang hangat, bukan hanya transaksi makan.", by: "J Chicken Ciledug Team" },
    tags: ["J Chicken", "Birthday Package", "Family", "Ciledug"],
  },
  {
    id: "j-chicken-ciledug-community-activity",
    title: "Aktivitas Komunitas di J Chicken Ciledug Menghidupkan Area Dine-In",
    category: "Event",
    date: "15 Maret 2026",
    dateISO: "2026-03-15",
    author: "Corporate Communications",
    authorRole: "PT. Mari Sukses Gemilang",
    image: "assets/img/j-chicken-ciledug/j-chicken-ciledug-photo-04.jpg",
    alt: "Aktivitas komunitas J Chicken Ciledug",
    excerpt: "Area dine-in J Chicken Ciledug menjadi ruang aktivitas komunitas yang mempertemukan pelanggan dengan pengalaman brand yang lebih dekat dan interaktif.",
    lead: "J Chicken Ciledug mendukung aktivitas komunitas di dalam outlet sebagai cara membangun pengalaman pelanggan yang lebih hidup.",
    content: [
      "Kegiatan komunitas memanfaatkan area dine-in sebagai tempat berkumpul, berbagi aktivitas, dan menikmati menu J Chicken dalam format yang lebih interaktif.",
      "Pendekatan ini membuat outlet semakin dekat dengan pelanggan lokal, terutama komunitas keluarga dan anak muda.",
      "Melalui aktivasi komunitas, J Chicken Ciledug memperkuat posisi sebagai brand F&B yang menawarkan pengalaman sosial yang menyenangkan.",
    ],
    quote: { text: "Outlet yang aktif bersama komunitas akan terasa lebih dekat dengan pelanggan dan lingkungan sekitarnya.", by: "Corporate Communications MSG" },
    tags: ["Community", "J Chicken", "Event", "Ciledug"],
  },
  {
    id: "luuca-ciledug-opening",
    title: "Luuca Ciledug Hadir dengan Konsep Dessert dan Coffee Modern",
    category: "Event",
    date: "13 Maret 2026",
    dateISO: "2026-03-13",
    author: "Corporate Communications",
    authorRole: "PT. Mari Sukses Gemilang",
    image: "assets/img/luuca-ciledug/luuca-ciledug-photo-01.jpg",
    alt: "Pembukaan Luuca Ciledug",
    excerpt: "Luuca Ciledug memperluas portofolio F&B MSG melalui konsep dessert dan coffee yang modern, compact, dan dekat dengan kebutuhan pelanggan lokal.",
    lead: "PT. Mari Sukses Gemilang memperkenalkan Luuca Ciledug sebagai destinasi dessert dan coffee terbaru.",
    content: [
      "Outlet ini hadir dengan karakter visual hitam dan emas yang kuat, area layanan yang compact, serta pilihan menu dessert dan coffee.",
      "Kehadiran Luuca Ciledug menjadi bagian dari pengembangan jaringan F&B MSG di segmen lifestyle cafe.",
      "MSG terus memperkuat pengalaman pelanggan yang relevan dengan kebiasaan hangout dan pencarian dessert.",
    ],
    quote: { text: "Luuca Ciledug dirancang untuk menjadi tempat singgah yang ringan, modern, dan dekat dengan momen harian pelanggan.", by: "Corporate Communications MSG" },
    tags: ["Luuca", "Ciledug", "Dessert", "Coffee"],
  },
  {
    id: "activity-luuca-ciledug",
    title: "Aktivitas Pelanggan Luuca Ciledug Memperkuat Nuansa Lifestyle Cafe",
    category: "Aktivitas",
    date: "13 Maret 2026",
    dateISO: "2026-03-13",
    author: "Corporate Communications",
    authorRole: "PT. Mari Sukses Gemilang",
    image: "assets/img/luuca-ciledug/luuca-ciledug-photo-02.jpg",
    alt: "Aktivitas pelanggan di Luuca Ciledug",
    excerpt: "Aktivitas pelanggan di Luuca Ciledug menunjukkan potensi outlet sebagai ruang dessert, coffee, dan gathering yang compact tetapi hidup.",
    lead: "Luuca Ciledug mulai menjadi ruang aktivitas pelanggan yang memadukan suasana cafe modern, layanan dessert, dan momen berkumpul yang nyaman.",
    content: [
      "Interior Luuca yang bernuansa gelap, hangat, dan premium memberikan latar yang kuat untuk kegiatan pelanggan.",
      "Kombinasi coffee, dessert, dan soft serve memperkuat positioning Luuca sebagai tempat singgah yang ringan tetapi stylish.",
      "Aktivitas ini menjadi bagian dari cara MSG mengembangkan outlet F&B yang membangun suasana dan pengalaman yang mudah diingat.",
    ],
    quote: { text: "Cafe yang baik memberi alasan bagi pelanggan untuk datang, tinggal, dan kembali lagi.", by: "Luuca Ciledug Team" },
    tags: ["Luuca", "Lifestyle Cafe", "Activity", "Dessert"],
  },
];

export const galleryItems = [
  { title: "J Chicken Tuparev", categoryId: "fnb", categoryLabel: "F&B", image: "assets/img/j-chicken-tprv/j-chicken-tprv-photo-01.jpg", alt: "J Chicken Tuparev" },
  { title: "J Chicken Ciledug", categoryId: "fnb", categoryLabel: "F&B", image: "assets/img/j-chicken-ciledug/j-chicken-ciledug-photo-01.jpg", alt: "J Chicken Ciledug" },
  { title: "Birthday Package J Chicken Ciledug", categoryId: "fnb", categoryLabel: "F&B", image: "assets/img/j-chicken-ciledug/j-chicken-ciledug-photo-03.jpg", alt: "Birthday package J Chicken Ciledug" },
  { title: "Ulon Signature Tuparev", categoryId: "cafe", categoryLabel: "Cafe", image: "assets/img/ulon-signature/ulon-signature-photo-01.jpg", alt: "Ulon Signature Tuparev" },
  { title: "Padelnis Sport", categoryId: "olahraga", categoryLabel: "Olahraga", image: "assets/img/padelnis-sport/padelnis-sport-photo-01.jpg", alt: "Padelnis Sport Cirebon" },
  { title: "Araichi Ramen", categoryId: "fnb", categoryLabel: "F&B", image: "assets/img/araichi-ramen/araichi-ramen-photo-01.jpg", alt: "Araichi Ramen" },
  { title: "Luuca Ciledug", categoryId: "cafe", categoryLabel: "Cafe", image: "assets/img/luuca-ciledug/luuca-ciledug-photo-01.jpg", alt: "Luuca Ciledug" },
  { title: "Aktivitas Luuca Ciledug", categoryId: "cafe", categoryLabel: "Cafe", image: "assets/img/luuca-ciledug/luuca-ciledug-photo-02.jpg", alt: "Aktivitas pelanggan Luuca Ciledug" },
  { title: "Ulon Ciledug", categoryId: "cafe", categoryLabel: "Cafe", image: "assets/img/ulon-coffee-cld/ulon-coffee-cld-photo-01.jpg", alt: "Ulon Ciledug" },
  { title: "Interior Ulon Signature", categoryId: "cafe", categoryLabel: "Cafe", image: "assets/img/ulon-signature/ulon-signature-photo-03.jpg", alt: "Ulon Signature Interior" },
  { title: "Fasilitas Padelnis Sport", categoryId: "olahraga", categoryLabel: "Olahraga", image: "assets/img/padelnis-sport/padelnis-sport-photo-02.jpg", alt: "Padelnis Sport Facility" },
  { title: "Grandmonde", categoryId: "cafe", categoryLabel: "Cafe", image: "assets/img/grandmonde/grandmonde-photo-01.jpg", alt: "Grandmonde" },
];

export const galleryFilters = [
  { id: "all", label: "Semua Galeri" },
  { id: "fnb", label: "F&B" },
  { id: "cafe", label: "Cafe" },
  { id: "olahraga", label: "Olahraga" },
];
