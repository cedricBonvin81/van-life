<template>
    <section :class="['service-section py-32 overflow-hidden', bgGray ? 'bg-gray-50' : 'bg-white']">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-20 items-center">

                <div :class="['section-img rounded-[2rem] overflow-hidden soft-mask', reversed ? 'md:order-2' : '']">
                    <NuxtImg :src="image" format="webp" class="w-full h-full object-cover" />
                </div>

                <div :class="['section-text', reversed ? 'md:order-1' : '']">
                    <span class="font-bold tracking-widest text-xs uppercase mb-4 block text-blue-500">
                        {{ subtitle }}
                    </span>
                    <h2 class="text-4xl font-bold mb-8 tracking-tight text-slate-900">
                        {{ title }}
                    </h2>
                    <div class="text-gray-600 text-lg leading-relaxed mb-8">
                        <slot />
                    </div>
                    <div class="flex gap-3">
                        <span v-for="tag in tags" :key="tag"
                            class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm border border-gray-100">
                            {{ tag }}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    image: String,
    reversed: Boolean,
    bgGray: Boolean,
    tags: Array
})
</script>