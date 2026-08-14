import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index-[hash]",
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: "index-[hash][extname]",
      },
    },
  },
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.ts"],
  },
});
