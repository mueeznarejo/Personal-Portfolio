import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

const siteOrigin = (process.env.SITE_ORIGIN ?? "https://mueeznarejo.github.io")
  .trim()
  .replace(/\/+$/, "");
const siteUrl = new URL(basePath, `${siteOrigin}/`).toString();

function replaceBuildTokens(filePath: string) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const nextContent = content
    .replaceAll("__SITE_URL__", siteUrl)
    .replaceAll("__BASE_PATH__", basePath);

  if (nextContent !== content) {
    fs.writeFileSync(filePath, nextContent);
  }
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "github-pages-spa-fallback",
      closeBundle() {
        const outputDir = path.resolve(import.meta.dirname, "dist/public");
        const indexHtml = path.join(outputDir, "index.html");
        const fallbackHtml = path.join(outputDir, "404.html");
        const robotsTxt = path.join(outputDir, "robots.txt");
        const manifestFile = path.join(outputDir, "site.webmanifest");
        const sitemapFile = path.join(outputDir, "sitemap.xml");

        replaceBuildTokens(indexHtml);
        replaceBuildTokens(robotsTxt);
        replaceBuildTokens(manifestFile);
        replaceBuildTokens(sitemapFile);

        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, fallbackHtml);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
