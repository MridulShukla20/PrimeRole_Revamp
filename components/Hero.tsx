"use client";

import { HERO_COPY } from "@/constants/hero-copy";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 max-w-xl">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                {HERO_COPY.headline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {HERO_COPY.explainer}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md">
                {HERO_COPY.primaryCta}
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-medium hover:border-gray-300 transition-colors">
                {HERO_COPY.secondaryCta}
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="order-first lg:order-last">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
