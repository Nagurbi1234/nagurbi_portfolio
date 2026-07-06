import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;