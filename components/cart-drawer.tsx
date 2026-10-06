"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart-context";
import {
  BagIcon,
  CloseIcon,
  MinusIcon,
  PlusIcon,
} from "@/components/icons";
import {
  FREE_SHIPPING_THRESHOLD,
  PRODUCTS,
  formatPrice,
} from "@/lib/products";

export default function CartDrawer() {
  const {
    items,
    count,
    subtotal,
    freeShippingRemaining,
    isOpen,
    closeCart,
    removeItem,
    setQty,
  } = useCart();
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  // Reset the checkout notice whenever the drawer closes (render-phase
  // state adjustment — no effect needed).
  const [prevOpen, setPrevOpen] = useState(isOpen);
  if (prevOpen !== isOpen) {
    setPrevOpen(isOpen);
    if (!isOpen) setNotice(false);
  }

  const lines = items.flatMap((item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    return product ? [{ item, product }] : [];
  });

  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <>
      {/* backdrop */}
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-[65] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-line bg-paper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-xl">
            Your bag
            <span className="ml-3 align-middle text-[11px] uppercase tracking-[0.2em] text-stone">
              {count} {count === 1 ? "piece" : "pieces"}
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close bag"
            className="grid size-10 place-items-center text-ink transition-transform duration-500 hover:rotate-90"
          >
            <CloseIcon className="size-5" />
          </button>
        </header>

        {/* free shipping meter */}
        <div className="border-b border-line px-6 py-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
            {freeShippingRemaining > 0 ? (
              <>
                You&rsquo;re{" "}
                <span className="text-ink">{formatPrice(freeShippingRemaining)}</span>{" "}
                away from free shipping
              </>
            ) : (
              <span className="text-clay">Free shipping unlocked — on us</span>
            )}
          </p>
          <div className="relative mt-3 h-[2px] overflow-hidden bg-line">
            <div
              className="absolute inset-y-0 left-0 bg-clay transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-10 text-center">
            <BagIcon className="size-10 text-stone/60" />
            <p className="mt-6 font-display text-2xl">Your bag is empty.</p>
            <p className="mt-2 text-sm text-stone">
              Pieces you add will be kept here, waiting.
            </p>
            <Link
              href="/shop"
              onClick={closeCart}
              className="mt-8 border border-ink px-8 py-3.5 text-[11px] uppercase tracking-[0.24em] transition-colors hover:bg-ink hover:text-paper"
            >
              Explore the collection
            </Link>
          </div>
        ) : (
          <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
            {lines.map(({ item, product }) => (
              <li key={item.id} className="flex gap-4 py-6">
                <div className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden bg-sand">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="font-display text-lg leading-tight">
                    {product.name}
                  </p>
                  <p className="mt-0.5 text-xs text-stone">{product.detail}</p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="inline-flex items-center border border-line">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${product.name}`}
                        onClick={() => setQty(item.id, item.qty - 1)}
                        className="grid size-8 place-items-center transition-colors hover:bg-sand"
                      >
                        <MinusIcon className="size-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs tabular-nums">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${product.name}`}
                        onClick={() => setQty(item.id, item.qty + 1)}
                        className="grid size-8 place-items-center transition-colors hover:bg-sand"
                      >
                        <PlusIcon className="size-3.5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-[10px] uppercase tracking-[0.2em] text-stone underline-offset-4 transition-colors hover:text-clay hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-sm tabular-nums">
                  {formatPrice(product.price * item.qty)}
                </p>
              </li>
            ))}
          </ul>
        )}

        <footer className="border-t border-line px-6 py-6">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] uppercase tracking-[0.24em] text-stone">
              Subtotal
            </span>
            <span className="font-display text-2xl tabular-nums">
              {formatPrice(subtotal)}
            </span>
          </div>
          <p className="mt-1.5 text-[11px] text-stone">
            Shipping and taxes calculated at checkout.
          </p>
          <button
            type="button"
            onClick={() => setNotice(true)}
            disabled={lines.length === 0}
            className="mt-5 w-full bg-ink py-4 text-[11px] uppercase tracking-[0.24em] text-paper transition-colors hover:bg-clay disabled:cursor-not-allowed disabled:opacity-40"
          >
            Checkout
          </button>
          {notice ? (
            <p className="rise mt-3 text-center text-[11px] text-clay">
              This is a preview store — checkout isn&rsquo;t connected.
            </p>
          ) : null}
          <button
            type="button"
            onClick={closeCart}
            className="mt-4 w-full text-center text-[11px] uppercase tracking-[0.24em] text-stone transition-colors hover:text-ink"
          >
            Continue shopping
          </button>
        </footer>
      </aside>
    </>
  );
}
