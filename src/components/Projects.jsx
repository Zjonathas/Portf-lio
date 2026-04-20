import React from 'react';

function Projects() {
  const projectsList = [
    {
      title: "NetToolsPro",
      type: "Application",
      stack: "Python, Streamlit",
      description: "Ferramenta web interativa para diagnósticos avançados e testes localizados de rede.",
      impact: "Simplificou o processo de troubleshooting para a equipe técnica, abstraindo a complexidade de testes de rede complexos em uma interface web amigável, garantindo respostas mais rápidas em chamados críticos."
    },
    {
      title: "Docs Hub & Sistema de Detecção",
      type: "Internal Platform",
      stack: "Python, Django, SQL",
      description: "Plataformas internas para controle de rompimentos de rede e gestão centralizada de conhecimento.",
      impact: "Sistemas construídos do zero para automatizar o fluxo de trabalho de times de suporte, melhorando a documentação técnica e o rastreamento em tempo real de incidentes na rede, eliminando processos manuais."
    },
    {
      title: "Arquitetura de Homelab & Self-Hosting",
      type: "Infrastructure",
      stack: "Proxmox, Docker, Zabbix, Grafana, Linux",
      description: "Ambiente próprio de virtualização para orquestração de serviços, monitoramento e infraestrutura.",
      impact: "Gerenciamento de um servidor local (Intel i7, 11GB RAM) focado em eficiência. Decisões arquiteturais envolvem isolar serviços específicos para otimização de recursos (VMs) enquanto outros serviços rodam em containers leves."
    }
  ];

  return (
    <section className="reveal-section flex flex-col" id="projetos">
      
      {/* Section Header */}
      <div className="flex items-end gap-6 mb-12 border-b-2 border-[#1f1f22] pb-6">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Projetos & Automações</h2>
        <span className="font-mono text-acid-green font-bold text-xl mb-1">04</span>
      </div>

      <div className="flex flex-col gap-12">
        {projectsList.map((project, idx) => (
          <article key={idx} className="group relative border-2 border-[#1f1f22] bg-[#09090b] hover:border-acid-green transition-colors duration-300 p-8 md:p-10">
            {/* Corner Decorators */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-acid-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-acid-green opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 border-b border-[#1f1f22] pb-6">
              <div>
                <span className="font-mono text-sm text-high-viz-orange mb-2 block">&lt;{project.type}/&gt;</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-acid-green transition-colors">
                  {project.title}
                </h3>
              </div>
              <span className="font-mono text-sm bg-[#121214] px-4 py-2 border border-[#1f1f22] text-gray-400 text-right">
                {project.stack}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 font-sans">
              <div>
                <h4 className="text-gray-500 uppercase text-sm font-bold tracking-widest mb-3">O que é</h4>
                <p className="text-white text-lg leading-relaxed">{project.description}</p>
              </div>
              <div>
                <h4 className="text-gray-500 uppercase text-sm font-bold tracking-widest mb-3">O Impacto</h4>
                <p className="text-gray-400 text-lg leading-relaxed">{project.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}

export default Projects;
