import React from 'react';
import fotoJonathas from '../assets/imgs/Fotominha.jpg';

function About() {
  return (
    <section className="reveal-section flex flex-col pt-12" id="sobre">
      
      {/* Section Header */}
      <div className="flex items-end gap-6 mb-12 border-b-2 border-[#1f1f22] pb-6">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Sobre Mim</h2>
        <span className="font-mono text-acid-green font-bold text-xl mb-1">01</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 items-start">
        {/* Texts */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans">
          <p>
            Sou um profissional focado na interseção entre a <span className="text-white font-bold">Engenharia de Software</span> e a <span className="text-acid-green font-bold bg-acid-green/10 px-1">Infraestrutura de Redes (NetDevOps)</span>. Minha jornada técnica começou cedo, com o curso Técnico Integrado em Informática pelo IFRN, e hoje continuo expandindo minha base acadêmica cursando Tecnologia em Sistemas para Internet (IFRN).
          </p>
          
          <p className="border-l-4 border-high-viz-orange pl-6 py-2 bg-[#121214] opacity-90">
            Atualmente, atuo como <strong>Analista de Redes V e Supervisor de Suporte na Telecab</strong>, onde gerencio equipes técnicas e operações críticas de infraestrutura. Meu grande diferencial e motivação diária é utilizar a programação para resolver problemas reais de operações: automatizo diagnósticos de rede, construo dashboards de monitoramento e desenvolvo sistemas internos que otimizam o fluxo de trabalho de toda a equipe.
          </p>
          
          <p>
            Possuo inglês técnico e facilidade para comunicação e didática.
          </p>
        </div>

        {/* Photo with Brutalist decorations */}
        <div className="relative group mx-auto xl:mx-0">
          <div className="absolute inset-0 border-2 border-acid-green translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6 z-0"></div>
          <img 
            src={fotoJonathas} 
            alt="foto de Jonathas Emanuel" 
            className="relative z-10 w-full max-w-sm xl:max-w-none grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500 border border-[#1f1f22]" 
          />
          {/* Decorator */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-acid-green z-20"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-acid-green z-20"></div>
        </div>
      </div>

    </section>
  );
}

export default About;
