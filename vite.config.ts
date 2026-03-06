import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

/** Inline the build CSS directly into <style> tags, eliminating the render-blocking request. */
function inlineCssPlugin(): Plugin {
  return {
    name: 'inline-css',
    enforce: 'post',
    apply: 'build',
    generateBundle(_opts, bundle) {
      const htmlKey = Object.keys(bundle).find(k => k.endsWith('.html'));
      const cssKeys = Object.keys(bundle).filter(k => k.endsWith('.css'));
      if (!htmlKey || cssKeys.length === 0) return;

      const htmlAsset = bundle[htmlKey];
      if (htmlAsset.type !== 'asset') return;

      let html = typeof htmlAsset.source === 'string'
        ? htmlAsset.source
        : new TextDecoder().decode(htmlAsset.source);

      for (const cssKey of cssKeys) {
        const cssAsset = bundle[cssKey];
        if (cssAsset.type !== 'asset') continue;

        const cssContent = typeof cssAsset.source === 'string'
          ? cssAsset.source
          : new TextDecoder().decode(cssAsset.source);

        // Replace the <link> tag with an inline <style>
        const cssPath = '/' + cssKey;
        const linkPattern = new RegExp(
          `<link[^>]*href="${cssPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`,
        );
        html = html.replace(linkPattern, `<style>${cssContent}</style>`);

        // Remove the CSS file from the bundle (no longer needed)
        delete bundle[cssKey];
      }

      htmlAsset.source = html;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), inlineCssPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
        },
      },
    },
  },
}));
