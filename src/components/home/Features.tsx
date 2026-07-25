import { FEATURES } from "@/data/homepage";

export default function Features() {
  return (
    <section className="border-y border-gold/15 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-display text-sm tracking-[0.3em] text-gold">
            WHY EVENT PLANNERS BOOK US
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-cream">
            Built for the Events That Matter
          </h2>
        </div>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="rounded-md border border-gold/15 bg-ink p-8"
            >
              <h3 className="font-display text-2xl tracking-wide text-gold">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-cream/85">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
