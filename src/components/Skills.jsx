import React from 'react';

function Skills() {
  const coreSkills = [
    {
      title: "Desenvolvimento (Foco Principal)",
      tags: ["Python", "Django", "Flask", "Streamlit", "JavaScript", "PostgreSQL", "MySQL"],
      color: "border-acid-green",
      textColor: "text-acid-green"
    },
    {
      title: "Infraestrutura & DevOps",
      tags: ["Proxmox", "Docker", "Compose", "Linux", "VMs", "Containers"],
      color: "border-high-viz-orange",
      textColor: "text-high-viz-orange"
    },
    {
      title: "Redes & ISP",
      tags: ["MikroTik (RouterOS/WinBox)", "ONU", "FTTH", "VLANs", "WireGuard"],
      color: "border-blue-400",
      textColor: "text-blue-400"
    },
    {
      title: "Observabilidade",
      tags: ["Zabbix", "Grafana", "Pi-hole", "Tailscale"],
      color: "border-gray-300",
      textColor: "text-gray-300"
    }
  ];

  return (
    <section className="reveal-section flex flex-col" id="skills">
      
      {/* Section Header */}
      <div className="flex items-end gap-6 mb-12 border-b-2 border-[#1f1f22] pb-6">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Ferramentas & Tecnologias</h2>
        <span className="font-mono text-acid-green font-bold text-xl mb-1">03</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coreSkills.map((skill, idx) => (
          <div key={idx} className={`p-6 border-2 ${skill.color} bg-[#121214] flex flex-col hover:bg-[${skill.color}]/5 transition-colors group`}>
            <div className={`font-mono text-xs mb-4 ${skill.textColor}`}>
              &gt; LOAD_MODULE: {skill.title.toUpperCase()}
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">{skill.title}</h3>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              {skill.tags.map((tag, tIdx) => (
                <span key={tIdx} className={`px-3 py-1 text-sm font-bold bg-space-black border ${skill.color} text-gray-300 group-hover:text-white transition-colors`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
