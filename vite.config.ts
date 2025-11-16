import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

// Plugin to set correct MIME types for JavaScript files
function mimeTypePlugin(): Plugin {
  return {
    name: "mime-type-fix",
    configureServer(server) {
      // For dev server - run after Vite's middleware
      return () => {
        server.middlewares.use((req, res, next) => {
          const url = req.url || "";
          // Remove base path for checking
          const pathWithoutBase = url.replace(/^\/comicverse_1/, "");
          
          // Handle JavaScript files and Vite's client
          if (
            url.endsWith(".js") || 
            url.endsWith(".mjs") || 
            pathWithoutBase.endsWith(".js") ||
            pathWithoutBase.endsWith(".mjs") ||
            url.includes("/@vite/client") ||
            url.includes("/@id/") ||
            (url.includes("/node_modules/") && (url.endsWith(".js") || url.endsWith(".mjs")))
          ) {
            // Set header before Vite processes, but check if response is already sent
            if (!res.headersSent) {
              const existingType = res.getHeader("Content-Type");
              if (!existingType || existingType === "application/octet-stream") {
                res.setHeader("Content-Type", "text/javascript; charset=utf-8");
              }
            }
          }
          next();
        });
      };
    },
    configurePreviewServer(server) {
      // For preview server
      server.middlewares.use((req, res, next) => {
        const url = req.url || "";
        if (url.endsWith(".js") || url.endsWith(".mjs")) {
          if (!res.headersSent) {
            res.setHeader("Content-Type", "text/javascript; charset=utf-8");
          }
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/comicverse_1/",
  plugins: [
    react(),
    mimeTypePlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Ensure proper file extensions
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".js")) {
            return "assets/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  preview: {
    port: 4173,
    strictPort: true,
    base: "/comicverse_1/",
  },
}));
