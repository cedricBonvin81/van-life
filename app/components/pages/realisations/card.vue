<template>
    <div
        class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
        <div class="relative h-72 overflow-hidden">
            <NuxtImg 
                :src="mainImage" 
                :alt="name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy" 
                quality="80"
                format="webp" 
                densities="1x 2x" 
                sizes="xs:100vw sm:100vw md:50vw lg:600px"
            />
            <div class="absolute top-5 left-5">
                <span
                    class="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm">
                    {{ vehicleType }}
                </span>
            </div>
        </div>

        <div class="p-8 flex-1 flex flex-col">
            <h3 class="text-3xl font-black text-gray-900 mb-3 italic tracking-tighter uppercase">
                "{{ name }}"
            </h3>

            <p class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                {{ description }}
            </p>

            <div class="grid grid-cols-3 gap-3 mb-8">
                <div v-for="(thumb, index) in thumbnails" :key="index"
                    class="aspect-square rounded-xl overflow-hidden border border-gray-50">

                    <NuxtImg :src="thumb" :alt="name + ' détail ' + index" class="w-full h-full object-cover"
                        loading="lazy" quality="60" format="webp" sizes="100px md:150px"  />
                </div>
            </div>

            <AppButton :to="`/realisations/${slug}`" variant="secondary" size="lg"
                class="mt-auto w-full uppercase tracking-widest group-hover:translate-y-[-2px]">
                Découvrir l'histoire
                <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </AppButton>
        </div>
    </div>
</template>

<script setup>
defineProps({
    slug: { type: String, default: 'projet-custom' },
    name: { type: String, default: 'Le Nom du Van' },
    vehicleType: { type: String, default: 'Aménagement Sur-Mesure' },
    description: { type: String, default: 'Une réalisation artisanale unique faite dans notre atelier en Valais.' },
    mainImage: { type: String, default: 'https://picsum.photos/id/1071/800/600' },
    thumbnails: {
        type: Array,
        default: () => []
    }
})
</script>