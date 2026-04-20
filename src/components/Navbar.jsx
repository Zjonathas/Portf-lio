import React from 'react';

function Navbar() {
  const navItems = [
    { label: "00_HOME", href: "#home" },
    { label: "01_SOBRE", href: "#sobre" },
    { label: "02_EXP", href: "#experiencia" },
    { label: "03_STACK", href: "#skills" },
    { label: "04_PROJETOS", href: "#projetos" },
    { label: "05_FORMAÇÃO", href: "#formacao" },
    { label: "06_CONTATO", href: "#contato" },
  ];

  return (
    <div className="flex flex-col h-full uppercase">
      {/* Brand / Logo */}
      <div className="mb-12">
        <h1 className="text-3xl font-black tracking-tighter text-white">
          ZJ<span className="text-acid-green">.</span>C
        </h1>
        <p className="font-mono text-[10px] text-gray-500 mt-1 tracking-[0.2em]">
          CORE_INTERFACE_V4.2
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-4">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a 
                href={item.href} 
                className="group flex items-center gap-4 font-mono text-sm font-bold text-gray-400 hover:text-white transition-colors"
              >
                <span className="tracking-widest">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Connection Status (Bottom) */}
      <div className="hidden lg:block pt-12 border-t border-[#1f1f22]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-acid-green animate-pulse"></div>
          <span className="font-mono text-[10px] text-acid-green">UPLINK_STABLE</span>
        </div>
        <p className="font-mono text-[9px] text-gray-600 leading-tight">
          LATENCY: 12ms<br/>
          PACKET_LOSS: 0%<br/>
          SSH_AUTH: SUCCESS
        </p>
      </div>
    </div>
  );
}

export default Navbar;
