import { defineConfig } from "vitest/config";

export default defineConfig({
  css: {
    lightningcss: {
      errorRecovery: true,
    },
  },
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
