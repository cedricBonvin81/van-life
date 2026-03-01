<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// 1. Configuration de base (Langue, Favicon, etc.)
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

// 2. SEO Global (Optionnel mais recommandé pour les réseaux sociaux)
useSeoMeta({
  ogLocale: 'fr_CH',
  ogSiteName: 'Van-Life.ch',
})

// 3. Ton Schema.org pour le SEO Local
useSchemaOrg([
  defineLocalBusiness({
    name: 'Van-Life.ch',
    logo: '/logo.png',
    image: '/images/manifeste_hero.jpg',
    description: 'Aménagement artisanal de vans et fourgons sur-mesure en Valais. Qualité suisse.',
    address: {
      addressLocality: 'La Place',
      addressRegion: 'VS',
      postalCode: '1966',
      addressCountry: 'CH',
    },
    geo: {
      latitude: 46.2415,
      longitude: 7.3486,
    },
    url: 'https://van-life.ch',
    telephone: '+41795190484',
    priceRange: '$$',
    openingHours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    ]
  })
])
</script>