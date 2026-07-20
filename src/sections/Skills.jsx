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
      "Tailwind CSS",
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
    title: "Design",
    icon: <FaFigma size={35} />,
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Branding",
      "UI/UX",
      "Visual Marketing",
    ],
  },

  {
    title: "Tools",
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-red-500 tracking-[4px] text-sm uppercase">
            02 / SKILLS
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-black">
            Technologies
            <br />
            <span className="text-red-500">
              & Tools
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            My experience combines Front-End development, graphic design,
            and business solutions using modern technologies to build
            functional, scalable, and visually engaging digital products.
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