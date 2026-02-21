<template>
    <footer class="bg-slate-900 text-white pt-20 pb-10">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                <div class="md:col-span-1">
                    <h3 class="font-mono text-sm tracking-[0.3em] uppercase mb-6 text-primary">Van-Life.ch</h3>
                    <p class="text-slate-400 text-sm leading-relaxed font-light">
                        Atelier de conception de vans d'exception. <br>
                        De l'isolation à la liberté totale.
                    </p>
                </div>

                <div>
                    <h4 class="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-6">Navigation</h4>
                    <ul class="space-y-3">
                        <li>
                            <NuxtLink to="/"
                                class="text-sm font-light hover:text-primary transition-colors">Accueil</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/realisations"
                                class="text-sm font-light hover:text-primary transition-colors">Réalisations</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog" class="text-sm font-light hover:text-primary transition-colors">Blog
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact" class="text-sm font-light hover:text-primary transition-colors">
                                Contact</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-6">Ressources & Blog
                    </h4>
                    <ul class="grid grid-cols-1 gap-3">
                        <li>
                            <NuxtLink to="/blog"
                                class="text-sm font-light hover:text-primary transition-colors italic">Le Manifeste
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog/news" class="text-sm font-light hover:text-primary transition-colors">
                                Actualités</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog/amenagement"
                                class="text-sm font-light hover:text-primary transition-colors">Aménagement</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog/isolation"
                                class="text-sm font-light hover:text-primary transition-colors">Isolation</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog/electricite"
                                class="text-sm font-light hover:text-primary transition-colors">Électricité</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog/sanitaire"
                                class="text-sm font-light hover:text-primary transition-colors">Sanitaire</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-6">Contact</h4>
                    <p class="text-sm font-light text-slate-400 mb-4">Suisse Romande — Valais</p>
                    <a href="mailto:hello@van-life.ch"
                        class="text-sm font-light border-b border-primary/30 pb-1 hover:border-primary transition-all">
                        hello@van-life.ch
                    </a>
                </div>

            </div>

            <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="font-mono text-[10px] uppercase tracking-widest text-white/20">
                    © 2026 Van-Life.ch — Tous droits réservés
                </p>
                <div class="flex gap-8">
                    <NuxtLink to="/mentions-legales"
                        class="font-mono text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">
                        Mentions</NuxtLink>
                    <NuxtLink to="/politique-confidentialite"
                        class="font-mono text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">
                        Confidentialité</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Petit effet de souligne au survol pour les liens du footer */
a {
    display: inline-block;
}
</style>