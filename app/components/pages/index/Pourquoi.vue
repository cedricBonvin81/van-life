<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-12 gap-8">

        <div class="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
          <div class="lg:sticky lg:top-32 reveal-left">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-8 h-px bg-primary"></div>
              <span class="font-mono text-[12px] uppercase tracking-[0.3em] text-slate-400">Expertise</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-light leading-tight text-slate-900 mb-16">
              Pourquoi nous confier <br> votre projet ?
            </h2>

            <div class="hidden lg:block border-t border-slate-100 pt-10">
              <h4 class="font-mono text-[12px] uppercase tracking-widest text-slate-400 mb-8">Services & Engagements
              </h4>
              <ul class="space-y-6">
                <li
                  v-for="service in ['Conception 3D sur mesure', 'Expertise & Normes Suisse', 'Menuiserie Artisanale', 'Électricité & Autonomie']"
                  :key="service"
                  class="text-xs uppercase tracking-widest text-slate-500 flex justify-between items-center group/item">
                  <span>{{ service }}</span>
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-slate-100 group-hover/item:bg-primary transition-colors duration-500"></span>
                </li>
              </ul>
              <p
                class="mt-16 text-sm text-slate-400 font-light leading-relaxed italic border-l-2 border-primary/20 pl-6">
                "L'équilibre entre la rigueur technique <br> et la liberté du voyage."
              </p>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-start-6 lg:col-span-7 relative">
          <div class="absolute line-life left-0 top-0 bottom-0 w-px bg-slate-100 z-0 origin-top"></div>

          <div v-for="(item, index) in reasons" :key="index"
            class="reason-item group py-16 first:pt-0 last:pb-0 cursor-default relative">

            <span
              class="absolute left-0 top-12 font-mono text-8xl font-black text-primary/30 select-none transition-all duration-700 group-hover:text-primary/10 group-hover:-translate-y-2 z-10">
              0{{ index + 1 }}
            </span>

            <div class="relative z-20 pl-12 md:pl-24 transition-transform duration-500 group-hover:translate-x-2">
              <h3
                class="text-xl font-semibold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {{ item.title }}
              </h3>
              <p class="text-base text-slate-600 leading-relaxed font-light max-w-xl">
                {{ item.description }}
              </p>
              <div
                class="w-12 h-px bg-primary/0 group-hover:bg-primary/40 group-hover:w-24 transition-all duration-700 mt-6">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

const reasons = [
  {
    title: "Écoute & Personnalisation",
    description: "Tout commence par un échange. Que vous partiez d'une page blanche ou d'une idée précise, nous adaptons notre savoir-faire à vos besoins pour créer un aménagement qui vous ressemble. Nous concevons votre architecture mobile, sur-mesure."
  },
  {
    title: "Qualité & Matériaux",
    description: "Notre expertise, c’est avant tout le geste et la technique de pose. Pour le reste, on ne vous impose rien : le choix des matériaux se fait ensemble, selon vos envies et votre budget. On est là pour vous conseiller et s'assurer que, peu importe votre choix, l'aménagement est solide et bien fini."
  },
  {
    title: "Notre savoir-faire",
    description: "C’est ici que le métier d’artisan prend tout son sens. Un van est un défi technique : il faut intégrer tout le confort d'une maison dans un espace restreint. On s'occupe de tout l'aménagement, de la structure aux installations techniques, avec un seul objectif : que ce soit simple à utiliser et construit pour durer."
  },
  {
    title: "Respect des Engagements",
    description: "On est transparent sur les coûts et rigoureux sur les normes. On gère toute la partie technique et administrative pour l'expertise au SAN, pour que vous n'ayez que le plaisir de rouler dans un véhicule en règle."
  }
]
</script>
