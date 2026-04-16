"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Lazy load carousel (huge win if it's heavy)
const InfiniteCarousel = dynamic(() => import("../InfiniteCarousel"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Optimized Hero Image */}
      <Image
        src="/hero1.jpg"
        alt="Hero cinematic view"
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover object-center"
        // optional if you add blurDataURL
        // placeholder="blur"
        // blurDataURL="data:image/..."
      />

      {/* Combined Overlay (reduced from 3 → 1) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_60%),linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.2)_50%,transparent),radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.7))]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center pl-10 md:pl-20 z-10 text-white">
        <div className="max-w-lg sm:max-w-xl pt-[50px]">
          <h1 className="text-5xl font-heading font-semibold tracking-tight uppercase mb-6 drop-shadow-lg">
            Every love deserves <br />
            <span className="text-bg-red italic">its story</span>
          </h1>

          <p className="text-md font-light font-raleway tracking-wide text-gray-200 mb-8">
            We capture the fleeting moments, stolen glances, and whispered
            promises that make your love story uniquely yours.
          </p>

          {/* CTA Buttons (cleaner DOM) */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/portfolio"
              className="flex items-center gap-2 px-8 py-3 bg-bg-red border border-bg-red text-white text-xs uppercase tracking-widest hover:bg-hover-red hover:border-hover-red transition-all duration-300"
            >
              View Portfolio <ArrowRight size={16} className="rotate-45" />
            </Link>

            <Link
              href="/portfolio"
              className="px-8 py-3 border border-white text-white text-xs uppercase tracking-widest hover:bg-hover-red hover:border-hover-red transition-all duration-300"
            >
              Start Your Story
            </Link>
          </div>

          {/* Metrics */}
          <div className="mt-12 flex items-center divide-x divide-white/20 text-white">
            <div className="flex flex-col pr-6 md:pr-8">
              <span className="text-sm md:text-lg mb-1 font-curvy">500+</span>
              <span className="text-[10px] text-gray-200 opacity-90 tracking-wide">
                Weddings
              </span>
            </div>

            <div className="flex flex-col px-6 md:px-8">
              <span className="text-sm md:text-lg mb-1 font-curvy">5</span>
              <span className="text-[10px] text-gray-200 opacity-90 tracking-wide">
                Years of passion
              </span>
            </div>

            <div className="flex flex-col pl-6 md:pl-8">
              <span className="text-sm md:text-lg mb-1 font-curvy">20+</span>
              <span className="text-[10px] text-gray-200 opacity-90 tracking-wide">
                Active team members
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lazy-loaded carousel */}
      <InfiniteCarousel />
    </section>
  );
}
