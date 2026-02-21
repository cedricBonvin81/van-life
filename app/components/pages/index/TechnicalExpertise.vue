<template>
    <section class="py-24 bg-slate-50 overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                <div class="lg:col-span-5">
                    <span class="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6 block">Standard
                        Technique</span>
                    <h2 class="text-4xl md:text-5xl font-extralight text-slate-900 mb-8 leading-tight">
                        La performance <br> <span class="italic font-light">sous la surface.</span>
                    </h2>
                    <p class="text-slate-600 font-light leading-relaxed mb-10 max-w-md">
                        Un van n'est pas qu'un mobilier, c'est un habitat autonome. Nous intégrons des systèmes de
                        pointe pour garantir votre confort, peu importe les conditions extérieures.
                    </p>

                    <ul class="space-y-6">
                        <li v-for="(item, index) in techItems" :key="index" class="flex items-start gap-4 group">
                            <span class="font-mono text-[10px] text-primary mt-1">0{{ index + 1 }}</span>
                            <div>
                                <h4
                                    class="text-sm uppercase tracking-widest font-semibold text-slate-800 mb-1 group-hover:text-primary transition-colors">
                                    {{ item.title }}
                                </h4>
                                <p class="text-xs text-slate-500 font-light leading-snug">{{ item.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="lg:col-span-7 relative">
                    <div class="aspect-[4/3] bg-slate-200 overflow-hidden rounded-sm relative tech-image-container">
                        <img src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2070&auto=format&fit=crop"
                            class="w-full h-full object-cover grayscale opacity-80 transition-transform duration-700 hover:scale-105"
                            alt="Installation technique van" />
                        <div class="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
                    </div>

                    <div class="absolute -bottom-6 -left-6 bg-slate-900 text-white p-8 hidden md:block shadow-xl">
                        <p class="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-2">Certification</p>
                        <p class="text-sm font-light uppercase tracking-tighter italic">Normes VASP & Sécurité</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const techItems = [
    { title: "Isolation Thermique", desc: "Projection de liège et laine de roche pour une régulation hygrométrique parfaite." },
    { title: "Gestion Électrique", desc: "Systèmes Lithium-Ion Victron Energy avec monitoring à distance." },
    { title: "Réseau Sanitaire", desc: "Circuits d'eau pressurisés et filtration aux normes alimentaires." }
]
</script>