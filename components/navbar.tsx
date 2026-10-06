"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart-context";
import { BagIcon, CloseIcon, MenuIcon } from "@/components/icons";

const LINKS = [
  { label: "Shop All", href: "/shop" },
  { label: "Collections", href: "/#collections" },
  { label: "New Arrivals", href: "/#new" },
  { label: "Our Craft", href: "/#craft" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    // Sync initial scroll position on the next frame (deferring keeps the
    // hydration render stable and avoids cascading renders).
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu when the route changes (render-phase state
  // adjustment — no effect needed).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  const overHero = pathname === "/" && !scrolled;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* announcement bar */}
        <div
          className={`overflow-hidden bg-ink text-paper transition-all duration-500 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          }`}
        >
          <p className="py-2.5 text-center text-[10px] uppercase tracking-[0.24em] md:text-[11px]">
            <span className="md:hidden">Complimentary shipping over $150</span>
            <span className="hidden md:inline">
              Complimentary shipping on orders over $150 — Autumn / Winter 2026
              has arrived
            </span>
          </p>
        </div>

        {/* main bar */}
        <div
          className={`transition-colors duration-500 ${
            overHero
              ? "bg-transparent text-paper"
              : "border-b border-line bg-paper/90 text-ink backdrop-blur-md"
          }`}
        >
          <nav className="mx-auto grid h-16 max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 md:h-20 md:px-10 lg:grid-cols-[1fr_auto_1fr]">
            <Link
              href="/"
              className="justify-self-start font-display text-[1.3rem] font-medium tracking-[0.2em] md:text-2xl"
            >
              NOIR ATELIER
            </Link>

            <div className="hidden items-center gap-9 justify-self-center lg:flex">
              {LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`link-underline text-[11px] font-medium uppercase tracking-[0.26em] ${
                      active ? "text-clay" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2 justify-self-end">
              <button
                type="button"
                onClick={openCart}
                aria-label={`Open bag, ${count} ${count === 1 ? "item" : "items"}`}
                className="relative grid size-10 place-items-center"
              >
                <BagIcon className="size-5" />
                {count > 0 ? (
                  <span
                    key={count}
                    className="pop absolute right-0 top-0.5 grid size-[18px] place-items-center rounded-full bg-clay text-[10px] font-medium text-paper"
                  >
                    {count}
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="grid size-10 place-items-center lg:hidden"
              >
                <MenuIcon className="size-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* mobile menu */}
      {menuOpen ? (
        <div className="fixed inset-0 z-[80] flex flex-col bg-paper text-ink">
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-display text-[1.3rem] font-medium tracking-[0.2em]"
            >
              NOIR ATELIER
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 pt-4">
            {LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rise flex items-baseline gap-5 border-b border-line py-5"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="text-[10px] tracking-[0.3em] text-stone">
                  0{i + 1}
                </span>
                <span className="font-display text-4xl font-light">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex gap-6 px-5 py-8 text-[11px] uppercase tracking-[0.24em] text-stone">
            <a href="#" className="link-underline">
              Instagram
            </a>
            <a href="#" className="link-underline">
              Pinterest
            </a>
            <a href="#" className="link-underline">
              TikTok
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
