import React from 'react';

function Education() {
  const items = [
    {
      degree: "Tecnologia em Sistemas para Internet",
      school: "IFRN",
      period: "2026 – 2028",
      status: "Em andamento"
    },
    {
      degree: "Técnico Integrado em Informática",
      school: "IFRN",
      period: "2021 – 2025",
      status: "Concluído"
    }
  ];

  return (
    <section className="py-16 md:py-24 border-t border-border" id="formacao">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-12">
          Formação
        </h2>

        <div className="space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-8 border-b border-border last:border-b-0 last:pb-0">
              <div>
                <h3 className="text-lg font-semibold text-text">{item.degree}</h3>
                <p className="text-text-offset text-sm">{item.school}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-text-offset text-sm">{item.period}</span>
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  item.status === 'Em andamento' 
                    ? 'text-accent bg-accent/10' 
                    : 'text-text-offset bg-bg-offset'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
