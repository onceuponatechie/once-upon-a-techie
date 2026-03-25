import HeroSection from "@/components/home/HeroSection";
import CreativeVault from "@/components/home/CreativeVault";
import TheTrio from "@/components/home/TheTrio";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";
import BlogSection from "@/components/home/BlogSection";
import ScrollDiary from "@/components/home/ScrollDiary";
import ReadersCorner from "@/components/home/ReadersCorner";
import Newsletter from "@/components/home/Newsletter";
import FAQ from "@/components/home/FAQ";
import StickyWidget from "@/components/layout/StickyWidget";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CreativeVault />
      <TheTrio />
      <ProjectsCarousel />
      <BlogSection />
      <ScrollDiary />
      <ReadersCorner />
      <Newsletter />
      <FAQ />
      <StickyWidget />
    </>
  );
}
