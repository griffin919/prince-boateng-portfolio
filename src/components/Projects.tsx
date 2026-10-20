import { featuredProjects, otherProjects, showOtherProjects, type Project } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

const statusMeta: Record<Project["status"], { label: string; className: string }> = {
  live: { label: "Live", className: "text-accent bg-accent-soft" },
  private: { label: "Private / commercial", className: "text-muted bg-subtle border border-line" },
  personal: { label: "Personal project", className: "text-muted bg-subtle border border-line" },
  wip: { label: "In progress", className: "text-amber-700 bg-amber-50 border border-amber-100" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusMeta[project.status];
  return (
    <Reveal
      as="article"
      delay={(index % 2) * 80}
      className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-ink/20 hover:shadow-[0_8px_40px_-16px_rgba(0,0,0,0.15)] sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {project.category}
          </span>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}>
          {status.label}
        </span>
      </div>

      <p className="mt-3 text-sm font-medium text-body">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-body">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-subtle px-2.5 py-1 font-mono text-xs text-body"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5 text-sm">
        <span className="mr-auto text-xs text-muted">{project.year}</span>
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
          >
            Live site <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        )}
        {project.links.extra && (
          <a
            href={project.links.extra.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
          >
            {project.links.extra.label} <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        )}
        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" /> Code
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Selected work"
        title="Products I've shipped"
        description="A selection of production platforms I've architected and built end-to-end — from PostgreSQL schemas to deployed frontends. Several are commercial products serving real users."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {featuredProjects.filter((p) => !p.hidden).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {showOtherProjects && (
      <Reveal className="mt-16">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
          More on GitHub
        </h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-xl border border-line bg-surface p-5"
            >
              <h4 className="text-sm font-semibold text-ink">{p.title}</h4>
              <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-ink transition-colors hover:text-accent"
                >
                  Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} source`}
                  className="text-muted transition-colors hover:text-ink"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      )}
    </section>
  );
}
