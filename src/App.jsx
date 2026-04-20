import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  // Configurando ScrollReveal moderno para blocos da nova arquitetura
  useEffect(() => {
    if (window.ScrollReveal) {
      const sr = window.ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 800,
        delay: 100,
        opacity: 0,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
      });

      sr.reveal('.reveal-section', { interval: 100 });
      sr.reveal('.reveal-pop', { scale: 0.95 });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans selection:bg-acid-green selection:text-space-black relative">
      
      {/* Pillar - Lateral Fixa (25%) */}
      <aside className="lg:w-1/4 lg:fixed lg:h-screen lg:flex lg:flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1f1f22] bg-[#09090b]/90 backdrop-blur z-40 px-8 py-10 lg:py-16">
        <Navbar />
      </aside>

      {/* Main Canvas - Conteúdo Dinâmico (75%) */}
      <main className="flex-1 lg:ml-[25%] p-6 md:p-12 lg:p-24 space-y-32 lg:space-y-48">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </main>

    </div>
  );
}

export default App;
