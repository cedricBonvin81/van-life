<template>
    <div class="bg-white min-h-screen">

        <BlogHero title="Aménagement <br> <span style='color: #d97706'>Sur-Mesure</span>"
            hero-text="L'art d'optimiser chaque millimètre pour créer un intérieur qui vous ressemble, sans compromis sur la qualité."
            intro-title="Un intérieur à votre image">
            <template #intro-text>
                L'aménagement est le cœur de votre projet. C’est ici que vos besoins rencontrent notre savoir-faire pour
                transformer un utilitaire en un véritable lieu de vie.
                Nous sélectionnons des <span style="color: #d97706;" class="font-bold">matériaux techniques et
                    performants</span> pour
                allier esthétique et robustesse, tout en garantissant un respect strict de la
                <span style="color: #d97706;" class="font-bold">charge utile</span>.
            </template>
        </BlogHero>

        <BlogSection v-for="(value, index) in sections" :key="value.title" v-bind="value" :index="index + 1"
            :reverse="index % 2 === 1" :bg-gray="index % 2 === 1" :theme-color="themeColor">
            <template #content>
                <p v-html="value.text"></p>
            </template>
        </BlogSection>

        <BlogOutro iconName="lucide:sofa" title="Votre projet prend vie ici" buttonText="Parlons d'aménagement"
            link="/contact">
            Du choix des essences de bois à la sélection des ferrures les plus robustes, nous ne laissons rien au
            hasard.
            Discutons ensemble de vos envies pour créer un espace de vie qui s'adapte à vos aventures, et non l'inverse.
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

const themeColor = "#d97706" // Amber-600

// CONTENT : Aménagement & Menuiserie
const sections = [
    {
        title: "Habillage & Parois",
        text: "Nous proposons deux finitions majeures : le <strong style='color: #d97706'>lambris bois</strong> pour un rendu naturel et chaleureux, ou le <strong style='color: #d97706'>contreplaqué peuplier</strong>. Ce dernier est notre favori pour sa légèreté et sa polyvalence : il peut rester brut, être huilé ou peint pour s'adapter parfaitement à l'ambiance de votre projet.",
        image: "/images/amenagement_parois.png",
        badge: "01 — Structure",
        features: ['Peuplier léger', 'Finition personnalisée']
    },
    {
        title: "Mobilier & Ergonomie",
        text: "Chaque meuble est fabriqué <strong style='color: #d97706'>à la demande</strong> pour épouser les formes de votre van. L'objectif est simple : optimiser chaque centimètre pour créer un intérieur fluide, avec une quincaillerie de qualité qui assure des rangements fiables au quotidien.",        
        image: "/images/amenagement_meuble.png",
        badge: "02 — Le Sur-mesure",
        features: ['Adaptation aux courbes', 'Confort d\'usage']
    },
    {
        title: "Espace Nuit & Modularité",
        text: "L'organisation de l'espace nuit est centrale. Selon vos besoins, nous installons des <strong style='color: #d97706'>lits peignes</strong> pour gagner de la place en journée, ou des <strong style='color: #d97706'>lits électriques</strong>. Ces derniers permettent de libérer un grand garage de stockage tout en offrant jusqu'à 4 couchages confortables.",
        image: "/images/amenagement_lit.png",
        badge: "03 — Couchages",
        features: ['Solutions modulables', 'Optimisation garage']
    },
    {
        title: "Sols & Finitions",
        text: "Pour le sol, nous privilégions des solutions durables comme le <strong style='color: #d97706'>parquet massif</strong> pour son aspect authentique. Nous apportons une attention particulière aux détails d'usage : des angles arrondis pour faciliter la circulation et des huiles de protection saines pour l'environnement intérieur.",
        image: "/images/amenagement_parquet.png",
        badge: "04 — Finitions",
        features: ['Parquet stable', 'Détails de confort']
    }
]

// ANIMATIONS : Le moteur identique
const { initHeroAnim, initScrollAnim, initOutroAnim } = useBlogAnimations()
let ctx;

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

        ctx = gsap.context(() => {
            initHeroAnim()
            ScrollTrigger.refresh()

            sections.forEach((_, i) => {
                const index = i + 1
                const isEven = index % 2 === 0

                if (!isEven) {
                    initScrollAnim(`.section-img-${index}`, 'left')
                    initScrollAnim(`.section-text-${index}`, 'right')
                } else {
                    initScrollAnim(`.section-text-${index}`, 'left')
                    initScrollAnim(`.section-img-${index}`, 'right')
                }
            })

            initOutroAnim(".outro-section")
        })

        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 2000)

        window.addEventListener('load', () => ScrollTrigger.refresh())
    }
})

onUnmounted(() => {
    if (ctx) ctx.revert()
    window.removeEventListener('load', () => ScrollTrigger.refresh())
})
</script>

<style scoped>
.soft-mask {
    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
}
</style>