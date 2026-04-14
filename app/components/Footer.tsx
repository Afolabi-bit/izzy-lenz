import { GiHeartBeats } from "react-icons/gi";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import { SiPinterest } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-20">
          {/* Brand */}
          <div>
            <div className="text-lg tracking-[0.35em] font-light uppercase mb-6">
              IzzyLenz
            </div>

            <p className=" leading-relaxed max-w-sm mb-8">
              Award-winning wedding photography studio based in Akure, capturing
              love stories across Nigeria since 2020.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 ">
              <a href="#" className="group transition" aria-label="Instagram">
                <FiInstagram className="size-5 group-hover:text-bg-red group-hover:scale-110 transition-all duration-300" />
              </a>

              <a href="#" className="group transition" aria-label="Pinterest">
                <SiPinterest className="size-5 group-hover:text-bg-red group-hover:scale-110 transition-all duration-300" />
              </a>

              <a href="#" className="group transition" aria-label="Facebook">
                <FiFacebook className="size-5 group-hover:text-bg-red group-hover:scale-110 transition-all duration-300" />
              </a>

              <a href="#" className="group transition" aria-label="YouTube">
                <FiYoutube className="size-5 group-hover:text-bg-red group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Studio Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest  mb-6">
              Studio
            </h2>

            <ul className="space-y-3 ">
              {["Portfolio", "About", "Contact", "Investments"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative hover:text-bg-red transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-bg-red after:transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm uppercase tracking-widest  mb-6">Contact</h2>

            <ul className="space-y-3 ">
              <li>Akure, Nigeria</li>
              <li className="hover:text-white transition cursor-pointer">
                hello@izzylenz.com
              </li>
              <li>+234 XXX XXX XXXX</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-xs ">
          <p>© {new Date().getFullYear()} IzzyLenz. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <p className="flex items-center">
              Built with <GiHeartBeats className="text-bg-red size-4 mx-1" /> by
              <a
                href="https://afolabijoseph.vercel.app"
                target="_blank"
                className="underline ml-1 underline-offset-4 hover:text-bg-red transition uppercase"
              >
                Fenigma
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
