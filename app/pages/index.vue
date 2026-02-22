

<template>
  <main class="relative bg-white">
    <PagesIndexHero class="relative" />
    <PagesIndexManifesteApercu class="relative " />
    <PagesIndexGalerie1 class="relative " />
    <PagesIndexPourquoi class="relative " />
    <PagesIndexGalerie2 class="relative " />
    <PagesIndexTechnicalExpertise class="relative " />
    <PagesIndexAction class="relative " />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAnimations } from '~/composables/useAnimations'

definePageMeta({ layout: 'base' })

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

