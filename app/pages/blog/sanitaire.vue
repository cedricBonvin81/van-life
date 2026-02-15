<template>
    <div class="bg-white min-h-screen">

        <BlogHero title="Systèmes <br> <span class='text-blue-500'>Hydrauliques</span>"
            hero-text="L'autonomie en toute simplicité : gérez votre ressource la plus précieuse avec fiabilité."
            intro-title="L'eau à bord, comme à la maison">
            <template #intro-text>
                Une installation d'eau bien conçue est le pilier de votre confort quotidien. Nous créons des circuits
                <span class="text-blue-500 font-bold">propres et sécurisés</span> pour vos besoins sanitaires et
                alimentaires.
                De la filtration de pointe à la gestion intelligente des réservoirs, nous optimisons chaque détail pour
                une
                <span class="text-blue-500 font-bold">autonomie durable</span> sans gaspillage.
            </template>
        </BlogHero>

        <BlogSection v-for="(value, index) in sections" :key="value.title" v-bind="value" :index="index + 1"
            :reverse="index % 2 === 1" :bg-gray="index % 2 === 1" :theme-color="themeColor">
            <template #content>
                <p v-html="value.text"></p>
            </template>
        </BlogSection>

        <BlogOutro iconName="lucide:droplets" title="Une eau saine partout où vous allez"
            buttonText="Discuter de mon projet hydraulique" link="/contact">
            Besoin d'une douche chaude après une session de surf ou d'un système de filtration pour boire l'eau du
            réservoir ?
            Nous concevons le réseau qui s'adapte à votre mode de vie nomade.
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

const themeColor = "#3b82f6"

const sections = [
    {
        title: "Gestion de l'Eau",
        text: "Parce que l’autonomie, c’est avant tout la liberté de ne pas compter chaque goutte. Nous installons des <strong style='color: #3b82f6;'> réservoirs parfaitement intégrés </strong> pour vos eaux propres et grises, pensés pour maximiser vos réserves sans encombrer votre espace. Pour plus de confort, nous proposons également l'installation de sondes de niveau en option afin de garder un œil sur votre consommation.",        
        image: "/images/sanitaire_reservoir.webp",
        badge: "01 — Ressources",
        features: ['Pompe automatique', 'Sondes de niveau']
    },
    {
        title: "Douche à l'italienne",
        text: "Oubliez les douches froides et exiguës. Nous créons pour vous un véritable espace bien-être avec des finitions soignées et une <strong style='color: #3b82f6;'> étanchéité parfaite </strong> . Une douche à l'italienne dans votre van, c'est le luxe de se détendre après une journée d'aventure, avec tout le confort d'une maison.",        
        image: "/images/sanitaire_douche.jpeg",
        badge: "02 — Espace Bien-être",
        features: ['Étanchéité résine PU', 'Receveur encastré']
    },
    {
        title: "Solutions Toilettes",
        text: "Pour une hygiène parfaite sans les contraintes, nous proposons l'intégration discrète de <strong style='color: #3b82f6;'>toilettes sèches à séparation ou de solutions chimiques compactes</strong> . Un aménagement ventilé et ergonomique pour une autonomie totale en toute discrétion.",
        image: "/images/sanitaire_toilette.webp",
        badge: "03 — Hygiène & Discrétion",
        features: ['Toilettes sèches', 'Solutions chimiques']
    },
    {
        title: "Réseaux & Évacuations",
        text: "Cuisine ou salle de bain, nous soignons le cheminement des réseaux. La récupération des eaux grises s'adapte à votre usage : <strong style='color: #3b82f6;'> réservoir fixe </strong>  sous le châssis pour la discrétion, ou <strong style='color: #3b82f6;'> jerrycan amovible </strong> sous l'évier pour la simplicité. Tout est conçu pour éviter les odeurs et faciliter la vidange.",
        image: "/images/sanitaire_reseaux.jpg",
        badge: "03 — Technique & Récupération",
        features: ['Évacuation gravitaire', 'Siphon anti-odeur']
    },
]

// ANIMATIONS : Inchangées, elles fonctionnent parfaitement avec le nouveau thème
const { initHeroAnim, initScrollAnim, initOutroAnim } = useBlogAnimations()
let ctx;

onMounted(() => {
    // 1. On s'assure que le code ne tourne que côté client
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            // 2. On lance l'animation Hero immédiatement
            initHeroAnim()
            ScrollTrigger.refresh()
            
            // 3. On boucle sur les sections
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

        // 4. LE FIX : On force ScrollTrigger à recalculer après un court délai
        // Cela permet au DOM et aux images de prendre leur place finale
        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 2000)

        // 5. Sécurité supplémentaire : refresh au chargement complet
        window.addEventListener('load', () => ScrollTrigger.refresh())
    }
})

onUnmounted(() => {
    if (ctx) ctx.revert()
    // Nettoyage des événements pour éviter les fuites mémoire
    window.removeEventListener('load', () => ScrollTrigger.refresh())
})
</script>

<style scoped>
.soft-mask {
    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
}
</style>|