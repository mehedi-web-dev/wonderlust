"use client";

import { ArrowUpRight } from "lucide-react";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.reset();
      }}
      className="mt-4 flex max-w-xs items-center rounded bg-white/10"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder="Enter email"
        className="h-10 w-full bg-transparent px-3 text-sm outline-none placeholder:text-white/50"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-10 w-9 shrink-0 items-center justify-center text-white transition-colors hover:text-brand"
      >
        <ArrowUpRight className="size-4" />
      </button>
    </form>
  );
}
