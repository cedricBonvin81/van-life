

<template>
    <section  class=" outro-section py-32 max-w-3xl mx-auto px-6 text-center ">
        <h2 class="text-3xl font-bold mb-6 tracking-tighter uppercase text-van-dark">{{ title }}</h2>
        <div class="outro-text text-gray-600 text-lg mb-10 leading-relaxed font-light">
            <slot />
        </div>
        <NuxtLink :to="link"
            class="inline-block border border-van-dark text-van-dark px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-van-dark hover:text-white transition-colors duration-300">
            {{ buttonText }}
        </NuxtLink>
    </section>
</template>

<script setup>  
    defineProps({
        title: String,
        link: String,
        buttonText: String,
    });
</script>