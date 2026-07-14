function About() {
  return (
    <section
      id="about"
       data-aos="fade-right"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8">
              I'm <span className="text-cyan-400 font-semibold">Nagurbi Bayyavarapu</span>,
              a passionate MERN Stack and Full Stack Developer with a strong interest
              in building responsive, user-friendly web applications.
              I enjoy solving real-world problems through technology and
              continuously improving my frontend and backend development skills.
              I have recently completed my Bachelor's degree in Artificial
              Intelligence and Data Science while actively building real-world
              projects using the MERN Stack.
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* B.Tech */}
            <div className="bg-slate-800 p-5 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                🎓 B.Tech
              </h4>

              <p className="font-semibold">
                Artificial Intelligence and Data Science
              </p>

              <p className="text-gray-300">
                Malineni Lakshmaiah Women's Engineering College,
                Guntur, Andhra Pradesh
              </p>

              <p className="text-gray-400">
                CGPA: <span className="text-white">8.7</span>
              </p>

              <p className="text-gray-400">
                Graduation Year: 2026
              </p>
            </div>

            {/* Intermediate */}
            <div className="bg-slate-800 p-5 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                📘 Intermediate
              </h4>

              <p className="text-gray-300">
                Kasturba Gandhi Balika Vidyalayam College,
                Nekarikallu, Guntur
              </p>

              <p className="text-gray-400">
                Percentage: <span className="text-white">87.2%</span>
              </p>

              <p className="text-gray-400">
                Passed: 2022
              </p>
            </div>

            {/* SSC */}
            <div className="bg-slate-800 p-5 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                🏫 SSC
              </h4>

              <p className="text-gray-300">
                Kasturba Gandhi Balika Vidyalayam,
                Bellamkonda, Guntur
              </p>

              <p className="text-gray-400">
                Percentage: <span className="text-white">99%</span>
              </p>

              <p className="text-gray-400">
                Passed: 2020
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;