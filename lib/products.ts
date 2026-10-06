export type Category = "Women" | "Men" | "Accessories";

export type Product = {
  id: string;
  name: string;
  detail: string;
  price: number;
  category: Category;
  image: string;
  tag?: "New" | "Bestseller" | "Limited";
};

export const PRODUCTS: Product[] = [
  {
    id: "coat-04",
    name: "Coat No. 04",
    detail: "Sculpted wool, corseted waist",
    price: 490,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: "slip-dress",
    name: "The Slip Dress",
    detail: "Bias-cut silk charmeuse",
    price: 220,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    id: "knit-12",
    name: "Knit No. 12",
    detail: "Compact-spun cashmere crew",
    price: 185,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "trouser-07",
    name: "Trouser No. 07",
    detail: "High-twist wool, single pleat",
    price: 165,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tote",
    name: "The Tote",
    detail: "Full-grain vegetable-tanned leather",
    price: 310,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop",
    tag: "Limited",
  },
  {
    id: "denim-03",
    name: "Denim No. 03",
    detail: "14oz Japanese selvedge",
    price: 195,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "knit-08",
    name: "Knit No. 08",
    detail: "Extra-fine merino turtleneck",
    price: 145,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: "skirt-02",
    name: "Skirt No. 02",
    detail: "Pleated satin midi",
    price: 150,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "jacket-09",
    name: "Jacket No. 09",
    detail: "Garment-dyed chore jacket",
    price: 240,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "scarf",
    name: "The Scarf",
    detail: "Double-faced brushed cashmere",
    price: 95,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tee-05",
    name: "Tee No. 05",
    detail: "Organic cotton, boxy cut",
    price: 65,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "shirt-06",
    name: "Shirt No. 06",
    detail: "Garment-washed cotton oxford",
    price: 125,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop",
  },
];

export const CATEGORY_IMAGES: Record<Category, string> = {
  Women:
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
  Men: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1200&auto=format&fit=crop",
  Accessories:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
};

export const FREE_SHIPPING_THRESHOLD = 150;

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
