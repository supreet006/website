"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/product-card";
import Reveal from "@/components/reveal";
import { ChevronDownIcon } from "@/components/icons";
import { PRODUCTS } from "@/lib/products";

const FILTERS = ["All", "Women", "Men", "Accessories"] as const;
type Filter = (typeof FILTERS)[number];

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "low", label: "Price · Low to high" },
  { value: "high", label: "Price · High to low" },
] as const;
type Sort = (typeof SORTS)[number]["value"];

export default function ShopGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<Sort>("featured");

  const products = useMemo(() => {
    const list =
      filter === "All"
        ? [...PRODUCTS]
        : PRODUCTS.filter((product) => product.category === filter);

    if (sort === "low") list.sort((a, b) => a.price - b.price);
    else if (sort === "high") list.sort((a, b) => b.price - a.price);
    else if (sort === "newest")
      list.sort(
        (a, b) => Number(b.tag === "New") - Number(a.tag === "New")
      );

    return list;
  }, [filter, sort]);

  return (
    <>
      {/* filter bar */}
      <div className="sticky top-16 z-30 border-b border-line bg-paper/90 backdrop-blur-md md:top-20">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 md:px-10">
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={filter === option}
                className={`rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  filter === option
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-stone hover:border-ink hover:text-ink"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <p className="hidden text-[11px] uppercase tracking-[0.2em] text-stone sm:block">
              {products.length} {products.length === 1 ? "piece" : "pieces"}
            </p>
            <div className="relative">
              <label htmlFor="sort" className="sr-only">
                Sort products
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(event) => setSort(event.target.value as Sort)}
                className="cursor-pointer appearance-none border-b border-line bg-transparent py-1.5 pr-7 text-[11px] uppercase tracking-[0.18em] outline-none transition-colors focus:border-ink"
              >
                {SORTS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-0 top-1/2 size-3.5 -translate-y-1/2 text-stone" />
            </div>
          </div>
        </div>
      </div>

      {/* grid */}
      <div className="px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-6 md:gap-y-16 xl:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {products.length === 0 ? (
          <p className="py-24 text-center font-display text-2xl text-stone">
            Nothing here yet.
          </p>
        ) : null}
      </div>
    </>
  );
}
