import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section className="px-10 py-28 ">
      <div className="flex items-center justify-between">
        <div>
          <p className=" text-sm uppercase tracking-widest font-semibold drop-shadow-md opacity-90 mb-5">
            Featured Works
          </p>
          <h2 className="text-5xl font-heading font-bold text-white tracking-tight  mb-6 drop-shadow-lg">
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

      <div className="w-full h-[670px] flex gap-3">
        <div className="w-1/2 h-full relative group overflow-hidden rounded-2xl">
          <Image
            src="/w/w9.jpg"
            className="object-cover object-center absolute top-0 left-0 group-hover:scale-102 transition-all duration-500 rounded-2xl"
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
              <p className="text-sm tracking-wide">February, 2026</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-3">
          <div className="w-full h-full relative group overflow-hidden rounded-2xl">
            <Image
              src="/tc/tc3.jpg"
              className="object-cover object-center absolute top-0 left-0 group-hover:scale-102 transition-all duration-500 rounded-2xl"
              alt="Ayomide and Olawole"
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-linear-to-b from-transparent to-black/80 z-10 opacity-0 hover:opacity-100 transition-all duration-500 ">
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-[10px] text-bg-red italic font-heading tracking-wide mb-1">
                  #feyibona26
                </p>
                <h3 className="text-sm font-heading font-bold tracking-tight  mb-1 drop-shadow-lg">
                  Feyisayo & Bonaventure
                </h3>
                <p className="text-[10px] tracking-wide">March, 2026</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full relative group overflow-hidden rounded-2xl">
            <Image
              src="/pa/p3.jpg"
              className="object-cover object-center absolute top-0 left-0 group-hover:scale-102 transition-all duration-500 rounded-2xl"
              alt="Ayomide and Olawole"
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-linear-to-b from-transparent to-black/80 z-10 opacity-0 hover:opacity-100 transition-all duration-500 ">
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-[10px] text-bg-red italic font-heading tracking-wide mb-1">
                  The <span className="">BLUSHOFLOVE26</span>
                </p>
                <h3 className="text-sm font-heading font-bold tracking-tight  mb-1 drop-shadow-lg">
                  Ayomide & Olawole
                </h3>
                <p className="text-[10px] tracking-wide">February, 2026</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full relative group overflow-hidden rounded-2xl">
            <Image
              src="/ta/ta4.jpg"
              className="object-cover object-center absolute top-0 left-0 group-hover:scale-102 transition-all duration-500 rounded-2xl"
              alt="Ayomide and Olawole"
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-linear-to-b from-transparent to-black/80 z-10 opacity-0 hover:opacity-100 transition-all duration-500 ">
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-[10px] text-bg-red italic font-heading tracking-wide mb-1">
                  The <span className="">BLUSHOFLOVE26</span>
                </p>
                <h3 className="text-sm font-heading font-bold tracking-tight  mb-1 drop-shadow-lg">
                  Ayomide & Olawole
                </h3>
                <p className="text-[10px] tracking-wide">February, 2026</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full relative group overflow-hidden rounded-2xl">
            <Image
              src="/tb/tb1.jpg"
              className="object-cover object-center absolute top-0 left-0 group-hover:scale-102 transition-all duration-500 rounded-2xl"
              alt="Ayomide and Olawole"
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-linear-to-b from-transparent to-black/80 z-10 opacity-0 hover:opacity-100 transition-all duration-500 ">
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-[10px] text-bg-red italic font-heading tracking-wide mb-1">
                  #feyibona26
                </p>
                <h3 className="text-sm font-heading font-bold tracking-tight  mb-1 drop-shadow-lg">
                  Feyisayo & Bonaventure
                </h3>
                <p className="text-[10px] tracking-wide ">March, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
