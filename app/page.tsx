import Image from "next/image";
import { ArrowRight } from "lucide-react";
import InfiniteCarousel from "./components/InfiniteCarousel";
import Link from "next/link";

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
                  View Portfolio <ArrowRight size={16} className="rotate-45" />
                </button>
                <button className="px-8 py-3 border border-white text-white text-xs uppercase tracking-widest hover:bg-hover-red hover:border-hover-red transition-all duration-300">
                  Start Your Story
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

        <section className="px-10 py-28 ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl tracking-wide mb-5">Featured Works</p>
              <h2 className="text-5xl font-heading font-bold tracking-tight  mb-6 drop-shadow-lg">
                Recent{" "}
                <span className="text-bg-red font-semibold italic">
                  Love Stories
                </span>
              </h2>
            </div>
            <div>
              <Link
                href="/portfolio"
                className="text-bg-red flex items-center gap-2"
              >
                View all collections <ArrowRight size={16} className="" />
              </Link>
            </div>
          </div>

          <div className="w-full h-[670px] flex gap-5 overflow-hidden">
            <div className="w-1/2 h-full relative hover:scale-102 transition-all duration-500 rounded-2xl">
              <Image
                src="/w/w9.jpg"
                className="object-cover object-center absolute top-0 left-0 rounded-2xl"
                alt="Ayomide and Olawole"
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-linear-to-b from-transparent to-black/80 z-10 opacity-0 hover:opacity-100 transition-all duration-500 ">
                <div className="absolute bottom-0 left-0 p-10">
                  <p className="text-sm text-bg-red italic font-heading tracking-wide mb-2">
                    The <span className="">BLUSHOFLOVE26</span>
                  </p>
                  <h3 className="text-xl font-heading font-bold tracking-tight  mb-3 drop-shadow-lg">
                    Ayomide & Olawole
                  </h3>
                  <p className="text-sm tracking-wide mb-2">February, 2026</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-5">
              <div className="w-full h-full relative hover:scale-102 transition-all duration-500 ">
                <Image
                  src="/tc/tc3.jpg"
                  className="object-cover object-center absolute top-0 left-0 rounded-2xl"
                  alt="Ayomide and Olawole"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-linear-to-b from-transparent to-black/80 z-10 opacity-0 hover:opacity-100 transition-all duration-500 ">
                  <div className="absolute bottom-0 left-0 p-10">
                    <p className="text-sm text-bg-red italic font-heading tracking-wide mb-2">
                      The <span className="">BLUSHOFLOVE26</span>
                    </p>
                    <h3 className="text-xl font-heading font-bold tracking-tight  mb-3 drop-shadow-lg">
                      Ayomide & Olawole
                    </h3>
                    <p className="text-sm tracking-wide mb-2">February, 2026</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full relative hover:scale-102 transition-all duration-500 ">
                <Image
                  src="/pa/p3.jpg"
                  className="object-cover object-center absolute top-0 left-0 rounded-2xl"
                  alt="Ayomide and Olawole"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-linear-to-b from-transparent to-black/80 z-10 opacity-0 hover:opacity-100 transition-all duration-500 ">
                  <div className="absolute bottom-0 left-0 p-10">
                    <p className="text-sm text-bg-red italic font-heading tracking-wide mb-2">
                      The <span className="">BLUSHOFLOVE26</span>
                    </p>
                    <h3 className="text-xl font-heading font-bold tracking-tight  mb-3 drop-shadow-lg">
                      Ayomide & Olawole
                    </h3>
                    <p className="text-sm tracking-wide mb-2">February, 2026</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full relative hover:scale-102 transition-all duration-500 ">
                <Image
                  src="/ta/ta4.jpg"
                  className="object-cover object-center absolute top-0 left-0 rounded-2xl"
                  alt="Ayomide and Olawole"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-linear-to-b from-transparent to-black/80 z-10 opacity-0 hover:opacity-100 transition-all duration-500 ">
                  <div className="absolute bottom-0 left-0 p-10">
                    <p className="text-sm text-bg-red italic font-heading tracking-wide mb-2">
                      The <span className="">BLUSHOFLOVE26</span>
                    </p>
                    <h3 className="text-xl font-heading font-bold tracking-tight  mb-3 drop-shadow-lg">
                      Ayomide & Olawole
                    </h3>
                    <p className="text-sm tracking-wide mb-2">February, 2026</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full relative hover:scale-102 transition-all duration-500 ">
                <Image
                  src="/tb/tb1.jpg"
                  className="object-cover object-center absolute top-0 left-0 rounded-2xl"
                  alt="Ayomide and Olawole"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-linear-to-b from-transparent to-black/80 z-10 opacity-0 hover:opacity-100 transition-all duration-500 ">
                  <div className="absolute bottom-0 left-0 p-10">
                    <p className="text-sm text-bg-red italic font-heading tracking-wide mb-2">
                      The <span className="">BLUSHOFLOVE26</span>
                    </p>
                    <h3 className="text-xl font-heading font-bold tracking-tight  mb-3 drop-shadow-lg">
                      Ayomide & Olawole
                    </h3>
                    <p className="text-sm tracking-wide mb-2">February, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
