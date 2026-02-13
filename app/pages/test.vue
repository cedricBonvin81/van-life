<template>
    <div class="bg-white min-h-screen">
        <section class="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
            <div class="relative z-10 text-center px-6">
                <h1
                    class="hero-title text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter text-shadow-xl">
                    L'énergie <br /> Nomade
                </h1>
                <p
                    class="hero-subtitle text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Maîtrisez votre autonomie pour voyager sans limites, du panneau solaire au parc batterie.
                </p>
            </div>
        </section>

        <section class="py-24 max-w-4xl mx-auto px-6 text-center intro-text">
            <h2 class="text-2xl font-bold mb-6 uppercase tracking-widest text-van-dark">L'indépendance électrique</h2>
            <p class="text-gray-600 text-lg leading-relaxed">
                L'électricité est le cœur battant de votre aménagement. Elle alimente vos besoins essentiels :
                conserver vos aliments au frais, vous éclairer et recharger vos équipements.
                Parce que chaque voyageur a des besoins différents, nous définissons ensemble la configuration idéale
                entre <span class="text-primary font-bold">consommation, stockage et production</span>.
            </p>
        </section>

        <section class="bg-gray-50 py-32 overflow-hidden">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-20 items-center">
                    <div class="elec-img-1 rounded-[2rem] overflow-hidden soft-mask opacity-0">
                        <NuxtImg src="images/electricite_batterie.webp" format="webp" alt="Batterie Lithium LiFePO4"
                            class="w-full h-full object-cover -rotate-1 hover:rotate-0 transition-transform duration-700 bg-transparent"
                            loading="lazy" />
                    </div>
                    <div class="elec-text-1 text-right opacity-0">
                        <span class="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">
                            01 — Le Stockage
                        </span>
                        <h2 class="text-4xl font-bold mb-8 tracking-tight text-van-dark">Batteries Lithium LiFePO4</h2>
                        <p class="text-gray-600 text-lg leading-relaxed mb-8">
                            Le Lithium est devenu le standard pour l'autonomie. Plus légère et capable de supporter des
                            décharges profondes, c'est la solution idéale pour stocker un maximum d'énergie. Nous
                            privilégions cette technologie pour permettre l'usage de <strong>plaques à
                                induction</strong>, offrant un confort de cuisson moderne avec un parc batterie
                            dimensionné en conséquence.
                        </p>
                        <div class="flex justify-end gap-3">
                            <span
                                class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">Compatible
                                Induction</span>
                            <span
                                class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">Poids
                                Réduit</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
            <div class="grid md:grid-cols-2 gap-20 items-center">
                <div class="elec-text-2 order-2 md:order-1 opacity-0">
                    <span class="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block">02 — La
                        Production</span>
                    <h2 class="text-4xl font-bold mb-8 tracking-tight text-van-dark">Panneaux Solaires</h2>
                    <p class="text-gray-600 text-lg leading-relaxed mb-8">
                        Pour prolonger vos arrêts en pleine nature, le solaire est indispensable. Qu'ils soient rigides
                        ou flexibles pour épouser le toit de votre van, les panneaux transforment chaque rayon en
                        précieux ampères pour maintenir votre charge sans avoir à démarrer le moteur.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start gap-4">
                            <div
                                class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs">
                                ✓</div>
                            <p class="text-gray-700 font-medium">Régulateur MPPT haute efficacité</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <div
                                class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs">
                                ✓</div>
                            <p class="text-gray-700 font-medium">Énergie propre et silencieuse</p>
                        </div>
                    </div>
                </div>
                <div class="elec-img-2 order-1 md:order-2 rounded-[2rem] overflow-hidden soft-mask opacity-0">
                    <NuxtImg src="images/electricite_panneaux.png" format="webp" alt="Panneaux solaires van"
                        class="w-full h-full object-cover transition-transform duration-700 bg-transparent"
                        loading="lazy" />
                </div>
            </div>
        </section>

        <section class="bg-gray-50 py-32 overflow-hidden">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-20 items-center">
                    <div class="elec-img-3 rounded-[2rem] overflow-hidden soft-mask opacity-0">
                        <NuxtImg src="images/electricite_booster.jpg" format="webp" alt="Chargeur Booster DC-DC"
                            class="w-full h-full object-cover rotate-1 hover:rotate-0 transition-transform duration-700 bg-transparent"
                            loading="lazy" />
                    </div>
                    <div class="elec-text-3 text-right opacity-0">
                        <span class="text-green-600 font-bold tracking-widest text-xs uppercase mb-4 block">03 — La
                            Recharge</span>
                        <h2 class="text-4xl font-bold mb-8 tracking-tight text-van-dark">Chargeur Booster DC/DC</h2>
                        <p class="text-gray-600 text-lg leading-relaxed mb-8">
                            Le booster DC/DC, comme le <strong>Victron Orion</strong>, utilise l'alternateur de votre
                            véhicule pour injecter une charge stable et rapide dans votre parc batterie dès que vous
                            roulez. C'est le complément parfait du solaire pour garantir une autonomie totale, peu
                            importe la météo, tout en protégeant intelligemment votre installation électrique.
                        </p>
                        <div class="flex justify-end gap-3">
                            <span
                                class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">Charge
                                en roulant</span>
                            <span
                                class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">Sécurité
                                Alternateur</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
            <div class="grid md:grid-cols-2 gap-20 items-center">
                <div class="elec-text-4 order-2 md:order-1 opacity-0">
                    <span class="text-purple-500 font-bold tracking-widest text-xs uppercase mb-4 block">04 — La
                        Conversion</span>
                    <h2 class="text-4xl font-bold mb-8 tracking-tight text-van-dark">Convertisseur 12V / 230V</h2>
                    <p class="text-gray-600 text-lg leading-relaxed mb-8">
                        Pour transformer l'énergie de vos batteries et alimenter vos équipements domestiques,
                        l'installation d'un convertisseur pur sinus est indispensable. C'est lui qui permet l'usage de
                        vos <strong>plaques à induction</strong> et la recharge de vos appareils électroniques avec la
                        même stabilité qu'à la maison.
                    </p>
                    <div class="space-y-4 mb-8">
                        <div class="flex items-start gap-4">
                            <div
                                class="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs">
                                ✓</div>
                            <p class="text-gray-700 font-medium">Onde Pur Sinus haute fidélité</p>
                        </div>
                    </div>
                    <div class="flex justify-start gap-3">
                        <span
                            class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm tracking-widest text-van-dark">Usage
                            230V</span>
                        <span
                            class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm tracking-widest text-van-dark">Sécurité
                            Électrique</span>
                    </div>
                </div>
                <div class="elec-img-4 order-1 md:order-2 rounded-[2rem] overflow-hidden soft-mask opacity-0">
                    <NuxtImg src="images/electricite_convertisseur.png" format="webp"
                        alt="Convertisseur Victron Multiplus"
                        class="w-full h-full object-cover transition-transform duration-700 bg-transparent"
                        loading="lazy" />
                </div>
            </div>
        </section>

        <section class="py-32 max-w-3xl mx-auto px-6 text-center outro-text opacity-0">
            <h2 class="text-3xl font-bold mb-6 tracking-tighter uppercase text-van-dark">Dimensionnons votre autonomie
            </h2>
            <p class="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                Chaque voyageur a des besoins différents. Nous définissons votre installation sur mesure pour que
                l'énergie ne soit jamais un frein à vos aventures.
            </p>
            <NuxtLink to="/contact"
                class="inline-block border border-van-dark text-van-dark px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-van-dark hover:text-white transition-all duration-300">
                Étudier mon projet d'autonomie
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
            // HERO : On utilise fromTo pour FORCER le passage de 0 à 1
            gsap.fromTo(".hero-title",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
            )
            gsap.fromTo(".hero-subtitle",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power2.out" }
            )

            // Fonction pour les sections
            const createAnim = (el, xValue) => {
                gsap.fromTo(el,
                    { opacity: 0, x: xValue, y: xValue === 0 ? 30 : 0 },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 1.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                )
            }

            // On lance les animations sur tes classes existantes
            createAnim(".intro-text", 0)
            createAnim(".elec-img-1", -60)
            createAnim(".elec-text-1", 60)
            createAnim(".elec-text-2", -60)
            createAnim(".elec-img-2", 60)
            createAnim(".elec-img-3", -60)
            createAnim(".elec-text-3", 60)
            createAnim(".elec-text-4", -60)
            createAnim(".elec-img-4", 60)
            createAnim(".outro-text", 0)
        })

        // Un petit délai pour être sûr que le layout est posé
        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 100)
    }
})

onUnmounted(() => { if (ctx) ctx.revert() })
</script>

<style scoped>
.soft-mask {
    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
}

.opacity-0 {
    opacity: 0;
}

.text-shadow-xl {
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
</style>