// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Image assets are stored as `.asset.json` pointers to `/__l5e/assets-v1/...`,
// which only Lovable's hosting serves. We proxy that path to the project's
// Lovable asset host so images resolve outside Lovable (local dev + Vercel).
const LOVABLE_ASSET_HOST =
  "https://1686a096-2edb-4cf8-a1ae-9caedc9bbfa3.lovableproject.com";

// Vercel sets VERCEL=1 during builds. When deploying there we target Nitro's
// `vercel` preset (emits .vercel/output) and proxy the asset path at the server
// level. On Lovable's own hosting these defaults are left untouched (it serves
// /__l5e natively and forces the Cloudflare preset in its sandbox).
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(isVercel
    ? {
        nitro: {
          preset: "vercel",
          routeRules: {
            "/__l5e/**": { proxy: `${LOVABLE_ASSET_HOST}/__l5e/**` },
          },
        },
      }
    : {}),
  // Local dev: the Vite dev server serves the app (Nitro is build-only), so
  // proxy the asset path here too.
  vite: {
    server: {
      proxy: {
        "/__l5e": {
          target: LOVABLE_ASSET_HOST,
          changeOrigin: true,
        },
      },
    },
  },
});
