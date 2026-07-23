/** Shared SEO metadata for build-time HTML shells and runtime document head. */

export const SITE_URL = "https://marisuksesgemilang.co.id";
export const SITE_NAME = "PT. Mari Sukses Gemilang";
export const OG_IMAGE = `${SITE_URL}/assets/img/banner_home.jpeg`;
export const DEFAULT_OG_IMAGE_ALT =
  "PT. Mari Sukses Gemilang — jaringan bisnis lifestyle";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/business", label: "Unit Bisnis" },
  { href: "/gallery", label: "Galeri" },
  { href: "/news", label: "Berita" },
  { href: "/contact", label: "Kontak" },
  { href: "/privacy", label: "Kebijakan Privasi" },
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

const SHARED_CLOSING = `PT. Mari Sukses Gemilang (MSG) adalah holding lifestyle yang mengelola unit F&B, cafe, olahraga dan hiburan, serta retail di Cirebon dan sekitarnya. Portofolio kami mencakup J Chicken, Ulon Signature, Ulon Ciledug, Araichi Ramen, Luuca, Padelnis Sport, Victory Billiard, Grandmonde, serta jaringan retail Toko Mas An An dan Toko Mas Complete Mulia. Gunakan navigasi untuk menjelajahi profil perusahaan, unit bisnis, galeri visual, berita, dan saluran kontak Head Office di Jl. Tuparev No.20, Kedawung, Cirebon.`;

