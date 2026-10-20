import { profile } from "@/lib/content";
import Reveal from "./Reveal";
import { GitHubIcon, XIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon } from "./icons";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <Reveal className="rounded-3xl border border-line bg-ink px-6 py-16 text-center sm:px-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
          Contact
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let&apos;s build something that ships.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
          I&apos;m open to full-stack and frontend roles in the US and Europe —
          remote or relocation. The fastest way to reach me is email.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-white"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-white/60">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white">
            <GitHubIcon className="h-4 w-4" /> GitHub <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white">
            <LinkedInIcon className="h-4 w-4" /> LinkedIn <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
          <a href={profile.links.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white">
            <XIcon className="h-4 w-4" /> Twitter <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
