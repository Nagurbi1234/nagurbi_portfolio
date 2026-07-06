import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0F172A] text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <h3 className="text-cyan-400 text-xl mb-2">
            Hi, I'm
          </h3>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Nagurbi Bayyavarapu
          </h1>

          <TypeAnimation
            sequence={[
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
            Passionate React & MERN Stack developer who enjoys
            building modern, responsive and user-friendly web
            applications.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition">
              Hire Me
            </button>

            <button className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition">
              Download Resume
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="w-80 h-80 rounded-full bg-cyan-500/20 border-4 border-cyan-500 flex items-center justify-center">

            <span className="text-8xl">
              👨‍💻
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;