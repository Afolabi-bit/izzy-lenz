import Image from "next/image";
import InfiniteCarousel from "../InfiniteCarousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/hero1.jpg"
        className="object-cover object-center"
        alt="Hero cinematic view"
        fill
        priority
        quality={100}
      />
      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      {/* Subtle gradient to anchor the bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent sm:via-black/20 sm:w-2/3 md:w-1/2"></div>

      <div className="absolute inset-0 flex flex-col items-start justify-center pl-10 md:pl-20 z-10 text-white ">
        <div className="max-w-lg sm:max-w-xl pt-[50px]">
          <h1 className="text-5xl font-heading font-semibold tracking-tight uppercase mb-6 drop-shadow-lg">
            Every love deserves <br />
            <span className="text-bg-red italic">its story</span>
          </h1>
          <p className="text-md font-light font-raleway tracking-wide text-gray-200 drop-shadow-md mb-8">
            We capture the fleeting moments, stolen glances, and whispered
            promises that make your love story uniquely yours.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3 bg-bg-red border border-bg-red text-white text-xs uppercase tracking-widest hover:bg-hover-red hover:border-hover-red transition-all duration-300 group">
              <Link href="/portfolio" className="flex">
                View Portfolio <ArrowRight size={16} className="rotate-45" />
              </Link>
            </button>
            <button className="px-8 py-3 border border-white text-white text-xs uppercase tracking-widest hover:bg-hover-red hover:border-hover-red transition-all duration-300">
              <Link href="/portfolio">Start Your Story</Link>
            </button>
          </div>

          {/* Metrics Row */}
          <div className="mt-12 flex items-center divide-x divide-white/20 text-white">
            <div className="flex flex-col pr-6 md:pr-8">
              <span className="text-sm md:text-lg tracking-normal mb-1 drop-shadow-md font-curvy">
                500+
              </span>
              <span className="text-[10px] text-gray-200 drop-shadow-md opacity-90 tracking-wide">
                Weddings
              </span>
            </div>
            <div className="flex flex-col px-6 md:px-8">
              <span className="text-sm md:text-lg tracking-normal mb-1 drop-shadow-md font-curvy">
                5
              </span>
              <span className="text-[10px] text-gray-200 drop-shadow-md opacity-90 tracking-wide">
                Years of passion
              </span>
            </div>
            <div className="flex flex-col pl-6 md:pl-8">
              <span className="text-sm md:text-lg tracking-normal mb-1 drop-shadow-md font-curvy">
                20+
              </span>
              <span className="text-[10px] text-gray-200 drop-shadow-md opacity-90 tracking-wide">
                Active team members
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Carousel Advertisement */}
      <InfiniteCarousel />
    </section>
  );
}
