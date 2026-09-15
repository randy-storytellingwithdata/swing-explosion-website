import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CONTACT_EMAIL } from "@/data/nav";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Swing Explosion.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="Get in Touch" />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-cream/90">
          A full contact form is coming to this page next. For now, reach us
          directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-gold hover:text-gold-bright"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </>
  );
}
