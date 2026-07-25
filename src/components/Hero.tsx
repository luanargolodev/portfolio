export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 md:pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-dark-900 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none hidden md:block" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-accent text-sm font-mono">
            Disponível para novos projetos
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Front-end Engineer
          <br />
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            React & TypeScript
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Especialista em construir interfaces modernas, performáticas e focadas
          em conversão. Transformo designs em experiências digitais que entregam
          resultados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5573991933732?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 text-lg cursor-pointer"
          >
            Solicitar orçamento
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-xl border border-dark-600 hover:border-accent/50 transition-all duration-300 text-lg cursor-pointer"
          >
            Ver projetos
          </a>
        </div>

        <div className="mt-12 md:mt-16 flex items-center justify-center gap-4 md:gap-8 text-gray-500">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-xs mt-1">Anos de XP</div>
          </div>
          <div className="w-px h-10 bg-dark-600" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-xs mt-1">Projetos</div>
          </div>
          <div className="w-px h-10 bg-dark-600" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">30+</div>
            <div className="text-xs mt-1">Clientes</div>
          </div>
        </div>
      </div>
    </section>
  )
}