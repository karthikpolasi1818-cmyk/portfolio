import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          My Projects
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Some projects I have built.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-cyan-600 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;