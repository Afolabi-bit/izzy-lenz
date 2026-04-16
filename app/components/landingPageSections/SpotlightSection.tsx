import Image from "next/image";

export default function SpotlightSection() {
  return (
    <section className="py-28 text-white px-10">
      <p className="text-center text-sm uppercase tracking-widest text-bg-red font-semibold drop-shadow-md opacity-90 mb-5">
        weekly spotlight
      </p>
      <h2 className="capitalize text-center text-white font-bold text-2xl md:text-5xl font-heading">
        Photo of the{" "}
        <span className="text-bg-red italic font-semibold ">Week</span>
      </h2>
      <div className="flex gap-20  justify-center h-[650px] mt-12">
        <div className="relative w-1/2 h-full rounded-2xl group overflow-hidden">
          <Image
            src="/spotlight.jpg"
            alt="Spotlight"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center rounded-2xl hover:scale-102 transition-all duration-500 "
            sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%,"
          />
        </div>
        <div className="w-1/2 py-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="size-[50px] rounded-full border-2 border-bg-red/50">
              <Image
                src="/izzy.png"
                alt="izzy"
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-center rounded-full "
                sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%,"
              />
            </div>
            <div>
              {" "}
              <p className="text-[16px] text-white font-bold">Anderson Ezeh</p>
              <p className="text-xs text-white/70">Lead Photographer</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <h2 className="font-heading text-white text-4xl font-bold mb-6">
                "The First Look That Stopped Time"
              </h2>
              <p className="text-base text-white mb-4 leading-loose">
                This moment between Favour & Kenneth at their wedding was pure,
                unscripted magic. As Kenneth turned to see Favour in her gown
                for the first time, the afternoon light caught the tears rolling
                down his cheek. I had exactly one heartbeat to capture this —
                the trembling hands, the overwhelming joy, the world dissolving
                around them.
              </p>
              <p className="text-[15px] text-white/50 leading-relaxed">
                Shot on natural light at golden hour, this image reminds me why
                I do what I do. Some moments don't need direction — they just
                need someone ready to witness them.
              </p>
            </div>
            <div className="relative pl-4 mt-4 py-1">
              <span className="absolute top-0 left-0 w-[2px] h-full bg-bg-red/50"></span>
              <p className="text-base text-white mb-2 leading-tight">
                "Anderson didn't just photograph our wedding — he preserved the
                feeling. Every time we look at this photo, we're right back in
                that moment."
              </p>
              <p className="text-[12px] text-white/50 leading-tight">
                - Favour & Kenneth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