/** @type {Record<string, PageSeo>} */
export const PAGE_SEO = {
  "/": {
    path: "/",
    title: "PT. Mari Sukses Gemilang | Lifestyle Business Group",
    description:
      "PT. Mari Sukses Gemilang membangun jaringan bisnis lifestyle terkemuka: F&B, cafe, olahraga & hiburan, serta retail berkualitas di Cirebon dan Indonesia.",
    h1: "Membangun jaringan bisnis lifestyle terkemuka di Indonesia.",
    body: `PT. Mari Sukses Gemilang (MSG) mengelola ekosistem unit usaha yang mencakup kuliner dan kafe, fasilitas olahraga dan hiburan, serta retail. Kami menghadirkan brand yang menjadi bagian dari kehidupan sehari-hari pelanggan — dari momen makan bersama keluarga hingga aktivitas olahraga dan gaya hidup.

Setiap unit bisnis MSG dibangun dengan standar kualitas, inovasi operasional, dan pengalaman pelanggan yang konsisten. Situs ini merangkum profil perusahaan, portofolio unit, galeri visual, berita terkini, serta saluran kontak resmi Head Office.

${SHARED_CLOSING}`,
  },
  "/about": {
    path: "/about",
    title: "Tentang Kami | PT. Mari Sukses Gemilang",
    description:
      "Profil lengkap PT. Mari Sukses Gemilang: visi, misi, nilai inti, kepemimpinan, dan perjalanan membangun ekosistem bisnis lifestyle di Cirebon sejak 2009.",
    h1: "Tentang PT. Mari Sukses Gemilang.",
    body: `Halaman ini menjelaskan perjalanan, nilai inti, dan arah strategis MSG sebagai holding lifestyle. Sejak fondasi retail pada 2009, ekspansi F&B pada 2015, diversifikasi olahraga pada 2020, hingga integrasi ekosistem modern pada 2024, MSG terus bertumbuh dengan fokus pada kualitas layanan dan pengalaman pelanggan.

Visi kami adalah menjadi kelompok usaha lifestyle yang dipercaya, memberi pengalaman berkualitas, dan bertumbuh secara sehat melalui kejujuran serta kinerja unggul. Nilai utama kami mencakup integritas, keunggulan, inovasi, dan keberlanjutan.

${SHARED_CLOSING}`,
  },
  "/business": {
    path: "/business",
    title: "Unit Bisnis | PT. Mari Sukses Gemilang",
    description:
      "Jelajahi unit bisnis PT. Mari Sukses Gemilang: F&B (J Chicken, Araichi Ramen), cafe (Ulon, Luuca), olahraga & hiburan (Padelnis, Victory Billiard), serta retail perhiasan.",
    h1: "Unit bisnis dalam ekosistem MSG.",
    body: `Daftar unit usaha MSG berdasarkan kategori, lengkap dengan lokasi dan informasi operasional. Segmen F&B mencakup J Chicken Tuparev dan Ciledug serta Araichi Ramen. Segmen cafe mencakup Ulon Signature, Ulon Ciledug, dan Luuca. Segmen olahraga dan hiburan mencakup Padelnis Sport, Victory Billiard, dan Grandmonde. Segmen retail mencakup Toko Mas An An dan Toko Mas Complete Mulia.

Setiap brand dirancang untuk memenuhi kebutuhan gaya hidup modern di Cirebon dan sekitarnya, dengan fokus pada kualitas produk, suasana outlet, dan layanan yang ramah.

${SHARED_CLOSING}`,
  },
  "/gallery": {
    path: "/gallery",
    title: "Galeri | PT. Mari Sukses Gemilang",
    description:
      "Galeri visual unit usaha PT. Mari Sukses Gemilang: dokumentasi F&B, cafe, olahraga, dan fasilitas di jaringan bisnis lifestyle MSG di Cirebon.",
    h1: "Galeri unit usaha MSG.",
    body: `Koleksi foto dari unit F&B, cafe, dan fasilitas olahraga di jaringan MSG. Galeri ini menampilkan suasana outlet, aktivitas pelanggan, serta dokumentasi fasilitas dari J Chicken, Ulon Signature, Luuca, Araichi Ramen, Padelnis Sport, dan unit lainnya.

Dokumentasi visual membantu calon pelanggan dan mitra memahami karakter setiap brand dalam ekosistem lifestyle MSG sebelum berkunjung langsung ke lokasi.

${SHARED_CLOSING}`,
  },
  "/news": {
    path: "/news",
    title: "Berita | PT. Mari Sukses Gemilang",
    description:
      "Berita, promo, dan update terbaru dari PT. Mari Sukses Gemilang serta unit usaha F&B, cafe, olahraga, dan retail di jaringan lifestyle MSG.",
    h1: "Berita dan update MSG.",
    body: `Artikel dan pengumuman terkait aktivitas bisnis serta komunitas MSG. Temukan update pembukaan outlet, program promo keluarga, aktivitas komunitas, dan insight operasional dari unit-unit seperti J Chicken Ciledug dan Luuca Ciledug.

Tim Corporate Communications MSG mempublikasikan berita secara berkala agar pelanggan dan mitra tetap terhubung dengan perkembangan ekosistem bisnis kami. Untuk konteks industri lifestyle dan F&B Indonesia, lihat juga sumber independen seperti situs Kementerian Pariwisata dan Ekonomi Kreatif (https://kemenparekraf.go.id).

${SHARED_CLOSING}`,
  },
  "/contact": {
    path: "/contact",
    title: "Kontak | PT. Mari Sukses Gemilang",
    description:
      "Hubungi PT. Mari Sukses Gemilang di Cirebon — alamat Head Office Jl. Tuparev, peta lokasi, email korporat, telepon, dan formulir pesan kemitraan.",
    h1: "Hubungi PT. Mari Sukses Gemilang.",
    body: `Saluran komunikasi resmi MSG untuk pertanyaan kemitraan, lokasi unit, dan informasi umum. Head Office berlokasi di Jl. Tuparev No.20, Sutawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45153. Hubungi kami melalui info@msg-group.co.id atau partnerships@msg-group.co.id.

Tim kami siap mendiskusikan peluang kerja sama, menjawab pertanyaan pelanggan, dan memberikan informasi strategis terkait unit bisnis dalam jaringan MSG.

${SHARED_CLOSING}`,
  },
  "/privacy": {
    path: "/privacy",
    title: "Kebijakan Privasi | PT. Mari Sukses Gemilang",
    description:
      "Kebijakan privasi PT. Mari Sukses Gemilang: cara kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi pengunjung situs serta pelanggan.",
    h1: "Kebijakan Privasi PT. Mari Sukses Gemilang.",
    body: `Dokumen ini menjelaskan bagaimana PT. Mari Sukses Gemilang mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi yang Anda berikan melalui situs web, formulir kontak, atau saluran komunikasi resmi lainnya.

Kami berkomitmen menjaga kerahasiaan data sesuai praktik yang wajar dan peraturan yang berlaku di Indonesia. Untuk pertanyaan terkait privasi, hubungi info@msg-group.co.id.

${SHARED_CLOSING}`,
  },
};

export function getPageSeo(pathname) {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.replace(/\/+$/, "")
      : pathname || "/";

  if (normalized.startsWith("/news/") && normalized !== "/news") {
    return {
      path: normalized,
      title: `Berita | ${SITE_NAME}`,
      description: PAGE_SEO["/news"].description,
      h1: "Detail berita MSG.",
      body: PAGE_SEO["/news"].body,
      canonicalPath: normalized,
    };
  }

  if (normalized.startsWith("/unit/")) {
    return {
      path: normalized,
      title: `Unit Bisnis | ${SITE_NAME}`,
      description: PAGE_SEO["/business"].description,
      h1: "Detail unit bisnis MSG.",
      body: PAGE_SEO["/business"].body,
      canonicalPath: normalized,
    };
  }

  return PAGE_SEO[normalized] || PAGE_SEO["/"];
}

export function absoluteUrl(path) {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = (path.startsWith("/") ? path : `/${path}`).replace(
    /\/+$/,
    "",
  );
  return `${SITE_URL}${normalized}`;
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
  <p>&copy; ${new Date().getFullYear()} ${escapeHtml(SITE_NAME)}. <a href="/privacy">Kebijakan Privasi</a> · <a href="/sitemap.xml">Sitemap</a></p>
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
