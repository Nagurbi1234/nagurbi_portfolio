import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
    { name: "HTML5", icon: <FaHtml5 size={45} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={45} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={45} className="text-cyan-300" /> },
    { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
    { name: "Express", icon: <SiExpress size={45} /> },
    { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-600" /> },
    { name: "Git", icon: <FaGitAlt size={45} className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub size={45} /> },
    { name: "Java", icon: <FaJava size={45} className="text-red-500" /> },
    { name: "Python", icon: <SiPython size={45} className="text-yellow-300" /> },
    
  ];

  return (
    <section
      id="skills"
       data-aos="zoom-in"
      className="bg-[#0F172A] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:scale-105 hover:bg-slate-700 transition duration-300"
            >
              {skill.icon}

              <h3 className="mt-4 font-semibold text-lg">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;