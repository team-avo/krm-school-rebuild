import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown, Heart } from "lucide-react";
import { PRIMARY_NAV } from "@/lib/site";
import logoDark from "@/assets/krm/brand/logo-dark-header.png";
import { Butterfly } from "./Butterfly";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[var(--navy)]/92 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)] py-2"
            : "bg-[var(--navy)]/75 backdrop-blur-md py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0" aria-label="KRM Special School, Home">
            <img
              src={logoDark}
              alt="KRM Special School"
              className="h-9 md:h-11 w-auto object-contain select-none"
              draggable={false}
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
            {PRIMARY_NAV.map((item) => (
              <div key={item.to} className="relative group">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-[var(--gold)]" }}
                  className="px-2.5 py-2 text-[13px] font-semibold text-white/90 hover:text-[var(--gold)] transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                >
                  {item.label}
                  {item.items && <ChevronDown size={12} className="opacity-70" />}
                </Link>
                {item.items && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 min-w-[210px] z-50">
                    <div className="bg-[var(--navy)] rounded-md shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 overflow-hidden py-2">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className="block px-5 py-2.5 text-sm text-white hover:bg-white/10 hover:text-[var(--gold)] font-medium transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <Link
              to="/donation"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white font-semibold px-4 py-2 rounded-full text-[13px] border border-white/20 hover:border-[var(--gold)]/50 transition-all"
            >
              <Heart size={13} strokeWidth={2.5} className="text-[var(--gold)]" />
              Donate
            </Link>
            <a
              href="tel:9042111150"
              className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-bold px-4 py-2 rounded-full text-[13px] whitespace-nowrap hover:shadow-[0_10px_30px_-10px_rgba(245,199,107,0.7)] transition-all"
            >
              <Phone size={13} strokeWidth={2.5} />
              <span>9042 111150</span>
            </a>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <a
              href="tel:9042111150"
              className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-bold px-3.5 py-2 rounded-full whitespace-nowrap text-sm"
            >
              <Phone size={14} strokeWidth={2.5} />
              <span className="hidden sm:inline">9042 111150</span>
            </a>
            <button
              className="text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden bg-[var(--navy)]/97 backdrop-blur-xl border-t border-white/10 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {PRIMARY_NAV.map((item) => (
                <div key={item.to}>
                  <div className="flex items-center">
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="flex-1 flex items-center gap-3 px-3 py-3 text-white/90 font-semibold rounded-xl hover:bg-white/5"
                    >
                      <Butterfly size={16} />
                      {item.label}
                    </Link>
                    {item.items && (
                      <button
                        onClick={() => setMobileSub(mobileSub === item.to ? null : item.to)}
                        className="p-3 text-white/60"
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown size={16} className={`transition-transform ${mobileSub === item.to ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {item.items && mobileSub === item.to && (
                    <div className="ml-9 mb-2 border-l border-white/15 pl-3 flex flex-col">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={() => setOpen(false)}
                          className="px-3 py-2 text-sm text-white/80 hover:text-[var(--gold)]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/donation"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-bold px-4 py-3 rounded-xl"
              >
                <Heart size={16} strokeWidth={2.5} /> Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
