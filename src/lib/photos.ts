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

/** Explicit display order for client-uploaded photos — newest uploads first. */
const CLIENT_PHOTO_ORDER: string[] = [
  "gallery/new-2026-02-06-vels-inaugural-collage.jpeg",
  "gallery/new-2026-02-06-vels-stage-group.jpeg",
  "gallery/new-2026-02-06-fiba-basketball-qualifiers.jpeg",
  "gallery/new-2026-02-06-athletics-podium.jpeg",
  "gallery/new-2026-02-06-karma-yogi-certificates.jpeg",
  "gallery/new-2026-02-06-stadium-running.jpeg",
  "gallery/new-2026-02-06-yoga-pyramid.jpeg",
  "gallery/new-2026-02-06-pongal-celebration.jpeg",
  "gallery/new-2026-02-06-one-on-one-1.jpeg",
  "gallery/new-2026-02-06-one-on-one-2.jpeg",
  "gallery/new-2026-02-06-days-months-cards.jpeg",
  "gallery/new-2026-02-06-fabric-painting.jpeg",
  "gallery/new-2026-02-06-yoga-3.jpeg",
  "gallery/new-2026-02-04-classroom-cards.jpeg",
  "gallery/new-2026-02-06-christmas-drama.jpeg",
  "gallery/new-2026-02-06-paper-craft.jpeg",
  "gallery/new-2026-02-06-yoga-1.jpeg",
  "gallery/new-2026-02-06-yoga-2.jpeg",
  "gallery/campus-building-2026-06-20.jpeg",
  "gallery/new-2026-06-20-at-04.30.44.jpeg",
  "gallery/new-2026-05-11-at-03.01.06.jpeg",
  "gallery/new-2026-05-11-at-03.01.46.jpeg",
  "gallery/new-2026-05-11-at-03.01.47.jpeg",
  "gallery/new-2026-05-11-at-03.02.28.jpeg",
  "gallery/new-2026-05-11-at-03.02.28-1.jpeg",
];

/** Gallery entries with the original key so callers can identify each photo. */
export const galleryEntries: { key: string; url: string }[] = Object.entries(lookup)
  .filter(([k]) => k.startsWith("gallery/"))
  .sort(([a], [b]) => {
    // Client-uploaded photos come first in the explicit order above, then legacy by name.
    const ai = CLIENT_PHOTO_ORDER.indexOf(a);
    const bi = CLIENT_PHOTO_ORDER.indexOf(b);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
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
  "gallery/new-2026-02-04-classroom-cards.jpeg": {
    alt: "KRM Special School students learning with picture cards around a group table",
    tag: "Classroom",
  },
  "gallery/new-2026-02-06-christmas-drama.jpeg": {
    alt: "KRM Special School students performing a costumed Christmas drama on stage",
    tag: "Events",
  },
  "gallery/new-2026-02-06-paper-craft.jpeg": {
    alt: "KRM Special School student showing a colourful paper bird craft",
    tag: "ECA",
  },
  "gallery/new-2026-02-06-yoga-1.jpeg": {
    alt: "KRM Special School students standing in prayer pose during a yoga session",
    tag: "Therapy",
  },
  "gallery/new-2026-02-06-yoga-2.jpeg": {
    alt: "KRM Special School students kneeling on yoga mats in the school hall",
    tag: "Therapy",
  },
  "gallery/new-2026-02-06-yoga-3.jpeg": {
    alt: "KRM Special School students and teachers practising yoga stretches on mats",
    tag: "Therapy",
  },
  "gallery/new-2026-02-06-one-on-one-1.jpeg": {
    alt: "KRM Special School special educator working one-on-one with a student at a desk",
    tag: "Classroom",
  },
  "gallery/new-2026-02-06-one-on-one-2.jpeg": {
    alt: "KRM Special School teacher guiding a student through written work",
    tag: "Classroom",
  },
  "gallery/new-2026-02-06-days-months-cards.jpeg": {
    alt: "KRM Special School students arranging days and months flashcards with their teacher",
    tag: "Classroom",
  },
  "gallery/new-2026-02-06-fabric-painting.jpeg": {
    alt: "KRM Special School student fabric painting a red flower during an art activity",
    tag: "ECA",
  },
  "gallery/new-2026-02-06-vels-inaugural-collage.jpeg": {
    alt: "KRM Special School students at the Vels Trade Centre and Convention Film City inaugural ceremony",
    tag: "Events",
  },
  "gallery/new-2026-02-06-vels-stage-group.jpeg": {
    alt: "KRM Special School students and teachers on stage at the Vels Convention Centre inauguration",
    tag: "Events",
  },
  "gallery/new-2026-02-06-fiba-basketball-qualifiers.jpeg": {
    alt: "KRM Special School students at the FIBA Basketball World Cup Qualifiers India vs Saudi Arabia in Chennai",
    tag: "Student Achievements",
  },
  "gallery/new-2026-02-06-athletics-podium.jpeg": {
    alt: "KRM Special School athletics medal winners with certificates on the winners podium",
    tag: "Student Achievements",
  },
  "gallery/new-2026-02-06-karma-yogi-certificates.jpeg": {
    alt: "KRM Special School students with medals and certificates at the Karma Yogi Trust sports meet",
    tag: "Student Achievements",
  },
  "gallery/new-2026-02-06-stadium-running.jpeg": {
    alt: "KRM Special School student running on the stadium track at a sports event",
    tag: "ECA",
  },
  "gallery/new-2026-02-06-yoga-pyramid.jpeg": {
    alt: "KRM Special School students performing a yoga pyramid formation on stage",
    tag: "ECA",
  },
  "gallery/new-2026-02-06-pongal-celebration.jpeg": {
    alt: "KRM Special School students in traditional dress during the Pongal celebration on stage",
    tag: "Events",
  },
};

export function galleryMetaFor(key: string): { alt: string; tag?: string } {
  return GALLERY_META[key] ?? { alt: "KRM Special School gallery photo" };
}

