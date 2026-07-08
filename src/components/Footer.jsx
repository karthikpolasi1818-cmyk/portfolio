function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Polasi Karthik
            </h2>

            <p className="mt-4 leading-7">
              Electronics & Communication Engineering Student passionate
              about Python, React, Artificial Intelligence, Web Scraping,
              Automation and Full Stack Development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              <li><a href="#about" className="hover:text-cyan-400">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
              <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
              <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Connect
            </h3>

            <div className="mt-4 space-y-3">

              <p>
                📧
                <a
                  href="mailto:karthikpolasi1818@gmail.com"
                  className="ml-2 hover:text-cyan-400"
                >
                  karthikpolasi1818@gmail.com
                </a>
              </p>

              <p>📱 +91 7013166937</p>

              <p>
                💻
                <a
                  href="https://github.com/karthikpolasi1818-cmyk"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 hover:text-cyan-400"
                >
                  GitHub
                </a>
              </p>

              <p>
                💼
                <a
                  href="https://www.linkedin.com/in/karthik-polasi-70b40a333/"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </p>

            </div>
          </div>

        </div>

        <hr className="border-slate-700 my-8" />

        <p className="text-center text-gray-500">
          © {year} Polasi Karthik. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;