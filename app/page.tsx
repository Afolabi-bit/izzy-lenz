import Image from "next/image";
import { ArrowRight } from "lucide-react";
import InfiniteCarousel from "./components/InfiniteCarousel";
import Link from "next/link";
import GallerySection from "./components/landingPageSections/GallerySection";
import SpotlightSection from "./components/landingPageSections/SpotlightSection";
import HeroSection from "./components/landingPageSections/HeroSection";

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
              Portfolio
            </li>
            <li className="hover:text-hover-red hover:underline underline-offset-8 transition-colors cursor-pointer">
              About
            </li>
            <li className="hover:text-hover-red hover:underline underline-offset-8 transition-colors cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <button className="w-8 h-8 flex items-center justify-center hover:scale-110 hover:text-hover-red transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="px-6 py-3 border border-white text-xs uppercase tracking-widest hover:bg-hover-red hover:border-hover-red hover:text-white transition-all duration-300">
            Book a session
          </button>
        </div>
      </header>
      <main className="bg-black">
        <HeroSection />
        <GallerySection />
        <SpotlightSection />
      </main>
    </>
  );
}
