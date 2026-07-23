/** Shared SEO metadata for build-time HTML shells and runtime document head. */

export const SITE_URL = "https://marisuksesgemilang.co.id";
export const SITE_NAME = "PT. Mari Sukses Gemilang";
export const OG_IMAGE = `${SITE_URL}/assets/img/banner_home.jpeg`;
export const DEFAULT_OG_IMAGE_ALT =
  "PT. Mari Sukses Gemilang — jaringan bisnis lifestyle";

/** Public paths with trailing slash (LiteSpeed / physical route dirs). */
export const PATHS = {
  home: "/",
  about: "/about/",
  business: "/business/",
  gallery: "/gallery/",
  news: "/news/",
  contact: "/contact/",
  privacy: "/privacy/",
};

const NAV_LINKS = [
  { href: PATHS.home, label: "Beranda" },
  { href: PATHS.about, label: "Tentang Kami" },
  { href: PATHS.business, label: "Unit Bisnis" },
  { href: PATHS.gallery, label: "Galeri" },
  { href: PATHS.news, label: "Berita" },
  { href: PATHS.contact, label: "Kontak" },
  { href: PATHS.privacy, label: "Kebijakan Privasi" },
];

/**
 * @typedef {object} PageSeo
 * @property {string} path
 * @property {string} title
 * @property {string} description
 * @property {string} h1
 * @property {string} body
 * @property {boolean} [noindex]
 * @property {string} [canonicalPath]
 */

const SHARED_CLOSING = `MSG mengelola brand F&B, cafe, olahraga, hiburan, dan ritel di Cirebon — termasuk J Chicken, Ulon Signature, Ulon Ciledug, Araichi Ramen, Luuca, Padelnis Sport, Victory Billiard, Grandmonde, Toko Mas An An, serta Toko Mas Complete Mulia. Kunjungi profil perusahaan, portofolio, galeri, berita, atau Hubungi Head Office di Jl. Tuparev No.20, Kedawung, Cirebon.`;

