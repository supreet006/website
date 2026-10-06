type MarqueeProps = {
  items: string[];
  className?: string;
};

/** Infinite horizontal ticker. Pauses on hover. */
export default function Marquee({ items, className = "" }: MarqueeProps) {
  const half = (ariaHidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span>{item}</span>
          <span className="mx-6 text-clay md:mx-10" aria-hidden="true">
            ✺
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee-paused overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee">
        {half(false)}
        {half(true)}
      </div>
    </div>
  );
}
