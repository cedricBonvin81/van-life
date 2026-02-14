<template>
    <div class="bg-white min-h-screen">

        <BlogHero title="L'enveloppe <br> <span class='text-cyan-600'>Thermique</span>"
            hero-text="Le secret d'un van sain : une barrière haute performance contre le froid, le bruit et l'humidité."
            intro-title="Le confort en toute saison">
            <template #intro-text>
                L'isolation est la base invisible mais cruciale de votre aménagement. Elle ne se contente pas de vous
                protéger des températures extrêmes ; elle assure la <span class="text-cyan-600 font-bold">pérennité de
                    votre carrosserie</span> en gérant la condensation.
                Nous utilisons des matériaux techniques adaptés aux contraintes du voyage pour créer un cocon <span
                    class="text-cyan-600 font-bold">sain, silencieux et durable</span>.
            </template>
        </BlogHero>

        <BlogSection v-for="(value, index) in sections" :key="value.title" v-bind="value" :index="index + 1"
            :reverse="index % 2 === 1" :bg-gray="index % 2 === 1"
            :theme-color="themeColor"
            >
            <template #content>
                <p v-html="value.text"></p>
            </template>
        </BlogSection>

        <BlogOutro 
            iconName="lucide:thermometer-sun" 
            title="Une isolation adaptée à votre projet" 
            buttonText="Discuter de mon isolation & aménagement"
            link="/contact">
            Chaque aménagement nécessite une approche différente selon votre usage. Que vous voyagiez en plein été
            ou pour affronter les hivers alpins, nous optimisons l'enveloppe thermique pour garantir un
            environnement sain et durable.
        </BlogOutro>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


definePageMeta({
    layout: 'blog'
})

const themeColor = "#0891b2" // Cyan-600 de Tailwind, tu peux ajuster selon ta palette

// CONTENT : Tes textes originaux, strictement inchangés
const sections = [
    {
        title: "Armaflex AF",
        text: "Nous utilisons exclusivement l'Armaflex AF. Sa structure à cellules fermées garantit une isolation thermique de haute performance et une protection acoustique supérieure pendant le trajet.",
        image: "/images/isolation_armaflex.png",
        badge: "01 — Barrière Thermique",
        features: ['Cellules fermées', 'Classe O']
    },
    {
        title: "Le Liège Projeté",
        text: "Contrairement à l'isolation classique, le liège projeté épouse les moindres recoins de la carrosserie. C'est la seule solution efficace pour <strong>supprimer les ponts thermiques</strong> et stopper net la condensation sur la tôle.",
        image: "/images/isolation_liege.png",
        badge: "02 — Anti-condensation",
        features: ['Régulation naturelle de l\'humidité', 'Inodore et imputrescible']
    },
    {
        title: "Laines isolantes",
        text: "Selon votre projet, nous proposons l'utilisation de laines naturelles comme la <strong>laine de mouton</strong> ou de <strong>chanvre</strong>. Cette solution peut être utilisée seule ou en complément du liège projeté pour recouvrir les parois et passer par-dessus les renforts. Au-delà de ses propriétés isolantes, elle est appréciée pour son aspect biosourcé et sain.",
        image: "/images/isolation_mouton.jpeg",
        badge: "03 — Polyvalence",
        features: ['Matériaux biosourcés', 'Application Mixte']
    }
]

// ANIMATIONS : Le même moteur que pour Elec
const { initHeroAnim, initScrollAnim, initOutroAnim } = useBlogAnimations()
let ctx;

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            initHeroAnim()

            // Boucle d'animation identique à elec.vue
            sections.forEach((_, i) => {
                const index = i + 1
                const isEven = index % 2 === 0

                if (!isEven) {
                    // Section Impaire : Image à gauche (vient de gauche), Texte à droite (vient de droite)
                    initScrollAnim(`.section-img-${index}`, 'left')
                    initScrollAnim(`.section-text-${index}`, 'right')
                } else {
                    // Section Paire : Texte à gauche, Image à droite
                    initScrollAnim(`.section-text-${index}`, 'left')
                    initScrollAnim(`.section-img-${index}`, 'right')
                }
            })

            initOutroAnim(".outro-section")
        })

        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 500)
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
</style>