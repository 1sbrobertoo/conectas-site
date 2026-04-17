export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#194B64]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center border-b border-[#E9CD6A]">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Conectas
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-gray-700">
          Transformando o cenário de Public Affairs, Stakeholder Mapping e Impact Investing com inovação e dados.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-[#194B64] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#12364a] transition">
            Nossos Serviços
          </button>
          <button className="border-2 border-[#194B64] text-[#194B64] px-8 py-3 rounded-md font-semibold hover:bg-[#f0f4f7] transition">
            Contato
          </button>
        </div>
      </section>

      {/* About / Pillars */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#E9CD6A]">Public Affairs</h3>
          <p className="text-gray-600">Navegamos a complexidade regulatória e política para posicionar sua organização com eficiência.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#E9CD6A]">Stakeholder Mapping</h3>
          <p className="text-gray-600">Identificamos e analisamos os atores-chave para garantir influência e alinhamento estratégico.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#E9CD6A]">Impact Investing</h3>
          <p className="text-gray-600">Conectamos capital a propósitos, estruturando investimentos que geram retorno social e financeiro.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#194B64] text-white py-10 px-4 text-center">
        <p>© 2024 Conectas. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
