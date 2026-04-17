import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1A1A1A] selection:bg-red-100 selection:text-red-900">
      {/* Navigation (Sanity.io Style) */}
      <nav className="fixed top-0 w-full z-[100] bg-white border-b border-[#F0F0F0]">
        <div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 group">
              {/* Use the logo provided by the user */}
              <img 
                src="/Conectas Logo.png" 
                alt="Conectas Logo" 
                className="h-8 w-auto" 
                onError={(e) => {
                  // Fallback to text if image fails (e.g. not in public folder yet)
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-bold text-xl tracking-tight text-[#1A1A1A]">Conectas</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#666666]">
              <Link href="#" className="hover:text-black transition-colors">Produtos</Link>
              <Link href="#" className="hover:text-black transition-colors">Soluções</Link>
              <Link href="#" className="hover:text-black transition-colors">Empresa</Link>
              <Link href="#" className="hover:text-black transition-colors">Recursos</Link>
              <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex px-4 py-2 text-[14px] font-bold text-[#1A1A1A] hover:bg-gray-50 rounded-lg transition-colors">
              Log in
            </button>
            <Link 
              href="/login" 
              className="inline-flex items-center justify-center bg-[#F03E2F] text-white px-6 py-2.5 rounded-lg text-[14px] font-bold hover:bg-[#D63528] active:scale-[0.98] transition-all shadow-sm"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section: Minimalist & High Contrast */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-[#F7F7F7] border border-[#EEEEEE] rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="text-[12px] font-bold text-[#666666] uppercase tracking-wider">Conectas Enterprise v3.0</span>
            <div className="w-1 h-1 rounded-full bg-[#F03E2F]" />
          </div>
          
          <h1 className="text-[56px] md:text-[92px] font-black text-[#1A1A1A] leading-[0.95] mb-8 max-w-[1000px] tracking-[-0.04em]">
            A base de dados para o seu <span className="text-[#F03E2F]">Impacto.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#666666] max-w-2xl mb-12 leading-relaxed font-medium tracking-tight">
            Navegue no cenário regulatório, mapeie stakeholders e direcione capital com a inteligência que o novo mercado brasileiro exige.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/login" className="bg-[#1A1A1A] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-black transition-all">
              Começar Agora
            </Link>
            <button className="bg-white border border-[#EBEBEB] text-[#1A1A1A] px-10 py-5 rounded-xl font-bold text-lg hover:border-[#CCCCCC] transition-all">
              Ver Demonstração
            </button>
          </div>
        </div>

        {/* Subtle Visual Element (like Sanity's grid/blobs) */}
        <div className="mt-20 max-w-5xl mx-auto px-6">
          <div className="aspect-[16/9] bg-[#F9F9F9] rounded-[40px] border border-[#F0F0F0] shadow-inner relative overflow-hidden group">
             {/* Mock Dashboard Representation */}
             <div className="absolute inset-10 bg-white rounded-2xl shadow-2xl border border-[#F0F0F0] p-8 transition-transform group-hover:scale-[1.01] duration-500">
                <div className="flex gap-4 mb-6">
                   <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                   <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                   <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="space-y-4">
                   <div className="h-8 w-1/3 bg-[#F7F7F7] rounded-lg" />
                   <div className="grid grid-cols-3 gap-4">
                      <div className="h-32 bg-[#F7F7F7] rounded-xl" />
                      <div className="h-32 bg-[#F7F7F7] rounded-xl" />
                      <div className="h-32 bg-[#F7F7F7] rounded-xl" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Grid: Clean & Modular */}
      <section className="py-32 px-6 bg-white border-t border-[#F0F0F0]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { title: 'Public Affairs', desc: 'Monitoramento automatizado de processos legislativos com análise de risco integrada.', icon: '⚡' },
              { title: 'Stakeholder Graph', desc: 'Identifique os verdadeiros centros de influência em tempo real através de grafos relacionais.', icon: '🕸️' },
              { title: 'Impact Intelligence', desc: 'Aceleramos sua tomada de decisão em investimentos de impacto com dados estruturados.', icon: '📈' }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl hover:bg-[#F9F9F9] transition-all duration-300">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-[#666666] leading-relaxed mb-6 font-medium">{feature.desc}</p>
                <Link href="#" className="text-black font-bold text-sm inline-flex items-center gap-2">
                  Saiba mais <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-24 px-6 border-t border-[#F0F0F0]">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">C</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-[#1A1A1A]">Conectas</span>
            </Link>
            <p className="max-w-xs text-[#666666] font-medium leading-relaxed">
              Transformando a forma como organizações brasileiras se posicionam e geram impacto.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[12px] uppercase tracking-widest text-[#999999] mb-8">Empresa</h4>
            <ul className="space-y-4 text-[14px] font-semibold">
              <li><Link href="#" className="hover:text-[#F03E2F] transition-colors">Sobre</Link></li>
              <li><Link href="#" className="hover:text-[#F03E2F] transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#F03E2F] transition-colors">Carreiras</Link></li>
              <li><Link href="#" className="hover:text-[#F03E2F] transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[12px] uppercase tracking-widest text-[#999999] mb-8">Recursos</h4>
            <ul className="space-y-4 text-[14px] font-semibold">
              <li><Link href="#" className="hover:text-[#F03E2F] transition-colors">Docs</Link></li>
              <li><Link href="#" className="hover:text-[#F03E2F] transition-colors">API</Link></li>
              <li><Link href="#" className="hover:text-[#F03E2F] transition-colors">Comunidade</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto pt-10 border-t border-[#F0F0F0] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#999999] text-[13px] font-medium tracking-tight">© 2026 Conectas Consultoria. Todos os direitos reservados.</p>
          <div className="flex gap-10 text-[13px] font-bold">
            <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-black transition-colors">Instagram</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
