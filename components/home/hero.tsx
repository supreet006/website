import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import HeroFeature from "@/components/home/hero-feature";
import { PRODUCTS } from "@/lib/products";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop";

export default function Hero() {
  const featured = PRODUCTS.find((p) => p.id === "coat-04") ?? PRODUCTS[0];

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid min-h-svh max-w-[1440px] grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
        {/* copy */}
        <div className="relative z-10 flex flex-col justify-center px-5 pb-16 pt-36 md:px-10 lg:pb-10 lg:pt-24">
          <p className="eyebrow rise text-clay" style={{ animationDelay: "0.1s" }}>
            Autumn — Winter 2026
          </p>

          <h1
            className="rise mt-6 font-display text-[clamp(3.1rem,7.5vw,6.4rem)] font-light leading-[0.95]"
            style={{ animationDelay: "0.2s" }}
          >
            Clothing for
            <br />
            the <em className="italic text-clay">considered</em> life.
          </h1>

          <p
            className="rise mt-8 max-w-md text-sm leading-relaxed text-stone md:text-base"
            style={{ animationDelay: "0.35s" }}
          >
            A study in restraint — natural fibres, precise tailoring, and pieces
            made to be worn for decades, not seasons.
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-paper transition-colors hover:bg-clay"
            >
              Explore the collection
              <ArrowRightIcon className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#craft"
              className="link-underline text-[11px] font-medium uppercase tracking-[0.24em]"
            >
              Our craft
            </Link>
          </div>

          <div
            className="rise mt-16 flex flex-wrap gap-x-7 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-stone md:text-[11px]"
            style={{ animationDelay: "0.65s" }}
          >
            <span>Free shipping over $150</span>
            <span aria-hidden="true" className="text-line">
              /
            </span>
            <span>30-day returns</span>
            <span aria-hidden="true" className="text-line">
              /
            </span>
            <span>Carbon-neutral delivery</span>
          </div>
        </div>

        {/* image */}
        <div className="relative min-h-[68vh] lg:min-h-svh">
          <div className="grain absolute inset-0 overflow-hidden bg-sand">
            <Image
              src={HERO_IMAGE}
              alt="Noir Atelier — Autumn/Winter 2026 campaign"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="hero-zoom object-cover"
            />
          </div>

          {/* vertical caption */}
          <p className="absolute left-5 top-1/2 hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.4em] text-paper drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] [writing-mode:vertical-rl] xl:block">
            Autumn / Winter 2026 — Look 01
          </p>

          {/* floating featured piece */}
          <div
            className="rise absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8 sm:max-w-sm"
            style={{ animationDelay: "0.85s" }}
          >
            <HeroFeature product={featured} />
          </div>
        </div>
      </div>
    </section>
  );
}
