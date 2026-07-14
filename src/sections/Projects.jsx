import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AgroBot",
    icon: "🌾",
    subtitle: "AI Powered Agricultural Assistant",
    description:
      "Developed an AI-powered conversational assistant using NLP to provide personalized agricultural guidance for farmers.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "NLP",
    ],
    github: "https://github.com/Nagurbi1234/Major_Project_Agrobot.git",
    live: "",
    category: "🏆 Major Project",
    status: "Completed",
  },

  {
    title: "Smart Suraksha",
    icon: "🛡️",
    subtitle:"IoT-Based Elderly Fall Detection System",
    description:
      "Developed an IoT-based wearable safety device with real-time monitoring and emergency alerts.",
    technologies: ["Arduino", "C++", "IoT"],
    github: "",
    live: "",
    category: "🥈 Hackathon Project",
    status: "Completed",
  },

  {
    title: "PrepMate AI",
    icon: "🤖",
    subtitle: "AI-PoweredInterview Preparation Platform",
    description:
      "An AI-powered interview preparation platform to help students prepare for technical interviews.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    live: "",
    category: "🚀 MERN Stack Project",
    status: "Ongoing",
  },

  {
    title: "Smart Task Planner",
    icon: "📋",
    subtitle: "Task Management Application",
    description:
      "A responsive task management application for organizing daily tasks with a clean and intuitive interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nagurbi1234/Smart_task_planner.git",
    live: "https://smart-task-planner-zeta.vercel.app",
    category: "💻 Frontend Project",
    status: "Completed",
  },

  {
    title: "Notes App",
    icon: "📝",
    subtitle: "Simple & Responsive Notes Manager",
    description:
      "A responsive notes application that allows users to create, edit, search and manage notes efficiently.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "",
    live: "https://notesapp-iota-five.vercel.app/",
    category: "📒 Mini Project",
    status: "Completed",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="bg-[#0F172A] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Some of the projects I've built during my learning journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;