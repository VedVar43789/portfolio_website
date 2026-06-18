import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { LINKS } from "./data";
import profileImage from "../../assets/vedant_ds3.jpg";

const ROLES = [
  "Agentic AI & Multi-Agent Systems",
  "Full-Stack Engineering",
  "Applied Machine Learning",
];
const PROFILE_IMAGE = profileImage;

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const full = ROLES[roleIdx];
    const speed = deleting ? 35 : 60;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!resumeMenuRef.current) return;
      if (!resumeMenuRef.current.contains(event.target as Node)) {
        setResumeOpen(false);
      }
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="orb h-72 w-72 bg-primary/40 left-[-4rem] top-24" aria-hidden />
      <div
        className="orb h-80 w-80 bg-cyan/40 right-[-4rem] top-10"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />
      <div className="orb h-96 w-96 bg-primary/25 left-1/2 top-1/2" style={{ animationDelay: "-8s" }} aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
          <div className="w-full max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
              Open to AI / ML Engineering and SWE roles
            </div>

            <h1 className="mt-8 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-gradient-to-br from-primary via-accent to-cyan bg-clip-text text-transparent">
                Vedant
              </span>
              <span className="text-foreground">.</span>
            </h1>

            <p className="mt-6 text-lg md:text-2xl text-foreground/90 font-display font-medium animate-fade-in">
              AI Systems Engineer · <span className="text-primary">{text}</span>
              <span className="caret" />
            </p>

            <p className="mx-auto md:mx-0 mt-6 max-w-2xl text-base md:text-lg text-muted-foreground animate-fade-in">
              Data Science student at UC San Diego with a passion for machine learning, AI, and software
              development. My goal is to build meaningful solutions that leverage data to solve complex problems.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-3 animate-fade-in">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={16} />
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn-ghost">
                <Github size={16} /> GitHub
              </a>
              <div ref={resumeMenuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setResumeOpen((open) => !open)}
                  className="btn-ghost"
                  aria-haspopup="menu"
                  aria-expanded={resumeOpen}
                >
                  <FileText size={16} /> Resume
                  <ChevronDown size={14} className={`transition-transform ${resumeOpen ? "rotate-180" : ""}`} />
                </button>
                {resumeOpen && (
                  <div className="absolute left-0 top-full z-30 mt-2 min-w-52 rounded-xl border border-border/80 bg-card/95 p-1.5 shadow-[0_18px_40px_-20px_var(--glow)] backdrop-blur">
                    <a
                      href={LINKS.resumeSWE}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-secondary"
                      onClick={() => setResumeOpen(false)}
                    >
                      SWE Resume
                    </a>
                    <a
                      href={LINKS.resumeAIML}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-secondary"
                      onClick={() => setResumeOpen(false)}
                    >
                      AI/ML Resume
                    </a>
                  </div>
                )}
              </div>
              <a href="#contact" className="btn-ghost">
                <Mail size={16} /> Contact
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-5 text-muted-foreground animate-fade-in">
              <a aria-label="GitHub" href={LINKS.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition hover-scale">
                <Github size={20} />
              </a>
              <a aria-label="LinkedIn" href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition hover-scale">
                <Linkedin size={20} />
              </a>
              <a aria-label="Email" href={`mailto:${LINKS.email}`} className="hover:text-foreground transition hover-scale">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="shrink-0 animate-fade-in">
            <div className="profile-frame mx-auto inline-flex rounded-full p-1.5 bg-gradient-to-br from-primary/70 via-accent/50 to-cyan/70 shadow-lg shadow-primary/20">
              <img
                src={PROFILE_IMAGE}
                alt="Vedant Vardhaan"
                className="profile-image h-36 w-36 md:h-56 md:w-56 rounded-full object-cover border border-border/60 bg-card"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
