import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo / Nombre */}
          <div>
            <h3 className="text-2xl font-black">
              J<span className="text-red-500">S</span>
            </h3>

            <p className="mt-2 text-zinc-500 text-sm">
              Front-End Developer · Graphic Designer
            </p>
          </div>

          {/* Navegación */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-red-500 transition">
              About
            </a>

            <a href="#skills" className="hover:text-red-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-red-500 transition">
              Projects
            </a>

            <a href="#experience" className="hover:text-red-500 transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </nav>

          {/* Redes */}
          <div className="flex gap-5 text-xl text-zinc-400">

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Jeizel Savillón. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-zinc-500 text-sm">
            Built with React & Tailwind
            <FaHeart className="text-red-500" />
          </p>

        </div>

      </div>
    </footer>
  );
}