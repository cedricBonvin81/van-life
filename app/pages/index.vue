<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- C'est ici que la magie opère -->
   <NuxtImg 
  src="/images/hero.jpg" 
  format="webp" 
  quality="70" 
  width="1920"  
  loading="eager" 
  fetchpriority="high"
  class="absolute inset-0 h-full w-full object-cover" 
/>

    <!-- Ton contenu par-dessus -->
    <div class="relative z-10 flex h-full items-center justify-center px-12 text-center bg-black bg-opacity-50">
      <div class="text-white">
        <h1 class=" text-xl  ">« La liberté n'attend pas, mais notre site prend encore quelques virages.»</h1>
        <p class="my-4 text-4xl">...Ouverture du site imminente...</p>
        <p class="italic text-2xl">pour tous les passionnés de Van-Life.</p>
        <p>L'artisanat suisse pour vos rêves de liberté".</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
  layout: 'base'
})
</script>