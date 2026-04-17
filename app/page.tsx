import Link from 'next/link';
import { ArrowRight, Globe, TrendingUp, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0EEE9] font-sans text-[#939597] selection:bg-[#F5DF4D] selection:text-black">
      {/* Sanity-inspired Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-[#F0EEE9]/80 backdrop-blur-xl border-b border-[#939597]/10">
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
            <span className="hidden font-black text-2xl tracking-tighter text-[#00589B] group-hover:text-black transition-colors uppercase">CONECTAS</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em]">
            <Link href="#comunidade" className="hover:text-[#CF5C78] transition-colors">Comunidade</Link>
            <Link href="#capital" className="hover:text-[#F5DF4D] transition-colors">Capital</Link>
            <Link href="#cultura" className="hover:text-[#00A0B0] transition-colors">Cultura</Link>
            <Link href="#impacto" className="hover:text-[#8F4584] transition-colors">Impacto</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="px-6 py-2 text-[12px] font-black uppercase tracking-wider border-2 border-black hover:bg-black hover:text-white transition-all rounded-full"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[900px]">
            <h1 className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] font-black text-black tracking-[-0.04em] mb-12 uppercase">
              Criando a cultura, <br />
              <span className="text-[#00589B]">capital e comunidade</span> <br />
              da nova economia.
            </h1>
            <p className="text-2xl md:text-3xl leading-snug font-medium text-[#939597] max-w-[700px] mb-12">
              Fortalecemos iniciativas de impacto socioambiental através de um diálogo qualificado entre governos, financiadores e a sociedade.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#F5DF4D] text-black font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                Começar Agora <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Pillars - Sanity Style */}
      <section className="py-20 px-6 border-t border-[#939597]/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <div className="bg-white p-12 group hover:bg-[#F5DF4D] transition-colors duration-500">
            <div className="mb-8 text-black group-hover:scale-110 transition-transform origin-left">
              <Users size={48} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-black text-black uppercase mb-4">Comunidade</h3>
            <p className="text-lg font-medium leading-relaxed group-hover:text-black/80">
              Conectamos a Geração Z e criativos da moda com o propósito de transformar a economia através da colaboração radical.
            </p>
          </div>

          <div className="bg-white p-12 group hover:bg-[#00A0B0] transition-colors duration-500">
            <div className="mb-8 text-black group-hover:text-white transition-colors group-hover:scale-110 transition-transform origin-left">
              <TrendingUp size={48} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-black text-black group-hover:text-white uppercase mb-4">Capital</h3>
            <p className="text-lg font-medium leading-relaxed group-hover:text-white/80 transition-colors">
              Direcionamos recursos para negócios de impacto que priorizam o bem-estar social e a regeneração ambiental.
            </p>
          </div>

          <div className="bg-white p-12 group hover:bg-[#CF5C78] transition-colors duration-500">
            <div className="mb-8 text-black group-hover:text-white transition-colors group-hover:scale-110 transition-transform origin-left">
              <Globe size={48} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-black text-black group-hover:text-white uppercase mb-4">Cultura</h3>
            <p className="text-lg font-medium leading-relaxed group-hover:text-white/80 transition-colors">
              Moldamos as narrativas da nova economia através da arte, design e inovação institucional.
            </p>
          </div>
        </div>
      </section>

      {/* Special Colors Detail Section */}
      <section className="py-20 bg-[#939597] text-white px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#F5DF4D] mb-6 block">Nosso Impacto</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-8">
              Diálogo qualificado <br /> com o poder.
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
              Articulamos parcerias estratégicas entre o terceiro setor, governos e investidores para escalar soluções reais para crises climáticas e sociais.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-[#BA5B3F] pl-6 py-2">
                <div className="text-4xl font-black mb-1">20+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/60">Projetos Ativos</div>
              </div>
              <div className="border-l-4 border-[#8F4584] pl-6 py-2">
                <div className="text-4xl font-black mb-1">15M</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/60">Capital Mobilizado</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-black/10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-3xl flex items-center justify-center">
               <Zap size={120} className="text-[#F5DF4D] animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 px-6 border-t border-[#939597]/10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div>
            <Link href="/" className="font-black text-3xl tracking-tighter text-black uppercase mb-8 block">CONECTAS</Link>
            <p className="text-[#939597] max-w-[300px] font-medium">
              Transformando o futuro através do capital consciente e cultura regenerativa.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-black uppercase text-[11px] tracking-widest text-black">Explorar</span>
              <Link href="#" className="text-sm hover:text-black">Manifesto</Link>
              <Link href="#" className="text-sm hover:text-black">Impacto</Link>
              <Link href="#" className="text-sm hover:text-black">Labs</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-black uppercase text-[11px] tracking-widest text-black">Conecte-se</span>
              <Link href="#" className="text-sm hover:text-black">LinkedIn</Link>
              <Link href="#" className="text-sm hover:text-black">Instagram</Link>
              <Link href="#" className="text-sm hover:text-black">Twitter</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-black uppercase text-[11px] tracking-widest text-black">Legal</span>
              <Link href="#" className="text-sm hover:text-black">Privacidade</Link>
              <Link href="#" className="text-sm hover:text-black">Termos</Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-20 pt-10 border-t border-[#939597]/10 text-[10px] font-bold uppercase tracking-widest flex justify-between">
          <span>© 2024 Conectas. Todos os direitos reservados.</span>
          <span className="text-[#BA5B3F]">Desenvolvido para a Nova Economia</span>
        </div>
      </footer>
    </main>
  );
}
