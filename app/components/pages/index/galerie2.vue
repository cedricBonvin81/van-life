<template>
    <section class="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-slate-900">
        <div class="absolute inset-0 w-full h-full scale-110 divider-img">
            <img src="https://picsum.photos/id/443/1920/1080" class="w-full h-full object-cover opacity-60"
                alt="L'esprit du voyage" />
        </div>

        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

        <div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 class="text-white text-3xl md:text-5xl font-light tracking-[0.3em] uppercase reveal-text">
                L'horizon pour seule limite
            </h2>
            <div class="w-12 h-px bg-primary mt-8 reveal-text opacity-80"></div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        // Parallaxe sur l'image (l'image bouge moins vite que le scroll)
        gsap.to(".divider-img", {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: ".divider-img",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        // Animation du texte à l'entrée
        gsap.from(".reveal-text", {
            opacity: 0,
            y: 40,
            duration: 1.5,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".reveal-text",
                start: "top 85%",
            }
        })
    }
})
</script>