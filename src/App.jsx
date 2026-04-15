import { BackgroundParticles } from "./components/BackgroundParticles";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-neon-blue selection:text-black">
      {/* Background Layer */}
      <BackgroundParticles />

      {/* Foreground Content Filter Layer if needed (gradient overlays) */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-80" />

      {/* Main Layout */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
