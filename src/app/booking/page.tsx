import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Book Swing Explosion for your wedding, corporate event, or gala. Request a quote today.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="BOOK THE BAND"
        title="Let's Talk About Your Event"
        description="Our full booking inquiry form is coming to this page next."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-cream/90">
          Booking form coming soon.
        </p>
      </section>
    </>
  );
}
