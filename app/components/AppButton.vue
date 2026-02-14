<template>
    <component :is="to ? 'NuxtLink' : 'button'" :to="to" :type="!to ? type : null" :disabled="loading || disabled"
        class="rounded-full inline-flex items-center justify-center gap-2 font-bold shadow-sm cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"        
        :class="[variantClasses[variant], sizeClasses[size]]">
        <Icon v-if="loading" name="uil:spinner" class="animate-spin h-5 w-5" />
        <slot />
    </component>
</template>

<script setup>
const props = defineProps({
    to: { type: String, default: null }, // Si 'to' est présent, c'est un lien NuxtLink
    type: { type: String, default: 'button' },
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
})

const variantClasses = {
    primary: 'bg-primary text-white hover:brightness-110 shadow-primary/20',
    secondary: 'bg-van-dark text-white hover:bg-slate-800',
    outline: 'border-2 border-secondary text-primary hover:bg-primary hover:text-white',
    danger: 'bg-red-500 text-white hover:bg-red-600'
}

const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm md:px-8 md:py-3',
    lg: 'px-8 py-3 text-sm md:px-10 md:py-4 md:text-base'
}
</script>