import Image from "next/image";

export default function SpotlightSection() {
  return (
    <section className="py-28 px-10">
      <p className="text-center text-sm uppercase tracking-widest text-bg-red font-semibold drop-shadow-md opacity-90 mb-10">
        weekly spotlight
      </p>
      <h2 className="capitalize text-center font-bold text-2xl md:text-5xl font-heading">
        Photo of the{" "}
        <span className="text-bg-red italic font-semibold ">Week</span>
      </h2>
      <div className="flex gap-14  justify-center h-[550px] mt-12">
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
        <div className="w-1/2">
          <div className="flex items-center gap-4">
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
              <p className="text-[16px] font-bold">Anderson Ezeh</p>
              <p className="text-xs text-white/70">Lead Photographer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
