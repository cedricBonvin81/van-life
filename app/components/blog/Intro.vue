<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps({
    title: String
})

const introRef = ref(null)

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(introRef.value,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: introRef.value,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        )
    }
})
</script>

<template>
    <section ref="introRef" class="py-24 max-w-4xl mx-auto px-6 text-center opacity-0">
        <h2 class="text-2xl font-bold mb-6 uppercase tracking-widest text-van-dark">{{ title }}</h2>
        <div class="text-gray-600 text-lg leading-relaxed">
            <slot />
        </div>
    </section>
</template>
