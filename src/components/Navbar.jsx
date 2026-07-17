export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <div>
          <h2 className="font-black text-xl tracking-wider">
            JS
          </h2>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#design" className="hover:text-white transition">
            Design
          </a>
          
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </nav>

        <button className="border border-red-500 px-5 py-2 rounded-lg hover:bg-red-500 transition">
          Let's Talk
        </button>

      </div>
    </header>
  );
}