<template>
    <section :class="['py-32 overflow-hidden', bgGray ? 'bg-gray-50' : 'bg-white']">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-20 items-center">

                <div :class="[
                    `elec-img-${index}`,
                    'rounded-[2rem] overflow-hidden soft-mask',
                    reverse ? 'md:order-2' : 'md:order-1'
                ]">
                    <NuxtImg :src="image" format="webp" :alt="title" class="w-full h-full object-cover" />
                </div>

                <div :class="[
                    `elec-text-${index}`,
                    reverse ? 'md:order-1 text-left' : 'md:order-2 text-right'
                ]">
                    <span :class="['font-bold tracking-widest text-xs uppercase mb-4 block', badgeColor]">
                        {{ badge }}
                    </span>
                    <h2 class="text-4xl font-bold mb-8 tracking-tight text-van-dark">{{ title }}</h2>

                    <div class="text-gray-600 text-lg leading-relaxed mb-10">
                        <slot name="content"></slot>
                    </div>

                    <div :class="['space-y-4 flex flex-col', !reverse ? 'items-end' : 'items-start']">
                        <div v-for="feature in features" :key="feature"
                            :class="['flex items-center gap-3', !reverse ? 'flex-row-reverse' : 'flex-row']">

                            <div
                                :class="['w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0', checkBgColor]">
                                ✓
                            </div>

                            <p class="text-gray-800 font-light text-[12px] uppercase tracking-wide">
                                {{ feature }}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    index: Number,
    title: String,
    image: String,
    badge: String,
    badgeColor: String,
    checkBgColor: String,
    reverse: Boolean,
    bgGray: Boolean,
    features: Array
})
</script>