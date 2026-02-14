<template>
    <div>
        <section class="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden" >
            <div class="relative z-10 text-center px-6">
                <h1 class="hero-title text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter text-shadow-xl"
                    v-html="title"
                >
                </h1>
                <p class="hero-subtitle text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                    {{ heroText }}
                </p>
            </div>
        </section>

        <section class="py-24 max-w-4xl mx-auto px-6 text-center hero-separator ">
            <h2 class="text-2xl font-bold mb-6 uppercase tracking-widest text-van-dark">
                {{ introTitle }}
            </h2>
            <div class="text-gray-600 text-lg leading-relaxed">
                <slot name="intro-text"></slot>
            </div>
        </section>
    </div>
</template>

<script setup>

    defineProps({
    title: String,
    heroText: String,
    introTitle: String,
    mainColor: String 
})
</script>


<style scoped>
.text-shadow-xl {
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
.hero-separator {
    position: relative;
}

.hero-separator::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 15px;
    /* Épaisseur de la zone d'ombre */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent);
    pointer-events: none;
}
</style>

