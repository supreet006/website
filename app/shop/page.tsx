import type { Metadata } from "next";
import ShopGrid from "@/components/shop-grid";
import Marquee from "@/components/marquee";

export const metadata: Metadata = {
  title: "Shop All",
  description:
    "Twelve styles cut in limited runs — natural fibres, honest construction, no seasonal noise.",
};

const TICKER = [
  "Complimentary shipping over $150",
  "30-day returns",
  "Carbon-neutral delivery",
  "Ethically made in small batches",
];

export default function ShopPage() {
  return (
    <>
      <section className="border-b border-line px-5 pb-12 pt-32 md:px-10 md:pb-16 md:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-clay">Autumn — Winter 2026</p>
          <h1 className="mt-5 font-display text-[clamp(2.8rem,6.5vw,5rem)] font-light leading-[0.98]">
            Everything, <em className="italic">considered.</em>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone md:text-base">
            Twelve styles cut in limited runs — natural fibres, honest
            construction, no seasonal noise.
          </p>
        </div>
      </section>

      <ShopGrid />

      <div className="border-y border-ink bg-ink text-paper">
        <Marquee
          items={TICKER}
          className="py-4 text-[10px] uppercase tracking-[0.28em] md:text-[11px]"
        />
      </div>
    </>
  );
}
