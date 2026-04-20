import React from 'react';

function Experience() {
  return (
    <section className="reveal-section flex flex-col" id="experiencia">
      
      {/* Section Header */}
      <div className="flex items-end gap-6 mb-12 border-b-2 border-[#1f1f22] pb-6">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Trajetória Profissional</h2>
        <span className="font-mono text-acid-green font-bold text-xl mb-1">02</span>
      </div>

      <div className="relative border-l-2 border-[#1f1f22] ml-4 md:ml-6 space-y-12 pb-8">
        
        {/* Telecab Experience Item */}
        <div className="relative pl-8 md:pl-12 group">
          {/* Timeline Node */}
          <div className="absolute -left-[9px] top-2 w-4 h-4 bg-space-black border-2 border-high-viz-orange group-hover:bg-high-viz-orange transition-colors"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-high-viz-orange transition-colors">
              Analista de Redes V & Supervisor de Suporte
            </h3>
            <span className="font-mono text-acid-green bg-acid-green/10 px-3 py-1 text-sm mt-2 md:mt-0 w-fit">
              Atualmente
            </span>
          </div>
          
          <p className="text-gray-400 font-mono text-sm mb-6">
            @ Telecab (Grupo Telecab/N5 Telecom)
          </p>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-high-viz-orange mr-3 mt-1">▹</span>
              <p>Liderança técnica e gestão de equipe de suporte (nível I a avançado).</p>
            </li>
            <li className="flex items-start">
              <span className="text-high-viz-orange mr-3 mt-1">▹</span>
              <p>Desenvolvimento de scripts e automações internas utilizando <strong>Python</strong>.</p>
            </li>
            <li className="flex items-start">
              <span className="text-high-viz-orange mr-3 mt-1">▹</span>
              <p>Gerenciamento de infraestrutura de provedor de internet (ISP), incluindo provisionamento de ONU e criação de rotas de failover.</p>
            </li>
            <li className="flex items-start">
              <span className="text-high-viz-orange mr-3 mt-1">▹</span>
              <p>Atuação direta na resolução de problemas complexos de redes corporativas e residenciais.</p>
            </li>
          </ul>

        </div>
        
      </div>
    </section>
  );
}

export default Experience;
