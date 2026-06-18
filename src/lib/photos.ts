// Photo registry — maps original krmspecialschool.com paths to CDN-hosted assets.
// Uses Vite's import.meta.glob to eagerly bundle all .asset.json pointers.

type AssetPointer = { url: string };

const modules = import.meta.glob<AssetPointer>("../assets/krm/**/*.asset.json", {
  eager: true,
  import: "default",
});

// Build lookup keyed by "<folder>/<file>" matching the original img/ structure.
const lookup: Record<string, string> = {};
for (const [path, mod] of Object.entries(modules)) {
  // path like "../assets/krm/gallery/IMG_2019.jpg.asset.json"
  const m = path.match(/\/krm\/([^/]+)\/(.+)\.asset\.json$/);
  if (!m) continue;
  const folder = m[1];
  const file = m[2];
  // Banners + brand + activities live at root of img/ on original site
  // Always register both the prefixed and basename key so callers can use either.
  lookup[`${folder}/${file}`] = mod.url;
  if (folder === "banners" || folder === "brand" || folder === "activities" || folder === "therapy" || folder === "centres" || folder === "icons") {
    lookup[file] = mod.url;
    if (folder === "brand" && file === "logo.png") lookup["krmspecialschool-logo.png"] = mod.url;
  }
}

/** Look up a CDN URL for an original-site relative path (e.g. "banner-1.jpeg", "gallery/IMG_2019.jpg"). */
export function pic(path: string): string {
  return lookup[path] ?? "";
}

/** All gallery photo URLs (sorted for stable order). */
export const galleryPhotos: string[] = Object.entries(lookup)
  .filter(([k]) => k.startsWith("gallery/"))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, v]) => v);

/** All event photo URLs. */
export const eventPhotos: string[] = Object.entries(lookup)
  .filter(([k]) => k.startsWith("events/"))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, v]) => v);
