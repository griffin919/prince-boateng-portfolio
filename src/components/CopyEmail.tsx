"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email:", email);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white hover:text-white"
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
