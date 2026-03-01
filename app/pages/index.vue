

<template>
  <div class="relative bg-white">
    <PagesIndexHero class="relative" />
    <PagesIndexManifesteApercu class="relative " />
    <PagesIndexGalerie1 class="relative " />
    <PagesIndexPourquoi class="relative " />
    <PagesIndexGalerie2 class="relative " />
    <PagesIndexTechnicalExpertise class="relative " />
    <PagesIndexAction class="relative " />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAnimations } from '~/composables/useAnimations'

definePageMeta({ layout: 'base' })

useSeoMeta({
  title: 'Aménagement de Van sur Mesure en Valais | Van-Life.ch',
  description: 'Artisan menuisier spécialisé en aménagement de vans personnalisés à Ayent. Créations uniques, électricité, chauffage et autonomie pour vos aventures en Suisse.',

  // Open Graph (Réseaux sociaux : Facebook, WhatsApp, Instagram)
  ogTitle: 'Van-Life | Aménagements de Vans Artisanaux & Sur-Mesure',
  ogDescription: 'Transformez votre véhicule en cocon d’aventure. Expertise menuisière, pack électrique et chauffage. Qualité artisanale en plein cœur du Valais.',
  ogImage: '/images/accueil_hero.jpg',
  ogType: 'website',
  ogUrl: 'https://van-life.ch',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Van-Life | Aménagement de Van en Valais',
  twitterDescription: 'Créations de vans uniques et autonomes par des artisans passionnés.',
  twitterImage: '/images/accueil_hero.jpg',
})

const { home } = useAnimations()

onMounted(() => {
  if (process.client) {
    home.hero()
    home.manifesteApercu()
    home.sections('.gallery-1')
    home.pourquoi()
    home.galerie2()
    home.expertise()
    home.cta()
  }
})
</script>

