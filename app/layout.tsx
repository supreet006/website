import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-context";
import Navbar from "@/components/navbar";
import CartDrawer from "@/components/cart-drawer";
import Footer from "@/components/footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noir-atelier.example.com"),
  title: {
    default: "NOIR ATELIER — Considered clothing for the modern wardrobe",
    template: "%s — NOIR ATELIER",
  },
  description:
    "Noir Atelier is a study in restraint: natural fibres, precise tailoring and pieces made to be kept. Autumn/Winter 2026 has arrived.",
  openGraph: {
    title: "NOIR ATELIER — Considered clothing for the modern wardrobe",
    description:
      "Natural fibres, precise tailoring, pieces made to be kept. Explore the Autumn/Winter 2026 collection.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#171410",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
