<script setup lang="ts">
import type appVue from '~/app.vue';


</script>

<template>
    <div>
        <AppHeader />
        <BlogNav />
        <main class="relative overflow-x-hidden pt-[60px]">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
