<template>
    <div class="bg-white selection:bg-primary selection:text-white">

        <PagesContactHero />

        <PagesContactForm @response="handleResponse" />

        <PagesContactFaq />

        <AppModal 
        :show="modal.show" 
        :status="modal.status" 
        :title="modal.title" 
        :message="modal.message"
        @close="modal.show = false" 
        />
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue' // Force l'import si l'auto-import se perd
    import gsap from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'

definePageMeta({
    layout: 'base'
})

// SEO Meta
useSeoMeta({
    title: 'Contact | Atelier d\'Aménagement Van Life en Suisse',
    description: 'Projet sur mesure ou conseil technique ? Contactez notre atelier à La Place (Valais).',
    ogImage: '/images/contact.jpg',
})


const modal = ref({
    show: false,
    status: 'success',
    title: '',
    message: ''
})

const handleResponse = (status) => {
    modal.value.status = status
    if (status === 'success') {
        modal.value.title = 'Message envoyé'
        modal.value.message = 'On pose la visseuse et on regarde ça. On vous recontacte d\'ici 48h.'
    } else {
        modal.value.title = 'Oups...'
        modal.value.message = 'Petit problème technique. Réessayez ou appelez-nous directement.'
    }
    modal.value.show = true
}




onMounted(() => {
    // 1. On vérifie qu'on est côté client
    if (process.client) {
        // 2. On enregistre le plugin
        gsap.registerPlugin(ScrollTrigger)

        // 3. Timeline pour l'entrée en scène (Hero + Formulaire)
        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 1.2 }
        })

        tl.from(".header-anim", {
            y: 100,
            opacity: 0,
            stagger: 0.1
        })
            .from(".card-anim", {
                y: 40,
                opacity: 0
            }, "-=1")
            .from(".form-item", {
                y: 20,
                opacity: 0,
                stagger: 0.1
            }, "-=0.8")

        // 4. Animation spécifique pour la FAQ au scroll
        gsap.from(".faq-item", {
            scrollTrigger: {
                trigger: ".faq-section", // La classe doit être dans ton composant FAQ
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out"
        })
    }
})
</script>


