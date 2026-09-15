import { AUDIENCES } from "@/data/homepage";

export default function AudienceStrip() {
  return (
    <section
      aria-label="Who we perform for"
      className="border-y border-gold/15 bg-surface"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8 text-center">
        <p className="font-display text-sm tracking-[0.3em] text-muted">
          TRUSTED FOR
        </p>
        {AUDIENCES.map((audience) => (
          <span
            key={audience}
            className="font-display text-lg tracking-wide text-cream sm:text-xl"
          >
            {audience}
          </span>
        ))}
      </div>
    </section>
  );
}
