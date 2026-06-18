export const IMG = "http://krmspecialschool.com/img";

export type NavItem = {
  label: string;
  to: string;
  items?: { label: string; to: string }[];
};

// Primary top-level navigation with dropdowns mirroring the live KRM site
export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Who We Are",
    to: "/about",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Vision & Mission", to: "/vision-mission" },
      { label: "Board Members", to: "/board-members" },
      { label: "Eligibility Criteria", to: "/eligibility-criteria" },
      { label: "E-Magazine", to: "/e-magazine" },
    ],
  },
  {
    label: "Programs",
    to: "/programs",
    items: [
      { label: "All Programs", to: "/programs" },
      { label: "Early Intervention & Pre Primary", to: "/early-intervention-pre-primary" },
      { label: "I to V", to: "/programs/i-to-v" },
      { label: "VI to XII", to: "/programs/vi-to-xii" },
      { label: "NIOS (X & XII)", to: "/nios" },
      { label: "Functional Academics", to: "/programs/functional-academics" },
      { label: "Pre Vocational", to: "/pre-vocational" },
      { label: "Vocational", to: "/vocational" },
    ],
  },
  { label: "Therapy", to: "/therapy" },
  { label: "ECA", to: "/eca" },
  {
    label: "Achievements",
    to: "/achievements",
    items: [
      { label: "2024-2025", to: "/achievements-2024-2025" },
      { label: "2025-2026", to: "/achievements-2025-2026" },
    ],
  },
  {
    label: "Gallery",
    to: "/gallery",
    items: [
      { label: "Photo Gallery", to: "/photogallery" },
      { label: "Events", to: "/events" },
    ],
  },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
];

// Kept for backward compatibility with anything still importing NAV
export const NAV = PRIMARY_NAV;
