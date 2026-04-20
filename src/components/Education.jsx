import React from 'react';

function Education() {
  const educationList = [
    {
      degree: "Tecnologia em Sistemas para Internet",
      institution: "IFRN",
      period: "2026 – 2028",
      status: "Em andamento"
    },
    {
      degree: "Técnico Integrado em Informática",
      institution: "IFRN",
      period: "2021 – 2025",
      status: "Concluído"
    }
  ];

  return (
    <section className="reveal-section flex flex-col pt-12" id="formacao">
      
      {/* Section Header */}
      <div className="flex items-end gap-6 mb-12 border-b-2 border-[#1f1f22] pb-6">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Formação Acadêmica</h2>
        <span className="font-mono text-acid-green font-bold text-xl mb-1">05</span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {educationList.map((item, idx) => (
          <div key={idx} className="group relative bg-[#121214] border-2 border-[#1f1f22] p-8 flex flex-col md:flex-row md:items-center justify-between hover:border-acid-green transition-all duration-300">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-acid-green transition-colors mb-2">
                {item.degree}
              </h3>
              <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
                {item.institution}
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <span className="block font-mono text-acid-green font-bold mb-1">
                {item.period}
              </span>
              <span className="text-xs uppercase font-bold px-2 py-1 bg-space-black border border-[#1f1f22] text-gray-500 group-hover:text-white transition-colors">
                {item.status}
              </span>
            </div>
            
            {/* Corner Decorator */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-acid-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Education;
