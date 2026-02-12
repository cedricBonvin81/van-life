<template>
    <div class="bg-white min-h-screen">
        <!-- HERO : L'immersion -->
        <section class="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
            <img src="https://picsum.photos"
                class="absolute inset-0 w-full h-full object-cover opacity-60 scale-110 hero-img" />

            <div class="relative z-10 text-center px-6">
                <h1
                    class="hero-title text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter opacity-0">
                    L'enveloppe <br /> thermique
                </h1>
                <p
                    class="hero-subtitle text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed opacity-0">
                    Le secret d'un van sain : une barrière contre le froid, le bruit et l'humidité.
                </p>
            </div>
        </section>

        <!-- TEXTE D'ENTRÉE -->
        <section class="py-24 max-w-4xl mx-auto px-6 text-center intro-text opacity-0">
            <h2 class="text-2xl font-bold mb-6 uppercase tracking-widest text-van-dark">Pourquoi isoler ?</h2>
            <p class="text-gray-600 text-lg leading-relaxed">
                Isoler son van n'est pas une option, c'est la fondation de votre confort. Une carrosserie non isolée
                transforme l'habitacle en fournaise l'été et en glacière l'hiver. Mais au-delà de la température, une
                isolation maîtrisée gère surtout <span class="text-primary font-bold">la condensation</span>, évitant
                ainsi l'humidité et la corrosion prématurée de la structure.
            </p>
        </section>

        <!-- SECTION 1 : L'Armaflex (La performance) -->
        <section class="bg-gray-50 py-32 overflow-hidden">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-20 items-center">
                    <div class="arma-img rounded-[2rem] overflow-hidden soft-mask opacity-0">
                        <NuxtImg src="/images/isolation_armaflex.png" format="webp" alt="Rouleau d'Armaflex AF"
                            class="w-full h-full object-cover -rotate-1 hover:rotate-0 transition-transform duration-700 bg-transparent"
                            loading="lazy" />
                    </div>
                    <div class="arma-text text-right opacity-0">
                        <span class="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">01 — Barrière
                            Thermique</span>
                        <h2 class="text-4xl font-bold mb-8 tracking-tight">Armaflex AF</h2>
                        <p class="text-gray-600 text-lg leading-relaxed mb-8">
                            Nous utilisons exclusivement l'Armaflex AF. Sa structure à cellules fermées garantit une
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

        <!-- SECTION 2 : Le Liège (Anti-condensation) -->
        <section class="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
            <div class="grid md:grid-cols-2 gap-20 items-center">
                <div class="liege-text order-2 md:order-1 opacity-0">
                    <span class="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block">02 —
                        Anti-condensation</span>
                    <h2 class="text-4xl font-bold mb-8 tracking-tight">Le Liège Projeté</h2>
                    <p class="text-gray-600 text-lg leading-relaxed mb-8">
                        Contrairement à l'isolation classique, le liège projeté épouse les moindres recoins de la
                        carrosserie. C'est la seule solution efficace pour **supprimer les ponts thermiques** et stopper
                        net la condensation sur la tôle.
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
                <div class="liege-img order-1 md:order-2 rounded-[2rem] overflow-hidden soft-mask opacity-0">
                    <NuxtImg src="/images/isolation_liege.png" format="webp" alt="Liège projeté"
                        class="w-full h-full object-cover transition-transform duration-700 bg-transparent"
                        loading="lazy" />
                </div>
            </div>
        </section>

        <!-- SECTION 3 : Les Laines (Polyvalence) -->
        <section class="bg-gray-50 py-32 overflow-hidden">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-20 items-center">
                    <div class="laine-img rounded-[2rem] overflow-hidden soft-mask opacity-0">
                        <NuxtImg src="/images/isolation_mouton.jpeg" format="webp" alt="Isolation en laine"
                            class="w-full h-full object-cover rotate-1 hover:rotate-0 transition-transform duration-700 bg-transparent"
                            loading="lazy" />
                    </div>
                    <div class="laine-text text-right opacity-0">
                        <span class="text-green-600 font-bold tracking-widest text-xs uppercase mb-4 block">03 —
                            Polyvalence</span>
                        <h2 class="text-4xl font-bold mb-8 tracking-tight text-van-dark">Laines isolantes</h2>
                        <p class="text-gray-600 text-lg leading-relaxed mb-8">
                            Selon votre projet, nous proposons l'utilisation de laines naturelles comme la <strong>laine
                                de mouton</strong>
                            ou de <strong>chanvre</strong>. Cette solution peut être utilisée seule ou en complément du
                            liège projeté pour
                            recouvrir les parois et passer par-dessus les renforts. Au-delà de ses propriétés isolantes,
                            elle est
                            appréciée pour son aspect biosourcé et sain, offrant une alternative plus naturelle pour
                            l'aménagement
                            de votre habitacle.
                        </p>
                        <div class="flex justify-end gap-3">
                            <span
                                class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">Matériaux
                                biosourcés</span>
                            <span
                                class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">Application
                                Mixte</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- TEXTE DE FIN ÉPURÉ -->
        <section class="py-32 max-w-3xl mx-auto px-6 text-center outro-text opacity-0">
            <h2 class="text-3xl font-bold mb-6 tracking-tighter uppercase text-van-dark">Une isolation adaptée à votre
                projet</h2>
            <p class="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                Chaque aménagement nécessite une approche différente selon votre usage. Que vous voyagiez en plein été
                ou pour affronter les hivers alpins, nous optimisons l'enveloppe thermique pour garantir un
                environnement sain et durable.
            </p>
            <NuxtLink to="/contact"
                class="inline-block border border-van-dark text-van-dark px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-van-dark hover:text-white transition-all duration-300">
                Discuter de mon isolation <span class="text-primary mx-1">&</span> aménagement
            </NuxtLink>
        </section>

    </div>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

definePageMeta({ layout: 'blog' })

let ctx;

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            // Hero
            gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" })
            gsap.to(".hero-subtitle", { opacity: 1, y: 0, duration: 1, delay: 0.4 })

            // Fonction d'animation robuste
            const createAnim = (el, xPos) => {
                gsap.fromTo(el,
                    { opacity: 0, x: xPos },
                    {
                        opacity: 1, x: 0, duration: 1.2, ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                )
            }

            createAnim(".intro-text", 0)
            createAnim(".arma-img", -60)
            createAnim(".arma-text", 60)
            createAnim(".liege-text", -60)
            createAnim(".liege-img", 60)
            createAnim(".laine-img", -60)
            createAnim(".laine-text", 60)
            createAnim(".outro-text", 0)
        })

        nextTick(() => {
            ScrollTrigger.refresh()
        })
    }
})

onUnmounted(() => {
    if (ctx) ctx.revert()
})
</script>

<style scoped>
.soft-mask {
    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
}

.opacity-0 {
    opacity: 0;
}
</style>
