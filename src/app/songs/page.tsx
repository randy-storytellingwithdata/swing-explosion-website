import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Song List",
  description:
    "Browse Swing Explosion's repertoire of classic swing, jazz standards, and modern dance-floor favorites.",
};

export default function SongsPage() {
  return (
    <>
      <PageHero
        eyebrow="REPERTOIRE"
        title="Song List"
        description="Our full, searchable song list is coming to this page next."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-cream/90">
          Song list coming soon.
        </p>
      </section>
    </>
  );
}
