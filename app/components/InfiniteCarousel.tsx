import { MdOutlineStarRate } from "react-icons/md";

const InfiniteCarousel = () => {
  return (
    <div className="absolute bottom-0 w-full overflow-hidden border-t border-b border-white/10 bg-black/40 backdrop-blur-md py-4 z-20 carousel-wrapper cursor-pointer">
      <div className="flex w-[200%] animate-slide whitespace-nowrap text-xs md:text-sm uppercase tracking-widest text-gray-300">
        {/* Part 1 */}
        <div className="flex w-1/2 items-center justify-around px-4">
          <span>Intimate Ceremonies</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
          <span>Engagements</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
          <span>Bridal Portraits</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
          <span>Preweddings</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
          <span>Weddings</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
        </div>
        {/* Part 2 */}
        <div className="flex w-1/2 items-center justify-around px-4">
          <span>Intimate Ceremonies</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
          <span>Engagements</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
          <span>Bridal Portraits</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
          <span>Preweddings</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
          <span>Weddings</span>
          <MdOutlineStarRate size={14} className="text-bg-red shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
