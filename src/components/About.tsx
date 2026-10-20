import { profile } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-subtle">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="About" title="Full-stack, end-to-end." />

          <Reveal className="space-y-5 text-base leading-relaxed text-body">
            <p>{profile.summary}</p>
            <p>
              I like owning a feature the whole way — modelling the data, writing
              the backend, crafting the interface, and keeping it running in
              production. That breadth is how I ended up shipping across pharmacy
              commerce, supply chain and delivery logistics in a short span.
            </p>
            <p>
              I&apos;m now looking to bring that ownership and pace to a product
              team in the <strong className="text-ink">US or Europe</strong> — as a
              full-stack or frontend engineer working in TypeScript.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
