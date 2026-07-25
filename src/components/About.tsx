export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-mono tracking-widest uppercase">
            Sobre mim
          </span>
        </div>

        <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0">
              <img
                src="https://avatars.githubusercontent.com/u/10791688"
                alt="Luan Lemos"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
                Luan Lemos
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Sou desenvolvedor front-end, apaixonado por tecnologia e programação. 
                Formado em Análise e Desenvolvimento de Sistemas, sempre me interessei 
                em aprender sobre programação e desenvolvimento.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Especialista em React, Preact, TypeScript, TailwindCSS, Deno e plataforma 
                Deco.cx. Atualmente atuo como Desenvolvedor Front-end Pleno na Zee.Dog, 
                onde trabalho com e-commerce de alto desempenho.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1ahMxe2QP0qPgWQbc_dln9AOOiespzy9c/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-accent/25 text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
                <a
                  href="https://www.linkedin.com/in/luanargolo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-lg border border-dark-600 hover:border-accent/50 transition-all duration-300 text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}