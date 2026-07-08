import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Experience
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Internship and practical experience.
        </p>

        <div className="mt-16 space-y-8">

          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300"
            >
              <h3 className="text-2xl font-bold">
                {item.role}
              </h3>

              <p className="text-cyan-400 mt-2 text-lg">
                {item.company}
              </p>

              <p className="text-gray-400 mt-2">
                {item.duration}
              </p>

              <p className="mt-6 text-gray-300 leading-8">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;