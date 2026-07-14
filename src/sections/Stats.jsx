import {
  FaLaptopCode,
  FaCode,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaLaptopCode size={40} className="text-cyan-400" />,
      number: "5+",
      title: "Projects",
      subtitle: "Completed",
    },
    {
      icon: <FaCode size={40} className="text-cyan-400" />,
      number: "12+",
      title: "Technologies",
      subtitle: "Learned",
    },
    {
      icon: <FaBriefcase size={40} className="text-cyan-400" />,
      number: "2",
      title: "Training",
      subtitle: "& Internships",
    },
    {
      icon: <FaTrophy size={40} className="text-cyan-400" />,
      number: "1",
      title: "Hackathon",
      subtitle: "Project",
    },
  ];

  return (
    <section
      id="journey"
      data-aos="fade-up"
      className="bg-[#0F172A] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
           My Journey So Far 🚀
        </h2>

        <p className="text-center text-gray-400 mb-14">
          A quick snapshot of my learning journey and achievements.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/30 transition duration-300"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold mt-3">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-2">
                {item.subtitle}
              </p>

            </div>
          ))}

        </div>
         <div className="mt-16 text-center max-w-3xl mx-auto">
             <p className="text-lg md:text-xl text-gray-300 leading-8 italic">
                "I enjoy transforming ideas into real-world web applications and continuously
                 improving my skills to become a better Full Stack Developer."
             </p>
          </div>

      </div>
    </section>
  );
}

export default Stats;