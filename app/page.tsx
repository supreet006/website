import Hero from "@/components/home/hero";
import Collections from "@/components/home/collections";
import NewArrivals from "@/components/home/new-arrivals";
import Craft from "@/components/home/craft";
import Spotlight from "@/components/home/spotlight";
import Testimonials from "@/components/home/testimonials";
import Newsletter from "@/components/home/newsletter";
import Marquee from "@/components/marquee";

const TICKER = [
  "New season arrivals",
  "Free shipping over $150",
  "Ethically made in small batches",
  "Natural fibres only",
  "Autumn / Winter 2026",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="border-y border-ink bg-ink text-paper">
        <Marquee
          items={TICKER}
          className="py-4 text-[10px] uppercase tracking-[0.28em] md:text-[11px]"
        />
      </div>

      <Collections />
      <NewArrivals />
      <Craft />
      <Spotlight />
      <Testimonials />
      <Newsletter />
    </>
  );
}
