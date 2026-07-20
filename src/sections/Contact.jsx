import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) 
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current?.reset();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-8 lg:px-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-red-500 tracking-[4px] uppercase text-sm">
            06 / Contact
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-black">
            Let's Work
            <br />
            <span className="text-red-500">
              Together
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            I'm always open to freelance opportunities,
            collaborations and exciting projects where I can
            create modern web experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-white/[0.03]
              border
              border-white/10
              rounded-3xl
              p-8
            "
          >

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-red-500 outline-none transition"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-red-500 outline-none transition"
              />

              <input
                name="company"
                placeholder="Company (Optional)"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-red-500 outline-none transition"
              />

              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 resize-none focus:border-red-500 outline-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-red-500
                  hover:bg-red-500
                  hover:shadow-[0_0_35px_rgba(239,68,68,.4)]
                  transition
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {sent && (
                <p className="text-green-400">
                  ✓ Thank you! I'll get back to you soon.
                </p>
              )}

            </form>

          </motion.div>

          {/* Info */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >

            <div className="flex gap-4">

              <FaEnvelope className="text-red-500 text-xl mt-1"/>

              <div>

                <h4 className="font-semibold">
                  Email
                </h4>

                <a
                  href="mailto:jeizel.savillon@gmail.com"
                  className="text-zinc-400 hover:text-red-500 transition"
                >
                  jeizel.savillon@gmail.com
                </a>

              </div>

            </div>

            <div className="flex gap-4">

              <FaMapMarkerAlt className="text-red-500 text-xl mt-1"/>

              <div>

                <h4 className="font-semibold">
                  Location
                </h4>

                <p className="text-zinc-400">
                  Honduras
                </p>

              </div>

            </div>

            <div className="pt-8 border-t border-white/10">

              <h4 className="font-semibold mb-5">
                Connect
              </h4>

              <div className="flex gap-5 text-3xl">

                <a
                  href="https://github.com/YOUR_GITHUB"
                  target="_blank"
                  className="hover:text-red-500 transition"
                >
                  <FaGithub/>
                </a>

                <a
                  href="https://linkedin.com/in/YOUR_LINKEDIN"
                  target="_blank"
                  className="hover:text-red-500 transition"
                >
                  <FaLinkedin/>
                </a>

              </div>

            </div>

            <a
              href="src/assets/resume/Jeizel-Savillon-Resume.pdf"
              download
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                px-6
                py-4
                rounded-xl
                border
                border-white/10
                hover:border-red-500
                hover:text-red-500
                transition
              "
            >

              <FaDownload/>

              Download Resume

            </a>

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-br
                from-red-500/10
                to-transparent
                p-8
              "
            >

              <p className="text-zinc-300 leading-8">
                Currently available for freelance work,
                Front-End development, UI design and creative
                collaborations.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}