import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    if (window.ScrollReveal) {
      const sr = window.ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 50,
        opacity: 0,
        easing: 'cubic-bezier(0.2, 0, 0, 1)'
      });

      sr.reveal('.reveal-section', { interval: 60 });
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;
