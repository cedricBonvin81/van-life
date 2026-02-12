<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps({
    title: String,
    buttonText: String,
    link: { type: String, default: '/contact' }
})

const outroRef = ref(null)

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(outroRef.value,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: outroRef.value,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        )
    }
})
</script>

<template>
    <section ref="outroRef" class="py-32 max-w-3xl mx-auto px-6 text-center opacity-0">
        <h2 class="text-3xl font-bold mb-6 tracking-tighter uppercase text-van-dark">{{ title }}</h2>
        <div class="text-gray-600 text-lg mb-10 leading-relaxed font-light">
            <slot />
        </div>
        <NuxtLink :to="link"
            class="inline-block border border-van-dark text-van-dark px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-van-dark hover:text-white transition-all duration-300">
            {{ buttonText }}
        </NuxtLink>
    </section>
</template>
