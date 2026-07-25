import { TESTIMONIALS } from "@/data/homepage";

export default function Testimonials() {
  return (
    <section className="border-y border-gold/15 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-display text-sm tracking-[0.3em] text-gold">
          KIND WORDS
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-cream">
          From Planners &amp; Hosts
        </h2>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <li
              key={index}
              className="flex flex-col justify-between rounded-md border border-gold/15 bg-ink p-8"
            >
              <p className="text-lg leading-relaxed text-cream/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-semibold text-gold">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
