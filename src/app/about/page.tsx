import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About the Band",
  description:
    "Meet Swing Explosion, Milwaukee's 18-piece big band bringing classic swing, jazz, and dance music to life on stage.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT THE BAND"
        title="18 Musicians. One Unstoppable Sound."
        description="Swing Explosion is Milwaukee's premier big band, built for dance floors, ballrooms, and everything in between."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-cream/90">
          Full band bios, history, and photos are coming to this page next. In
          the meantime, head to the homepage for an introduction to the band,
          or reach out directly to talk about your event.
        </p>
      </section>
    </>
  );
}
