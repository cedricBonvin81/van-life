<template>
    <div class="bg-white min-h-screen font-sans text-gray-900">
        <header class="relative h-[50dvh] min-h-[450px] w-full overflow-hidden bg-gray-900">
            <NuxtImg class="absolute inset-0 w-full h-full object-cover opacity-90" :src="project.mainImage"
                sizes="100vw" format="webp" quality="90" loading="eager" fetchpriority="high" />

            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div class="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
                <NuxtLink to="/realisations"
                    class="text-white/60 hover:text-orange-500 transition-colors text-[10px] font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <span class="text-lg">←</span> Réalisations
                </NuxtLink>

                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1
                            class="text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter text-white">
                            {{ project.name }}
                        </h1>
                        <p class="text-orange-500 font-bold italic text-lg md:text-xl mt-2">
                            {{ project.vehicleType }} — {{ project.location }}
                        </p>
                    </div>

                    <div class="hidden md:block border-l border-white/20 pl-6 text-right">
                        <span
                            class="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Livraison</span>
                        <span class="text-white font-bold italic uppercase">Année {{ project.year }}</span>
                    </div>
                </div>
            </div>
        </header>

        <section
            class="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">

            <div class="md:col-span-4 lg:col-span-5 md:sticky md:top-24 lg:top-32 mb-12 md:mb-0">
                <span
                    class="text-orange-600 font-black uppercase tracking-[0.3em] text-[12px] mb-4 block italic ">
                    01. Le Concept
                </span>
                <h2 class="text-4xl lg:text-6xl font-black italic uppercase leading-[0.9] mb-8 tracking-tighter">
                    {{ project.intro }}
                </h2>
                <div class="h-1 w-16 bg-gray-900 mb-8"></div>
                <p class="text-base lg:text-xl text-gray-600 leading-relaxed font-light italic">
                    {{ project.fullStory }}
                </p>
            </div>

            <div class="md:col-span-8 lg:col-span-7 space-y-16 md:space-y-24">
                <div v-for="(img, index) in project.gallery" :key="index" :class="[
                    'mx-auto md:max-w-[90%] lg:max-w-full',
                    index % 3 === 1 ? 'lg:mr-20 lg:ml-0' : '',
                    index % 3 === 2 ? 'lg:ml-20 lg:mr-0' : ''
                ]" class="relative group">

                    <div class="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] shadow-2xl">
                        <div class="w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                            <NuxtImg :src="img.url" :alt="img.caption" format="webp" quality="80"
                                sizes="xs:100vw sm:100vw md:80vw lg:700px" class="w-full object-cover" :class="[
                                    index % 3 === 0 ? 'aspect-video' : '',
                                    index % 3 === 1 ? 'aspect-[4/5] max-h-[70vh]' : '',
                                    index % 3 === 2 ? 'aspect-square' : ''
                                ]" />
                        </div>

                        <div
                            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        </div>
                    </div>

                    <p :class="index % 2 === 0 ? 'text-right' : 'text-left'"
                        class="mt-4 text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-400 italic">
                        — {{ img.caption }}
                    </p>
                </div>
            </div>
        </section>

        <section class="bg-gray-50 py-16 lg:py-24 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span
                            class="text-orange-600 font-black uppercase tracking-[0.3em] text-[14px] mb-4 block italic">
                            02. Spécifications
                        </span>
                        <h3 class="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Fiche technique
                        </h3>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="tech in project.techDetails" :key="tech.title"
                        class="bg-white p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-gray-100 hover:border-orange-500 transition-all duration-300 group">
                        <div class="flex items-center gap-4 mb-6">
                            <Icon :name="tech.icon"
                                class="text-3xl text-gray-300 group-hover:text-orange-600 transition-colors" />
                            <div class="h-[1px] flex-grow bg-gray-100"></div>
                        </div>
                        <h4 class="font-black uppercase italic tracking-tighter text-xl mb-2">{{ tech.title }}</h4>
                        <p class="text-gray-500 text-sm leading-snug font-medium italic">{{ tech.content }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section v-show="project.ownerQuote" class="max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <div
                class="rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-20 relative overflow-hidden border border-gray-100 bg-gray-50/30">
                <Icon name="ri:double-quotes-l"
                    class="absolute -top-4 -left-4 w-32 lg:w-40 h-32 lg:h-40 text-gray-200/50" />

                <div class="relative z-10 max-w-4xl">
                    <span class="text-orange-600 font-black uppercase tracking-[0.3em] text-[14px] mb-8 block italic">
                        03. L'expérience vécue
                    </span>

                    <blockquote
                        class="text-xl lg:text-4xl font-light italic text-gray-900 leading-tight mb-10 lg:mb-12">
                        "{{ project.ownerQuote }}"
                    </blockquote>

                    <div class="flex items-center gap-6">
                        <div class="h-px w-12 lg:w-16 bg-orange-500"></div>
                        <div class="flex flex-col">
                            <span
                                class="font-black uppercase tracking-widest text-base lg:text-lg text-gray-900 leading-none mb-1">
                                {{ project.ownerNames }}
                            </span>
                            <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                                Heureux propriétaires du {{ project.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 lg:py-24 text-center px-6 bg-white">
            <div class="max-w-4xl mx-auto">
                <span class="text-primary font-black uppercase tracking-[0.3em] text-[14px] mb-6 block italic">
                    Et vous ?
                </span>

                <h3 class="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                    Prêt pour votre <span class="text-orange-600">propre</span> histoire ?
                </h3>

                <p class="text-gray-500 font-light italic mb-10 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                    Parlons de votre futur aménagement et transformons votre véhicule en un lieu unique.
                </p>

                <AppButton to="/contact" variant="secondary">
                    Lancer mon projet
                </AppButton>
            </div>
        </section>
    </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

definePageMeta({
    layout: 'base'
})

const allProjects = import.meta.glob('~/content/realisations/*.json', { eager: true })
const project = Object.values(allProjects).find(p => p.slug === slug)

if (!project) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Réalisation non trouvée',
        fatal: true
    })
}

useSeoMeta({
    title: `${project.name} | Réalisations Van-Life`,
    description: project.intro,
    ogImage: project.mainImage
})
</script>
