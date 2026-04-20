import React from 'react';

function Footer() {
  const socialLinks = [
    { label: "GITHUB", href: "https://github.com/Zjonathas" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/zjonathas" },
    { label: "EMAIL", href: "mailto:zjonathas92244@gmail.com" },
    { label: "WHATSAPP", href: "https://api.whatsapp.com/send?phone=5584997031322" },
  ];

  return (
    <footer className="reveal-section border-t-2 border-[#1f1f22] pt-12 pb-24" id="contato">
      <div className="flex flex-col gap-12">
        
        {/* Large Contact Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            VAMOS <br/> <span className="text-acid-green underline decoration-4 underline-offset-8">CONVERSAR?</span>
          </h2>
          
          <div className="font-mono text-gray-500 text-sm space-y-1">
            <p>&gt; LOCATION: RN, BRASIL</p>
            <p>&gt; TIMEZONE: GMT-3</p>
            <p>&gt; STATUS: OPEN_FOR_COLLAB</p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-[#1f1f22] divide-x-2 divide-y-2 md:divide-y-0 divide-[#1f1f22]">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              target="_blank" 
              rel="noreferrer"
              className="group p-6 md:p-10 flex flex-col items-center justify-center gap-4 bg-[#121214] hover:bg-acid-green transition-all duration-300"
            >
              <span className="font-mono text-xs text-gray-500 group-hover:text-space-black transition-colors">
                [RESOLVE_{link.label}]
              </span>
              <span className="font-black text-xl text-white group-hover:text-space-black transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Console info */}
        <div className="flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          <p>© 2026 JONATHAS CARNEIRO // ALL RIGHTS RESERVED</p>
          <p>BUILT_WITH: REACT + VITE + TAILWIND_V4</p>
          <p>ST_DEPLOYED: GITHUB_PAGES</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
