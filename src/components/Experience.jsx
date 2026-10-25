import React from 'react';

function Experience() {
  const jobs = [
    {
      role: "Analista de Redes V & Supervisor de Suporte",
      company: "Telecab",
      companyNote: "Grupo Telecab / N5 Telecom",
      period: "Atual",
      tasks: [
        "Liderança técnica e gestão de equipe de suporte, do nível I ao avançado.",
        "Desenvolvimento de automações internas em Python para diagnósticos de rede.",
        "Gerenciamento de infraestrutura ISP: provisionamento de ONUs, rotas de failover com MikroTik.",
        "Resolução direta de incidentes críticos em redes corporativas e residenciais."
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 border-t border-border" id="experiencia">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-12">
          Experiência
        </h2>

        <div className="space-y-12">
          {jobs.map((job, idx) => (
            <div key={idx}>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-text">{job.role}</h3>
                  <p className="text-text-offset text-sm">
                    {job.company} <span className="text-border">— {job.companyNote}</span>
                  </p>
                </div>
                <span className="text-accent font-bold text-sm shrink-0">{job.period}</span>
              </div>
              
              <ul className="space-y-2 text-text-offset text-base leading-relaxed">
                {job.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xs">●</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
