import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { LINKS, NAV } from "@/components/portfolio/data";
import { RecLabel } from "@/components/generals/viewfinder";
import { startScroll, stopScroll } from "@/lib/motion/lenis";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(event.target as Node)) setResumeOpen(false);
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    if (menuOpen) stopScroll();
    else startScroll();
    return () => startScroll();
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-bone transition-[background-color,backdrop-filter,border-color] duration-500",
          scrolled ? "border-b border-bone/10 bg-ink/80 backdrop-blur-md" : "border-b border-transparent",
        )}
      >
        <nav className="gutter flex items-center justify-between py-4" aria-label="Primary">
          <a href="#top" className="flex items-center gap-4">
            <span className="font-wide text-sm font-semibold uppercase tracking-[-0.02em]">
              Vedant Vardhaan
            </span>
            <RecLabel label="Available" className="hidden text-stone sm:inline-flex" />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="eyebrow link-underline py-1 text-bone/80 hover:text-bone">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div ref={resumeRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setResumeOpen((open) => !open)}
                aria-haspopup="menu"
                aria-expanded={resumeOpen}
                className="eyebrow flex items-center gap-2 rounded-full border border-bone/30 px-4 py-2 transition-colors hover:border-flare hover:bg-flare hover:text-ink"
              >
                Resume
                <ArrowUpRight className="size-3.5" />
              </button>
              {resumeOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-48 border border-bone/15 bg-ink-soft p-1.5 shadow-2xl shadow-black/60">
                  {[
                    { label: "SWE Resume", href: LINKS.resumeSWE },
                    { label: "AI/ML Resume", href: LINKS.resumeAIML },
                  ].map((resume) => (
                    <a
                      key={resume.label}
                      href={resume.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setResumeOpen(false)}
                      className="eyebrow flex items-center justify-between px-3 py-2.5 text-bone/85 transition-colors hover:bg-bone hover:text-ink"
                    >
                      {resume.label}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="eyebrow rounded-full border border-bone/30 px-4 py-2 lg:hidden"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink text-bone transition-[clip-path] duration-700 ease-quart lg:hidden",
          menuOpen ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
        )}
        aria-hidden={!menuOpen}
      >
        <div className="gutter flex items-center justify-between py-4">
          <span className="font-wide text-sm font-semibold uppercase tracking-[-0.02em]">Vedant Vardhaan</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="eyebrow flex items-center gap-2 rounded-full border border-bone/30 px-4 py-2"
            aria-label="Close menu"
          >
            Close <X className="size-3.5" />
          </button>
        </div>

        <ul className="gutter flex flex-1 flex-col justify-center gap-2">
          {NAV.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 font-wide text-[clamp(2.2rem,11vw,4rem)] font-semibold uppercase leading-[1.05] tracking-[-0.04em]"
                tabIndex={menuOpen ? 0 : -1}
              >
                <span className="eyebrow text-flare">0{index + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="gutter flex flex-wrap gap-3 pb-8">
          <a href={LINKS.resumeSWE} target="_blank" rel="noreferrer" className="eyebrow rounded-full border border-bone/30 px-4 py-2">
            SWE Resume
          </a>
          <a href={LINKS.resumeAIML} target="_blank" rel="noreferrer" className="eyebrow rounded-full border border-bone/30 px-4 py-2">
            AI/ML Resume
          </a>
        </div>
      </div>
    </>
  );
}
