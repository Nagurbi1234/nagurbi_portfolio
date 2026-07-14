import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Nagurbi Bayyavarapu
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="/Nagurbi_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-lg transition"
            >
              Resume
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Contact
          </a>

          <a
            href="/Nagurbi_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-cyan-400 hover:bg-slate-800"
          >
            Resume
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;