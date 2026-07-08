function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center"
    >
      <div className="text-center">

        <h2 className="text-2xl text-cyan-400">
          Hello, I'm
        </h2>

        <h1 className="text-6xl font-bold mt-3">
          Polasi Karthik
        </h1>

        <h3 className="text-2xl mt-4 text-gray-300">
          Electronics & Communication Engineer
        </h3>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-400">
          Passionate about Python, React, AI, Web Scraping,
          Data Analysis and Full Stack Development.
        </p>

        <div className="mt-10 flex justify-center gap-6">

          <button
            className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600"
          >
            Download Resume
          </button>

          <button
            className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500"
          >
            Contact Me
          </button>

        </div>

      </div>
    </section>
  )
}

export default Hero