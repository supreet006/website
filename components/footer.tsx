import Link from "next/link";
import {
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Shop",
    links: ["New arrivals", "Women", "Men", "Accessories", "Gift cards"],
  },
  {
    title: "Atelier",
    links: ["Our story", "Craft", "Sustainability", "Journal", "Careers"],
  },
  {
    title: "Support",
    links: [
      "Shipping & returns",
      "Size guide",
      "Care guide",
      "Contact",
      "FAQ",
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "X", Icon: XIcon },
  { label: "YouTube", Icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-medium tracking-[0.2em]">
              NOIR ATELIER
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Considered clothing, made to be kept. Cut in small batches from
              natural fibres in Portugal and Italy.
            </p>
            <div className="mt-8 flex gap-3">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center border border-paper/20 transition-colors hover:bg-paper hover:text-ink"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="eyebrow text-paper/40">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/shop"
                      className="link-underline text-sm text-paper/75 hover:text-paper"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* oversized wordmark */}
      <div className="overflow-hidden border-t border-paper/10">
        <p
          aria-hidden="true"
          className="select-none whitespace-nowrap py-4 text-center font-display text-[clamp(3.2rem,12.5vw,11.5rem)] font-light leading-[0.9] tracking-[0.04em] text-paper/90"
        >
          NOIR ATELIER
        </p>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 text-[10px] uppercase tracking-[0.22em] text-paper/40 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>© 2026 Noir Atelier — All rights reserved</p>
          <p>Designed in New York · Made in Portugal</p>
          <div className="flex gap-6">
            <Link href="/shop" className="link-underline">
              Privacy
            </Link>
            <Link href="/shop" className="link-underline">
              Terms
            </Link>
            <Link href="/shop" className="link-underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
