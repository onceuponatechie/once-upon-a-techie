"use client";

import Hero from "@/components/home/Hero";
import CreativeVault from "@/components/home/CreativeVault";
import TheTrio from "@/components/home/TheTrio";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";
import BlogSection from "@/components/home/BlogSection";
import ScrollDiary from "@/components/home/ScrollDiary";
import ReadersCorner from "@/components/home/ReadersCorner";
import Newsletter from "@/components/home/Newsletter";
import FAQ from "@/components/home/FAQ";

interface Props {
  posts: any[];
  builds: any[];
  faqs: any[];
}

export default function HomeClient({ posts, builds, faqs }: Props) {
  return (
    <>
      <Hero />
      <CreativeVault />
      <TheTrio />
      <ProjectsCarousel builds={builds} />
      <BlogSection posts={posts} />
      <ScrollDiary />
      <ReadersCorner />
      <Newsletter />
      <FAQ faqs={faqs} />
    </>
  );
}
