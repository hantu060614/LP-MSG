/** Shared SEO metadata for build-time HTML shells and runtime document head. */

export const SITE_URL = "https://marisuksesgemilang.com";
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

const SHARED_CLOSING = `PT. Mari Sukses Gemilang mengelola unit F&B, olahraga & hiburan, serta retail di Cirebon dan sekitarnya. Gunakan navigasi untuk menjelajahi unit bisnis, galeri, berita, dan kontak Head Office.`;

/** @type {Record<string, PageSeo>} */
export const PAGE_SEO = {
  "/": {
    path: "/",
    title: "PT. Mari Sukses Gemilang | Lifestyle Business Group",
    description:
      "PT. Mari Sukses Gemilang membangun jaringan bisnis lifestyle: F&B, olahraga & hiburan, serta retail berkualitas di Indonesia.",
    h1: "Membangun jaringan bisnis lifestyle terkemuka di Indonesia.",
    body: `PT. Mari Sukses Gemilang (MSG) mengelola ekosistem unit usaha yang mencakup kuliner dan kafe, fasilitas olahraga & hiburan, serta retail. Situs ini merangkum profil perusahaan, unit bisnis, galeri, dan saluran kontak.

${SHARED_CLOSING}`,
  },
  "/about": {
    path: "/about",
    title: "Tentang Kami | PT. Mari Sukses Gemilang",
    description:
      "Profil PT. Mari Sukses Gemilang: visi, misi, nilai, dan perjalanan membangun ekosistem lifestyle.",
    h1: "Tentang PT. Mari Sukses Gemilang.",
    body: `Halaman ini menjelaskan perjalanan, nilai inti, dan arah strategis MSG sebagai holding lifestyle.

${SHARED_CLOSING}`,
  },
  "/business": {
    path: "/business",
    title: "Unit Bisnis | PT. Mari Sukses Gemilang",
    description:
      "Jelajahi unit bisnis MSG: F&B, olahraga & hiburan, serta retail & perhiasan.",
    h1: "Unit bisnis dalam ekosistem MSG.",
    body: `Daftar unit usaha MSG berdasarkan kategori, lengkap dengan lokasi dan informasi operasional.

${SHARED_CLOSING}`,
  },
  "/gallery": {
    path: "/gallery",
    title: "Galeri | PT. Mari Sukses Gemilang",
    description:
      "Galeri visual unit usaha PT. Mari Sukses Gemilang: F&B, cafe, dan olahraga.",
    h1: "Galeri unit usaha MSG.",
    body: `Koleksi foto dari unit F&B, cafe, dan fasilitas olahraga di jaringan MSG.

${SHARED_CLOSING}`,
  },
  "/news": {
    path: "/news",
    title: "Berita | PT. Mari Sukses Gemilang",
    description:
      "Berita dan update terbaru dari PT. Mari Sukses Gemilang serta unit usahanya.",
    h1: "Berita dan update MSG.",
    body: `Artikel dan pengumuman terkait aktivitas bisnis serta komunitas MSG.

${SHARED_CLOSING}`,
  },
  "/contact": {
    path: "/contact",
    title: "Kontak | PT. Mari Sukses Gemilang",
    description:
      "Hubungi PT. Mari Sukses Gemilang — alamat, peta, dan formulir kontak.",
    h1: "Hubungi PT. Mari Sukses Gemilang.",
    body: `Saluran komunikasi resmi MSG untuk pertanyaan kemitraan, lokasi unit, dan informasi umum.

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
  <p>&copy; ${new Date().getFullYear()} ${escapeHtml(SITE_NAME)}. <a href="/sitemap.xml">Sitemap</a></p>
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
