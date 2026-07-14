import { FaLaptopCode, FaBriefcase } from "react-icons/fa";

function Training() {
  return (
    <section
      id="training"
       data-aos="fade-left"
      className="bg-[#0F172A] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Training & Internships
        </h2>

        <p className="text-center text-gray-400 mb-14">
          My learning journey through professional training and internships.
        </p>

        <div className="space-y-10">

          {/* MERN Training */}
          <div className="bg-slate-800 rounded-2xl p-8 border-l-4 border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition">

            <div className="flex items-center gap-4 mb-4">
              <FaLaptopCode className="text-cyan-400 text-3xl" />
              <div>
                <h3 className="text-2xl font-bold">
                  MERN Stack Training
                </h3>
                <p className="text-cyan-400">
                  Grow Tech (Dr. Reddy's Foundation)
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              📅 June 2026 – Present (3 Months Ongoing)
            </p>

            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Learning Full Stack Web Development using the MERN Stack.</li>
              <li>Building modern web applications with React and Node.js.</li>
              <li>Working with Express.js, MongoDB, REST APIs and Git/GitHub.</li>
              <li>Currently developing real-world full stack projects.</li>
            </ul>

          </div>

          {/* Virtual Internship */}
          <div className="bg-slate-800 rounded-2xl p-8 border-l-4 border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition">

            <div className="flex items-center gap-4 mb-4">
              <FaBriefcase className="text-cyan-400 text-3xl" />
              <div>
                <h3 className="text-2xl font-bold">
                  Web Development Virtual Internship
                </h3>
                <p className="text-cyan-400">
                  EliteTech Intern
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              📅 September 2025 – October 2025
            </p>

            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Completed a one-month virtual internship in Web Development.</li>
              <li>Built a responsive landing page using HTML, CSS and JavaScript.</li>
              <li>Developed a product listing page with responsive design.</li>
              <li>Improved frontend development and UI design skills.</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Training;