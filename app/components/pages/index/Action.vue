<template>
    <section class="action-section bg-white py-24 md:py-32 px-6">
        <div class="container mx-auto max-w-4xl text-center">

            <span class="font-mono text-xs uppercase tracking-[0.3em] text-slate-400 mb-8 block reveal-cta">
                Prêt pour l'aventure ?
            </span>

            <h2 class="text-4xl md:text-6xl font-extralight text-slate-900 mb-12 reveal-cta">
                Parlons de votre <span class="italic font-light text-primary">futur projet.</span>
            </h2>

            <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 reveal-cta">
                <AppButton to="mailto:hello@van-life.ch" variant="secondary" size="lg"
                    class="tracking-widest uppercase">
                    Envoyer un message
                </AppButton>

                <AppButton to="tel:+41795190484" variant="outline" size="lg" class="tracking-widest uppercase">
                    Appeler l'atelier
                </AppButton>
            </div>

            <div
                class="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 reveal-cta">
                <div class="text-left">
                    <p class="font-mono text-[10px] uppercase tracking-widest text-slate-400">Suivez l'atelier</p>
                    <div class="flex gap-6 mt-4">
                        <a href="#"
                            class="text-slate-900 hover:text-primary transition-colors uppercase text-xs tracking-tighter font-semibold">Instagram</a>
                        <!-- <a href="#"
                            class="text-slate-900 hover:text-primary transition-colors uppercase text-xs tracking-tighter font-semibold">Facebook</a> -->
                    </div>
                </div>

                <div class="text-right hidden md:block">
                    <p class="text-[12px] text-slate-500 mt-1 uppercase">Artisan aménageur</p>
                </div>
            </div>

        </div>
    </section>
</template>