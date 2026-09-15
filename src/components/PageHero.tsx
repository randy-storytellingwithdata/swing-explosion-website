type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-gold/15 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {eyebrow ? (
          <p className="font-display text-sm tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-4xl tracking-wide text-cream sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
