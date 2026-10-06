import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

type SectionHeadProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  link?: { href: string; label: string };
};

/** Numbered editorial section header with hairline rule. */
export default function SectionHead({ index, label, title, link }: SectionHeadProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t border-line pt-8">
      <div>
        <p className="eyebrow text-clay">
          {index} — {label}
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.04]">
          {title}
        </h2>
      </div>
      {link ? (
        <Link
          href={link.href}
          className="link-underline inline-flex items-center gap-2 pb-1 text-[11px] font-medium uppercase tracking-[0.24em]"
        >
          {link.label}
          <ArrowRightIcon className="size-3.5" />
        </Link>
      ) : null}
    </div>
  );
}
