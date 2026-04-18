import { FaDesktop } from "react-icons/fa";

export default function MobilePlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh p-8 text-center bg-black text-white select-none lg:hidden">
      <div className="mb-8 p-6 bg-zinc-900/50 rounded-full shadow-2xl border border-zinc-800 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-red-500/10 blur-xl"></div>
        <FaDesktop className="w-16 h-16 text-zinc-300 relative z-10" />
      </div>
      <h1 className="text-3xl font-heading font-bold mb-5 tracking-tight">
        Desktop Experience
      </h1>
      <p className="text-zinc-400 max-w-sm font-sans text-lg leading-relaxed">
        The IZZYLENZ portfolio is currently best viewed on a wider screen.
        Please switch to a desktop or laptop computer.
      </p>

      <div className="mt-16 flex items-center gap-2">
        <span className="h-px w-12 bg-zinc-800"></span>
        <span className="text-xs text-zinc-500 font-curvy tracking-widest uppercase">
          Mobile optimization in progress
        </span>
        <span className="h-px w-12 bg-zinc-800"></span>
      </div>
    </div>
  );
}
