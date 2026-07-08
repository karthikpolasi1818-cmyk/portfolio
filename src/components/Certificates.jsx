import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Certifications
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Courses and certifications completed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {certificates.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-xl p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-cyan-400 mt-3">
                {item.organization}
              </p>

              <p className="text-gray-400 mt-3">
                {item.duration}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;