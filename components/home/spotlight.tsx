import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { ArrowRightIcon } from "@/components/icons";

const SPOTLIGHT_IMAGE =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2000&auto=format&fit=crop";

export default function Spotlight() {
  return (
    <section id="edit" className="relative scroll-mt-24 overflow-hidden bg-ink text-paper">
      <div className="grain absolute inset-0">
        <Image
          src={SPOTLIGHT_IMAGE}
          alt="The Winter Edit campaign"
          fill
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/10" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-44">
        <Reveal>
          <p className="eyebrow text-paper/60">The Winter Edit — Limited</p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.02]">
            Twelve pieces.
            <br />
            <em className="italic text-paper/85">Endless quiet combinations.</em>
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-relaxed text-paper/70 md:text-base">
            A capsule cut from brushed cashmere, double-faced wool and washed
            silk — designed to layer into each other without a single wrong
            turn.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 border border-paper/40 px-8 py-4 text-[11px] uppercase tracking-[0.24em] transition-colors hover:bg-paper hover:text-ink"
            >
              Shop the edit
              <ArrowRightIcon className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <p className="text-[11px] uppercase tracking-[0.22em] text-paper/50">
              Wool · Cashmere · Silk
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
