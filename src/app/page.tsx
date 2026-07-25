import Hero from "@/components/home/Hero";
import AudienceStrip from "@/components/home/AudienceStrip";
import AboutTeaser from "@/components/home/AboutTeaser";
import Features from "@/components/home/Features";
import VideoShowcase from "@/components/home/VideoShowcase";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AudienceStrip />
      <AboutTeaser />
      <Features />
      <VideoShowcase />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
