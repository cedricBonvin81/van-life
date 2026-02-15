<template>
    <section class="relative bg-transparent  py-40 md:py-40 px-6 overflow-hidden">
        <div class="max-w-4xl mx-auto">
            <div class="flex items-center gap-4 mb-12 reveal-up">
                <div class="w-12 h-px bg-primary"></div>
                <span class="text-xs font-black uppercase tracking-[0.4em] text-slate-400">L'Esprit de l'Atelier</span>
            </div>

            <h2 class="manifeste-text text-3xl md:text-5xl font-light italic leading-tight text-slate-900 mb-12">
                "Nous ne construisons pas seulement des vans, nous façonnons des
                <span class="font-black uppercase not-italic text-primary">refuges mobiles</span>
                où chaque détail technique s'efface devant la beauté du paysage."
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end reveal-up">
                <p class="text-lg text-slate-600 font-light leading-relaxed">
                    Dans notre atelier valaisan, l'ingénierie rencontre l'artisanat. Nous croyons en une approche sans
                    compromis :
                    la performance d'un système électrique de pointe alliée à la noblesse des matériaux naturels.
                </p>
                <div class="flex flex-col items-start md:items-end">
                    <NuxtLink to="/blog/manifeste"
                        class="group flex items-center gap-4 text-slate-900 font-bold uppercase text-xs tracking-widest transition-all">
                        <span class="border-b-2 border-primary pb-1 group-hover:pr-4 transition-all uppercase">Lire
                            notre manifeste</span>
                        <Icon name="lucide:arrow-right"
                            class="text-primary w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        // Animation d'apparition au scroll pour les blocs
        gsap.utils.toArray(".reveal-up").forEach((el) => {
            gsap.from(el, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            })
        })

        // Petit effet spécial sur le texte principal (légère montée)
        gsap.from(".manifeste-text", {
            opacity: 0,
            y: 40,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".manifeste-text",
                start: "top 80%",
            }
        })
    }
})
</script>