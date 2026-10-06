import Reveal from "@/components/reveal";
import NewsletterForm from "@/components/newsletter-form";

export default function Newsletter() {
  return (
    <section className="border-t border-line bg-sand">
      <div className="mx-auto max-w-2xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <p className="eyebrow text-clay">The Inner Circle</p>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-light leading-[1.05]">
            Join the list.
            <br />
            <em className="italic">Ten percent, on us.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-stone">
            Early access to drops, styling notes from the atelier, and 10% off
            your first order.
          </p>
          <div className="mt-10">
            <NewsletterForm />
          </div>
          <p className="mt-5 text-[11px] text-stone/80">
            No noise — one letter a month. Unsubscribe anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
