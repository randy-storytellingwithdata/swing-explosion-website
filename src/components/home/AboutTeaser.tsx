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
            A Wisconsin Institution
          </h2>
        </div>
        <div className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-cream/90">
            Swing Explosion is an 18-piece big band fronted by Pete Sorce, who
            has been singing since he was eight years old, won the Ted Mack
            Original Amateur Hour as an original &ldquo;American Idol,&rdquo;
            and has shared the stage with Les Brown, Frank Sinatra Jr., Mel
            Tormé, Jack Jones, and Duke Ellington. Arrangements come from Jeff
            La Barge, one of the country&rsquo;s finest big-band arrangers.
            Together they bring the sound of Sinatra, Tony Bennett, and
            Michael Bublé to corporate galas, fundraisers, and private
            celebrations across the region &mdash; equally at home in a
            500-person ballroom or a trimmed-down combo for an intimate
            event.
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
