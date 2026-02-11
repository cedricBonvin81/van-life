<script setup lang="ts">

</script>

<template>
    <div>
        <AppHeader />
        <BlogNav />
        <main class="relative overflow-x-hidden pt-[60px]">
            <slot />
        </main>
    </div>
</template>
