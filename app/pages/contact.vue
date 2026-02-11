<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
}

useSeoMeta({
    title: 'Contact | Atelier d\'Aménagement Van Life en Suisse',
    description: 'Projet d\'aménagement sur mesure, pose de fenêtres ou conseil technique ? Contactez notre atelier à La Place (Valais) pour votre utilitaire.',
    ogTitle: 'Parlons de votre projet Van Life | Atelier Suisse',
    ogDescription: 'De la conception à la réalisation, transformez votre van en cocon nomade.',
    ogImage: '/images/contact.jpg',
})

definePageMeta({
    layout: 'base'
})

const form = ref({
    name: '',
    email: '',
    message: ''
})

onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } })

    tl.from(".header-anim", { y: 30, opacity: 0, stagger: 0.2 })
        .from(".card-anim", { y: 60, opacity: 0, duration: 1.5 }, "-=0.6")
        .from(".form-item", { x: -20, opacity: 0, stagger: 0.2 }, "-=0.8")

    gsap.from(".faq-item", {
        scrollTrigger: {
            trigger: ".faq-section",
            start: "top 85%",
        },
        y: 60,            // Plus d'amplitude pour voir le mouvement
        opacity: 0,
        stagger: 0.25,    // Garde ton rythme entre les questions
        duration: 1.5,    // Augmente la durée (0.8 -> 1.5) pour plus de douceur
        delay: 0.5,       // Attente de 0.3s avant de lancer la première question
        ease: "power3.out" // "Power3" est plus "soyeux" que "Power2"
    })
})

const handleSubmit = () => {
    console.log('Formulaire soumis :', form.value)
    alert('Merci ! Votre demande a été envoyée.')
    form.value = { name: '', email: '', message: '' }
}
</script>

