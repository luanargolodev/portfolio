const logos: Record<string, string> = {
  react: `/tech-icons/react.svg`,
  typescript: `/tech-icons/typescript.svg`,
  javascript: `/tech-icons/javascript.svg`,
  tailwind: `/tech-icons/tailwind.svg`,
  node: `/tech-icons/node.svg`,
  deno: `/tech-icons/deno.svg`,
  preact: `/tech-icons/preact.svg`,
  deco: `/tech-icons/deco.svg`,
  vtex: `/tech-icons/vtex.svg`,
  html: `/tech-icons/html.svg`,
  css: `/tech-icons/css.svg`,
  sass: `/tech-icons/sass.svg`,
  styled: `/tech-icons/styled.svg`,
  git: `/tech-icons/git.svg`,
}

const wideIcons = new Set(["deco"])

export function TechIcon({ icon }: { icon: string }) {
  const src = logos[icon]
  if (!src) return null

  return (
    <img
      src={src}
      alt={icon}
      className={`h-10 object-contain ${wideIcons.has(icon) ? "w-20" : "w-10"}`}
      loading="lazy"
    />
  )
}