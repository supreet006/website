import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { StarIcon } from "@/components/icons";

const TESTIMONIALS = [
  {
    quote:
      "The coat I bought three winters ago still looks like it came off the runway. Nothing else in my wardrobe compares.",
    name: "Elena M.",
    city: "New York",
  },
  {
    quote:
      "Impeccable cut, honest fabric, zero noise. Noir Atelier is the only label I check first now.",
    name: "David K.",
    city: "London",
  },
  {
    quote:
      "Finally, clothes that feel considered. The slip dress is a masterclass in simplicity.",
    name: "Amélie R.",
    city: "Paris",
  },
];

export default function Testimonials() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead
          index="04"
          label="Word of Mouth"
          title={
            <>
              Kept, and <em className="italic">kept again</em>.
            </>
          }
        />

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 120} className="h-full">
              <figure className="flex h-full flex-col border border-line bg-cream p-8">
                <div className="flex gap-1 text-clay" aria-label="Five out of five stars">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <StarIcon key={star} className="size-3.5" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl leading-snug md:text-[1.4rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pt-8 text-[11px] uppercase tracking-[0.22em] text-stone">
                  {testimonial.name} — {testimonial.city}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
