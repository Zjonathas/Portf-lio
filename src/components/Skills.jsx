import React from 'react';

function Skills() {
  const categories = [
    {
      title: "Desenvolvimento",
      items: ["Python", "Django", "Flask", "Streamlit", "JavaScript", "React", "PostgreSQL", "MySQL"]
    },
    {
      title: "Infraestrutura & DevOps",
      items: ["Linux", "Docker", "Docker Compose", "Proxmox VE", "Git", "CI/CD"]
    },
    {
      title: "Redes & ISP",
      items: ["MikroTik (RouterOS)", "FTTH/ONU", "VLANs", "WireGuard", "TCP/IP", "DNS"]
    },
    {
      title: "Observabilidade",
      items: ["Zabbix", "Grafana", "Pi-hole", "Tailscale"]
    }
  ];

  return (
    <section className="py-16 md:py-24 border-t border-border" id="skills">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-12">
          Ferramentas & Tecnologias
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, iIdx) => (
                  <span 
                    key={iIdx} 
                    className="text-sm text-text bg-bg-offset px-3 py-1.5 rounded-md border border-border hover:border-accent/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
