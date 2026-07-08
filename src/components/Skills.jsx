const skills = [
  "Python",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "Git",
  "GitHub",
  "Selenium",
  "BeautifulSoup",
  "Pandas",
  "NumPy",
  "Power BI",
  "MATLAB",
  "Arduino",
  "VLSI"
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Skills
        </h2>

        <p className="text-center text-gray-400 mt-6">
          Technologies and tools I use.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-16">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-8 rounded-xl text-center hover:bg-cyan-500 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;