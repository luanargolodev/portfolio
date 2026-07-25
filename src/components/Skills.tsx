import { useEffect, useRef, useState } from "react"
import { skills } from "../data/skills"
import { TechIcon } from "./TechIcon"

const DESKTOP_VISIBLE = 4
const MOBILE_VISIBLE = 2

export function Skills() {
  const [index, setIndex] = useState(0)
  const [manualStep, setManualStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchRef = useRef({ startX: 0, startY: 0, endX: 0, endY: 0 })

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const visible = isMobile ? MOBILE_VISIBLE : DESKTOP_VISIBLE
  const maxIndex = skills.length - visible
  const totalPositions = maxIndex + 1

  const goTo = (i: number) => {
    setIndex(i)
    setManualStep((s) => s + 1)
  }

  const prev = () => goTo(index === 0 ? maxIndex : index - 1)
  const next = () => goTo(index >= maxIndex ? 0 : index + 1)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [maxIndex, manualStep])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current.startX = e.touches[0].clientX
    touchRef.current.startY = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchRef.current.endX = e.touches[0].clientX
    touchRef.current.endY = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    const dx = touchRef.current.startX - touchRef.current.endX
    const dy = touchRef.current.startY - touchRef.current.endY
    if (Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 50) {
      if (dx > 0) next()
      else prev()
    }
  }

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-mono tracking-widest uppercase">
            Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Tecnologias que domino
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Mais de 5 anos de experiência construindo aplicações web modernas
            com as melhores ferramentas do ecossistema front-end.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="shrink-0 p-2 rounded-full bg-dark-700 border border-dark-600 text-gray-400 hover:text-white hover:border-accent/50 transition-all cursor-pointer"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="relative overflow-hidden flex-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="shrink-0 px-2 h-full"
                  style={{ width: `${100 / visible}%` }}
                >
                  <div className="bg-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 h-full flex flex-col items-center justify-center">
                    <div className="mb-3 flex items-center justify-center h-10">
                      <TechIcon icon={skill.icon} />
                    </div>
                    <h3 className="text-white font-semibold text-lg text-center">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="shrink-0 p-2 rounded-full bg-dark-700 border border-dark-600 text-gray-400 hover:text-white hover:border-accent/50 transition-all cursor-pointer"
            aria-label="Próximo"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPositions }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === index
                  ? "bg-accent w-6"
                  : "bg-dark-600 hover:bg-dark-600/80"
              }`}
              aria-label={`Ir para posição ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}