<template>
    <section class="py-16 md:py-24 bg-[#f8f8f8] overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-12 gap-y-12 md:gap-8 relative">

                <div @click="openLightbox('https://picsum.photos/id/13/1200/1600')"
                    class="col-span-12 md:col-span-4 anim-v1 group cursor-zoom-in z-10">
                    <div class="max-w-[85%] sm:max-w-none mx-auto">
                        <div class="flex items-center gap-4 mb-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                            <div class="h-[1px] w-12 bg-primary"></div>
                            <span>Structure_01</span>
                        </div>
                        <div class="aspect-[3/4] overflow-hidden bg-white shadow-sm">
                            <NuxtImg src="https://picsum.photos/id/13/600/800"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                    </div>
                </div>

                <div @click="openLightbox('https://picsum.photos/id/42/1600/1000')"
                    class="col-span-12 md:col-span-8 md:mt-32 anim-v2 group cursor-zoom-in relative z-0">
                    <div class="max-w-[95%] sm:max-w-none mx-auto">
                        <div class="flex items-center gap-4 mb-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                            <div class="h-[1px] w-12 bg-primary"></div>
                            <span>Atmosphère_02</span>
                        </div>
                        <div class="aspect-[3/2] overflow-hidden bg-white shadow-md">
                            <NuxtImg src="https://picsum.photos/id/42/1200/800"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>

                <div @click="openLightbox('https://picsum.photos/id/48/1200/1200')"
                    class="col-span-10 md:col-span-4 lg:col-start-2 -mt-10 md:-mt-40 anim-v3 group z-20 cursor-zoom-in">
                    <div class="max-w-[80%] sm:max-w-none mx-auto md:mx-0">
                        <div class="flex items-center gap-4 mb-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                            <div class="h-[1px] w-8 bg-primary"></div>
                            <span>Détail_03</span>
                        </div>
                        <div
                            class="aspect-square overflow-hidden bg-white shadow-2xl border-[6px] md:border-[8px] border-white">
                            <NuxtImg src="https://picsum.photos/id/48/800/800"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                    </div>
                </div>

                <div
                    class="hidden md:block md:col-span-6 lg:col-span-4 lg:absolute lg:right-10 lg:top-[70%] anim-v4 z-30 mt-12 lg:mt-0">
                    <div @click="openLightbox('https://picsum.photos/id/57/1200/1800')"
                        class="block group cursor-zoom-in relative">
                        <div class="max-w-[80%] lg:max-w-none mx-auto lg:mx-0">
                            <div class="aspect-[2/3] overflow-hidden bg-white shadow-2xl border-[12px] border-white">
                                <NuxtImg src="https://picsum.photos/id/57/600/900" class="w-full h-full object-cover" />
                            </div>
                            <div
                                class="flex items-center justify-end gap-3 mt-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                                <span>Projet_Vex</span>
                                <div class="w-12 h-[1px] bg-primary"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <Transition name="fade">
            <div v-if="isLightboxOpen"
                class="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                @click="isLightboxOpen = false">
                <NuxtImg :src="activeImg" class="max-w-full max-h-[90vh] object-contain shadow-2xl" />
                <button
                    class="absolute top-10 right-10 text-white font-mono text-sm uppercase tracking-widest">Fermer</button>
            </div>
        </Transition>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Variables réactives pour la Lightbox
const isLightboxOpen = ref(false)
const activeImg = ref('')

const openLightbox = (url) => {
    activeImg.value = url
    isLightboxOpen.value = true
}

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        let mm = gsap.matchMedia();

        // 1. Parallaxe différencié (Desktop & Tablette)
        mm.add("(min-width: 768px)", () => {
            gsap.to('.anim-v1', { y: -40, scrollTrigger: { trigger: '.anim-v1', scrub: 1 } })
            gsap.to('.anim-v2', { y: 30, scrollTrigger: { trigger: '.anim-v2', scrub: 1 } })
            gsap.to('.anim-v3', { y: -50, scrollTrigger: { trigger: '.anim-v3', scrub: 1 } })
            gsap.to('.anim-v4', { y: -70, x: -10, scrollTrigger: { trigger: '.anim-v4', scrub: 1.2 } })
        });

        // 2. Parallaxe réduit (Mobile)
        mm.add("(max-width: 767px)", () => {
            gsap.to('.anim-v1, .anim-v2, .anim-v3', {
                y: -10,
                scrollTrigger: {
                    trigger: '.container',
                    start: "top bottom",
                    scrub: true
                }
            })
        });

        // 3. Reveal (Apparition fluide au premier scroll)
        // Ajout de .anim-v4 pour qu'elle profite aussi de l'effet sur tablette/desktop
        const anims = ['.anim-v1', '.anim-v2', '.anim-v3', '.anim-v4']
        anims.forEach((selector) => {
            gsap.from(selector, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: selector,
                    start: "top 92%",
                    toggleActions: "play none none none" // Joue l'animation une seule fois
                }
            })
        })
    }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>