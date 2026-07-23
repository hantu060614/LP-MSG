import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {
  PAGE_SEO,
  buildCrawlableRoot,
  buildHeadTags,
  getPageSeo,
} from "./src/seo/pages.js";

/** SPA routes that need a physical shell on hosts without URL rewrite (LiteSpeed). */
const SPA_ROUTES = ["about", "business", "gallery", "news", "contact", "privacy"];

function injectSeoIntoHtml(html, page) {
  const headTags = buildHeadTags(page);
  const rootHtml = buildCrawlableRoot(page);
  let next = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${page.title.replace(/</g, "&lt;")}</title>\n    ${headTags}`,
  );
  next = next.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${rootHtml}</div>`,
  );
  return next;
}

function spaRouteShells() {
  return {
    name: "spa-route-shells",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(
          /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/,
          (full, href) =>
            `<link rel="preload" href="${href}" as="style" />\n    ${full}`,
        );
      },
    },
    closeBundle() {
      const dist = join(process.cwd(), "dist");
      const indexHtmlPath = join(dist, "index.html");
      const baseHtml = readFileSync(indexHtmlPath, "utf8");

      writeFileSync(indexHtmlPath, injectSeoIntoHtml(baseHtml, getPageSeo("/")));

      for (const route of SPA_ROUTES) {
        const page = getPageSeo(`/${route}`);
        const dir = join(dist, route);
        mkdirSync(dir, { recursive: true });
        writeFileSync(
          join(dir, "index.html"),
          injectSeoIntoHtml(baseHtml, page),
        );
      }

      copyFileSync(indexHtmlPath, join(dist, "404.html"));
    },
  };
}

export default defineConfig({
  plugins: [react(), spaRouteShells()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-vendor",
              test: /node_modules[\\/](react|react-dom|scheduler)([\\/]|$)/,
              priority: 30,
            },
            {
              name: "router-vendor",
              test: /node_modules[\\/]react-router/,
              priority: 20,
            },
            {
              name: "vendor",
              test: /node_modules/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
});

void PAGE_SEO;
