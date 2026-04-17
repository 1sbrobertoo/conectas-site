import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFC] font-sans text-[#1A1A1A] selection:bg-rose-100 selection:text-rose-900">
      {/* Sanity-inspired Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-lg leading-none">C</span>
              </div>
              <span className="font-bold text-xl tracking-[-0.03em] text-[#1A1A1A]">Conectas</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#666666]">
              <Link href="#sobre" className="hover:text-[#1A1A1A] transition-colors">Produtos</Link>
              <Link href="#solucoes" className="hover:text-[#1A1A1A] transition-colors">Soluções</Link>
              <Link href="#clientes" className="hover:text-[#1A1A1A] transition-colors">Empresa</Link>
              <Link href="#contato" className="hover:text-[#1A1A1A] transition-colors">Recursos</Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 text-[14px] font-semibold text-[#666666] hover:text-[#1A1A1A] transition-colors">
              Log in
            </button>
            <Link 
              href="/login" 
              className="inline-flex items-center justify-center bg-[#F03E2F] text-white px-6 py-2.5 rounded-full text-[14px] font-bold hover:bg-[#D63528] active:scale-95 transition-all shadow-lg shadow-rose-500/20"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero: Bold and Impactful */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-[120px]" />
          <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-[#F7F7F7] border border-[#EEEEEE] rounded-full px-4 py-1.5 mb-10 animate-fade-in">
            <span className="text-[12px] font-bold text-[#666666] uppercase tracking-wider">Conectas AI is now in Beta</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-[#1A1A1A] leading-[0.95] mb-10 max-w-5xl tracking-[-0.05em]">
            Relações que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F03E2F] to-[#7B2CBF]">conectam</span> dados a decisões.
          </h1>
          
          <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mb-14 leading-relaxed font-medium tracking-[-0.02em]">
            A primeira plataforma de Stakeholder Mapping que une inteligência artificial e análise regulatória profunda para o novo mercado brasileiro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/login" className="bg-[#1A1A1A] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-black/10">
              Começar agora
            </Link>
            <button className="bg-white border-2 border-[#EBEBEB] text-[#1A1A1A] px-10 py-5 rounded-2xl font-bold text-lg hover:border-[#CCCCCC] transition-all">
              Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid: Sanity Card Style */}
      <section className="py-32 px-6 bg-white border-t border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] leading-tight">
              Uma nova arquitetura para <br />
              <span className="text-[#666666]">Impact Investing e Public Affairs.</span>
            </h2>
            <p className="text-[#666666] text-xl font-medium leading-relaxed max-w-md pb-2">
              Não apenas dados. Estrutura. Flexibilidade total para moldar suas estratégias de influência e governança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Public Affairs v3', desc: 'Sua estratégia legislativa como código. Monitoramento em tempo real com alertas de risco.', icon: '⚡' },
              { title: 'Stakeholder Graph', desc: 'Mapeie conexões que outros ignoram. Visualize influências e pontes institucionais.', icon: '🕸️' },
              { title: 'Impact Engine', desc: 'Transforme ESG em retorno financeiro real através de ativos sociais estruturados.', icon: '💎' }
            ].map((feature, i) => (
              <div key={i} className="group relative p-10 rounded-[32px] bg-[#F9F9F9] hover:bg-white border border-[#F0F0F0] hover:border-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-[-0.02em]">{feature.title}</h3>
                <p className="text-[#666666] font-medium leading-relaxed mb-8">{feature.desc}</p>
                <div className="h-1.5 w-0 group-hover:w-full bg-[#1A1A1A] transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section: Detailed Usability */}
      <section className="py-32 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <span className="text-[#F03E2F] font-bold text-sm uppercase tracking-widest">Usabilidade sem compromisso</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95]">
                Desenhado para o <br /> decision-maker moderno.
              </h2>
              <p className="text-[#999999] text-xl font-medium leading-relaxed">
                Interfaces limpas, dashboards intuitivos e exportações instantâneas. Reduzimos o ruído para você focar no que importa: o impacto.
              </p>
              <div className="pt-6">
                <Link href="/login" className="inline-flex items-center gap-2 bg-[#333333] hover:bg-[#444444] px-8 py-4 rounded-full font-bold transition-all">
                  Explorar a plataforma <span>→</span>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full aspect-square bg-gradient-to-br from-[#F03E2F] to-[#7B2CBF] rounded-[40px] rotate-3 opacity-20 absolute inset-0 blur-3xl" />
              <div className="relative bg-[#262626] rounded-3xl p-8 border border-[#333333] shadow-2xl">
                {/* Mock UI Elements */}
                <div className="space-y-4">
                  <div className="h-4 w-1/3 bg-[#333333] rounded-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-[#333333] rounded-2xl animate-pulse" />
                    <div className="h-32 bg-[#333333] rounded-2xl" />
                  </div>
                  <div className="h-4 w-full bg-[#333333] rounded-full" />
                  <div className="h-4 w-3/4 bg-[#333333] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: Clean & Professional */}
      <footer className="bg-white py-24 px-6 border-t border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-[#1A1A1A]">Conectas</span>
            </Link>
            <p className="max-w-xs text-[#666666] font-medium leading-relaxed">
              Transformando a complexidade em clareza estratégica.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#999999]">Plataforma</h4>
              <ul className="space-y-4 text-[14px] font-semibold">
                <li><Link href="#" className="hover:text-rose-600 transition-colors">Funcionalidades</Link></li>
                <li><Link href="#" className="hover:text-rose-600 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-rose-600 transition-colors">Suporte</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#999999]">Empresa</h4>
              <ul className="space-y-4 text-[14px] font-semibold">
                <li><Link href="#" className="hover:text-rose-600 transition-colors">Sobre</Link></li>
                <li><Link href="#" className="hover:text-rose-600 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-rose-600 transition-colors">Contato</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-[#F0F0F0] flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[#999999] text-[13px] font-medium">© 2026 Conectas Consultoria de Impacto. São Paulo, Brasil.</p>
          <div className="flex gap-8 text-[13px] font-bold">
            <Link href="#" className="hover:text-[#1A1A1A] transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-[#1A1A1A] transition-colors">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
