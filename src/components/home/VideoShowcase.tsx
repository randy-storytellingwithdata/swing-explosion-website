import Link from "next/link";
import YouTubeFacade from "@/components/YouTubeFacade";
import { MORE_VIDEOS } from "@/data/videos";

export default function VideoShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="font-display text-sm tracking-[0.3em] text-gold">
            SEE IT LIVE
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-cream">
            More From the Stage
          </h2>
        </div>
        <Link
          href="/videos"
          className="font-semibold text-gold hover:text-gold-bright"
        >
          Watch all videos &rarr;
        </Link>
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {MORE_VIDEOS.map((video) => (
          <li key={`${video.id}-${video.title}`}>
            <YouTubeFacade videoId={video.id} title={video.title} />
            <p className="mt-3 text-sm text-muted">{video.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
