import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import DesignGallery from "./sections/DesignGallery";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignGallery />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;