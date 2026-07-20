import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-8 lg:px-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Texto izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-red-500 tracking-[4px] text-sm">
              01 / SOBRE MÍ
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              Desarrollo.
              <br />
              Código.
              <br />
              <span className="text-red-500">
                Soluciones.
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 leading-relaxed text-lg">
              Soy Ingeniera en Ciencias de la Computación especializada
              en desarrollo web, front-end y diseño digital.
            </p>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              Mi experiencia combina el desarrollo Front-End,
              diseño gráfico, branding y creación de soluciones
              empresariales para optimizar procesos y mejorar
              la experiencia de usuario.
            </p>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              He trabajado en desarrollo de sistemas de facturación,
              monitoreo GPS, plataformas, interfaces web, identidad visual,
              automatización de procesos y experiencias digitales
              modernas utilizando tecnologías como React,
              Angular, typescript, next.js y Node.js.
            </p>
          </motion.div>

          {/* Cards derecha */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                Front-End
              </h3>

              <p className="text-zinc-400">
                Desarrollo de interfaces modernas,
                responsivas y enfocadas en experiencia
                de usuario.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                Desarrollo
              </h3>

              <p className="text-zinc-400">
                Creación de identidades visuales,
                piezas gráficas y experiencias
                visualmente atractivas.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                UI/UX
              </h3>

              <p className="text-zinc-400">
                Construcción de marcas sólidas
                mediante diseño estratégico
                y comunicación visual.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                Sistemas
              </h3>

              <p className="text-zinc-400">
                Soluciones empresariales,
                automatización y optimización
                de procesos digitales.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}