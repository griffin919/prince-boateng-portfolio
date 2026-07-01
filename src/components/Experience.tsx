import { experience } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-subtle">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <SectionHeading eyebrow="Experience" title="Where I've built" />

        <div className="mt-12 space-y-4">
          {experience.map((job, i) => (
            <Reveal
              key={job.org}
              delay={i * 80}
              className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {job.role} ·{" "}
                  <span className="text-accent">{job.org}</span>
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.period} · {job.location}
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-body">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
