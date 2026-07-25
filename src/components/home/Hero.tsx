import Link from "next/link";
import ArtDecoSunburst from "@/components/ArtDecoSunburst";
import YouTubeFacade from "@/components/YouTubeFacade";
import { BOOKING_LINK } from "@/data/nav";
import { FEATURED_VIDEO } from "@/data/videos";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <ArtDecoSunburst className="pointer-events-none absolute -left-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 text-gold/10" />
      <ArtDecoSunburst className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] text-crimson/10" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="font-display text-sm tracking-[0.35em] text-gold">
            MILWAUKEE, WISCONSIN
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-wide text-cream sm:text-6xl lg:text-7xl">
            18 PIECES.
            <br />
            <span className="text-gold">ONE EXPLOSION</span>
            <br />
            OF SWING.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            Milwaukee&rsquo;s premier big band, bringing a full horn section
            and an unstoppable rhythm section to weddings, corporate events,
            and nonprofit galas across Wisconsin.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={BOOKING_LINK.href}
              className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-base font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-bright"
            >
              Book Us For Your Event
            </Link>
            <Link
              href="/videos"
              className="inline-flex items-center justify-center rounded-sm border border-gold/40 px-8 py-4 text-base font-bold uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Watch the Band
            </Link>
          </div>
        </div>

        <div>
          <YouTubeFacade
            videoId={FEATURED_VIDEO.id}
            title={FEATURED_VIDEO.title}
            priority
          />
          <p className="mt-3 text-sm text-muted">{FEATURED_VIDEO.description}</p>
        </div>
      </div>
    </section>
  );
}
