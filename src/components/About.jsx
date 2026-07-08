function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Passionate Developer | Electronics Engineer | Problem Solver
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Profile Section */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-cyan-500 shadow-2xl flex items-center justify-center text-8xl">
              👨‍💻
            </div>
          </div>

          {/* Information */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Polasi Karthik
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              I am currently pursuing my <span className="text-cyan-400 font-semibold">
              Bachelor of Technology in Electronics and Communication Engineering</span>
              at <span className="text-cyan-400 font-semibold">Mahindra University</span>.
              I enjoy building web applications using React, developing Python
              automation tools, web scraping solutions, and exploring Artificial
              Intelligence, Data Analysis, and Full Stack Development.
            </p>

            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">Email</h4>
                <p>karthikpolasi1818@gmail.com</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">Phone</h4>
                <p>+91 7013166937</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">University</h4>
                <p>Mahindra University</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">Degree</h4>
                <p>B.Tech – Electronics & Communication Engineering</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">Current CGPA</h4>
                <p>6.01 / 10.0</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">Intermediate</h4>
                <p>929 / 1000</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">SSC (10th)</h4>
                <p>597 / 600</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">Location</h4>
                <p>Hyderabad, Telangana, India</p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="https://github.com/karthikpolasi1818-cmyk"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/karthik-polasi-70b40a333/"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:karthikpolasi1818@gmail.com"
                className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition"
              >
                Email Me
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;