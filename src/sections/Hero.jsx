import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="relative overflow-hidden min-h-screen flex items-center bg-[#0F172A] text-white px-6 pt-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <div>

          <h3 className="text-cyan-400 text-xl mb-2">
            Hi, I'm
          </h3>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Nagurbi Bayyavarapu
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React Developer",
              2000,
              "Frontend Developer",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold text-cyan-400"
          />

          <p className="mt-6 text-gray-300 leading-8 max-w-xl">
            Passionate Full Stack and MERN Stack Developer with a strong
            interest in building responsive, modern, and user-friendly web
            applications. I enjoy solving real-world problems and continuously
            improving my skills by building practical projects and learning new
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/Nagurbi_resume.pdf"
              download
              className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-lg transition duration-300"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex justify-center">

          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] transition-all duration-500">

            <img
              src={profile}
              alt="Nagurbi Bayyavarapu"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;