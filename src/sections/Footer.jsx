import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-8 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Name */}
        <h2 className="text-2xl font-bold text-cyan-400">
          Nagurbi Bayyavarapu
        </h2>

        <p className="mt-2 text-gray-400">
          Aspiring Full Stack Developer
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-6 text-2xl">

          <a
            href="https://github.com/Nagurbi1234"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nagurbi-bayyavarapu-"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bayyavarapunagurbi1914@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-6 pt-5">

          <p className="text-sm text-gray-400">
            © 2026 <span className="text-cyan-400 font-medium">Nagurbi Bayyavarapu</span>. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Built with React • Tailwind CSS • Vite
          </p>

        </div>

        {/* Back To Top */}
        <div className="mt-5">

          <a
            href="#home"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-black p-3 rounded-full transition duration-300 hover:scale-110"
            aria-label="Back to Top"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;