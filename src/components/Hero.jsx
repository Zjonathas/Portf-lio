import React from 'react';

function Hero() {
  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-32" id="home">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Kicker */}
        <p className="text-accent font-bold text-sm uppercase tracking-widest mb-6">
          Olá, meu nome é Jonathas
        </p>

        {/* Título editorial serifado */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text leading-[1.05] mb-10">
          Eu construo software<br />e redes.
        </h1>

        {/* Bio curta, tipografia leve */}
        <p className="text-xl sm:text-2xl text-text-offset leading-relaxed max-w-2xl">
          Sou desenvolvedor de software e especialista em infraestrutura de redes na{' '}
          <a href="#experiencia" className="link-underline text-text font-medium">Telecab</a>. 
          Automação operacional, plataformas internas e engenharia NetDevOps — transformo 
          problemas reais em{' '}
          <a href="#projetos" className="link-underline text-text font-medium">soluções práticas</a>.
        </p>

      </div>
    </section>
  );
}

export default Hero;
