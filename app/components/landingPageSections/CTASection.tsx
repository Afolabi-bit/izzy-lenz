import { LuCalendarHeart } from "react-icons/lu";
import { FiMessageCircle } from "react-icons/fi";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white/5 text-white py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top label */}
        <p className="text-sm tracking-[0.2em] uppercase text-gray-400 mb-6">
          Let’s create together
        </p>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
          Your Perfect Day <br />
          Made <span className="text-bg-red italic">Izzy</span>
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
          Every great love story deserves to be told beautifully. Let’s sit down
          together, understand your vision, and craft timeless memories you’ll
          treasure for generations.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/portfolio">
            <button className="flex items-center gap-2 px-8 py-3 bg-bg-red border border-bg-red text-white text-xs uppercase tracking-widest hover:bg-hover-red hover:border-hover-red transition-all duration-300 cursor-pointer group">
              <LuCalendarHeart className="group-hover:translate-x-[-2px] transition-all duration-300" />
              Book a consultation
            </button>
          </Link>

          <a
            href="https://wa.link/yswhaa"
            target="_blank"
            className="flex items-center gap-2 px-8 py-3 border border-white text-white text-xs uppercase tracking-widest hover:bg-hover-red hover:border-hover-red transition-all duration-300 cursor-pointer group"
          >
            <FiMessageCircle className="group-hover:translate-x-[-2px] transition-all duration-300" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 mt-6">
          Usually respond within 2 hours · Available for 2026 dates
        </p>
      </div>
    </section>
  );
}
