import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Education
        </h2>

        <p className="text-center text-gray-400 mt-4">
          My academic journey.
        </p>

        <div className="mt-16 space-y-8">

          {education.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300"
            >
              <h3 className="text-2xl font-bold">
                {item.degree}
              </h3>

              <p className="text-lg mt-2">
                {item.college}
              </p>

              <p className="text-gray-400 mt-2">
                {item.year}
              </p>

              {item.cgpa && (
                <p className="mt-3 text-cyan-400 font-semibold">
                  CGPA: {item.cgpa}
                </p>
              )}

              {item.percentage && (
                <p className="mt-3 text-cyan-400 font-semibold">
                  Percentage: {item.percentage}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;