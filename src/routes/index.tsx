import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/generals/header";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Experience } from "@/components/landing/experience";
import { Projects } from "@/components/landing/projects";
import { Education } from "@/components/landing/education";
import { Skills } from "@/components/landing/skills";
import { Contact } from "@/components/landing/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedant | AI Systems Engineer" },
      {
        name: "description",
        content:
          "Vedant Vardhaan, AI Systems Engineer building agentic AI and full-stack systems. Data Science @ UC San Diego.",
      },
      { property: "og:title", content: "Vedant | AI Systems Engineer" },
      {
        property: "og:description",
        content: "Agentic AI, multi-agent systems, and production full-stack engineering.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-ink text-bone">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
