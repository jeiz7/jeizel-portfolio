import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import dashboard from "../assets/dashboard.png";
import profile from "../assets/user-profile.png";
import company from "../assets/company.png";
import email from "../assets/email.png";
import form from "../assets/form.png";
import login from "../assets/login.png";

const showcase = [
  {
    title: "Select+ Dashboard",
    description:
      "Enterprise dashboard designed to manage products, users and business operations with reusable components and responsive layouts.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: dashboard,
  },
  {
    title: "User Profile",
    description:
      "Modern profile interface including account settings, security preferences and responsive user experience.",
    tech: ["React", "TypeScript"],
    image: profile,
  },
  {
    title: "Company Registration",
    description:
      "Multi-step company registration flow with validation, reusable forms and intuitive onboarding.",
    tech: ["React", "Tailwind"],
    image: company,
  },
  {
    title: "Email Verification",
    description:
      "Email verification experience designed for a smooth authentication process.",
    tech: ["React"],
    image: email,
  },
  {
    title: "Dynamic Forms",
    description:
      "Reusable form components with validation, dynamic fields and scalable architecture.",
    tech: ["React Hook Form"],
    image: form,
  },
  {
    title: "Login Experience",
    description:
      "Authentication screens focused on simplicity, accessibility and modern design.",
    tech: ["React", "Tailwind"],
    image: login,
  },
];

export default function UIShowcase() {
  return (
    <section
      id="showcase"
      className="py-32 px-8 lg:px-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-red-500 tracking-[4px] uppercase text-sm">
            04 / Interface Gallery
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-black">
            Product
            <br />
            <span className="text-red-500">
              Interfaces
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            A collection of interfaces designed and developed for enterprise
            platforms, authentication flows and responsive web applications.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
          }}
          spaceBetween={40}
          className="pb-16"
        >
          {showcase.map((item) => (
            <SwiperSlide key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#0d0d0d]
                "
              >
                {/* Browser */}

                <div className="border-b border-white/10 px-6 py-4 flex items-center gap-2">

                  <span className="w-3 h-3 rounded-full bg-red-500" />

                  <span className="w-3 h-3 rounded-full bg-yellow-400" />

                  <span className="w-3 h-3 rounded-full bg-green-500" />

                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    transition
                    duration-700
                    hover:scale-[1.01]
                  "
                />

                <div className="p-10">

                  <h3 className="text-4xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-zinc-400 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">

                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4
                          py-2
                          rounded-full
                          border
                          border-white/10
                          text-sm
                          text-zinc-300
                        "
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}