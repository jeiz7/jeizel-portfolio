import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 — Present",
    duration: "1+ Year",
    title: "Front-End Developer",
    company: "MACHMEDIA",
    description:
      "Building modern enterprise web applications using React, TypeScript and contemporary front-end technologies, focusing on scalable interfaces, reusable components and exceptional user experiences.",
  },

  {
    period: "2024 — 2025",
    duration: "1 Year",
    title: "Front-End Developer",
    company: "TiviTrace",
    description:
      "Designed and developed responsive web and mobile interfaces, enterprise dashboards, branding assets and digital experiences for business solutions.",
  },

  {
    period: "2024",
    duration: "Internship",
    title: "Software Development Intern",
    company: "TiviTrace",
    description:
      "Developed websites, landing pages, digital catalogs and marketing materials while supporting software solutions for business clients.",
  },

  {
    period: "2021",
    duration: "Project",
    title: "Mobile Application Developer",
    company: "Honduras Digital Challenge",
    description:
      "Collaborated on the development of a citizen-focused mobile application, contributing to documentation, QA testing and functional validation.",
  },

  {
    period: "Freelance",
    duration: "Ongoing",
    title: "Founder & UI Designer",
    company: "The Goat Designs",
    description:
      "Creating visual identities, websites and custom digital solutions while combining UI design with front-end development.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-8 lg:px-20 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24"
        >
          <span className="text-red-500 tracking-[4px] uppercase text-sm">
            05 / Experience
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-black">
            Professional
            <br />
            <span className="text-red-500">
              Journey
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            My experience combines front-end development, enterprise software,
            UI design and digital products focused on delivering scalable,
            modern and user-centered solutions.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          {experiences.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              className="relative pl-20 pb-16"
            >

              {/* Circle */}

              <div
                className="
                  absolute
                  left-0
                  top-1
                  w-8
                  h-8
                  rounded-full
                  border-2
                  border-red-500
                  bg-[#0a0a0a]
                "
              />

              {/* Top */}

              <div className="flex flex-wrap items-center justify-between gap-4">

                <span className="text-red-500 font-semibold tracking-wide">
                  {item.period}
                </span>

                <span
                  className="
                    px-4
                    py-1.5
                    rounded-full
                    border
                    border-red-500/30
                    bg-red-500/10
                    text-red-400
                    text-sm
                  "
                >
                  {item.duration}
                </span>

              </div>

              <h3 className="mt-4 text-3xl font-bold">
                {item.title}
              </h3>

              <h4 className="mt-2 text-zinc-400 font-medium">
                {item.company}
              </h4>

              <p className="mt-5 text-zinc-500 leading-8 max-w-3xl">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}