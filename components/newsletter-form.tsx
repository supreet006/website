"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="rise flex items-center justify-center gap-3 font-display text-xl md:text-2xl">
        <CheckIcon className="size-5 text-clay" />
        Welcome to the atelier — your code is on its way.
      </p>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="mx-auto flex w-full max-w-md items-center border-b border-ink/30 transition-colors focus-within:border-ink"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-stone"
      />
      <button
        type="submit"
        className="group flex items-center gap-2 py-4 pl-4 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors hover:text-clay"
      >
        Subscribe
        <ArrowRightIcon className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
