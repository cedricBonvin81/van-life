<template>
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-12">
        <div
            class="card-anim grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden border border-slate-100">

            <div
                class="relative flex flex-col justify-center px-8 py-16 sm:px-12 lg:p-20 bg-slate-900 text-white overflow-hidden">
                <div class="absolute inset-0">
                    <NuxtImg src="/images/contact.jpg" alt="Atelier Van Life"
                        class="h-full w-full object-cover object-right opacity-30 grayscale" format="webp" />
                    <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                </div>

                <div class="relative z-10">
                    <h2 class="text-3xl font-extralight tracking-tight sm:text-4xl text-white mb-12">
                        L'Atelier <br /><span class="italic text-primary">Van-Life.ch</span>
                    </h2>

                    <dl class="space-y-10 text-xs font-light tracking-[0.15em] uppercase">
                        <div class="flex gap-x-5 items-start">
                            <dt class="text-primary">
                                <Icon name="uil:map-marker" class="h-6 w-6" />
                            </dt>
                            <dd>
                                <a href="https://goo.gl/maps/..." target="_blank"
                                    class="hover:text-primary transition-colors leading-loose">
                                    Rue Saint-Michel 25, <br />1966 La Place, Suisse
                                </a>
                            </dd>
                        </div>
                        <div class="flex gap-x-5 items-center">
                            <dt class="text-primary">
                                <Icon name="uil:phone" class="h-6 w-6" />
                            </dt>
                            <dd>
                                <a href="tel:+41795190484"
                                    class="hover:text-primary font-mono tracking-widest text-base lowercase">
                                    +41 79 519 04 84
                                </a>
                            </dd>
                        </div>
                        <div class="flex gap-x-5 items-start">
                            <dt class="text-primary">
                                <Icon name="uil:clock" class="h-6 w-6" />
                            </dt>
                            <dd class="leading-loose">
                                <span class="text-slate-400">Lun - Ven : 08h00 - 18h00</span><br />
                                <span
                                    class="text-[9px] italic text-primary underline underline-offset-4 decoration-primary/30">
                                    Sur rendez-vous uniquement
                                </span>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div class="bg-white px-6 py-12 lg:p-20">
                <form @submit.prevent="submitForm" class="mx-auto max-w-xl space-y-10">
                    <div class="form-item group">
                        <label
                            class="block text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-primary transition-colors">
                            Nom complet
                        </label>
                        <input v-model="formData.name" type="text"
                            class="mt-2 block w-full border-b border-slate-200 bg-transparent px-0 py-3 text-slate-900 outline-none focus:border-primary transition-all font-light"
                            placeholder="Votre nom" required />
                    </div>

                    <div class="form-item group">
                        <label
                            class="block text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-primary transition-colors">
                            E-mail
                        </label>
                        <input v-model="formData.email" type="email"
                            class="mt-2 block w-full border-b border-slate-200 bg-transparent px-0 py-3 text-slate-900 outline-none focus:border-primary transition-all font-light"
                            placeholder="nom@exemple.ch" required />
                    </div>

                    <div class="form-item group">
                        <label
                            class="block text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-primary transition-colors">
                            Votre projet
                        </label>
                        <textarea v-model="formData.message" rows="3"
                            class="mt-2 block w-full border-b border-slate-200 bg-transparent px-0 py-3 text-slate-900 outline-none focus:border-primary transition-all font-light resize-none"
                            placeholder="Modèle du véhicule, besoins, calendrier..."></textarea>
                    </div>
                    <!-- Sécuriti check -->
                     <div style="display: none;" aria-hidden="true">
                        <label for="secondary_phone">Ne pas remplir ce champ si vous êtes humain</label>
                        <input v-model="securityCheck" id="secondary_phone" type="text" name="secondary_phone"
                            tabindex="-1" autocomplete="off">
                    </div>

                    <div class="flex items-center justify-center gap-3">
                        <AppButton
                         type="submit" 
                         variant="secondary" 
                         size="lg" 
                         :loading="loading" 
                         class="w-full !rounded-none !font-mono !uppercase !tracking-[0.4em]">
                            Envoyer ma demande
                            <Icon v-if="!loading" name="ph:paper-plane-tilt-light" class="text-xl" />
                        </AppButton>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>

const emit = defineEmits(['response'])
const loading = ref(false)

// 1. On enregistre l'heure d'arrivée sur la page pour le Time-check
const startTime = ref(Date.now())

// 2. Le piège à miel (Honeypot)
const securityCheck = ref('')

const formData = ref({
    name: '',
    email: '',
    message: ''
})

const submitForm = async () => {
    // --- SÉCURITÉ ANTI-SPAM ---


    // A. Vérification du Honeypot
    // Si ce champ est rempli, c'est un robot (l'humain ne le voit pas)
    if (securityCheck.value !== '') {
        console.warn("Bot détecté (Honeypot)")
        emit('response', 'success') // On fait croire au bot que ça a marché
        return
    }

    // B. Vérification du temps de saisie (Time-check)
    // Un humain met plus de 3 secondes à remplir un formulaire
    const timeSpent = (Date.now() - startTime.value) / 1000
    if (timeSpent < 3) {
        console.warn("Bot détecté (Trop rapide)")
        emit('response', 'success')
        return
    }

    // --- LOGIQUE D'ENVOI ---
    loading.value = true

    try {
        // 2. L'envoi magique
        const response = await fetch('https://formspree.io/f/xkovvlaw', { // addressé à mon endpoint Formspree pour l'envoie d'emails
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: JSON.stringify({
                name: formData.value.name,
                email: formData.value.email,
                message: formData.value.message
            })
        })

        if (response.ok) {
            emit('response', 'success')
            formData.value = { name: '', email: '', message: '' }
            console.log("Formulaire envoyé avec succès")
        } else {
            console.log("Erreur lors de l'envoi du formulaire")
            throw new Error()
        }
    } catch (error) {
        console.log("Erreur d'envoi :", error)
        emit('response', 'error')
    } finally {
        loading.value = false
    }
}
</script>     