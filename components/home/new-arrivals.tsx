import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import ProductCard from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";

const FEATURED_IDS = ["coat-04", "slip-dress", "knit-12", "tote"];

export default function NewArrivals() {
  const products = FEATURED_IDS.map(
    (id) => PRODUCTS.find((p) => p.id === id) ?? PRODUCTS[0]
  );

  return (
    <section id="new" className="scroll-mt-24 px-5 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead
          index="02"
          label="New Arrivals"
          title={
            <>
              Fresh from <em className="italic">the atelier</em>.
            </>
          }
          link={{ href: "/shop", label: "View all" }}
        />

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:mt-20 md:gap-x-6 md:gap-y-16 xl:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
