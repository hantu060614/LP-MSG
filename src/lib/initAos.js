import { loadExternalScript } from "./loadExternalScript.js";

const AOS_CSS = "https://unpkg.com/aos@2.3.1/dist/aos.css";
const AOS_JS = "https://unpkg.com/aos@2.3.1/dist/aos.js";

let aosPromise;

function ensureAosStylesheet() {
  if (document.querySelector(`link[href="${AOS_CSS}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = AOS_CSS;
  document.head.appendChild(link);
}

/** Load AOS once, then (re)init for the current page. */
export async function initAos(options = { duration: 600, once: true }) {
  if (typeof window === "undefined") return;

  ensureAosStylesheet();

  if (!aosPromise) {
    aosPromise = loadExternalScript(AOS_JS, () => Boolean(window.AOS));
  }

  await aosPromise;
  window.AOS.init(options);
  window.AOS.refreshHard?.();
}
