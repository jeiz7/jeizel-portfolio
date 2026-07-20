import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    category: "Enterprise",
    title: "Select+ Platform",
    description:
      "Enterprise platform built with React and TypeScript for managing products, orders, users and business operations through modern dashboards and reusable components.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "src/assets/selectplus.png",
    github: "",
    live: "",
  },

  {
    id: "02",
    category: "CRM",
    title: "Shaken Spirit CRM",
    description:
      "Business CRM focused on customer management, projects and internal workflows with a clean and scalable user interface.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "src/assets/shaken-crm.png",
    github: "",
    live: "",
  },

  {
    id: "03",
    category: "Restaurant",
    title: "Lola's Cocina Latina",
    description:
      "Premium restaurant website featuring custom WordPress development, ACF integration, responsive design and engaging user experience.",
    tech: ["WordPress", "PHP", "ACF", "JavaScript"],
    image: "src/assets/lolas.png",
    github: "",
    live: "https://eatlolasnow.com/",
  },

  {
    id: "04",
    category: "Corporate",
    title: "Shaken Spirit Website",
    description:
      "Corporate website focused on branding, modern design and responsive development using WordPress.",
    tech: ["WordPress", "PHP", "CSS", "JavaScript"],
    image: "src/assets/shaken-spirit.png",
    github: "",
    live: "https://shakenspirit.com/",
  },

  {
    id: "05",
    category: "Home Services",
    title: "Handyman Services",
    description:
      "Professional business website optimized for performance, SEO and lead generation with a modern responsive layout.",
    tech: ["WordPress", "PHP", "CSS"],
    image: "src/assets/handyman.png",
    github: "",
    live: "https://handyman.machmedianj.com/",
  },

  {
    id: "06",
    category: "Real Estate",
    title: "Realtor Website",
    description:
      "Real estate website designed to showcase properties through a clean interface and responsive user experience.",
    tech: ["WordPress", "PHP", "JavaScript"],
    image: "src/assets/realtor.png",
    github: "",
    live: "https://realstate.machmedianj.com/",
  },

  {
    id: "07",
    category: "Healthcare",
    title: "Dental Clinic Website",
    description:
      "Modern dental clinic website focused on accessibility, patient engagement and responsive design.",
    tech: ["WordPress", "PHP", "CSS"],
    image: "src/assets/dentist.png",
    github: "",
    live: "https://dentist.machmedianj.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-8 lg:px-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-red-500 tracking-[4px] uppercase text-sm">
            03 / Portfolio
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-black">
            Selected
            <br />
            <span className="text-red-500">
              Projects
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            A selection of enterprise applications, business platforms and
            websites I have designed and developed throughout my professional
            experience.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.04]
                to-white/[0.01]
                hover:border-red-500/50
                hover:shadow-[0_0_40px_rgba(255,0,0,0.12)]
                transition-all
              "
            >

              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-500
                    hover:scale-110
                  "
                />

                <div className="absolute top-4 right-4 text-white/20 text-5xl font-black">
                  {project.id}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">

                <span className="text-xs uppercase tracking-[3px] text-red-500 font-semibold">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        px-3
                        py-1
                        rounded-full
                        border
                        border-white/10
                        text-sm
                        text-zinc-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 items-center">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 font-semibold hover:translate-x-1 transition"
                    >
                      GitHub →
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-white transition"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {!project.github && !project.live && (
                    <span className="text-zinc-500 text-sm">
                      Private Enterprise Project
                    </span>
                  )}

                </div>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}