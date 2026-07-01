import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </span>
        <a
          href="#top"
          className="transition-colors hover:text-ink"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
