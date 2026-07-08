import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0F172A] text-white px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

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
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold text-cyan-400"
          />

          <p className="mt-6 text-gray-300 leading-8 max-w-xl">
            Passionate Full Stack and MERN StackDeveloper with a strong interest
            in building responsive, modern, and user-friendly web
            applications. I enjoy solving real-world problems and continuously
            improving my skills through projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-lg transition duration-300">
              View Projects
            </button>

            <button className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-lg transition duration-300">
              Download Resume
            </button>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex justify-center">

          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)]">

            <img
              src={profile}
              alt="Nagurbi"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;