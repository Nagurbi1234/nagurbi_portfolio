import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-cyan-500/30 transition-all duration-300">

      {/* Project Icon */}
      <div className="h-48 bg-slate-700 flex items-center justify-center text-7xl">
        {project.icon}
      </div>

      {/* Project Content */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-cyan-400 mt-1">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-300 mt-4 leading-7">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Category & Status */}
        <div className="flex flex-wrap gap-3 mt-5">

          <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === "Completed"
                ? "bg-green-600 text-white"
                : "bg-yellow-500 text-black"
            }`}
          >
            {project.status}
          </span>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg font-semibold transition"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex justify-center items-center gap-2 border border-cyan-500 py-2 rounded-lg hover:bg-cyan-500 hover:text-black transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;