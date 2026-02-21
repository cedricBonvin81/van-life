<template>
    <section class="bg-white py-24 md:py-32 px-6">
        <div class="container mx-auto max-w-4xl text-center">

            <span class="font-mono text-xs uppercase tracking-[0.3em] text-slate-400 mb-8 block reveal-cta">
                Prêt pour l'aventure ?
            </span>

            <h2 class="text-4xl md:text-6xl font-extralight text-slate-900 mb-12 reveal-cta">
                Parlons de votre <span class="italic font-light text-primary">futur projet.</span>
            </h2>

            <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 reveal-cta">
                <a href="mailto:contact@van-life.ch"
                    class="group relative px-10 py-5 bg-slate-900 text-white overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    <span class="relative z-10 font-light tracking-widest uppercase text-sm">Envoyer un message</span>
                    <div
                        class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    </div>
                </a>

                <a href="tel:+41XXXXXXXXX"
                    class="px-10 py-5 border border-slate-200 text-slate-900 font-light tracking-widest uppercase text-sm hover:bg-slate-50 transition-colors">
                    Appeler l'atelier
                </a>
            </div>

            <div
                class="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 reveal-cta">
                <div class="text-left">
                    <p class="font-mono text-[10px] uppercase tracking-widest text-slate-400">Suivez l'atelier</p>
                    <div class="flex gap-6 mt-4">
                        <a href="#"
                            class="text-slate-900 hover:text-primary transition-colors uppercase text-xs tracking-tighter font-semibold">Instagram</a>
                        <a href="#"
                            class="text-slate-900 hover:text-primary transition-colors uppercase text-xs tracking-tighter font-semibold">Facebook</a>
                    </div>
                </div>

                <div class="text-right hidden md:block">
                    <p class="font-mono text-[10px] uppercase tracking-widest text-slate-400">© 2026 — Van-Life.ch</p>
                    <p class="text-[10px] text-slate-300 mt-1 uppercase">Artisanat Suisse de précision</p>
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

        gsap.from(".reveal-cta", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".reveal-cta",
                start: "top 90%",
            }
        })
    }
})
</script>