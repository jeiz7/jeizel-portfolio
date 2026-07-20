import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";


const skillCategories = [
  {
    title: "Front-End",
    icon: <FaReact size={35} />,
    skills: [
      "React",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind",
    ],
  },

  {
    title: "Back-End",
    icon: <FaNodeJs size={35} />,
    skills: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "REST APIs",
    ],
  },

  {
    title: "Diseño",
    icon: <FaFigma size={35} />,
    skills: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "Branding",
      "UI/UX",
      "Marketing Visual",
    ],
  },

  {
    title: "Herramientas",
    icon: <FaGitAlt size={35} />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Netlify",
      "Agile",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-8 lg:px-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-red-500 tracking-[4px] text-sm">
            02 / HABILIDADES
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-black">
            Tecnologías &
            <br />
            <span className="text-red-500">
              Herramientas
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            Mi experiencia combina desarrollo Front-End, diseño gráfico y
            soluciones empresariales utilizando tecnologías modernas para
            crear productos digitales funcionales, escalables y visualmente atractivos.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="
                group
                bg-white/[0.03]
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-red-500/50
                hover:shadow-[0_0_40px_rgba(255,0,0,0.12)]
                transition-all
                duration-300
              "
            >
              <div className="text-red-500 mb-6">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      text-zinc-400
                      border-b
                      border-white/5
                      pb-2
                    "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}