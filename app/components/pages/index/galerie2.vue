<template>
    <section class="gallery-2  relative w-full h-[85vh] overflow-hidden bg-slate-900 flex items-center justify-center">

        <div class="absolute inset-0 w-full h-full scale-125 divider-img-container text-white">
            <img src="https://picsum.photos/id/443/1920/1080"
                class="w-full h-full object-cover opacity-50 grayscale-[20%]" alt="L'esprit du voyage en van" />
        </div>

        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80"></div>

        <div class="absolute top-12 left-12 hidden md:block overflow-hidden">
            <p class="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 float-element">
                N 45° 50' 1.482" / E 6° 51' 53.746"
            </p>
        </div>

        <div class="absolute bottom-12 right-12 hidden md:block overflow-hidden">
            <p class="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 float-element text-right">
                Projet : Sur-Mesure <br>
                <span class="text-primary/60 font-semibold">Série : 001</span>
            </p>
        </div>

        <div class="relative z-10 container mx-auto px-6 text-center">
            <span class="block font-mono text-primary text-[10px] uppercase tracking-[0.5em] mb-6 reveal-up">
                L'appel de la route
            </span>

            <h2 class="text-white text-4xl md:text-7xl font-extralight leading-tight mb-10 reveal-up">
                Concevoir l'espace, <br>
                <span class="italic font-light opacity-90">libérer l'esprit.</span>
            </h2>

            <div class="flex flex-col items-center gap-6 reveal-up">
                <div class="w-px h-24 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
                <span class="font-mono text-[11px] uppercase tracking-[0.6em] text-white/70">
                    Van-Life.ch
                </span>
            </div>
        </div>

        <div class="absolute bottom-12 left-12 border border-white/10 px-4 py-2 reveal-up hidden md:block">
            <span class="text-[9px] text-white/30 uppercase tracking-[0.3em] italic">Handcrafted in France</span>
        </div>

    </section>
</template>