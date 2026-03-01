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
import { useAnimations } from '~/composables/useAnimations'

definePageMeta({
    layout: 'base'
})

// SEO Meta
useSeoMeta({
    // Titre : Clair et direct
    title: 'Contactez Van-Life | Devis & Projet d’Aménagement en Valais',
    description: 'Une question ? Un projet de van sur-mesure ? Contactez-nous pour discuter de votre futur aménagement. Atelier situé en Valais.',

    // Open Graph
    ogTitle: 'Contactez Van-Life.ch | Discutons de votre projet',
    ogDescription: 'Prêt à passer à l’action ? Prenez contact pour un devis personnalisé ou une visite à l’atelier.',
    ogImage: '/images/contact_hero.jpg', // Une photo de toi à l'œuvre ou de l'entrée de l'atelier
    ogType: 'website',

    // X / WhatsApp / Telegram
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contact | Van-Life.ch',
    twitterDescription: 'Demandez votre devis gratuit pour votre aménagement de van.',
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

// ---- ANIMATIONS via composable ----
const { contact } = useAnimations()

onMounted(() => {
    if (process.client) {
        // Hero + Formulaire
        contact.heroForm()

        // FAQ
        contact.faq()
    }
})
</script>


