import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "production",
    rollupOptions: {
      input: {
        // nama property-nya bebas tapi lebih baik sama dengan nama filenya
        index: "index.html",
        blog: "blog.html",
        contact: "./other/contact.html",
      },
    },
  },
  server: {
    port: 3000,
  },
});
