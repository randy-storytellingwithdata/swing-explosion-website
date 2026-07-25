import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Swing Explosion perform live: full band footage from corporate events, fundraising galas, and private parties across the Greater Milwaukee area.",
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="WATCH"
        title="See the Band in Action"
        description="A growing library of performance clips is coming to this page. Check the homepage for a preview reel."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-cream/90">
          Full video library coming soon.
        </p>
      </section>
    </>
  );
}
