import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

/**
 * Tailwind v3 parses preflight/utilities via postcss.parse() without `from`,
 * so generated nodes lack source.input.file. Vite then warns when rewriting
 * asset URLs. Reattach the root input (which has `from`) to those nodes.
 */
function restorePostcssFrom() {
  return {
    postcssPlugin: "restore-postcss-from",
    Once(root) {
      const rootInput = root.source?.input;
      if (!rootInput?.file) return;

      root.walk((node) => {
        if (!node.source) {
          node.source = { input: rootInput, start: undefined, end: undefined };
          return;
        }
        if (!node.source.input?.file) {
          node.source = { ...node.source, input: rootInput };
        }
      });
    },
  };
}
restorePostcssFrom.postcss = true;

export default {
  plugins: [tailwindcss, autoprefixer, restorePostcssFrom()],
};
