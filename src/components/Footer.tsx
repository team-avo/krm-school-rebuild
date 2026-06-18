import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  Clock,
} from "lucide-react";
import { Butterfly } from "./Butterfly";
import { NotebookLines, MiniStar } from "./Doodles";

const units = [
  {
    name: "KRM NIOS Learning Centre",
    subtitle: "National Institute of Open Schooling",
  },
  {
    name: "KRM Child Development Centre",
    subtitle: "A centre for handling the children with learning disabilities, ID, ASD & ADHD",
  },
  {
    name: "J.J. Early Intervention Centre",
    subtitle: "Early support for young children through guided developmental care.",
  },
  {
    name: "2J Vocational Training Centre",
    subtitle: "Skill-based training that prepares students for greater independence.",
  },
  {
    name: "Annalakshmi Cooking and Baking",
    subtitle: "Hands-on cooking and baking activities that build confidence and life skills.",
  },
];

const quickLinksCol1 = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Vision & Mission", to: "/vision-mission" },
  { label: "Board Members", to: "/board-members" },
  { label: "Eligibility Criteria", to: "/eligibility-criteria" },
  { label: "E- Magazine", to: "/e-magazine" },
  { label: "Programs", to: "/programs" },
];

const quickLinksCol2 = [
  { label: "Therapy", to: "/therapy" },
  { label: "ECA", to: "/eca" },
  { label: "Events", to: "/events" },
  { label: "Therapy", to: "/therapy" },
  { label: "Photo Gallery", to: "/gallery" },
  { label: "Achievements", to: "/achievements" },
  { label: "Contact Us", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative navy-gradient text-white overflow-hidden">
      <NotebookLines className="absolute top-0 left-0 right-0 h-20 w-full opacity-30" />
      <Butterfly size={120} className="absolute -top-6 right-10 opacity-10 animate-float" />
      <Butterfly size={70} className="absolute bottom-20 left-10 opacity-10 animate-flutter" />
      <MiniStar size={14} className="absolute top-16 left-1/4 opacity-60 animate-sparkle" />
      <MiniStar size={10} className="absolute top-32 right-1/3 opacity-50 animate-sparkle" style={{ animationDelay: "1s" }} />
      <MiniStar size={12} className="absolute bottom-24 left-1/2 opacity-40 animate-sparkle" style={{ animationDelay: "1.6s" }} />

      {/* Section 1: Units */}
      <div className="container mx-auto px-4 pt-16 pb-12 relative z-10">
        <h3 className="text-center font-display text-xl md:text-2xl tracking-wide uppercase text-white/95 mb-8">
          Units of KRM Special School
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          {units.map((unit) => (
            <div
              key={unit.name}
              className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-5 text-center h-full flex flex-col items-center justify-center"
            >
              <p className="font-display text-sm md:text-base font-semibold text-white leading-snug">
                {unit.name}
              </p>
              <p className="mt-2 text-xs text-white/70 leading-relaxed">
                {unit.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2–4: Reach Us | Quick Links | Working Hours */}
      <div className="container mx-auto px-4 pt-12 pb-10 grid md:grid-cols-3 gap-10 relative z-10">
        {/* Reach Us */}
        <div>
          <h4 className="font-display text-lg mb-4 text-[var(--gold)]">Reach Us</h4>
          <p className="font-display text-base font-semibold text-white mb-4">
            KRM SPECIAL SCHOOL
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[var(--gold)] shrink-0" />
              <span>9042111150 | 8939977645</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[var(--gold)] shrink-0" />
              <a
                href="mailto:krm.specialschool@gmail.com"
                className="hover:text-[var(--gold)] transition"
              >
                krm.specialschool@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[var(--gold)] mt-0.5 shrink-0" />
              <span>No 10, Bharathi Road, Perambur, Chennai 600011</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.facebook.com/KRMSpecialSchool"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] p-2.5 rounded-full transition"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/krm_splschool_perambur"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] p-2.5 rounded-full transition"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.youtube.com/@krmspecialschool"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] p-2.5 rounded-full transition"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg mb-4 text-[var(--gold)]">Quick Links</h4>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2.5 text-sm text-white/80">
              {quickLinksCol1.map((link) => (
                <li key={link.to + link.label + "-col1"}>
                  <Link to={link.to} className="hover:text-[var(--gold)] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5 text-sm text-white/80">
              {quickLinksCol2.map((link) => (
                <li key={link.to + link.label + "-col2"}>
                  <Link to={link.to} className="hover:text-[var(--gold)] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-display text-lg mb-4 text-[var(--gold)]">Working Hours</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li className="font-semibold text-white/95">Monday to Friday</li>
            <li>Open from 9am - 6pm</li>
            <li>Saturdays - 9am - 1:30pm</li>
            <li>Sundays - Closed</li>
            <li>Holidays - Closed</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <p>© 2023 KRM Special School | Powered by Work of Wonderz</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[var(--gold)] text-[var(--navy)] p-2.5 rounded-full hover:scale-110 transition"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918939977645"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed left-5 bottom-5 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01a1.097 1.097 0 0 0-.795.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      </a>
    </footer>
  );
}
