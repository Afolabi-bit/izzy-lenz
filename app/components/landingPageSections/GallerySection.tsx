"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/w/w9.jpg",
    title: "Ayomide & Olawole",
    tag: "BLUSHOFLOVE26",
    date: "February, 2026",
    large: true,
  },
  {
    src: "/tc/tc3.jpg",
    title: "Feyisayo & Bonaventure",
    tag: "#feyibona26",
    date: "March, 2026",
  },
  {
    src: "/pa/p3.jpg",
    title: "Ayomide & Olawole",
    tag: "BLUSHOFLOVE26",
    date: "February, 2026",
  },
  {
    src: "/ta/ta4.jpg",
    title: "Ayomide & Olawole",
    tag: "BLUSHOFLOVE26",
    date: "February, 2026",
  },
  {
    src: "/tb/tb1.jpg",
    title: "Feyisayo & Bonaventure",
    tag: "#feyibona26",
    date: "March, 2026",
  },
];

function GalleryItem({ item, priority = false }: any) {
  return (
    <Link href="/portfolio">
      {" "}
      <div className="relative group overflow-hidden rounded-2xl w-full h-full cursor-pointer">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes={item.large ? "50vw" : "(max-width: 768px) 100vw, 25vw"}
          quality={70}
          priority={priority}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 p-5 md:p-8">
            <p className="text-xs text-bg-red italic font-heading mb-1">
              {item.tag}
            </p>
            <h3 className="text-sm md:text-lg font-heading font-bold mb-1">
              {item.title}
            </h3>
            <p className="text-[10px] md:text-xs">{item.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function GallerySection() {
  return (
    <section className="px-10 py-28">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-sm uppercase tracking-widest font-semibold opacity-90 mb-5">
            Featured Works
          </p>
          <h2 className="text-5xl font-heading font-bold text-white tracking-tight">
            Recent <span className="text-bg-red italic">Love Stories</span>
          </h2>
        </div>

        <Link href="/portfolio" className="text-bg-red flex items-center gap-2">
          View all collections <ArrowRight size={16} />
        </Link>
      </div>

      {/* Grid */}
      <div className="w-full h-[670px] flex gap-3">
        {/* Large Image */}
        <div className="w-1/2 h-full">
          <GalleryItem item={images[0]} priority />
        </div>

        {/* Small Grid */}
        <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-3">
          {images.slice(1).map((item, i) => (
            <GalleryItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
