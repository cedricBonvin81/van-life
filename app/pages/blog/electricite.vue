<template>
    <div class="bg-white min-h-screen">

        <!-- HERO -->   
        <BlogHero
                title="L'énergie <br> <span class='text-primary'>Nomade</span>"
                hero-text="Maîtrisez votre autonomie pour voyager sans limites, du panneau solaire au parc batterie."
                intro-title="L'indépendance électrique"
            >
            <template #intro-text>
                L'électricité est le cœur battant de votre aménagement. Elle alimente vos besoins essentiels :
                conserver vos aliments au frais, vous éclairer et recharger vos équipements.
                Parce que chaque voyageur a des besoins différents, nous définissons ensemble la configuration idéale
                entre <span class="text-primary font-bold">consommation, stockage et production</span>.
            </template>
        </BlogHero>

        <BlogSection :index="1" title="Batteries Lithium LiFePO4" image="images/electricite_batterie.webp"
            badge="01 — Le Stockage" badgeColor="text-orange-500" checkBgColor="bg-orange-100 text-orange-500"
            :features="['Compatible Induction', 'Poids Réduit']">
            <template #content>
                Le Lithium est devenu le standard pour l'autonomie. Plus légère et capable de supporter des
                décharges profondes, c'est la solution idéale pour stocker un maximum d'énergie. Nous
                privilégions cette technologie pour permettre l'usage de <strong>plaques à
                    induction</strong>, offrant un confort de cuisson moderne avec un parc batterie
                dimensionné en conséquence.
            </template>          
        </BlogSection>

         <BlogSection :index="2" :reverse="true" :bg-gray=true title="Panneaux Solaires" image="images/electricite_panneaux.png"
            badge="02 — L'Electricité" badgeColor="text-blue-500" checkBgColor="bg-blue-100 text-blue-600"
            :features="['Énergie propre et silencieuse', 'Régulateur MPPT haute efficacité<']">
            <template #content>
                Pour prolonger vos arrêts en pleine nature, le solaire est indispensable. Qu'ils soient rigides
                ou flexibles pour épouser le toit de votre van, les panneaux transforment chaque rayon en
                précieux ampères pour maintenir votre charge sans avoir à démarrer le moteur.
            </template>
        </BlogSection>

        <BlogSection :index="3" :reverse="false" :bgGray="false" title="Chargeur Booster DC/DC"
            image="images/electricite_booster.jpg" badge="03 — La Recharge" badgeColor="text-green-600"
            checkBgColor="bg-green-100 text-green-600"
            :features="['Charge rapide en roulant', 'Protection Alternateur Smart']">
            <template #content>
                Le booster DC/DC, comme le <strong>Victron Orion</strong>, utilise l'alternateur de votre véhicule pour
                injecter une charge stable et rapide dans votre parc batterie dès que vous roulez. C'est le complément
                parfait du solaire pour garantir une autonomie totale.
            </template>
        </BlogSection>

        <BlogSection :index="4" :reverse="true" :bgGray="true" title="Convertisseur 12V / 230V"
            image="images/electricite_convertisseur.png" badge="04 — La Conversion" badgeColor="text-purple-500"
            checkBgColor="bg-purple-100 text-purple-600"
            :features="['Onde Pur Sinus haute fidélité', 'Usage Induction & 230V']">
            <template #content>
                Pour transformer l'énergie de vos batteries et alimenter vos équipements domestiques, l'installation
                d'un convertisseur pur sinus est indispensable. C'est lui qui permet l'usage de vos <strong>plaques à
                    induction</strong> avec la même stabilité qu'à la maison.
            </template>
        </BlogSection>

        <BlogOutro title="Dimensionnons votre autonomie" buttonText="Parlons de votre projet" link="/contact">
            Chaque voyageur a des besoins différents. Nous définissons votre installation sur mesure pour que l'énergie
            ne soit jamais un frein à vos aventures.
        </BlogOutro>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { initHeroAnim, initScrollAnim, initOutroAnim } = useBlogAnimations()
let ctx;

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            // 1. Animation d'entrée
            initHeroAnim()

            // Bloc 1 : Image à GAUCHE (vient de gauche), Texte à DROITE (vient de droite)
            initScrollAnim(".elec-img-1", 'left')
            initScrollAnim(".elec-text-1", 'right')

            // Bloc 2 : Texte à GAUCHE (vient de gauche), Image à DROITE (vient de droite)
            initScrollAnim(".elec-text-2", 'left')
            initScrollAnim(".elec-img-2", 'right')

            // Bloc 3 : Image à GAUCHE (vient de gauche), Texte à DROITE (vient de droite)
            // C'est ici qu'on corrige :
            initScrollAnim(".elec-img-3", 'left')
            initScrollAnim(".elec-text-3", 'right')

            // Bloc 4 : Texte à GAUCHE (vient de gauche), Image à DROITE (vient de droite)
            initScrollAnim(".elec-text-4", 'left')
            initScrollAnim(".elec-img-4", 'right')

            initOutroAnim(".outro-section")
        })

        // Petit délai de sécurité pour que le calcul des positions soit parfait
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

.text-shadow-xl {
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
</style>