/** @type {Record<string, PageSeo>} */
export const PAGE_SEO = {
  "/": {
    path: "/",
    title: "PT. Mari Sukses Gemilang | Lifestyle Business Group",
    description:
      "MSG membangun jaringan lifestyle di Cirebon: F&B, cafe, olahraga & hiburan, serta ritel berkualitas untuk pengalaman pelanggan yang konsisten.",
    h1: "Membangun jaringan bisnis lifestyle terkemuka di Indonesia.",
    body: `PT. Mari Sukses Gemilang (MSG) mengelola ekosistem usaha yang mencakup kuliner, kafe, fasilitas olahraga dan hiburan, serta ritel. Kami menghadirkan brand yang menjadi bagian dari kehidupan sehari-hari — dari makan bersama keluarga hingga aktivitas olahraga.

Setiap brand MSG dibangun dengan standar kualitas, inovasi operasional, dan pengalaman pelanggan yang konsisten. Situs ini merangkum profil perusahaan, portofolio, galeri visual, berita terkini, serta saluran kontak resmi Head Office.

Di Cirebon dan sekitarnya, MSG mengembangkan jaringan lokal yang relevan dengan komunitas: menjaga standar operasional, memperkuat identitas visual, dan membangun hubungan jangka panjang dengan pelanggan serta mitra usaha.

${SHARED_CLOSING}`,
  },
  "/about": {
    path: "/about/",
    title: "Tentang Kami | PT. Mari Sukses Gemilang",
    description:
      "Kenali MSG: visi, misi, nilai, kepemimpinan, dan perjalanan membangun ekosistem lifestyle di Cirebon sejak fondasi ritel tahun 2009.",
    h1: "Tentang PT. Mari Sukses Gemilang.",
    body: `Halaman ini menjelaskan perjalanan, nilai inti, dan arah strategis MSG sebagai holding lifestyle. Sejak fondasi ritel pada 2009, ekspansi F&B pada 2015, diversifikasi olahraga pada 2020, hingga integrasi ekosistem modern pada 2024, MSG terus bertumbuh dengan fokus pada kualitas layanan dan pengalaman pelanggan.

Visi kami adalah menjadi kelompok usaha lifestyle yang dipercaya, memberi pengalaman berkualitas, dan bertumbuh secara sehat melalui kejujuran serta kinerja unggul. Nilai utama mencakup integritas, keunggulan, inovasi, dan keberlanjutan dalam operasional sehari-hari.

Tim kepemimpinan dan mitra operasional bekerja bersama agar setiap outlet menjaga standar yang sama — dari kualitas produk hingga keramahan layanan di lantai penjualan.

${SHARED_CLOSING}`,
  },
  "/business": {
    path: "/business/",
    title: "Unit Bisnis | PT. Mari Sukses Gemilang",
    description:
      "Portofolio MSG: F&B (J Chicken, Araichi Ramen), cafe (Ulon, Luuca), olahraga & hiburan (Padelnis, Victory), serta ritel perhiasan di Cirebon.",
    h1: "Portofolio dalam ekosistem MSG.",
    body: `Daftar usaha MSG berdasarkan kategori, lengkap dengan lokasi dan informasi operasional. Segmen F&B mencakup J Chicken Tuparev dan Ciledug serta Araichi Ramen. Segmen cafe mencakup Ulon Signature, Ulon Ciledug, dan Luuca. Segmen olahraga dan hiburan mencakup Padelnis Sport, Victory Billiard, dan Grandmonde. Segmen ritel mencakup Toko Mas An An dan Toko Mas Complete Mulia.

Setiap brand dirancang untuk memenuhi kebutuhan gaya hidup modern di Cirebon dan sekitarnya, dengan fokus pada kualitas produk, suasana outlet, dan layanan yang ramah bagi keluarga maupun komunitas lokal.

Jelajahi kategori di halaman ini untuk melihat lokasi, jam operasional, dan tautan detail masing-masing brand dalam jaringan MSG.

${SHARED_CLOSING}`,
  },
  "/gallery": {
    path: "/gallery/",
    title: "Galeri | PT. Mari Sukses Gemilang",
    description:
      "Galeri visual MSG: dokumentasi F&B, cafe, olahraga, dan fasilitas di jaringan lifestyle Cirebon — dari outlet hingga aktivitas pelanggan.",
    h1: "Galeri visual jaringan MSG.",
    body: `Koleksi foto dari usaha F&B, cafe, dan fasilitas olahraga di jaringan MSG. Galeri menampilkan suasana outlet, aktivitas pelanggan, serta dokumentasi fasilitas dari J Chicken, Ulon Signature, Luuca, Araichi Ramen, Padelnis Sport, dan brand lainnya.

Dokumentasi visual membantu calon pelanggan dan mitra memahami karakter setiap brand sebelum berkunjung langsung. Gunakan filter kategori untuk menemukan suasana F&B, cafe, atau olahraga yang relevan.

${SHARED_CLOSING}`,
  },
  "/news": {
    path: "/news/",
    title: "Berita | PT. Mari Sukses Gemilang",
    description:
      "Berita, promo, dan update MSG: pembukaan outlet, aktivitas komunitas, serta insight F&B, cafe, olahraga, dan ritel di Cirebon.",
    h1: "Berita dan update MSG.",
    body: `Artikel dan pengumuman terkait aktivitas bisnis serta komunitas MSG. Temukan update pembukaan outlet, program promo keluarga, aktivitas komunitas, dan insight operasional dari brand seperti J Chicken Ciledug dan Luuca Ciledug.

Tim Corporate Communications MSG mempublikasikan berita secara berkala agar pelanggan dan mitra tetap terhubung dengan perkembangan ekosistem kami. Untuk konteks industri lifestyle dan F&B Indonesia, lihat juga sumber independen seperti Kementerian Pariwisata dan Ekonomi Kreatif di https://kemenparekraf.go.id.

${SHARED_CLOSING}`,
  },
  "/contact": {
    path: "/contact/",
    title: "Kontak | PT. Mari Sukses Gemilang",
    description:
      "Hubungi MSG di Cirebon: Head Office Jl. Tuparev, peta, email korporat, telepon hunting, dan formulir pesan untuk kemitraan atau info umum.",
    h1: "Hubungi PT. Mari Sukses Gemilang.",
    body: `Saluran komunikasi resmi MSG untuk pertanyaan kemitraan, lokasi usaha, dan informasi umum. Head Office berlokasi di Jl. Tuparev No.20, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45153. Hubungi kami melalui info@msg-group.co.id atau partnerships@msg-group.co.id.

Tim kami siap mendiskusikan peluang kerja sama, menjawab pertanyaan pelanggan, dan memberikan informasi terkait brand dalam jaringan MSG. Gunakan formulir di halaman ini untuk pesan yang akan ditindaklanjuti pada hari kerja.

${SHARED_CLOSING}`,
  },
  "/privacy": {
    path: "/privacy/",
    title: "Kebijakan Privasi | PT. Mari Sukses Gemilang",
    description:
      "Kebijakan privasi MSG: cara kami mengumpulkan, memakai, menyimpan, dan melindungi data pengunjung situs serta pelanggan di Indonesia.",
    h1: "Kebijakan Privasi PT. Mari Sukses Gemilang.",
    body: `Dokumen ini menjelaskan bagaimana PT. Mari Sukses Gemilang mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi yang Anda berikan melalui situs web, formulir kontak, atau saluran komunikasi resmi lainnya.

Kami berkomitmen menjaga kerahasiaan data sesuai praktik yang wajar dan peraturan yang berlaku di Indonesia. Untuk pertanyaan terkait privasi, hubungi info@msg-group.co.id dengan subjek yang jelas agar tim dapat menindaklanjuti permintaan Anda.

${SHARED_CLOSING}`,
  },
};

