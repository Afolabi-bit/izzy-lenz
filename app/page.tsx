import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

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
            <li className="hover:text-hover-red transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-hover-red transition-colors cursor-pointer">
              About
            </li>
            <li className="hover:text-hover-red transition-colors cursor-pointer">
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
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
                  <span className="text-xl md:text-5xl tracking-normal mb-1 drop-shadow-md text-bg-red font-curvy">
                    500+
                  </span>
                  <span className="text-[10px] md:text-lg text-gray-200 opacity-90 tracking-wide">
                    Weddings
                  </span>
                </div>
                <div className="flex flex-col px-6 md:px-8">
                  <span className="text-xl md:text-5xl tracking-normal mb-1 drop-shadow-md text-bg-red font-curvy">
                    5
                  </span>
                  <span className="text-[10px] md:text-lg text-gray-200 opacity-90 tracking-wide">
                    Years of passion
                  </span>
                </div>
                <div className="flex flex-col pl-6 md:pl-8">
                  <span className="text-xl md:text-5xl tracking-normal mb-1 drop-shadow-md text-bg-red font-curvy">
                    20+
                  </span>
                  <span className="text-[10px] md:text-lg text-gray-200 opacity-90 tracking-wide">
                    Active team members
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Infinite Carousel Advertisement */}
          <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-md py-4 z-20 carousel-wrapper cursor-pointer">
            <div className="flex w-[200%] animate-slide whitespace-nowrap text-xs md:text-sm uppercase tracking-widest text-gray-300">
              {/* Part 1 */}
              <div className="flex w-1/2 items-center justify-around px-4">
                <span>Intimate Ceremonies</span>
                <Star size={14} className="text-bg-red shrink-0" />
                <span>Engagements</span>
                <Star size={14} className="text-bg-red shrink-0" />
                <span>Bridal Portraits</span>
                <Star size={14} className="text-bg-red shrink-0" />
                <span>Preweddings</span>
                <Star size={14} className="text-bg-red shrink-0" />
                <span>Weddings</span>
                <Star size={14} className="text-bg-red shrink-0" />
              </div>
              {/* Part 2 */}
              <div className="flex w-1/2 items-center justify-around px-4">
                <span>Intimate Ceremonies</span>
                <Star size={14} className="text-bg-red shrink-0" />
                <span>Engagements</span>
                <Star size={14} className="text-bg-red shrink-0" />
                <span>Bridal Portraits</span>
                <Star size={14} className="text-bg-red shrink-0" />
                <span>Preweddings</span>
                <Star size={14} className="text-bg-red shrink-0" />
                <span>Weddings</span>
                <Star size={14} className="text-bg-red shrink-0" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
