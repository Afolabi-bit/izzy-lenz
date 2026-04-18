"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  stars: number;
  text: string;
  wedding: string;
  location: string;
};

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: Props) {
  const [centerIndex, setCenterIndex] = useState(0);
  const isHovered = useRef(false);
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered.current) {
        setCenterIndex((prev) => (prev + 1) % total);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [total]);

  const next = () => setCenterIndex((prev) => (prev + 1) % total);
  const prev = () => setCenterIndex((prev) => (prev - 1 + total) % total);

  const getOffset = (i: number) => {
    let offset = i - centerIndex;
    while (offset > total / 2) offset -= total;
    while (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <div
      className="w-full bg-black text-white pt-28 px-6 relative overflow-hidden"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      {/* ✅ h-96 gives enough room so scaled cards don't overflow into the dots */}
      <div className="max-w-7xl mx-auto relative h-100">
        {testimonials.map((t, i) => {
          const offset = getOffset(i);
          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          return (
            <motion.div
              key={t.id}
              className="absolute top-0 left-1/2 w-[85%] md:w-[45%] lg:w-[32%]"
              style={{ translateX: "-50%" }}
              animate={{
                x: offset * 320,
                scale: isCenter ? 1 : 0.8,
                opacity: isCenter ? 1 : isVisible ? 0.3 : 0,
                zIndex: isCenter ? 10 : 1,
                pointerEvents: isCenter ? "auto" : "none",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <div className="mb-4">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <span key={idx} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.role}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {t.wedding} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2
            h-14 w-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl
            hover:bg-white/10 transition-all duration-300 flex items-center justify-center
            text-2xl text-white z-20"
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2
            h-14 w-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl
            hover:bg-white/10 transition-all duration-300 flex items-center justify-center
            text-2xl text-white z-20"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCenterIndex(i)}
            // ✅ initial state prevents collapsed/invisible dots on first render
            initial={{ width: "8px", opacity: 0.4 }}
            animate={{
              width: i === centerIndex ? "32px" : "8px",
              opacity: i === centerIndex ? 1 : 0.4,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ display: "block" }}
            className="h-2 bg-white rounded-full"
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
