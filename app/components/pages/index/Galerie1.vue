<template>
    <section class="gallery-1 py-16 md:py-24 bg-[#f8f8f8]">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-12 gap-y-12 md:gap-8 relative">

                <div @click="openLightbox('/images/index_foret.jpg')"
                    class="col-span-12 md:col-span-4 anim-v1 group cursor-zoom-in z-10">
                    <div class="max-w-[85%] sm:max-w-none mx-auto">
                        <div class="flex items-center gap-4 mb-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                            <div class="h-[1px] w-12 bg-primary"></div>
                            <span>Vue_01</span>
                        </div>
                        <div class="aspect-[3/4] overflow-hidden bg-white shadow-sm">
                            <!-- changement de liens au lightbox aussi -->
                            <NuxtImg    
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="/images/index_foret.jpg" 
                                sizes="sm:300px" 
                                format="webp"
                                quality="60" 
                                loading="lazy" 
                                preload
                                alt="Vue sur la foret depuis le lit du van" 
                            />
                        </div>
                    </div>
                </div>

                <div @click="openLightbox('/images/index_entree.jpeg')"
                    class="col-span-12 md:col-span-8 md:mt-32 anim-v2 group cursor-zoom-in relative z-0">
                    <div class="max-w-[95%] sm:max-w-none mx-auto">
                        <div class="flex items-center gap-4 mb-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                            <div class="h-[1px] w-12 bg-primary"></div>
                            <span>Atmosphère_02</span>
                        </div>
                        <div class="aspect-[3/2] overflow-hidden bg-white shadow-md">
                            <NuxtImg
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="/images/index_entree.jpeg" 
                                sizes="sm:500px" 
                                format="webp" 
                                quality="80" 
                                loading="lazy"
                                alt="Vue depuis l'entrée du van" />
                        </div>
                    </div>
                </div>

                <div @click="openLightbox('/images/index_mer.jpg')"
                    class="col-span-10 md:col-span-4 lg:col-start-2 -mt-10 md:-mt-40 anim-v3 group z-20 cursor-zoom-in">
                    <div class="max-w-[80%] sm:max-w-none mx-auto md:mx-0">
                        <div class="flex items-center gap-4 mb-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                            <div class="h-[1px] w-8 bg-primary"></div>
                            <span>Vue_03</span>
                        </div>
                        <div
                            class="aspect-square overflow-hidden bg-white shadow-2xl border-[4px] md:border-[4px] border-white">
                            <NuxtImg
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="/images/index_mer.jpg" 
                                sizes="sm:300px" 
                                format="webp" 
                                quality="80" 
                                loading="lazy"
                                alt="Vue sur la mer depuis la cuisine du van" />
                        </div>
                    </div>
                </div>

                <div
                    class="hidden md:block md:col-span-6 lg:col-span-4 lg:absolute lg:right-10 lg:top-[70%] anim-v4 z-30 mt-12 lg:mt-0">
                    <div @click="openLightbox('/images/index_jumper.jpeg')"
                        class="block group cursor-zoom-in relative">
                        <div class="max-w-[80%] lg:max-w-none mx-auto lg:mx-0">
                            <div class="aspect-[2/3] overflow-hidden bg-white shadow-2xl border-[4px] border-white">
                                <NuxtImg 
                                    class="w-full h-full object-cover" 
                                    src="/images/index_jumper.jpeg" 
                                    sizes="sm:300px"
                                    format="webp" 
                                    quality="80" 
                                    loading="lazy"
                                    alt="Intérieur du van imluminer par les leds."
                                />
                            </div>
                            <div
                                class="flex items-center justify-end gap-3 mt-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                                <span>Atmosphère_04</span>
                                <div class="w-12 h-[1px] bg-primary"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <Transition name="fade">
            <div v-if="isLightboxOpen"
                class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                @click="isLightboxOpen = false">

                <button class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
                    @click="isLightboxOpen = false">
                    <Icon name="lucide:x" class="w-10 h-10" />
                </button>

                <NuxtImg :key="activeImg" :src="activeImg"
                    class="max-w-full max-h-[90vh] object-contain shadow-2xl relative z-[105]" format="webp"
                    quality="60" />
            </div>
        </Transition>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const isLightboxOpen = ref(false)
const activeImg = ref('')

const openLightbox = (url) => {
    activeImg.value = url
    isLightboxOpen.value = true
}
</script>