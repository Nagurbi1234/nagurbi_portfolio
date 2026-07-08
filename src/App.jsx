import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Training from "./sections/Training";

function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training/>
    </div>
  );
}

export default App;