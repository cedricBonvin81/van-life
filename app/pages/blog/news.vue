<template>
    <div class="bg-white min-h-screen">
        <BlogHero title="L'Actualité de <br> <span style='color: #d97706'>l'Atelier</span>"
            hero-text="Suivez nos chantiers en cours, nos dernières livraisons et nos conseils pour la vie en van."
            intro-title="Le carnet de bord">
            <template #intro-text>
                Ici, on partage tout : des astuces techniques aux photos de nos derniers projets. C'est l'endroit idéal
                pour voir comment nous travaillons et trouver l'inspiration pour votre futur aménagement.
            </template>
        </BlogHero>

        <section class="max-w-7xl mx-auto px-6 py-20">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <article v-for="(post, index) in newsPosts" :key="index" class="news-card group cursor-pointer"
                    @mouseenter="hoverCard(index)">
                    <div class="relative overflow-hidden rounded-3xl h-80 mb-6 shadow-lg">
                        <NuxtImg :src="post.image"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            alt="Photo du projet" />
                        <div class="absolute top-4 left-4">
                            <span
                                class="bg-white/90 backdrop-blur-sm text-[#d97706] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {{ post.category }}
                            </span>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <span class="text-slate-400 text-sm">{{ post.date }}</span>
                        <h2
                            class="text-2xl font-black uppercase italic tracking-tight group-hover:text-[#d97706] transition-colors leading-none">
                            {{ post.title }}
                        </h2>
                        <p class="text-slate-600 font-light leading-relaxed line-clamp-3">
                            {{ post.excerpt }}
                        </p>
                        <div class="pt-4">
                            <span
                                class="text-[#d97706] font-bold uppercase text-xs tracking-[0.2em] border-b-2 border-[#d97706]/20 group-hover:border-[#d97706] transition-all">
                                Lire la suite
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <BlogOutro iconName="lucide:instagram" title="Envie d'en voir plus ?" buttonText="Nous suivre sur Instagram"
            link="https://instagram.com/toncompte">
            Pour le quotidien de l'atelier et des vidéos de nos sorties de route, rejoignez-nous sur les réseaux. On y
            poste
            régulièrement l'avancement des projets en temps réel.
        </BlogOutro>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

definePageMeta({ layout: 'blog' })

const newsPosts = [
    {
        title: "Le Sprinter L2H2 : Finition Noyer",
        date: "12 Février 2026",
        category: "Projet Client",
        excerpt: "Sortie d'atelier pour ce magnifique Sprinter optimisé pour le télétravail nomade. Isolation bio-sourcée et système électrique sur-mesure.",
        image: "/images/news_1.jpg"
    },
    {
        title: "Comment choisir sa batterie Lithium ?",
        date: "05 Février 2026",
        category: "Conseils",
        excerpt: "On vous explique tout sur le calcul d'autonomie et pourquoi nous avons choisi Victron pour nos installations électriques.",
        image: "/images/news_2.jpg"
    },
    {
        title: "Nouveau : Lit électrique 4 places",
        date: "28 Janvier 2026",
        category: "Innovation",
        excerpt: "On a développé un nouveau système de lit escamotable électrique qui permet de garder tout le garage libre pour vos vélos.",
        image: "/images/news_3.jpg"
    }
]

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        // Animation d'apparition des cartes une par une
        gsap.from(".news-card", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".news-card",
                start: "top 85%",
            }
        })
    }
})
</script>