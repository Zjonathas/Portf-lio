import React from 'react';
import fotoJonathas from '../assets/imgs/Fotominha.jpg';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const navLinks = [
    { num: "01", label: "início", href: "#home" },
    { num: "02", label: "sobre", href: "#sobre" },
    { num: "03", label: "projetos", href: "#projetos" },
    { num: "04", label: "contato", href: "#contato" },
  ];

  return (
    <header className="w-full py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        
        {/* Avatar + Nome */}
        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src={fotoJonathas} 
            alt="Jonathas Emanuel" 
            className="w-10 h-10 rounded-full object-cover border-2 border-border" 
          />
          <span className="font-semibold text-text text-base group-hover:text-accent transition-colors">
            Jonathas Emanuel
          </span>
        </a>

        {/* Direita: Nav numerada + Alternador de Tema */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                className="group flex items-baseline gap-1.5 text-sm text-text-offset hover:text-text transition-colors"
              >
                <span className="text-accent font-bold text-xs">{link.num}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}

export default Navbar;
