<template>
    <div class="bg-white min-h-screen">

        <!-- HERO -->   
        <BlogHero
                title="L'énergie <br> <span style='color: #dc2626'>Nomade</span>"
                hero-text="Maîtrisez votre autonomie pour voyager sans limites, du panneau solaire au parc batterie."
                intro-title="L'indépendance électrique"
            >
            <template #intro-text>
                L'électricité est le cœur battant de votre aménagement. Elle alimente vos besoins essentiels :
                conserver vos aliments au frais, vous éclairer et recharger vos équipements.
                Parce que chaque voyageur a des besoins différents, nous définissons ensemble la configuration idéale
                entre <span style="color: #dc2626; font-weight: bold;">consommation, stockage et production</span>.
            </template>
        </BlogHero>

        <!-- SECTION -->
        <BlogSection v-for="(value, index) in sections" :key="value.title" v-bind="value" :index="index + 1"
            :reverse="index % 2 === 1" :bg-gray="index % 2 === 1"
            :theme-color="themeColor"
            >
            <template #content>
                <p v-html="value.text"></p>
            </template>
        </BlogSection>

        <BlogOutro 
            iconName="lucide:zap" 
            title="Dimensionnons votre autonomie" 
            buttonText="Parlons de votre projet" 
            link="/contact">
            Chaque voyageur a des besoins différents. Nous définissons votre installation sur mesure pour que l'énergie
            ne soit jamais un frein à vos aventures.
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

const themeColor = "#dc2626" // Orange-500 de Tailwind, tu peux ajuster selon ta palette
// CONTENT 

const sections = [
    {
        title: "Batteries Lithium LiFePO4",
        text: "<strong style='color: #dc2626'>Le Lithium</strong> est devenu le standard pour l'autonomie. Plus légère et capable de supporter des décharges profondes, c'est la solution idéale pour stocker un maximum d'énergie. Nous privilégions cette technologie pour permettre l'usage de <strong style='color: #dc2626'> plaques à induction </strong>, offrant un confort de cuisson moderne avec un parc batterie dimensionné en conséquence.",        
        image: "/images/electricite_batterie.webp",
        badge: "01 — Le Stockage",
        features: ['Compatible Induction', 'Poids Réduit']
    },
    {
        title: "Panneaux Solaires",
        text: "Pour prolonger vos arrêts en pleine nature, le solaire est indispensable. Qu'ils soient <strong style='color: #dc2626'> rigides ou flexibles </strong> pour épouser le toit de votre van, les panneaux transforment chaque rayon en précieux ampères pour maintenir votre charge sans avoir à démarrer le moteur.",
        image: "/images/electricite_panneaux.png",
        badge: "02 — L'Electricité",
        features: ['Énergie propre et silencieuse', 'Régulateur MPPT haute efficacité']
    },
    {
        title: "Chargeur Booster DC/DC",
        text: "Le booster DC/DC, comme le Victron Orion, <strong style='color: #dc2626'> utilise l'alternateur de votre véhicule </strong> pour injecter une charge stable et rapide dans votre parc batterie dès que vous roulez. C'est le complément parfait du solaire pour garantir une autonomie totale.",
        image: "/images/electricite_booster.jpg",
        badge: "03 — La Recharge",
        features: ['Charge rapide en roulant', 'Protection Alternateur Smart']
    },
    {
        title: "Convertisseur 12V / 230V",
        text: "Pour transformer l'énergie de vos batteries et alimenter <strong style='color: #dc2626'> vos équipements domestiques </strong>, l'installation d'un convertisseur pur sinus est indispensable. C'est lui qui permet l'usage de vos plaques à induction avec la même stabilité qu'à la maison.",
        image: "/images/electricite_convertisseur.png",
        badge: "04 — La Conversion",
        features: ['Onde Pur Sinus haute fidélité', 'Usage Induction & 230V']
    }       
]

// ANIMATIONS
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

.text-shadow-xl {
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
</style>