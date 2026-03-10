"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/hero";
import AboutText from "@/components/about/AboutTextSection";
import AboutTeam from "@/components/about/AboutTeam";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutText />
      <AboutTeam />
      <Footer />
    </div>
  );
}
