<template>
    <section ref="main" class="relative bg-transparent py-40 px-6">
        <div class="max-w-4xl mx-auto">

            <div class="flex items-center gap-4 mb-12 ManifesteReveal">
                <div class="w-12 h-px bg-primary"></div>
                <span class="text-xs font-black uppercase tracking-[0.4em] text-slate-400">L'Esprit de l'Atelier</span>
            </div>

            <h2 class="manifeste-text text-3xl md:text-5xl font-light italic leading-tight text-slate-900 mb-12">
                "Nous ne construisons pas seulement des vans, nous façonnons des
                <span class="font-black uppercase not-italic text-primary"> refuges mobiles</span>
                où chaque détail s'efface devant la beauté du paysage."
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <p class="ManifesteReveal text-lg text-slate-600 font-light leading-relaxed">
                    "Dans notre atelier valaisan, on fait encore les choses avec amour. On prend le temps de bien
                    faire, de respecter la matière et l'esprit du voyage. Ici, on ne construit pas juste des vans, on
                    fabrique vos futurs souvenirs."
                </p>

                <div class="ManifesteReveal flex flex-col items-start md:items-end">
                    <NuxtLink to="/blog"
                        class="group flex items-center gap-4 text-slate-900 font-bold uppercase text-xs tracking-widest transition-all">
                        <span class="border-b-2 border-primary pb-1 group-hover:pr-4 transition-all uppercase">
                            Lire notre manifeste
                        </span>
                        <Icon name="lucide:arrow-right"
                            class="text-primary w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

