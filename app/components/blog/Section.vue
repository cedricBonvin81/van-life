<template>
    <section :id="id" :class="['py-24 overflow-hidden', bgGray ? 'bg-gray-50' : 'bg-white']">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-20 items-center">

                <div :class="[
                    imageClass,
                    'rounded-[2rem] overflow-hidden flex items-center justify-center',
                    'aspect-[4/3] md:aspect-[16/9] w-full ', // 16/9 est plus moderne et moins haut
                    reverse ? 'md:order-2' : 'md:order-1'
                ]">
                    <NuxtImg :src="imageSrc" format="webp" :alt="title"
                        class="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                        :class="reverse ? 'rotate-1' : '-rotate-1'" />
                </div>

                <div :class="[
                    textClass,
                    reverse ? 'md:order-1 text-left' : 'md:order-2 md:text-right text-left'
                ]">
                    <span :class="[accentColor, 'font-bold tracking-widest text-xs uppercase mb-4 block']">
                        {{ subtitle }}
                    </span>
                    <h2 class="text-4xl font-bold mb-8 tracking-tight text-van-dark">
                        {{ title }}
                    </h2>

                    <div class="text-gray-600 text-lg leading-relaxed mb-8">
                        <slot name="description" />
                    </div>

                    <slot name="extra" />
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    id: String,
    title: String,
    subtitle: String,
    imageSrc: String,
    reverse: Boolean, // Gère l'alternance Gauche/Droite
    bgGray: Boolean,  // Alterne la couleur de fond
    accentColor: String,
    imageClass: String, // Pour le ciblage GSAP
    textClass: String   // Pour le ciblage GSAP
})
</script>

<style scoped>
/* Masque doux pour les images */
.soft-mask {
    mask-image: radial-gradient(circle, black 60%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle, black 60%, transparent 100%);
}
</style>