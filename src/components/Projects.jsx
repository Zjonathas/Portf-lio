import React from 'react';

function Projects() {
  const projects = [
    {
      title: "NetToolsPro",
      description: "Ferramenta web interativa para diagnósticos avançados e testes de conectividade de rede. Simplificou troubleshooting para a equipe técnica, abstraindo comandos complexos em uma interface amigável.",
      tags: ["Python", "Streamlit", "Redes"],
      color: "bg-teal-600"
    },
    {
      title: "Docs Hub & Sistema de Detecção",
      description: "Plataforma interna para controle de rompimentos de rede e gestão centralizada do conhecimento técnico. Automatizou o fluxo de rastreamento de incidentes, eliminando planilhas manuais.",
      tags: ["Python", "Django", "SQL"],
      color: "bg-indigo-700"
    },
    {
      title: "Homelab & Self-Hosting",
      description: "Ambiente próprio de virtualização com Proxmox, Docker, Zabbix e Grafana. Servidor focado em eficiência de recursos, isolamento de serviços e monitoramento com alertas em tempo real.",
      tags: ["Proxmox", "Docker", "Linux", "Grafana"],
      color: "bg-amber-700"
    }
  ];

  return (
    <section className="py-16 md:py-24 border-t border-border" id="projetos">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
          Projetos
        </h2>
        <p className="text-text-offset text-lg mb-12 max-w-xl">
          Soluções que construí para resolver problemas práticos de infraestrutura e operações.
        </p>

        {/* Grid de cards estilo mxb.dev featured posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <article 
              key={idx} 
              className={`${project.color} relative rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between min-h-[280px] group shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer`}
            >
              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-medium text-white/90 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
