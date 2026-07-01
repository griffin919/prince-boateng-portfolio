import { skillGroups } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Toolkit"
        title="Technologies I work with"
        description="Deep in the Vue/Nuxt + TypeScript ecosystem, fluent in React/Next.js, and comfortable owning the backend, database and deployment."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 70}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <h3 className="text-sm font-semibold text-ink">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-subtle px-2.5 py-1 font-mono text-xs text-body"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
