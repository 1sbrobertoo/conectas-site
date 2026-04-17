import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0EEE9] font-sans text-[#939597] selection:bg-[#F5DF4D] selection:text-black">
      {/* Aesthetic Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-[#F0EEE9]/90 backdrop-blur-xl border-b border-[#939597]/10">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <img 
              src="/Conectas Logo.png" 
              alt="Conectas Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-105" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden font-black text-2xl tracking-tighter text-[#00589B]">CONECTAS</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-[#00589B]">
            <Link href="#comunidade" className="hover:text-[#CF5C78] transition-colors">Comunidade</Link>
            <Link href="#capital" className="hover:text-[#F5DF4D] transition-colors">Capital</Link>
            <Link href="#cultura" className="hover:text-[#00A0B0] transition-colors">Cultura</Link>
            <Link href="#impacto" className="hover:text-[#8F4584] transition-colors">Impacto</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="/login" 
              className="bg-[#F5DF4D] text-[#00589B] px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#00589B] hover:text-white transition-all shadow-2xl shadow-[#F5DF4D]/40 active:scale-95 border-2 border-transparent hover:border-white"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section: Gen Z Aesthetic & High Performance */}
      <section className="relative pt-48 pb-24 md:pt-72 md:pb-48 overflow-hidden">
        {/* Branding Blobs */}
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[#F5DF4D]/25 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#CF5C78]/20 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-[#939597]/20 rounded-full px-6 py-2 mb-10">
              <span className="text-[10px] font-black text-[#CF5C78] uppercase tracking-[0.4em]">Nova Economia</span>
              <div className="w-2 h-2 rounded-full bg-[#F5DF4D] animate-ping" />
            </div>
            
            <h1 className="text-7xl md:text-[140px] font-black leading-[0.82] tracking-[-0.07em] text-[#00589B] mb-12 uppercase">
              Criar <span className="text-white drop-shadow-[4px_4px_0_#F5DF4D]">Cultura</span>, <br />
              Capital e <span className="text-[#00A0B0]">Comunidade</span>.
            </h1>
            
            <p className="text-2xl md:text-4xl text-[#939597] font-black leading-[1.1] max-w-3xl tracking-tight mb-16 uppercase">
              Dinamizamos inovação e impacto para quem executa o futuro. Transformamos boas intenções em legitimidade institucional.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <button className="bg-[#00589B] text-white px-14 py-7 rounded-[32px] font-black text-[13px] uppercase tracking-[0.3em] hover:bg-[#00A0B0] transition-all shadow-[0_30px_60px_-15px_rgba(0,88,155,0.4)] active:scale-95">
                Nossos Projetos
              </button>
              <button className="bg-transparent border-[6px] border-[#00589B] text-[#00589B] px-14 py-7 rounded-[32px] font-black text-[13px] uppercase tracking-[0.3em] hover:bg-[#00589B] hover:text-white transition-all active:scale-95">
                Dinamize Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Essence: Modular Grid */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <h2 className="text-6xl md:text-8xl font-black tracking-[-0.06em] text-[#00589B] leading-[0.85] uppercase">
                Onde a estratégia encontra a <span className="text-[#BA5B3F]">ação</span>.
              </h2>
              <p className="text-2xl text-[#939597] font-bold leading-relaxed tracking-tight">
                A Conectas é uma dinamizadora de inovação e impacto que atua conectando estratégia, capital e políticas públicas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#939597]">
                {[
                  { title: 'PROJETOS', color: '#F5DF4D', text: 'Desenvolvimento socioambiental e estruturação de negócios de impacto.' },
                  { title: 'ADVOCACY', color: '#CF5C78', text: 'Estratégias de posicionamento institucional e diálogo qualificado.' }
                ].map((item, i) => (
                  <div key={i} className="space-y-6 group">
                    <div className="h-1 w-20 bg-[#F0EEE9] group-hover:w-full transition-all duration-700" style={{ backgroundColor: item.color }} />
                    <h4 className="font-black text-[#00589B] text-xl tracking-tighter uppercase">{item.title}</h4>
                    <p className="text-sm font-black uppercase tracking-wider">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] bg-[#00589B] rounded-[80px] rotate-2 shadow-2xl relative overflow-hidden group border-[12px] border-[#F0EEE9]">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60" />
                <div className="absolute bottom-20 left-12 right-12">
                   <p className="text-6xl font-black text-white leading-none tracking-tighter">IMPACTO <br/>MENSURÁVEL.</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#CF5C78] rounded-full flex items-center justify-center -rotate-12 border-[10px] border-white shadow-2xl z-20">
                <span className="text-white font-black text-center text-xs leading-none uppercase tracking-[0.2em]">Sustentável<br/>& Legítimo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="comunidade" className="py-48 bg-[#F0EEE9]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-2 border-4 border-[#00589B] rounded-[60px] overflow-hidden bg-[#00589B]">
            {[
              { title: 'Cultura', color: '#F5DF4D', desc: 'Dinamizando comportamentos e narrativas para a nova era.' },
              { title: 'Capital', color: '#CF5C78', desc: 'Conectando estratégia e financiamento para fortalecer ecossistemas.' },
              { title: 'Comunidade', color: '#00A0B0', desc: 'Construindo pontes entre governos, financiadores e sociedade.' }
            ].map((p, i) => (
              <div key={i} className="bg-white p-20 hover:bg-[#F0EEE9] transition-all duration-500 group">
                <span className="font-black text-xs uppercase tracking-[0.5em] mb-12 block" style={{ color: p.color }}>Pilar 0{i+1}</span>
                <h3 className="text-6xl font-black tracking-[-0.05em] text-[#00589B] mb-10 group-hover:scale-105 transition-transform uppercase">{p.title}</h3>
                <p className="text-lg font-bold text-[#939597] uppercase leading-tight">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-48 pb-20 border-t-8 border-[#00589B]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-24 mb-32">
            <div className="space-y-12">
              <Link href="/" className="flex items-center gap-4">
                <img src="/Conectas Logo.png" alt="Conectas Logo" className="h-16 w-auto" />
                <span className="font-black text-4xl tracking-tighter text-[#00589B]">CONECTAS</span>
              </Link>
              <h2 className="text-5xl md:text-7xl font-black text-[#00589B] leading-[0.9] tracking-[-0.05em] uppercase">
                Dinamizando a <br/> <span className="text-[#F5DF4D]">Nova Economia</span>.
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-32">
               <div className="space-y-10">
                  <h4 className="text-[10px] font-black text-[#CF5C78] uppercase tracking-[0.5em]">Social</h4>
                  <ul className="space-y-6 font-black text-[#00589B] text-sm uppercase tracking-widest">
                    <li><Link href="#" className="hover:text-[#F5DF4D] transition-colors">LinkedIn</Link></li>
                    <li><Link href="#" className="hover:text-[#F5DF4D] transition-colors">Instagram</Link></li>
                  </ul>
               </div>
            </div>
          </div>
          <div className="pt-20 border-t border-[#939597]/20 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.6em] text-[#939597]">
              © 2026 CONECTAS DINAMIZADORA. TUDO PELO IMPACTO.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
