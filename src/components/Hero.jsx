import React from 'react';

function Hero() {
  return (
    <section className="reveal-section flex flex-col justify-center min-h-[85vh]" id="home">
      
      {/* Label Monospaced */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-1 bg-acid-green"></div>
        <span className="font-mono text-acid-green uppercase tracking-widest text-sm font-bold">
          System Status: Online
        </span>
      </div>

      {/* Título Massivo (Inter Black) */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight tracking-tighter mb-6">
        Jonathas Emanuel <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-white">Medeiros Carneiro</span>
      </h1>

      {/* Subtítulo Tecnológico */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-8 border-l-4 border-high-viz-orange pl-6">
        Desenvolvedor de Software & <br/> 
        Especialista em Infraestrutura
      </h2>

      {/* Texto de Apoio */}
      <p className="max-w-2xl text-lg text-gray-400 mb-12 leading-relaxed">
        Criando ferramentas de automação, sistemas internos e arquiteturas de rede escaláveis. 
        Transformo gargalos operacionais em soluções eficientes através de código e engenharia de redes.
      </p>

      {/* Botões Brutalistas (Ghost / Filled sem raio) */}
      <div className="flex flex-col sm:flex-row gap-6">
        <a href="#projetos" className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold text-space-black bg-acid-green border-2 border-acid-green hover:bg-transparent hover:text-acid-green transition-all duration-200">
          <span className="mr-2">&gt;_</span> VER_PROJETOS
        </a>
      </div>

    </section>
  );
}

export default Hero;
