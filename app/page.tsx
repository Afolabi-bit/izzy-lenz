import Image from "next/image";
import { ArrowRight } from "lucide-react";
import InfiniteCarousel from "./components/InfiniteCarousel";
import Link from "next/link";
import GallerySection from "./components/landingPageSections/GallerySection";
import SpotlightSection from "./components/landingPageSections/SpotlightSection";
import HeroSection from "./components/landingPageSections/HeroSection";
import TestimonialsSection from "./components/landingPageSections/TestimonialsSection";
import CTASection from "./components/landingPageSections/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
        .carousel-wrapper:hover .animate-slide {
          animation-play-state: paused;
        }
      `}</style>
      <header className="absolute top-0 w-full z-50 flex items-center justify-between px-10 py-8 bg-linear-to-b from-black/80 to-transparent text-white">
        <div className="text-xl tracking-[0.2em] font-light uppercase">
          IzzyLenz
        </div>
        <nav>
          <ul className="flex items-center gap-10 text-xs uppercase tracking-[0.15em]">
            <li className="hover:text-hover-red hover:underline underline-offset-8 transition-colors cursor-pointer">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-hover-red hover:underline underline-offset-8 transition-colors cursor-pointer">
              <Link href="/portfolio">About</Link>
            </li>
            <li className="hover:text-hover-red hover:underline underline-offset-8 transition-colors cursor-pointer">
              <Link href="/portfolio">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <Link href="/portfolio" className="cursor-pointer">
            <button className="px-6 py-3 border border-white text-xs uppercase tracking-widest hover:bg-hover-red hover:border-hover-red hover:text-white transition-all duration-300">
              Book a session
            </button>
          </Link>
        </div>
      </header>
      <main className="bg-black">
        <HeroSection />
        <GallerySection />
        <SpotlightSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
