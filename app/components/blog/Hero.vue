<script setup>
import gsap from 'gsap'
defineProps({ title: String, subtitle: String, image: String })

onMounted(() => {
    gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" })
    gsap.to(".hero-subtitle", { opacity: 1, y: 0, duration: 1, delay: 0.4 })
})
</script>

<template>
    <section class="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <img :src="image" class="absolute inset-0 w-full h-full object-cover opacity-60 scale-110" />
        <div class="relative z-10 text-center px-6">
            <h1 class="hero-title opacity-0 translate-y-10 text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter text-shadow-xl"
                v-html="title"></h1>
            <p
                class="hero-subtitle opacity-0 translate-y-5 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                {{ subtitle }}
            </p>
        </div>
    </section>
</template>
