"use client";

import Image from "next/image";
import { useCart } from "@/components/cart-context";
import { PlusIcon } from "@/components/icons";
import { formatPrice, type Product } from "@/lib/products";

export default function HeroFeature({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="flex items-center gap-4 bg-paper/90 p-3.5 pr-4 shadow-[0_12px_40px_rgba(23,20,16,0.12)] backdrop-blur-md">
      <div className="relative size-16 shrink-0 overflow-hidden bg-sand">
        <Image
          src={product.image}
          alt=""
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="eyebrow text-clay">Featured</p>
        <p className="mt-1 truncate font-display text-lg leading-tight">
          {product.name}
        </p>
        <p className="truncate text-xs text-stone">
          {formatPrice(product.price)} — {product.detail}
        </p>
      </div>
      <button
        type="button"
        onClick={() => addItem(product.id)}
        aria-label={`Add ${product.name} to bag`}
        className="grid size-10 shrink-0 place-items-center border border-ink/15 transition-colors hover:bg-ink hover:text-paper"
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}
