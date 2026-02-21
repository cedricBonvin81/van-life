<template>
    <Transition name="modal-fade">
        <div v-if="show"
            class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            @click.self="$emit('close')">

            <div
                class="bg-white max-w-sm w-full rounded-2xl shadow-2xl p-8 text-center border border-slate-100 relative">
                <div :class="[
                    'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl',
                    status === 'success'
                        ? 'bg-emerald-50 text-emerald-500'
                        : 'bg-red-50 text-red-500'
                ]">
                    <Icon :name="status === 'success' ? 'uil:check' : 'uil:exclamation-triangle'" />
                </div>

                <h3 class="text-2xl font-extralight text-slate-900 mb-4 tracking-tight">
                    {{ title }}
                </h3>
                <p class="text-slate-500 font-light text-sm leading-relaxed mb-8 italic">
                    {{ message }}
                </p>

                <button @click="$emit('close')"
                    class="w-full font-mono text-[10px] uppercase tracking-[0.3em] border border-slate-200 py-4 hover:bg-slate-50 transition-all active:scale-95">
                    Fermer
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup>
defineProps({
    show: Boolean,
    status: { type: String, default: 'success' },
    title: String,
    message: String
})

defineEmits(['close'])
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
}
</style>