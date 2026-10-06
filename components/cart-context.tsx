"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { FREE_SHIPPING_THRESHOLD, PRODUCTS } from "@/lib/products";

export type CartItem = { id: string; qty: number };

const STORAGE_KEY = "noir-atelier-cart";
const EMPTY: CartItem[] = [];

/* ------------------------------------------------------------------ */
/*  External store — localStorage-backed, shared across components.    */
/*  Read with useSyncExternalStore so SSR output stays stable.         */
/* ------------------------------------------------------------------ */

let cartItems: CartItem[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function isValidItem(value: unknown): value is CartItem {
  return (
    !!value &&
    typeof value === "object" &&
    typeof (value as CartItem).id === "string" &&
    typeof (value as CartItem).qty === "number" &&
    PRODUCTS.some((product) => product.id === (value as CartItem).id)
  );
}

function load() {
  if (loaded) return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        cartItems = parsed.filter(isValidItem);
      }
    }
  } catch {
    /* corrupted storage — start with an empty bag */
  }
}

function commit(next: CartItem[]) {
  cartItems = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  } catch {
    /* storage unavailable — bag lives for this session only */
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  load();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getSnapshot = () => cartItems;
const getServerSnapshot = () => EMPTY;

/* ------------------------------------------------------------------ */
/*  React context                                                      */
/* ------------------------------------------------------------------ */

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  freeShippingRemaining: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (id: string, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    (id: string, qty = 1) => {
      const existing = items.find((item) => item.id === id);
      const next = existing
        ? items.map((item) =>
            item.id === id ? { ...item, qty: item.qty + qty } : item
          )
        : [...items, { id, qty }];
      commit(next);
      setIsOpen(true);
    },
    [items]
  );

  const removeItem = useCallback(
    (id: string) => {
      commit(items.filter((item) => item.id !== id));
    },
    [items]
  );

  const setQty = useCallback(
    (id: string, qty: number) => {
      const next =
        qty <= 0
          ? items.filter((item) => item.id !== id)
          : items.map((item) =>
              item.id === id ? { ...item, qty } : item
            );
      commit(next);
    },
    [items]
  );

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.qty, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce((sum, item) => {
        const product = PRODUCTS.find((p) => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
      }, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count,
      subtotal,
      freeShippingRemaining: Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal),
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      setQty,
    }),
    [
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      setQty,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
