import Link from "next/link";

export default function ComingSoon() {
  return (
    <>
      <style>{`
        @keyframes fdin {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a1 { animation: fdin 0.9s ease 0.2s both; }
        .a2 { animation: fdin 0.9s ease 0.4s both; }
        .a3 { animation: fdin 0.9s ease 0.55s both; }
        .a4 { animation: fdin 0.9s ease 0.7s both; }
        .a5 { animation: fdin 0.9s ease 0.85s both; }
        .a6 { animation: fdin 0.9s ease 1s both; }
        .a7 { animation: fdin 0.9s ease 1.15s both; }
      `}</style>

      <div className="relative min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

        {/* Decorative lines */}
        <div className="a1 absolute top-10 left-10 right-10 h-px bg-linear-to-r from-transparent via-bg-red/40 to-transparent" />
        <div className="a1 absolute bottom-10 left-10 right-10 h-px bg-linear-to-r from-transparent via-bg-red/40 to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
          <p className="a1 text-[10px] tracking-[0.35em] uppercase text-white mb-8 font-[Raleway] font-light">
            IzzyLenz · Web Presence
          </p>

          <h1 className="a2 font-[Cormorant_Garamond] text-[clamp(2.2rem,5vw,3.6rem)] font-light text-[#f5f0e8] leading-[1.15] text-center mb-3">
            Your story deserves
            <br />a home <em className="italic text-bg-red">this beautiful.</em>
          </h1>

          <p className="a3 text-[11px] tracking-[0.18em] uppercase text-[#f5f0e8]/40 font-[Raleway] font-extralight mb-8">
            This page is a preview — it could be yours
          </p>

          <div className="a4 w-12 h-px bg-bg-red/50 mb-8" />

          <p className="a5 font-[Cormorant_Garamond] italic text-[1.05rem] font-light text-[#f5f0e8]/50 leading-[1.85] mb-10 max-w-[360px]">
            What you&apos;re looking at is a glimpse of what IzzyLenz could feel
            like online — refined, cinematic, and built to convert the right
            clients. The rest is waiting on one decision.
          </p>

          <div className="a6 flex flex-col items-center gap-3">
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#f5f0e8]/20">
              Your next step
            </p>
            <div className="text-[11px] tracking-[0.15em] uppercase text-bg-red/80 border border-bg-red/30 px-6 py-3 hover:bg-bg-red/8 hover:text-bg-red hover:border-bg-red/60 transition-all duration-300 cursor-default text-center">
              Approve the proposal · Unlock the full build
            </div>
            <p className="a7 font-[Cormorant_Garamond] italic text-[12px] text-[#f5f0e8]/25">
              Every day without it is a client someone else is booking.
            </p>
          </div>

          <Link
            href="/"
            className="a7 mt-14 text-[10px] tracking-[0.3em] uppercase text-[#f5f0e8]/20 hover:text-[#f5f0e8]/50 transition-colors font-[Raleway]"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
