<template>
    <div class="bg-white min-h-screen">
        <!-- HERO : L'immersion -->
        <section class="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
            <!-- Image de fond (Remplace Picsum par une photo de van nu avec de l'isolation plus tard) -->
            <img src="https://picsum.photos"
                class="absolute inset-0 w-full h-full object-cover opacity-60 scale-110 hero-img" />

            <div class="relative z-10 text-center px-6">
                <h1 class="hero-title text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
                    L'enveloppe <br /> thermique
                </h1>
                <p class="hero-subtitle text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Le secret d'un van sain : une barrière contre le froid, le bruit et l'humidité.
                </p>
            </div>
        </section>

        <!-- SECTION 1 : Le Liège (Le côté Bio/Technique) -->
        <section class="max-w-7xl mx-auto px-6 py-32">
            <div class="grid md:grid-cols-2 gap-20 items-center">
                <div class="liege-text order-2 md:order-1">
                    <span class="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block">Étape 01 —
                        Anti-condensation</span>
                    <h2 class="text-4xl font-bold mb-8 tracking-tight">Le Liège Projeté</h2>
                    <p class="text-gray-600 text-lg leading-relaxed mb-8">
                        Contrairement à l'isolation classique, le liège projeté épouse les moindres recoins de la
                        carrosserie.
                        C'est la seule solution efficace pour **supprimer les ponts thermiques** et stopper net la
                        condensation sur la tôle.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start gap-4">
                            <div
                                class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs">
                                ✓</div>
                            <p class="text-gray-700 font-medium">Régulation naturelle de l'humidité</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <div
                                class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs">
                                ✓</div>
                            <p class="text-gray-700 font-medium">Inodore et imputrescible</p>
                        </div>
                    </div>
                </div>
                <div
                    class="liege-img order-1 md:order-2 rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-900/10">
                    <img src="https://picsum.photos"
                        class="w-full h-full object-cover rotate-1 hover:rotate-0 transition-transform duration-700" />
                </div>
            </div>
        </section>

        <!-- SECTION 2 : L'Armaflex (La performance) -->
        <section class="bg-gray-50 py-32">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-20 items-center">
                    <div class="arma-img rounded-[2rem] overflow-hidden shadow-2xl">
                        <img src="https://picsum.photos"
                            class="w-full h-full object-cover -rotate-1 hover:rotate-0 transition-transform duration-700" />
                    </div>
                    <div class="arma-text text-right">
                        <span class="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Étape 02 —
                            Barrière Thermique</span>
                        <h2 class="text-4xl font-bold mb-8 tracking-tight">Armaflex AF</h2>
                        <p class="text-gray-600 text-lg leading-relaxed mb-8 text-right">
                            Nous utilisons exclusivement l'Armaflex AF (Auto-Adhésif). Sa structure à cellules fermées
                            garantit une
                            isolation thermique de haute performance et une protection acoustique supérieure pendant le
                            trajet.
                        </p>
                        <div class="flex justify-end gap-3">
                            <span
                                class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">Cellules
                                fermées</span>
                            <span
                                class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">Classe
                                O</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// On utilise le layout blog avec la double navigation
definePageMeta({
    layout: 'blog'
})

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        // Animation Hero
        gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1.2, ease: "expo.out" })
        gsap.from(".hero-subtitle", { opacity: 0, y: 20, duration: 1, delay: 0.4 })
        gsap.from(".hero-img", { scale: 1.3, duration: 2, ease: "power2.out" })

        // Animation Liège au scroll
        gsap.from(".liege-text", {
            scrollTrigger: { trigger: ".liege-text", start: "top 85%" },
            opacity: 0, x: -60, duration: 1
        })
        gsap.from(".liege-img", {
            scrollTrigger: { trigger: ".liege-img", start: "top 85%" },
            opacity: 0, x: 60, scale: 0.9, duration: 1
        })

        // Animation Armaflex au scroll
        gsap.from(".arma-text", {
            scrollTrigger: { trigger: ".arma-text", start: "top 85%" },
            opacity: 0, x: 60, duration: 1
        })
        gsap.from(".arma-img", {
            scrollTrigger: { trigger: ".arma-img", start: "top 85%" },
            opacity: 0, x: -60, scale: 0.9, duration: 1
        })
    }
})
</script>
