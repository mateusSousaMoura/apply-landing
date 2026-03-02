"use client";

import { Header } from "@/components/common/Header";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { ProductFunnel } from "@/components/sections/ProductFunnel";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { Differentiators } from "@/components/sections/Differentiators";
import { Testimonials } from "@/components/sections/Testimonials";
import { Press } from "@/components/sections/Press";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <ProductFunnel />
        <ProductHighlights />
        <Differentiators />
        <Testimonials />
        <Press />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
