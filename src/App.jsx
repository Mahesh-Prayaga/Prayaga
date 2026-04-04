import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}
export default App;
