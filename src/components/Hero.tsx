import { profile } from "@/lib/content";
import { GitHubIcon, XIcon, MailIcon, ArrowDownIcon, ArrowUpRightIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent-soft/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-36 sm:pt-44">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-subtle px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for US / EU roles
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
          {profile.name}.
          <br />
          <span className="text-muted">{profile.title}.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            View selected work
            <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Get in touch
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-muted">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href={profile.links.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="transition-colors hover:text-ink">
            <XIcon className="h-5 w-5" />
          </a>
          <a href={profile.links.email} aria-label="Email" className="transition-colors hover:text-ink">
            <MailIcon className="h-5 w-5" />
          </a>
          <span className="ml-1 text-sm text-muted">{profile.location}</span>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {profile.stats.map((s) => (
            <div key={s.label} className="bg-surface px-6 py-5">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
