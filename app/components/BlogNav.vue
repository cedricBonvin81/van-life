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
                        class="px-4 py-2 rounded-full transition-all duration-300 border text-[12px] sm:text-xs tracking-widest uppercase inline-block whitespace-nowrap"
                        :class="[
                            $route.path === item.path
                                ? 'bg-black !text-white border-black shadow-lg shadow-black/10'
                                : 'bg-transparent text-gray-900 border-transparent hover:text-black'
                        ]">
                        {{ item.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>

<script setup>
import { useScroll } from '@vueuse/core'
import { ref, watch, computed } from 'vue'

const categories = [
    { name: 'Manifeste', path: '/blog' },
    { name: 'News', path: '/blog/news' },
    { name: 'Électricité', path: '/blog/electricite' },
    { name: 'Isolation', path: '/blog/isolation' },
    { name: 'Eau', path: '/blog/eau' },
]

const { y } = useScroll(window)
const isVisible = ref(true)

// Logique simplifiée : Pas de timer, elle obéit juste au mouvement
watch(y, (currentY, previousY) => {
    // 1. Toujours visible en haut de page
    if (currentY < 100) {
        isVisible.value = true
        return
    }

    // 2. On descend : on cache
    if (currentY > previousY + 2) {
        isVisible.value = false
    }
    // 3. On remonte : on montre (elle reste là tant qu'on ne redescend pas)
    else if (currentY < previousY - 2) {
        isVisible.value = true
    }
}, { immediate: true })

const shouldHide = computed(() => !isVisible.value)
</script>
