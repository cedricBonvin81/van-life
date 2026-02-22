<template>
    <footer class="bg-slate-900 text-white pt-24 pb-12">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                <div class="flex flex-col">
                    <h3 class="font-mono text-sm tracking-[0.3em] uppercase mb-8 text-primary">
                        Van-Life<span class="text-white/50">.ch</span>
                    </h3>
                    <p class="text-slate-400 text-sm leading-relaxed font-light max-w-xs">
                        Atelier de conception de vans sur-mesure. <br>
                        L'artisanat suisse à votre service.
                    </p>
                    <div class="mt-8">
                        <span class="text-[12px] uppercase tracking-[0.2em] text-white/50 italic">
                            Handcrafted <br/> in Switzerland
                        </span>
                    </div>
                </div>

                <div>
                    <h4 class="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-8">Menu</h4>
                    <ul class="space-y-4">
                        <li v-for="link in navigation" :key="link.to">
                            <NuxtLink :to="link.to"
                                class="text-sm font-light hover:text-primary transition-colors duration-300">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-8">Expertise</h4>
                    <ul class="space-y-4">
                        <li v-for="topic in blogTopics" :key="topic.to">
                            <NuxtLink :to="topic.to"
                                class="text-sm font-light hover:text-primary transition-colors duration-300">
                                {{ topic.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-8">Contact & Social</h4>
                    <p class="text-sm font-light text-slate-400 mb-8 italic">Suisse Romande — Valais</p>

                    <ul class="space-y-5">
                        <li>
                            <a href="mailto:hello@van-life.ch" class="group flex flex-col">
                                <span
                                    class="text-[9px] font-mono text-primary uppercase tracking-widest mb-1">Email</span>
                                <span
                                    class="text-sm font-light border-b border-white/5 group-hover:border-primary transition-all self-start pb-0.5">
                                    hello@van-life.ch
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+41795190484" class="group flex flex-col">
                                <span
                                    class="text-[9px] font-mono text-primary uppercase tracking-widest mb-1">Téléphone</span>
                                <span class="text-sm font-light group-hover:text-primary transition-colors">
                                    +41 79 519 04 84
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/vanlife.ch" target="_blank" rel="noopener noreferrer"
                                class="group flex flex-col">
                                <span
                                    class="text-[9px] font-mono text-primary uppercase tracking-widest mb-1">Instagram</span>
                                <span class="text-sm font-light group-hover:text-primary transition-colors">
                                    @van-life.ch
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="pt-8 text-white/50 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p class="font-mono text-[10px] uppercase tracking-widest">
                    © {{ new Date().getFullYear() }} Van-Life.ch — Tous droits réservés
                </p>

                <div class="flex gap-10">
                    <NuxtLink to="/legal"
                        class="font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors">
                        Mentions et Confidentialité
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const navigation = [
    { label: 'Accueil', to: '/' },
    { label: 'Réalisations', to: '/realisations' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' }
]

const blogTopics = [
    { label: 'Le Manifeste', to: '/blog' },
    { label: 'Aménagement', to: '/blog/amenagement' },
    { label: 'Isolation', to: '/blog/isolation' },
    { label: 'Électricité', to: '/blog/electricite' },
    { label: 'Sanitaire', to: '/blog/sanitaire' }
]
</script>