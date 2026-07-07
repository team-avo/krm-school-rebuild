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

/** Gallery entries with the original key so callers can identify each photo. */
export const galleryEntries: { key: string; url: string }[] = Object.entries(lookup)
  .filter(([k]) => k.startsWith("gallery/"))
  .sort(([a], [b]) => {
    // Show newest client photos (prefixed "gallery/new-") first, then legacy in name order.
    const an = a.startsWith("gallery/new-") ? 0 : 1;
    const bn = b.startsWith("gallery/new-") ? 0 : 1;
    if (an !== bn) return an - bn;
    return a.localeCompare(b);
  })
  .map(([k, v]) => ({ key: k, url: v }));

/** All gallery photo URLs (sorted for stable order). */
export const galleryPhotos: string[] = galleryEntries.map((e) => e.url);

/** All event photo URLs. */
export const eventPhotos: string[] = Object.entries(lookup)
  .filter(([k]) => k.startsWith("events/"))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, v]) => v);

/** Per-photo metadata (alt text + category tag) for known gallery images. */
const GALLERY_META: Record<string, { alt: string; tag: string }> = {
  "gallery/new-2026-05-11-at-03.01.06.jpeg": {
    alt: "KRM Special School Higher Secondary achievers 2025-2026 with 100% pass",
    tag: "Student Achievements",
  },
  "gallery/new-2026-05-11-at-03.01.46.jpeg": {
    alt: "KRM Special School students holding the Transformative Connection Award",
    tag: "Student Achievements",
  },
  "gallery/new-2026-05-11-at-03.01.47.jpeg": {
    alt: "KRM Special School skating team on the rink",
    tag: "ECA",
  },
  "gallery/new-2026-05-11-at-03.02.28-1.jpeg": {
    alt: "KRM Special School student singing and playing keyboard at an event",
    tag: "Events",
  },
  "gallery/new-2026-05-11-at-03.02.28.jpeg": {
    alt: "KRM Special School student performing on Yamaha keyboard",
    tag: "ECA",
  },
  "gallery/new-2026-06-20-at-04.30.44.jpeg": {
    alt: "KRM Special School Kaligi Ranganathan campus with school buses",
    tag: "Campus Moments",
  },
  "gallery/campus-building-2026-06-20.jpeg": {
    alt: "KRM Special School campus building in Perambur Chennai",
    tag: "Campus Moments",
  },
};

export function galleryMetaFor(key: string): { alt: string; tag?: string } {
  return GALLERY_META[key] ?? { alt: "KRM Special School gallery photo" };
}

