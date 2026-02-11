<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const links = [
  { name: 'Accueil', href: '/' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'Blog', href: '/blog' }, // Nouvelle page ajoutée ici
]
</script>

<template>
  <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">

        <!-- LOGO -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-bold tracking-tighter text-van-dark group">
            VAN<span class="text-primary text-3xl group-hover:px-1 transition-all duration-300">-</span>LIFE<span
              class="text-xs font-light text-gray-400">.CH</span>
          </NuxtLink>
        </div>

        <!-- NAVIGATION DESKTOP -->
        <div class="hidden md:flex space-x-10 items-center">
          <NuxtLink v-for="link in links" :key="link.name" :to="link.href"
            class="nav-link text-sm font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">
            {{ link.name }}
          </NuxtLink>

          <!-- BOUTON OUTLINED LÉGER -->
          <NuxtLink to="/contact"
            class="contact-button border border-van-dark text-van-dark px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-van-dark hover:text-white transition-all duration-300 group">
            Contact <span class="text-primary group-hover:text-white transition-colors mx-0.5">&</span> FAQ
          </NuxtLink>
        </div>

        <!-- BOUTON MOBILE -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-van-dark p-2 focus:outline-none" aria-label="Menu">
            <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>

    <!-- MENU MOBILE -->
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="isMenuOpen" class="md:hidden bg-white border-b border-gray-200 absolute w-full left-0 shadow-xl z-40">
        <div class="px-6 py-8 space-y-6 text-center font-bold">
          <NuxtLink v-for="link in links" :key="link.name" :to="link.href" @click="isMenuOpen = false"
            class="block text-lg text-van-dark">
            {{ link.name }}
          </NuxtLink>
          <NuxtLink to="/contact" @click="isMenuOpen = false"
            class="inline-block border border-van-dark text-van-dark px-8 py-3 rounded-full uppercase tracking-widest text-sm">
            Contact <span class="text-primary">&</span> FAQ
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.nav-link.router-link-active:not([href="/"]),
.nav-link.router-link-exact-active {
  @apply text-primary;
}

.contact-button.router-link-active {
  @apply bg-van-dark text-white;
}

.contact-button.router-link-active :deep(.text-primary) {
  @apply text-white;
}
</style>
