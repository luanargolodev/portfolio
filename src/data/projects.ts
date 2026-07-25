export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  url?: string
  highlight?: boolean
}

export const projects: Project[] = [
  {
    title: "Zee.Dog",
    description:
      "Loja e-commerce desenvolvida usando a plataforma Deco.cx",
    tags: ["Deco.cx", "Preact", "TypeScript", "Deno", "Tailwind"],
    image: "/project-images/zeedog.png",
    url: "https://www.zeedog.com.br",
    highlight: true,
  },
  {
    title: "Zee.Now",
    description:
      "Loja e-commerce desenvolvida usando a plataforma Deco.cx",
    tags: ["Deco.cx", "Preact", "TypeScript", "Deno", "Tailwind"],
    image: "/project-images/zeenow.png",
    url: "#",
    highlight: true,
  },
  {
    title: "Blog",
    description:
      "Blog completo desenvolvido usando a plataforma Deco.cx juntamente com Drizzle-records",
    tags: ["Deco.cx", "Preact", "TypeScript", "Deno", "Tailwind", "Drizzle"],
    image: "/project-images/blog.png",
    url: "#",
    highlight: true,
  },
  {
    title: "Quick View",
    description:
      "Quick View desenvolvido para a loja da Náutika",
    tags: ["HTML", "Sass", "JavaScript"],
    image: "/project-images/quick-view.png",
    url: "#",
  },
  {
    title: "Landing Page Cavenaghi",
    description:
      "Landing Page do novo Jeep Comander desenvolvida para a loja da Cavenaghi",
    tags: ["HTML", "Sass", "JavaScript"],
    image: "/project-images/lp-cavenaghi.png",
    url: "#",
  },
  {
    title: "Landing Page Openbox",
    description:
      "Landing Page Black-friday desenvolvida para a loja da Openbox",
    tags: ["HTML", "Sass", "JavaScript"],
    image: "/project-images/lp-openbox.png",
    url: "#",
  },
  {
    title: "Êbba Móveis",
    description:
      "Menu desenvolvido para a loja da Êbba Móveis",
    tags: ["HTML", "Sass", "JavaScript"],
    image: "/project-images/ebbamoveis.png",
    url: "#",
  },
  {
    title: "Todo Moda",
    description:
      "Menu desenvolvido para a loja da Todo Moda",
    tags: ["HTML", "Sass", "JavaScript"],
    image: "/project-images/todomoda.png",
    url: "#",
  },
]