/** Normalize pathname for PAGE_SEO lookup (strip trailing slash except root). */
export function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function getPageSeo(pathname) {
  const normalized = normalizePath(pathname);

  if (normalized.startsWith("/news/") && normalized !== "/news") {
    return {
      path: `${normalized}/`,
      title: `Berita | ${SITE_NAME}`,
      description: PAGE_SEO["/news"].description,
      h1: "Detail berita MSG.",
      body: PAGE_SEO["/news"].body,
      canonicalPath: `${normalized}/`,
    };
  }

  if (normalized.startsWith("/unit/")) {
    return {
      path: `${normalized}/`,
      title: `Unit Bisnis | ${SITE_NAME}`,
      description: PAGE_SEO["/business"].description,
      h1: "Detail usaha dalam jaringan MSG.",
      body: PAGE_SEO["/business"].body,
      canonicalPath: `${normalized}/`,
    };
  }

  return PAGE_SEO[normalized] || PAGE_SEO["/"];
}

/** Absolute URL with trailing slash on content paths (LiteSpeed canonical). */
export function absoluteUrl(path) {
  if (!path || path === "/") return `${SITE_URL}/`;
  let normalized = path.startsWith("/") ? path : `/${path}`;
  if (!normalized.endsWith("/")) normalized = `${normalized}/`;
  return `${SITE_URL}${normalized}`;
}

/** Ensure in-app path uses trailing slash (except root and files). */
export function withTrailingSlash(path) {
  if (!path || path === "/") return "/";
  if (/\.[a-z0-9]+$/i.test(path)) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

export function buildJsonLd(page) {
  const url = absoluteUrl(page.canonicalPath || page.path);
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return [organization, webPage];
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Build crawlable HTML for #root (replaced by React after hydrate/render). */
export function buildCrawlableRoot(page) {
  const nav = NAV_LINKS.map(
    (link) => `<a href="${link.href}">${escapeHtml(link.label)}</a>`,
  ).join(" · ");
  const paragraphs = page.body
    .trim()
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p.trim())}</p>`)
    .join("\n");

  return `
<a href="#main-content">Langsung ke konten utama</a>
<header>
  <p><strong>${escapeHtml(SITE_NAME)}</strong></p>
  <nav aria-label="Navigasi utama">${nav}</nav>
</header>
<main id="main-content">
  <h1>${escapeHtml(page.h1)}</h1>
  ${paragraphs}
  <nav aria-label="Tautan terkait">
    <p>${nav}</p>
  </nav>
</main>
<footer>
  <p>&copy; ${new Date().getFullYear()} ${escapeHtml(SITE_NAME)}. <a href="${PATHS.privacy}">Kebijakan Privasi</a> · <a href="/sitemap.xml">Sitemap</a></p>
</footer>`.trim();
}

export function buildHeadTags(page) {
  const canonicalPath = page.canonicalPath || page.path;
  const canonical = absoluteUrl(canonicalPath);
  const robots = page.noindex ? "noindex, follow" : "index, follow";
  const jsonLd = buildJsonLd(page)
    .map(
      (block) =>
        `<script type="application/ld+json">${JSON.stringify(block)}</script>`,
    )
    .join("\n    ");

  return `
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:alt" content="${escapeHtml(DEFAULT_OG_IMAGE_ALT)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    ${jsonLd}`.trim();
}

export { NAV_LINKS };
