<template>

    <!-- HERO -->
    <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <NuxtImg src="https://picsum.photos/id/1081/1920/1280" alt="Van-Life en pleine nature valaisanne"
            class="absolute inset-0 w-full h-full object-cover" quality="80" format="webp" loading="eager"
            fetchpriority="high" />
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 text-center px-4">
            <h1 class="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-6 uppercase">
                Ils ont sauté le pas.
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light italic">
                Découvrez nos créations uniques, pensées pour l'aventure et façonnées avec passion.
            </p>
        </div>
    </section>

    <!-- INTRO -->
    <section class="max-w-7xl mx-auto px-6 py-20 lg:pt-32 lg:pb-20">
        <div class="flex flex-col items-center text-center">
            <div class="max-w-4xl">
                <h2 class="text-5xl lg:text-7xl font-black italic uppercase leading-none tracking-tighter mb-8">
                    Nos Projets <br><span class="text-orange-600">Complets</span>
                </h2>

                <p class="text-gray-700 text-lg lg:text-2xl font-light italic leading-relaxed max-w-3xl mx-auto mb-10">
                    "Ici, nous ne montrons uniquement l'aboutissement de notre travail. Chaque projet présenté est une
                    <strong class="font-black text-gray-900">rénovation complète</strong>, une métamorphose totale
                    pensée de A à Z.
                    De l'isolation aux finitions artisanales, ce sont nos créations finies, prêtes pour la route.
                    Pour voir l'envers du décor et le travail brut en atelier, suivez l'évolution de nos chantiers en
                    direct."
                </p>
            </div>

            <AppButton to="https://www.instagram.com/ton_compte" variant="secondary" target="_blank"
                class="group !flex items-center gap-5 !px-8 !py-5 shadow-xl hover:shadow-orange-900/10">
                <div class="flex flex-col items-start border-r border-white/20 pr-5 text-left">
                    <span class="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 leading-none mb-1">
                        Suivre l'atelier
                    </span>
                    <span class="font-black italic uppercase tracking-tight text-lg leading-none">
                        L'évolution sur Insta
                    </span>
                </div>
                <Icon name="uil:instagram" class="w-10 h-10 group-hover:rotate-12 transition-transform" />
            </AppButton>
        </div>
    </section>

    <!-- DIVIDER -->

    <div class=" flex flex-col items-center">
        <div class="w-px h-16 bg-gradient-to-b from-gray-200 via-orange-600 to-transparent"></div>

        <span class="mt-4 text-[14px] uppercase tracking-[0.5em] text-gray-400 font-bold ml-[0.5em]">
            Portfolio
        </span>
    </div>

    <!-- PORTFOLIO -->

    <section class="bg-gray-50/50 py-20 lg:py-32">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <h2 class="text-4xl lg:text-6xl font-black italic uppercase leading-none tracking-tighter">
                    Nos Réalisations <br><span class="text-orange-600">Récentes</span>
                </h2>
                <p
                    class="text-gray-500 font-light italic max-w-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-orange-600 px-4">
                    Chaque aménagement est une pièce unique, conçue selon les besoins spécifiques de nos clients.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <PagesRealisationsCard v-for="project in projects" :key="project.slug" :slug="project.slug"
                    :name="project.name" :vehicle-type="project.vehicleType" :description="project.intro"
                    :main-image="project.mainImage"
                    :thumbnails="project.gallery ? project.gallery.map(i => i.url).slice(0, 3) : []" />
            </div>
        </div>
    </section>
</template>


<script setup>
definePageMeta({
    layout: 'base'
})

// 1. On scanne TOUS les fichiers .json dans le dossier content/realisations/
const allFiles = import.meta.glob('~/content/realisations/*.json', { eager: true })

// 2. On nettoie
const projects = Object.values(allFiles).map(f => f.default || f)

useSeoMeta({
    title: 'Nos Réalisations | Aménagements de Vans sur-mesure en Valais',
    description: 'Explorez notre galerie de vans et fourgons aménagés artisanalement dans notre atelier valaisan.',
    ogTitle: 'Galerie Réalisations Van-Life | Inspiration & Sur-Mesure',
    ogDescription: 'Photos et détails de nos derniers aménagements de vans.',
    ogImage: '/images/realisations_hero.jpg',
    ogType: 'website',
})
</script>