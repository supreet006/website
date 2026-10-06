import Image from "next/image";
import Reveal from "@/components/reveal";

const VALUES = [
  {
    index: "01",
    title: "Natural fibres",
    copy: "Merino, cashmere, silk and linen — nothing synthetic ever touches the loom.",
  },
  {
    index: "02",
    title: "Small batches",
    copy: "Every style is cut in runs of three hundred or fewer. No overstock, no landfill.",
  },
  {
    index: "03",
    title: "Fair ateliers",
    copy: "Twenty-eight partner workshops across Portugal and Italy, audited twice a year.",
  },
];

const STATS = [
  { value: "28", label: "Artisan ateliers" },
  { value: "100%", label: "Traceable fibres" },
  { value: "0", label: "Plastic packaging" },
];

export default function Craft() {
  return (
    <section id="craft" className="scroll-mt-24 border-t border-line bg-cream">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-2 lg:gap-24">
        {/* image collage */}
        <div className="relative">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1400&auto=format&fit=crop"
                alt="Garments on the rail in the Noir Atelier studio"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="absolute -bottom-8 -right-3 sm:-right-6">
            <div className="relative aspect-square w-40 overflow-hidden border-8 border-cream bg-sand sm:w-56">
              <Image
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop"
                alt="Inside Atelier No. 04, Porto"
                fill
                sizes="(min-width: 640px) 224px, 160px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <p className="mt-6 text-[10px] uppercase tracking-[0.24em] text-stone">
            Atelier No. 04 — Porto, Portugal
          </p>
        </div>

        {/* copy */}
        <div>
          <Reveal>
            <p className="eyebrow text-clay">03 — Our Craft</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-light leading-[1.02]">
              Made to be <em className="italic">kept</em>.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-stone md:text-base">
              Fast fashion made clothing disposable. We make the opposite:
              garments with the finish of couture and the discipline of
              uniform — designed once, refined for years, worn for decades.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {VALUES.map((value) => (
                <li key={value.index} className="flex gap-6 py-5 md:gap-8">
                  <span className="pt-0.5 text-[11px] tracking-[0.2em] text-clay">
                    {value.index}
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl">
                      {value.title}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-stone">
                      {value.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <dl className="mt-10 grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-light md:text-4xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-stone">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
