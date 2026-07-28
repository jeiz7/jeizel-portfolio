import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#design", label: "Design" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <h2 className="font-black text-xl tracking-wider text-white">
            JS
          </h2>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="
              hidden
              md:inline-flex
              items-center
              border
              border-red-500
              px-5
              py-2
              rounded-lg
              hover:bg-red-500
              hover:text-white
              transition
              duration-300
            "
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              md:hidden
              text-white
              text-3xl
            "
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE MENU
      ========================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[999]
              bg-black/90
              backdrop-blur-2xl
              md:hidden
            "
          >
            <motion.div
              initial={{ y: -30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.98 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
                h-full
                flex
                flex-col
                justify-center
                items-center
                px-8
                relative
              "
            >
              {/* Close Button */}

              <button
                onClick={() => setMenuOpen(false)}
                className="
                  absolute
                  top-7
                  right-6
                  text-white
                  text-4xl
                  hover:text-red-500
                  transition
                "
              >
                <HiX />
              </button>

              {/* Logo */}

              <h2 className="absolute top-8 left-6 text-xl font-black tracking-wider">
                JS
              </h2>

              {/* Navigation */}

              <nav className="flex flex-col items-center gap-8">

                {links.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="
                      text-3xl
                      font-semibold
                      text-zinc-300
                      hover:text-red-500
                      transition
                    "
                  >
                    {link.label}
                  </motion.a>
                ))}

              </nav>

              {/* CTA */}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-14
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-red-500
                  px-8
                  py-4
                  rounded-xl
                  hover:bg-red-500
                  transition
                  duration-300
                "
              >
                Let's Talk
              </a>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}