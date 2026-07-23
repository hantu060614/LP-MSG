/**
 * Load an external script once and wait until it is actually ready.
 * Avoids the Strict Mode race where a second mount sees the <script> tag
 * and resolves before onload has fired.
 */
export function loadExternalScript(src, isReady) {
  return new Promise((resolve, reject) => {
    const baseSrc = src.split("?")[0];

    const finish = () => {
      if (typeof isReady === "function" && !isReady()) {
        reject(new Error(`Script loaded but global not ready: ${baseSrc}`));
        return;
      }
      resolve();
    };

    const existing = document.querySelector(`script[src^="${baseSrc}"]`);

    if (existing) {
      if (
        (typeof isReady === "function" && isReady()) ||
        existing.dataset.ready === "1"
      ) {
        existing.dataset.ready = "1";
        finish();
        return;
      }

      existing.addEventListener(
        "load",
        () => {
          existing.dataset.ready = "1";
          finish();
        },
        { once: true },
      );
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load script: ${baseSrc}`)),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.ready = "1";
      finish();
    };
    script.onerror = () =>
      reject(new Error(`Failed to load script: ${baseSrc}`));
    document.body.appendChild(script);
  });
}
