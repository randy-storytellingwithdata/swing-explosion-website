import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Events",
  description:
    "See where Swing Explosion is playing next around Milwaukee and beyond.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="SCHEDULE"
        title="Upcoming Events"
        description="Our live schedule (synced from Google Sheets) is coming to this page next."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-cream/90">
          Event schedule coming soon.
        </p>
      </section>
    </>
  );
}
