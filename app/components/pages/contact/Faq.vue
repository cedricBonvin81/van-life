
<template>
    <section class="faq-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center mb-16">
            <span class="font-mono text-[16px] uppercase tracking-[0.5em] text-primary mb-4 block">F.A.Q</span>
            <h2 class="text-3xl font-extralight text-slate-900 italic">Questions fréquentes</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl mx-auto">
            <div v-for="(faq, i) in faqs" :key="i" class="faq-item">
                <h4 class="font-semibold text-slate-900 mb-4 flex items-center gap-3 tracking-tight">
                    <span class="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {{ faq.q }}
                </h4>
                <p class="text-slate-500 font-light text-sm leading-relaxed pl-4 border-l border-slate-100">
                    {{ faq.a }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>

// Logique du formulaire

const faqs = [
    { q: "Quels véhicules aménagez-vous ?", a: "Nous travaillons sur tous types de porteurs : du compact (VW T6, Trafic) au grand fourgon (Sprinter, Crafter, Ducato)." },
    { q: "Équipements à la carte ?", a: "Absolument. Pose de fenêtres, installation de batteries Lithium Victron, chauffages stationnaires ou circuits d'eau." },
    { q: "Homologation Suisse (VASP) ?", a: "Nous préparons les dossiers techniques et les schémas nécessaires pour le passage au Service des Automobiles." },
    { q: "Délais de réalisation ?", a: "Selon la charge, comptez 2 à 4 semaines pour un pack technique et 2 à 3 mois pour un aménagement complet." }
]
</script>