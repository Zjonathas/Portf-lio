import React from 'react';
import fotoJonathas from '../assets/imgs/Fotominha.jpg';

function About() {
  return (
    <section className="py-16 md:py-24 border-t border-border" id="sobre">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-12">
          Sobre mim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start">
          
          {/* Bio */}
          <div className="space-y-6 text-lg text-text-offset leading-relaxed">
            <p>
              Minha trajetória une <strong className="text-text">Engenharia de Software</strong> e{' '}
              <strong className="text-text">Infraestrutura de Redes</strong>. Comecei no IFRN com o 
              Técnico Integrado em Informática e atualmente curso Tecnologia em Sistemas para Internet 
              na mesma instituição.
            </p>

            <p>
              Na <strong className="text-text">Telecab</strong>, atuo como Analista de Redes V e 
              Supervisor de Suporte. Lidero equipes técnicas e aplico programação para resolver 
              problemas operacionais: automações em Python, dashboards de monitoramento e sistemas 
              internos que otimizam o trabalho da equipe inteira.
            </p>

            <p>
              Fora do trabalho, mantenho um <a href="#projetos" className="link-underline text-text font-medium">homelab</a> com 
              Proxmox, Docker e Zabbix — meu playground para testar arquiteturas e aprender na prática.
            </p>
          </div>

          {/* Photo */}
          <div className="mx-auto md:mx-0">
            <img 
              src={fotoJonathas} 
              alt="Foto de Jonathas Emanuel" 
              className="w-64 h-80 object-cover rounded-lg shadow-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
