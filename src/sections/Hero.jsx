import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const technologies = [
    "React",
    "Angular",
    "Node.js",
    "Figma",
    "Photoshop",
    "UI/UX",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Glow fondo */}
      <div className="absolute pointer-events-none top-40 right-20 h-72 w-72 rounded-full bg-red-600/20 blur-[150px]" />

      <div className="absolute pointer-events-none bottom-20 left-10 h-56 w-56 rounded-full bg-red-500/10 blur-[120px]" />    

      {/* Grid tecnológico sutil */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div className="relative z-10 container mx-auto px-8 lg:px-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Available */}
            <div className="inline-flex items-center gap-2 border border-green-500/20 bg-green-500/10 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

              <span className="text-sm text-green-300">
                Disponiponible para nuevos proyectos
              </span>
            </div>

            <div>
              <span className="text-red-500 tracking-[6px] text-sm">
                HOLA, SOY
              </span>
            </div>

            {/* Nombre */}
            <h1
              className="
                mt-4
                text-6xl
                md:text-8xl
                font-black
                leading-none
                bg-gradient-to-b
                from-white
                via-zinc-300
                to-zinc-500
                bg-clip-text
                text-transparent
              "
            >
              JEIZEL
              <br />
              SAVILLÓN
            </h1>

            {/* Roles */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-lg md:text-xl text-zinc-300">
              <span>Desarrolladora y programadora Front-End</span>

              <span className="text-red-500">•</span>

              <span>Desarrolladora y diseñadora Web</span>

              <span className="text-red-500">•</span>

              <span>Ingeniera en ciencias de la Computación</span>
            </div>

            {/* Descripción */}
            <p className="mt-8 max-w-xl text-gray-400 leading-relaxed text-lg">
              Ingeniera en Ciencias de la Computación especializada en
              desarrollo web, Front-end y creación de experiencias
              digitales modernas. Combino diseño y tecnología para crear
              soluciones funcionales, atractivas y escalables.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {technologies.map((item) => (
                <span
                  key={item}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-sm
                    text-zinc-300
                    hover:border-red-500/50
                    hover:text-white
                    transition
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Botones */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="
                  border
                  border-red-500
                  px-8
                  py-4
                  rounded-xl
                  hover:bg-red-500
                  hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]
                  transition
                "
              >
                Ver Proyectos
              </button>

              <button
                className="
                  border
                  border-white/10
                  px-8
                  py-4
                  rounded-xl
                  hover:border-white
                  hover:bg-white/5
                  transition
                "
              >
                Descargar CV
              </button>

            </div>

            {/* Redes */}
            <div className="flex gap-6 mt-10 text-2xl text-zinc-400">
              <FaGithub className="cursor-pointer hover:text-red-500 transition" />

              <FaLinkedin className="cursor-pointer hover:text-red-500 transition" />
            </div>
          </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Círculos */}
            <div className="absolute h-[450px] w-[450px] rounded-full border border-red-500/40" />

            <div className="absolute h-[550px] w-[550px] rounded-full border border-white/10" />

            {/* Glow detrás */}
            <div className="absolute h-[400px] w-[400px] rounded-full bg-red-600/10 blur-[100px]" />

            <img
              src={profile}
              alt="Jeizel"
              className="
                relative
                z-10
                w-[400px]
                rounded-3xl
                grayscale
                hover:grayscale-0
                hover:scale-[1.02]
                transition-all
                duration-500
                shadow-[0_0_80px_rgba(255,0,0,0.15)]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}