"use client";

import Image from "next/image";
import { useCart } from "@/components/cart-context";
import { formatPrice, type Product } from "@/lib/products";

const TAG_STYLES: Record<NonNullable<Product["tag"]>, string> = {
  New: "bg-ink text-paper",
  Bestseller: "bg-clay text-paper",
  Limited: "bg-paper text-ink",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 24vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />

        {product.tag ? (
          <span
            className={`absolute left-3 top-3 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] ${TAG_STYLES[product.tag]}`}
          >
            {product.tag}
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => addItem(product.id)}
          className="absolute inset-x-3 bottom-3 translate-y-0 bg-ink/95 py-3.5 text-[10px] uppercase tracking-[0.24em] text-paper transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-clay md:translate-y-[140%] md:group-hover:translate-y-0 md:group-focus-within:translate-y-0"
        >
          Add to bag — {formatPrice(product.price)}
        </button>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg leading-snug md:text-xl">
            {product.name}
          </h3>
          <p className="mt-0.5 truncate text-xs text-stone">
            {product.detail}
          </p>
        </div>
        <p className="shrink-0 text-sm tabular-nums">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
