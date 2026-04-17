import Link from 'next/link';
import { ArrowRight, Globe, TrendingUp, Users, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F0EEE9] font-sans text-[#939597] selection:bg-[#F5DF4D] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-[#F0EEE9]/80 backdrop-blur-xl border-b border-[#939597]/10">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <img 
              src="/Conectas Logo.png" 
              alt="Conectas Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:block font-black text-2xl tracking-tighter text-[#00589B] group-hover:text-black transition-colors uppercase">CONECTAS</span>
          </Link>

          {/* Desktop Links */}
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
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#F0EEE9] border-b border-[#939597]/10 px-6 py-8 flex flex-col gap-6 text-sm font-black uppercase tracking-widest animate-in fade-in slide-in-from-top-4">
            <Link href="#comunidade" onClick={() => setIsMenuOpen(false)}>Comunidade</Link>
            <Link href="#capital" onClick={() => setIsMenuOpen(false)}>Capital</Link>
            <Link href="#cultura" onClick={() => setIsMenuOpen(false)}>Cultura</Link>
            <Link href="#impacto" onClick={() => setIsMenuOpen(false)}>Impacto</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[1000px]">
            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-black text-black tracking-[-0.04em] mb-12 uppercase animate-in fade-in slide-in-from-bottom-8 duration-700">
              Transformando a <br />
              <span className="text-[#00589B]">nova economia</span> <br />
              através do impacto.
            </h1>
            <p className="text-2xl md:text-3xl leading-snug font-medium text-[#939597] max-w-[700px] mb-12 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-100">
              Fortalecemos iniciativas de impacto socioambiental através de um diálogo qualificado entre governos, financiadores e a sociedade.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-200">
              <Link 
                href="/login"
                className="px-10 py-5 bg-[#F5DF4D] text-black font-black uppercase tracking-widest text-base rounded-full hover:scale-105 transition-transform flex items-center gap-3 shadow-xl"
              >
                Entrar na Plataforma
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="#saiba-mais"
                className="px-10 py-5 border-2 border-black text-black font-black uppercase tracking-widest text-base rounded-full hover:bg-black hover:text-white transition-all flex items-center gap-3"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 bg-white/50" id="comunidade">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Globe className="text-[#00A0B0]" />}
              title="Global"
              description="Conectamos redes globais de impacto com soluções locais."
              color="border-[#00A0B0]"
            />
            <FeatureCard 
              icon={<TrendingUp className="text-[#F5DF4D]" />}
              title="Capital"
              description="Mapeamento e mobilização de capital para causas sociais."
              color="border-[#F5DF4D]"
            />
            <FeatureCard 
              icon={<Users className="text-[#CF5C78]" />}
              title="Comunidade"
              description="Fortalecimento institucional de organizações sociais."
              color="border-[#CF5C78]"
            />
            <FeatureCard 
              icon={<Zap className="text-[#8F4584]" />}
              title="Cultura"
              description="Disseminação da cultura de doação e investimento social."
              color="border-[#8F4584]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[#939597]/10 text-center text-[10px] font-black uppercase tracking-widest">
        <p>© 2024 CONECTAS - Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: any, title: string, description: string, color: string }) {
  return (
    <div className={`p-8 bg-white border-b-4 ${color} rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-2 group`}>
      <div className="mb-6 p-4 bg-[#F0EEE9] w-fit rounded-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-black text-black mb-4 uppercase">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
