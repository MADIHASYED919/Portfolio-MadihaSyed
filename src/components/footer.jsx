import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-green-500/20">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-green-400">
          Madiha Syed
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/MADIHASYED919"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:scale-110 transition hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]
transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/madiha-syed-b59142368/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:scale-110 transition hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]
transition"
          >
            <FaLinkedin />
          </a>

          {/* <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-green-400 hover:scale-110 transition"
          >
            <FaEnvelope />
          </a> */}

        </div>

        {/* Footer Text */}
        <p className="text-gray-400 text-sm text-center">
          Built with React & Tailwind CSS
        </p>
  <p className="text-gray-400 text-sm text-center flex items-center gap-2">
  Made with <AiFillHeart className="heart-beat text-red-500" /> in India
</p>

        <p className="text-gray-500 text-sm">
          © Madiha Syed. All rights reserved.
        </p>

      </div>

    </footer>
  );
}