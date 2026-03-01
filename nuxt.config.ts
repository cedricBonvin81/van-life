export default defineNuxtConfig({
  // 1. On active la compatibilité Nuxt 4
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // 2. La liste des modules (bien vérifier que @nuxtjs/seo y est)
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/seo'
  ],

  // 3. Configuration de l'identité du site (Le moteur du SEO)
  site: {
    url: 'https://van-life.ch',
    name: 'Van-Life.ch',
    description: 'Atelier d\'aménagement de vans sur mesure en Valais.',
    defaultLocale: 'fr-CH',
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'fr-CH' },
      titleTemplate: '%s | Van-Life.ch',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap' }
      ]
    }
  },

  ogImage: {
    enabled: false, // Force l'activation
  },
})