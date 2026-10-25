import React from 'react';

function Footer() {
  return (
    <footer className="py-16 md:py-20 border-t border-border" id="contato">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* CTA */}
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-6">
          Vamos conversar?
        </h2>
        <p className="text-text-offset text-lg leading-relaxed mb-10 max-w-xl">
          Estou sempre aberto a novas oportunidades, projetos de automação ou uma boa conversa técnica. 
          Pode me encontrar por aqui:
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-16">
          <div>
            <h3 className="text-xs font-bold text-text-offset uppercase tracking-widest mb-2">Social</h3>
            <div className="flex flex-col gap-1">
              <a href="https://github.com/Zjonathas" target="_blank" rel="noreferrer" className="link-underline text-text font-medium text-base">GitHub</a>
              <a href="https://www.linkedin.com/in/zjonathas" target="_blank" rel="noreferrer" className="link-underline text-text font-medium text-base">LinkedIn</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-text-offset uppercase tracking-widest mb-2">Contato</h3>
            <div className="flex flex-col gap-1">
              <a href="mailto:zjonathas92244@gmail.com" className="link-underline text-text font-medium text-base">Email</a>
              <a href="https://api.whatsapp.com/send?phone=553822008400" target="_blank" rel="noreferrer" className="link-underline text-text font-medium text-base">WhatsApp</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-text-offset uppercase tracking-widest mb-2">Localização</h3>
            <p className="text-text-offset text-base">RN, Brasil</p>
            <p className="text-text-offset text-sm">GMT-3</p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border text-sm text-text-offset">
          <p>© 2026 Jonathas Emanuel</p>
          <p>Feito com React, Vite & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
