const experiences = [
  {
    period: "2024 — Presente",
    role: "Desenvolvedor Front-end Pleno",
    company: "Zee.Dog",
    url: "https://www.zeedog.com.br",
    description:
      "Desenvolvimento e manutenção da loja e-commerce utilizando Deco.cx, Preact, TypeScript, Deno e TailwindCSS. Responsável por implementar novos componentes, otimizar performance e garantir a melhor experiência do usuário.",
  },
  {
    period: "2022 — 2023",
    role: "Desenvolvedor Front-end Júnior",
    company: "Agência e-Plus",
    url: "#",
    description:
      "Desenvolvimento de landing pages, e-commerces e sites institucionais com HTML, Sass, JavaScript e React. Integração com VTEX IO e criação de componentes customizados.",
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-mono tracking-widest uppercase">
            Experiência
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Minha trajetória
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Mais de 5 anos de experiência construindo aplicações web modernas
            e entregando resultados para clientes e empresas.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-600 -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block w-1/2" />

              <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-accent -translate-x-1/2 z-10 ring-4 ring-dark-900" />

              <div className="md:w-1/2 pl-10 md:pl-0">
                <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                  <span className="text-accent text-xs font-mono">
                    {exp.period}
                  </span>
                  <h3 className="text-white font-semibold text-lg mt-1">
                    {exp.role}
                  </h3>
                  <span className="text-accent-light text-sm inline-block mb-3">
                    {exp.company}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}