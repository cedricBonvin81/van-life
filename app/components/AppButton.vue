<template>
    <a v-if="isExternal" :href="to" :class="[baseClasses, variantClasses[variant], sizeClasses[size]]">
        <Icon v-if="loading" name="uil:spinner" class="animate-spin h-5 w-5" />
        <slot />
    </a>

    <NuxtLink v-else-if="to" :to="to" :class="[baseClasses, variantClasses[variant], sizeClasses[size]]">
        <Icon v-if="loading" name="uil:spinner" class="animate-spin h-5 w-5" />
        <slot />
    </NuxtLink>

    <button v-else :type="type" :disabled="loading || disabled"
        :class="[baseClasses, variantClasses[variant], sizeClasses[size]]">
        <Icon v-if="loading" name="uil:spinner" class="animate-spin h-5 w-5" />
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    to: { type: String, default: null },
    type: { type: String, default: 'button' },
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
})

const isExternal = computed(() => {
    return props.to && /^(https?:\/\/|mailto:|tel:)/.test(props.to)
})

const baseClasses = "inline-flex items-center justify-center gap-2 font-bold shadow-sm cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"

const variantClasses = {
    primary: 'bg-primary text-white hover:brightness-110 shadow-primary/20 ',
    secondary: 'bg-van-dark text-white hover:bg-slate-800 hover:text-white',
    outline: 'border-2 border-secondary text-primary hover:bg-primary/5',
    danger: 'bg-red-500 text-white hover:bg-red-600'
}

const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm md:px-8 md:py-3',
    lg: 'px-8 py-3 text-sm md:px-10 md:py-4 md:text-base'
}
</script>