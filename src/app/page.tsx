import Hero from "@/components/home/Hero";
import AudienceStrip from "@/components/home/AudienceStrip";
import AboutTeaser from "@/components/home/AboutTeaser";
import Features from "@/components/home/Features";
import VideoShowcase from "@/components/home/VideoShowcase";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import DecorativeDivider from "@/components/DecorativeDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <AudienceStrip />
      <DecorativeDivider id="celebration-motif-1" />
      <AboutTeaser />
      <Features />
      <VideoShowcase />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
