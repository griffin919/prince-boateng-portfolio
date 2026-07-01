import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="max-w-2xl">
      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-body">{description}</p>
      )}
    </Reveal>
  );
}
