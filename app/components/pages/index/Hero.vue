<template>
    <section class="relative min-h-screen w-full bg-black text-white pb-20 ">
        <div class="max-w-[1600px] mx-auto px-6 h-full relative">

            <div class="relative z-30 pt-10 md:pt-0 mb-10 md:mb-0 md:absolute md:top-10 md:left-10 w-full md:w-1/3">
                <h1
                    class="hero-title text-slate-300 text-5xl  bg-black md:text-[90px] lg:text-[120px] xl:text-[110px] font-black uppercase italic leading-[0.85] tracking-tighter">
                    Concevoir <br>
                    <span class="text-primary">L'Excellence</span> <br>
                    <span class="text-slate-300">Nomade</span>
                </h1>
                <p
                    class="mt-6 md:mt-8 text-slate-500 text-base md:text-xl font-light italic max-w-sm border-l-2 border-primary pl-6">
                    L'artisanat suisse au service de votre liberté.
                </p>

                <div class="hidden md:block mt-12 w-full h-64 lg:h-80 overflow-hidden shadow-lg img-new-left">
                    <NuxtImg src="https://picsum.photos/id/1015/800/600"
                        class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        alt="Ambiance voyage" />
                </div>
            </div>

            <div class="relative w-full h-full flex justify-end items-start pt-6 md:pt-0">
                <div class="relative w-full md:w-3/5 h-[450px] md:h-[850px]">

                    <div
                        class="w-full h-[400px] md:h-[800px] overflow-hidden relative md:absolute md:top-20 shadow-2xl img-main">
                        <NuxtImg src="https://picsum.photos/id/443/1200/1500"
                            class="w-full h-full object-cover scale-110" />
                    </div>

                    <div
                        class="absolute z-40 -bottom-64 md:-bottom-64 left-4   md:right-0 w-56 md:w-80 h-48 md:h-[450px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border-8 border-white img-detail-1">
                        <NuxtImg src="https://picsum.photos/id/31/800/1000" class="w-full h-full object-cover" />
                        <div
                            class="absolute bottom-3 left-3 md:bottom-6 md:left-6 bg-white/90 px-2 py-1 md:px-4 md:py-2 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                            Matière
                        </div>
                    </div>
                </div>

                <div
                    class="hidden xl:block absolute z-20 top-10 right-0 md:right-4 w-40 md:w-96 h-56 md:h-72 overflow-hidden shadow-2xl border-8 border-white img-detail-2">
                    <NuxtImg src="https://picsum.photos/id/2/600/800" class="w-full h-full object-cover" />
                    <div
                        class="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                        Précision
                    </div>
                </div>
            </div>
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

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

        tl.from(".hero-title", { x: -50, opacity: 0, duration: 1.2 })
            .from(".img-main", { y: 50, opacity: 0, duration: 1.5 }, "-=0.8")
            .from(".img-new-left", { y: 30, opacity: 0, duration: 1 }, "-=1") // Animation img-new-left toujours active
            .from(".img-detail-1", { scale: 0.9, opacity: 0, duration: 1 }, "-=0.5")

        if (window.innerWidth >= 1280) {
            tl.from(".img-detail-2", { y: -50, opacity: 0, duration: 1 }, "-=1")
        }

        gsap.to(".img-detail-1", {
            y: window.innerWidth > 768 ? -100 : -20,
            scrollTrigger: { trigger: ".img-main", start: "top bottom", scrub: true }
        })
    }
})
</script>