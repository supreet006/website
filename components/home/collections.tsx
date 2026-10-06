import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { ArrowUpRightIcon } from "@/components/icons";
import { CATEGORY_IMAGES } from "@/lib/products";

const COLLECTIONS = [
  {
    name: "Women",
    pieces: "184 pieces",
    blurb: "Tailoring, silk and knitwear",
    image: CATEGORY_IMAGES.Women,
  },
  {
    name: "Men",
    pieces: "162 pieces",
    blurb: "Outerwear and quiet staples",
    image: CATEGORY_IMAGES.Men,
  },
  {
    name: "Accessories",
    pieces: "76 pieces",
    blurb: "Leather and cashmere objects",
    image: CATEGORY_IMAGES.Accessories,
  },
];

export default function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead
          index="01"
          label="The Collections"
          title={
            <>
              Three rooms,
              <br />
              one <em className="italic">wardrobe</em>.
            </>
          }
          link={{ href: "/shop", label: "Shop all pieces" }}
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {COLLECTIONS.map((collection, i) => (
            <Reveal key={collection.name} delay={i * 120} className={i === 1 ? "lg:mt-16" : ""}>
              <Link href="/shop" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={collection.image}
                    alt={`${collection.name} collection`}
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/10" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl">
                      {collection.name}
                    </h3>
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-stone">
                      {collection.pieces}
                    </p>
                    <p className="mt-1 text-sm text-stone">{collection.blurb}</p>
                  </div>
                  <ArrowUpRightIcon className="mt-1.5 size-5 shrink-0 text-stone transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