<template>
    <div class="bg-white">
        <!-- Header d'introduction -->
        <header class="mx-auto max-w-3xl text-center pt-16 pb-12 px-6">
            <h1 class="header-anim text-4xl font-extrabold tracking-tight sm:text-5xl text-van-dark">
                Donnez vie à vos <span class="text-primary">envies d'ailleurs</span>
            </h1>
            <p class="header-anim mt-4 text-lg leading-8 text-content">
                Que ce soit pour un aménagement complet, une pose de fenêtre ou simplement un conseil technique,
                notre atelier est là pour transformer votre utilitaire en véritable cocon nomade.
            </p>
        </header>

        <!-- Section Contact Card -->
        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-12">
            <div
                class="card-anim grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden border border-slate-100">

                <!-- COLONNE GAUCHE : Infos & Photo -->
                <div class="relative flex flex-col justify-center px-8 py-16 sm:px-12 lg:p-16 bg-slate-900 text-white">
                    <div class="absolute inset-0">
                        <NuxtImg src="/images/contact.jpg" alt="Atelier Van Life"
                            class="h-full w-full object-cover object-right opacity-60" placeholder format="webp"
                            width="800" height="1000" loading="lazy" />
                        <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
                    </div>

                    <div class="relative z-10">
                        <div class="flex items-center gap-x-4">
                            <div class="h-10 w-0.5 bg-primary rounded-full"></div>
                            <h2 class="text-3xl font-bold tracking-tight italic sm:text-4xl text-white">Parlons de votre
                                projet
                            </h2>
                        </div>

                        <dl class="mt-10 space-y-8 text-base leading-7">
                            <div class="flex gap-x-4">
                                <dt class="flex-none text-primary">
                                    <Icon name="uil:map-marker" class="h-7 w-6" />
                                </dt>
                                <dd>
                                    <a href="https://www.google.com" target="_blank"
                                        class="hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline">
                                        Rue Saint-Michel 25, <br>1966 La Place, Suisse
                                    </a>
                                </dd>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none text-primary">
                                    <Icon name="uil:phone" class="h-7 w-6" />
                                </dt>
                                <dd><a class="hover:text-primary transition-colors font-semibold"
                                        href="tel:+41795190484">+41 79 519 04 84</a></dd>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none text-primary">
                                    <Icon name="uil:clock" class="h-7 w-6" />
                                </dt>
                                <dd>
                                    <span class="font-bold">Horaires d'ouverture :</span><br>
                                    <span class="text-slate-300">Lun - Ven : 08h00 - 18h00</span><br>
                                    <span class="text-slate-400 text-sm italic underline decoration-primary/50">Sur
                                        rendez-vous uniquement</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <!-- COLONNE DROITE : Formulaire -->
                <div class="bg-white px-6 py-12 lg:p-16">
                    <form @submit.prevent="handleSubmit" class="mx-auto max-w-xl space-y-6">
                        <div class="form-item">
                            <label for="name" class="block text-sm font-semibold leading-6 text-van-dark">Nom
                                complet</label>
                            <input v-model="form.name" type="text" id="name"
                                class="mt-2 block w-full rounded-lg border border-slate-200 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                                placeholder="Votre nom" required />
                        </div>
                        <div class="form-item">
                            <label for="email"
                                class="block text-sm font-semibold leading-6 text-van-dark">E-mail</label>
                            <input v-model="form.email" type="email" id="email"
                                class="mt-2 block w-full rounded-lg border border-slate-200 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                                placeholder="nom@exemple.ch" required />
                        </div>
                        <div class="form-item">
                            <label for="message" class="block text-sm font-semibold leading-6 text-van-dark">Votre
                                projet (Véhicule, besoins...)</label>
                            <textarea v-model="form.message" id="message" rows="4"
                                class="mt-2 block w-full rounded-lg border border-slate-200 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                                placeholder="VW T6, Sprinter... Quel est votre projet ?"></textarea>
                        </div>
                        <div class="form-item pt-4">
                            <button type="submit"
                                class="w-full sm:w-auto rounded-full bg-primary px-10 py-4 text-sm font-bold text-white shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300">
                                Envoyer ma demande
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Section FAQ Flash -->
        <section class="faq-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div class="bg-slate-50 rounded-[2.5rem] px-8 py-16 sm:px-12 border border-slate-100">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-van-dark mb-4">Questions fréquentes</h2>
                    <div class="h-1 w-12 bg-primary mx-auto rounded-full"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div class="faq-item space-y-2">
                        <h4 class="font-bold text-primary flex items-center gap-2 text-lg">
                            <Icon name="uil:check-circle" /> Quels véhicules aménagez-vous ?
                        </h4>
                        <p class="text-content leading-relaxed">Nous travaillons sur tous types de porteurs : du petit
                            van (VW T6, Trafic) au grand fourgon (Sprinter, Crafter, Ducato).</p>
                    </div>
                    <div class="faq-item space-y-2">
                        <h4 class="font-bold text-primary flex items-center gap-2 text-lg">
                            <Icon name="uil:check-circle" /> Équipements à la carte ?
                        </h4>
                        <p class="text-content leading-relaxed">Oui, nous installons aussi des éléments séparés :
                            chauffage stationnaire, fenêtres, panneaux solaires ou batteries lithium.</p>
                    </div>
                    <div class="faq-item space-y-2">
                        <h4 class="font-bold text-primary flex items-center gap-2 text-lg">
                            <Icon name="uil:check-circle" /> Gérez-vous l'homologation ?
                        </h4>
                        <p class="text-content leading-relaxed">Nous préparons les dossiers techniques pour le passage
                            au service des automobiles (expertise VASP/Camping-car) en Suisse.</p>
                    </div>
                    <div class="faq-item space-y-2">
                        <h4 class="font-bold text-primary flex items-center gap-2 text-lg">
                            <Icon name="uil:check-circle" /> Quels sont vos délais ?
                        </h4>
                        <p class="text-content leading-relaxed">Selon la complexité, comptez de 2 semaines pour un pack
                            technique à 3 mois pour un aménagement complet sur-mesure.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
