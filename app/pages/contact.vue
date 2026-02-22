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


