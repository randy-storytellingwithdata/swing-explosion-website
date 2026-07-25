import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
        <div className="lg:col-span-1">
          <p className="font-display text-sm tracking-[0.3em] text-gold">
            ABOUT THE BAND
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-cream">
            A Milwaukee Institution
          </h2>
        </div>
        <div className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-cream/90">
            Swing Explosion is an 18-piece big band built around a simple
            idea: nothing fills a dance floor like the real thing. Five
            saxophones, four trumpets, four trombones, and a driving rhythm
            section deliver the sound of the swing era with the energy of a
            modern show band &mdash; equally at home behind a bride and groom&rsquo;s
            first dance or headlining a 500-person gala.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-bright"
          >
            Meet the band
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
