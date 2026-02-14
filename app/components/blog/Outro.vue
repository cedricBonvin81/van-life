

<template>
    <section class="outro-section py-32 max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6 tracking-tighter uppercase text-van-dark">{{ title }}</h2>
        <div class="outro-text text-gray-600 text-lg mb-10 leading-relaxed font-light">
            <slot />
        </div>
        <div class="btn-gsap">
            <AppButton :to="link" variant="secondary" size="lg">
                <Icon v-if="iconName" :name="iconName" class="text-xl" />
                {{ buttonText }}
            </AppButton>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: String,
    link: String,
    buttonText: String,
    iconName: {        // On ajoute ça
        type: String,
        default: 'lucide:send' // Une icône par défaut au cas où
    }
});
</script>