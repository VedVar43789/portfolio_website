import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { LINKS } from "@/components/portfolio/data";
import { useReveal } from "@/hooks/use-reveal";
import { Marquee } from "@/components/generals/marquee";
import { Magnetic } from "@/components/generals/magnetic";
import { RecLabel } from "@/components/generals/viewfinder";
import { SplitWords } from "@/components/generals/split-words";
import { media } from "@/constants/media";

function LaJollaClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZoneName: "short",
      }).format(new Date());
    setTime(format());
    const id = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time || "--:--:--"}</span>;
}

const fieldClass =
  "w-full border-0 border-b border-bone/25 bg-transparent py-3 text-base text-bone outline-none transition-colors duration-500 placeholder:text-stone focus:border-flare";

export function Contact() {
  const scope = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useReveal(scope);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(LINKS.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!response.ok) throw new Error("Failed");
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSent(false);
        setError(false);
      }, 5000);
    }
  };

  return (
    <section ref={scope} id="contact" className="relative scroll-mt-20 overflow-hidden bg-ink pt-24 text-bone md:pt-36">
      <div
        className="pointer-events-none absolute left-1/2 top-[18%] size-[90vw] -translate-x-1/2 md:size-[55vw]"
        aria-hidden="true"
      >
        <div className="bloom bloom-breathe size-full opacity-[0.16]" />
      </div>

      <div className="gutter relative">
        <div className="flex items-center justify-between gap-6 border-b border-bone/15 pb-5" data-reveal="fade">
          <p className="eyebrow">06 Contact</p>
          <RecLabel label="Open to AI engineering roles" className="text-stone" />
        </div>

        <h2
          className="mt-10 font-wide text-[clamp(2.4rem,9.6vw,11.5rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em] md:mt-14"
          data-reveal="words"
        >
          <SplitWords text="Let's build" />
          <br />
          <SplitWords
            text="something"
            className="font-serif text-[1.05em] font-normal normal-case italic tracking-[-0.03em]"
          />{" "}
          <SplitWords text="that ships." />
        </h2>

        <p className="mt-8 max-w-lg text-lead text-bone/75" data-reveal="fade">
          Open to AI engineering roles, research collaboration, and ambitious projects.
        </p>

        <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5" data-reveal="stagger">
            <a
              href={`mailto:${LINKS.email}`}
              className="group flex items-center justify-between gap-4 border-t border-bone/15 py-5"
            >
              <span>
                <span className="eyebrow block text-stone">Email</span>
                <span className="mt-1 block font-wide text-[clamp(1rem,1.6vw,1.5rem)] font-semibold tracking-[-0.03em]">
                  <span className="link-underline">{LINKS.email}</span>
                </span>
              </span>
              <ArrowUpRight className="size-5 transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 border-t border-bone/15 py-5"
            >
              <span>
                <span className="eyebrow block text-stone">LinkedIn</span>
                <span className="mt-1 block font-wide text-[clamp(1rem,1.6vw,1.5rem)] font-semibold tracking-[-0.03em]">
                  <span className="link-underline">in/vedantvardhaan</span>
                </span>
              </span>
              <ArrowUpRight className="size-5 transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 border-y border-bone/15 py-5"
            >
              <span>
                <span className="eyebrow block text-stone">GitHub</span>
                <span className="mt-1 block font-wide text-[clamp(1rem,1.6vw,1.5rem)] font-semibold tracking-[-0.03em]">
                  <span className="link-underline">VedVar43789</span>
                </span>
              </span>
              <ArrowUpRight className="size-5 transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="eyebrow mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-stone">
              <span>La Jolla, California</span>
              <span className="text-bone">
                <LaJollaClock />
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7" data-reveal="fade">
            <label className="block">
              <span className="eyebrow text-stone">Your name</span>
              <input required name="name" autoComplete="name" placeholder="Ada Lovelace" className={fieldClass} />
            </label>
            <label className="block">
              <span className="eyebrow text-stone">Email</span>
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ada@example.com"
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="eyebrow text-stone">Message</span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell me about the role, project or idea."
                className={`${fieldClass} resize-none`}
              />
            </label>

            <div className="flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={loading}
                className="eyebrow group flex items-center gap-3 rounded-full bg-flare px-7 py-4 text-ink transition-transform duration-500 ease-expo hover:scale-[1.04] disabled:opacity-60"
              >
                {loading ? "Sending..." : sent ? "Thanks, I'll reply soon." : "Send message"}
                <Send className="size-3.5" />
              </button>
              <p role="status" className="eyebrow text-stone">
                {sent && "Thank you! Your message has been sent successfully."}
                {error && <span className="text-destructive">Something went wrong. Please try again.</span>}
              </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="relative mt-28 border-t border-bone/15 md:mt-40">
        <Marquee duration={60} className="border-b border-bone/15 py-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              className="flex items-center whitespace-nowrap px-8 font-wide text-[clamp(2.4rem,7vw,7rem)] font-semibold uppercase leading-none tracking-[-0.05em]"
            >
              Vedant Vardhaan
              <span className="mx-8 font-serif text-[0.7em] font-normal normal-case italic tracking-normal text-flare">AI Engineer</span>
            </span>
          ))}
        </Marquee>
        <span className="sr-only">Vedant Vardhaan, AI Engineer</span>

        <div className="gutter relative flex flex-wrap items-end justify-between gap-6 py-8">
          <p className="eyebrow text-stone">
            © {new Date().getFullYear()} Vedant Vardhaan.
          </p>
          <a href="#top" className="eyebrow link-underline py-1">
            Back to top ↑
          </a>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-[clamp(10rem,18vw,20rem)] hidden h-36 w-40 overflow-hidden md:block">
          <Magnetic className="pointer-events-auto" strength={0.12}>
            <img src={media.hero} alt="" aria-hidden="true" className="w-40 max-w-none" loading="lazy" />
          </Magnetic>
        </div>
      </footer>
    </section>
  );
}
