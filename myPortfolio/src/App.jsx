import Hero from "./components/Hero";
import  Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

const app = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Projects />
    </>
  );
}

export default app;