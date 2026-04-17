import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      {/* Header/Nav Overlay */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Conectas</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#sobre" className="hover:text-cyan-600 transition-colors">Sobre</Link>
            <Link href="#solucoes" className="hover:text-cyan-600 transition-colors">Soluções</Link>
            <Link href="#clientes" className="hover:text-cyan-600 transition-colors">Clientes</Link>
            <Link href="#contato" className="hover:text-cyan-600 transition-colors">Equipe</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors">
              Log In
            </button>
            <Link 
              href="/login" 
              className="inline-flex items-center justify-center bg-cyan-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-cyan-700 shadow-lg shadow-cyan-600/20 active:scale-95 transition-all"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400 rounded-full blur-[100px] translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1 mb-8">
            <span className="flex w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Novo: Plataforma de Stakeholder Mapping v2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 max-w-4xl tracking-tight">
            Navegue no futuro das <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Relações Institucionais</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
            Unimos inteligência de dados, análise regulatória e impacto social para posicionar sua organização no centro da nova economia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
              Conheça nossas soluções
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-800 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all">
              Agendar Demo
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 grayscale">
          {/* Mockup Logos */}
          <div className="text-center font-bold text-slate-400 text-lg">LOGO A</div>
          <div className="text-center font-bold text-slate-400 text-lg">LOGO B</div>
          <div className="text-center font-bold text-slate-400 text-lg">LOGO C</div>
          <div className="text-center font-bold text-slate-400 text-lg">LOGO D</div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="solucoes" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Especialidades que geram valor real</h2>
            <p className="text-slate-600 text-lg leading-relaxed">Combinamos experiência multisetorial com tecnologia de ponta para endereçar os desafios mais complexos do mercado atual.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Public Affairs', desc: 'Análise legislativa profunda e monitoramento estratégico do ecossistema político nacional.', color: 'cyan' },
              { title: 'Stakeholder Mapping', desc: 'Sistemas inteligentes para identificação e engajamento dos atores que definem seu setor.', color: 'blue' },
              { title: 'Impact Investing', desc: 'Modelagem de ativos que integram metas ESG e retornos financeiros sustentáveis.', color: 'indigo' }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-cyan-100 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300">
                <div className={`w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                   {/* Mockup Icon */}
                   <div className="w-6 h-6 bg-cyan-500 rounded-full opacity-80" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                <Link href="#" className="text-cyan-600 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saiba mais <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Conectas</span>
            </div>
            <p className="max-w-xs leading-relaxed">
              Liderando a transformação nas relações institucionais através de dados e propósito.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Empresa</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Carreiras</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Suporte</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest font-medium">
          <p>© 2026 Conectas Consultoria. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
