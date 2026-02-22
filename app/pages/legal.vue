<template>
    <div class="bg-white min-h-screen pt-32 pb-24">
        <div class="container mx-auto px-6 max-w-3xl">

            <header class="mb-20">
                <span class="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                    Transparence
                </span>
                <h1 class="text-4xl md:text-5xl font-extralight text-slate-900 leading-tight">
                    Mentions Légales <br />
                    <span class="italic font-light">& Confidentialité</span>
                </h1>
            </header>

            <div class="space-y-16">

                <section class="border-t border-slate-100 pt-10">
                    <h2
                        class="font-mono text-[11px] uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-4">
                        <span class="w-8 h-px bg-primary/30"></span> 01. Éditeur du site
                    </h2>
                    <div class="text-slate-600 font-light leading-relaxed space-y-2">
                        <p class="font-semibold text-slate-900">Van-Life.ch</p>
                        <!-- <p>Van-Life.ch</p> -->
                        <p>1966 Ayent</p>
                        <p>Valais, Suisse</p>
                        <p class="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-10">
                            <span class="text-sm italic">hello@van-life.ch</span>
                            <span class="text-sm italic">+41 79 519 04 84</span>
                        </p>
                    </div>
                </section>

                <section class="border-t border-slate-100 pt-10">
                    <h2
                        class="font-mono text-[11px] uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-4">
                        <span class="w-8 h-px bg-primary/30"></span> 02. Hébergement
                    </h2>
                    <div class="text-slate-600 font-light leading-relaxed">
                        <p>Ce site est hébergé par <span class="text-slate-900 font-medium">Vercel Inc.</span>.
                        </p>
                        <p class="text-sm text-slate-400 mt-2">440 N Barranca Ave #4133 <br/>

                            Covina, CA 91723, USA</p>
                    </div>
                </section>

                <section class="border-t border-slate-100 pt-10">
                    <h2
                        class="font-mono text-[11px] uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-4">
                        <span class="w-8 h-px bg-primary/30"></span> 03. Protection des données (LPD)
                    </h2>
                    <div class="text-slate-600 font-light leading-relaxed space-y-4 text-justify">
                        <p>
                            Conformément à la Loi fédérale sur la Protection des Données (LPD), nous traitons vos
                            informations avec la même rigueur que nos aménagements.
                        </p>
                        <ul class="space-y-3 pl-4 border-l border-primary/20">
                            <li><strong class="text-slate-900">Collecte :</strong> Uniquement via le formulaire de
                                contact ou par email.</li>
                            <li><strong class="text-slate-900">Finalité :</strong> Répondre à vos demandes et gérer nos
                                relations commerciales.</li>
                            <li><strong class="text-slate-900">Sécurité :</strong> Aucune donnée n'est revendue ou
                                transmise à des tiers.</li>
                        </ul>
                    </div>
                </section>

                <section class="border-t border-slate-100 pt-10">
                    <h2
                        class="font-mono text-[11px] uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-4">
                        <span class="w-8 h-px bg-primary/30"></span> 04. Propriété intellectuelle
                    </h2>
                    <p class="text-slate-600 font-light leading-relaxed italic">
                        "Le respect de la matière s'étend au travail numérique."
                    </p>
                    <p class="text-slate-600 font-light leading-relaxed mt-4">
                        Les textes, photographies et créations graphiques sont la propriété exclusive de Van-Life.ch.
                        Toute reproduction sans autorisation écrite préalable est interdite.
                    </p>
                </section>

            </div>

            <div class="mt-20 pt-10 border-t border-slate-100">
                <NuxtLink to="/"
                    class="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-primary transition-colors">
                    <span
                        class="iconify i-lucide:arrow-left w-4 h-4 group-hover:-translate-x-1 transition-transform"></span>
                    Retour à l'atelier
                </NuxtLink>
            </div>

        </div>
    </div>
</template>

<script setup>
// Configuration SEO spécifique pour cette page
useHead({
    title: 'Mentions Légales & Confidentialité — Van-Life.ch',
    meta: [
        { name: 'robots', content: 'noindex, nofollow' } // Pas besoin que cette page pollue tes résultats de recherche
    ]
})
</script>