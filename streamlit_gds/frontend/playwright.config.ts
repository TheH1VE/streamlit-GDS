import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  outputDir: "test-results",
  snapshotPathTemplate: "{testDir}/{testFilePath}-snapshots/{arg}{ext}",
  fullyParallel: false,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:8501",
    trace: "retain-on-failure",
  },
  webServer: {
    command:
      "python -m streamlit run ../../gallery/app.py --server.headless=true --server.port=8501",
    url: "http://127.0.0.1:8501/_stcore/health",
    reuseExistingServer: true,
    timeout: 60_000,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    {
      name: "mobile",
      use: { ...devices["Desktop Chrome"], viewport: { width: 320, height: 800 } },
    },
  ],
});
