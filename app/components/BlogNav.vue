<template>
    <nav :class="[
        'fixed left-0 right-0 transition-all duration-500 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100',
        shouldHide ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    ]" style="top: 80px;">
        <!-- Conteneur avec scroll horizontal masqué sur mobile -->
        <div class="max-w-7xl mx-auto px-4 py-6 overflow-x-auto no-scrollbar">
            <ul class="flex flex-nowrap md:flex-wrap gap-4 md:justify-center items-center">
                <li v-for="item in categories" :key="item.path" class="flex-none">
                    <NuxtLink :to="item.path"
                        class="px-4 py-2 rounded-full transition-all duration-300 border text-[12px] sm:text-xs tracking-widest uppercase inline-block whitespace-nowrap border-transparent text-gray-900 hover:text-black"
                        active-class="bg-black !text-white border-black shadow-lg shadow-black/10"
                        :exact="item.path === '/blog'">
                        {{ item.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { useScroll } from '@vueuse/core'
import { ref, watch, computed } from 'vue'

// Liste des catégories pour van-life.ch
const categories = [
    { name: 'Manifeste', path: '/blog' },
    { name: 'News', path: '/blog/news' },
    { name: 'Électricité', path: '/blog/electricite' },
    { name: 'Isolation', path: '/blog/isolation' },
    { name: 'Eau', path: '/blog/eau' },
]

// Utilisation de VueUse pour suivre le scroll de la fenêtre
const { y } = useScroll(window)
const isVisible = ref(true)

// Watcher pour gérer l'affichage/masquage au scroll
watch(y, (currentY, previousY) => {
    // 1. Toujours visible si on est en haut (seuil de 100px)
    if (currentY < 100) {
        isVisible.value = true
        return
    }

    // 2. Se cache si on descend (scroll down)
    if (currentY > previousY + 5) {
        isVisible.value = false
    }
    // 3. Réapparaît si on remonte (scroll up)
    else if (currentY < previousY - 5) {
        isVisible.value = true
    }
})

const shouldHide = computed(() => !isVisible.value)
</script>

<style scoped>
/* Masque la barre de défilement tout en gardant la fonctionnalité de scroll */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    /* IE et Edge */
    scrollbar-width: none;
    /* Firefox */
}

/* Optionnel : Ajoute un léger fondu sur les bords du scroll mobile */
@media (max-width: 768px) {
    .overflow-x-auto {
        mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    }
}
</style>
