import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Feel free to reach out for internships, projects, or collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <a
                href="mailto:karthikpolasi1818@gmail.com"
                className="hover:text-cyan-400"
              >
                karthikpolasi1818@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-2xl" />
              <span>+91 7013166937</span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-cyan-400 text-2xl" />
              <a
                href="https://github.com/karthikpolasi1818-cmyk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-cyan-400 text-2xl" />
              <a
                href="https://www.linkedin.com/in/karthik-polasi-70b40a333/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>

          </div>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-800"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-800"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-800"
            ></textarea>

            <button
              className="bg-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;