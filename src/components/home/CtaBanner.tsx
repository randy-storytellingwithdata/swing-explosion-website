import Link from "next/link";
import ArtDecoSunburst from "@/components/ArtDecoSunburst";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-crimson-deep">
      <ArtDecoSunburst className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-cream/10" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl tracking-wide text-cream sm:text-5xl">
          Ready to Book Swing Explosion?
        </h2>
        <p className="mt-4 text-lg text-cream/85">
          Tell us about your wedding, corporate event, or gala and we&rsquo;ll
          follow up with availability and a custom quote.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-base font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-bright"
          >
            Start a Booking Inquiry
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-sm border border-cream/40 px-8 py-4 text-base font-bold uppercase tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            See Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
}
