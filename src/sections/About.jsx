import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-8 lg:px-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-red-500 tracking-[4px] text-sm uppercase">
              01 / ABOUT ME
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              Development.
              <br />
              Code.
              <br />
              <span className="text-red-500">
                Solutions.
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 leading-relaxed text-lg">
              I'm a Computer Science Engineer specializing in web development,
              Front-End engineering, and digital design.
            </p>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              My experience combines Front-End development,
              graphic design, branding, and business solutions
              to optimize processes and create exceptional
              user experiences.
            </p>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              I've worked on billing systems, GPS monitoring platforms,
              web applications, user interfaces, visual identity,
              process automation, and modern digital experiences
              using technologies such as React, Angular,
              TypeScript, Next.js, and Node.js.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                Front-End Development
              </h3>

              <p className="text-zinc-400">
                Building modern, responsive interfaces
                focused on performance and user experience.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                Graphic Design
              </h3>

              <p className="text-zinc-400">
                Creating visual identities,
                marketing assets, and engaging
                digital experiences.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                UI/UX Design
              </h3>

              <p className="text-zinc-400">
                Designing intuitive interfaces
                through strategic thinking and
                user-centered design.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition">
              <h3 className="text-xl font-semibold mb-3">
                Business Solutions
              </h3>

              <p className="text-zinc-400">
                Developing digital solutions,
                process automation, and scalable
                systems for businesses.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}