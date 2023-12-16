<script setup lang="ts">
import {FONT_SIZES} from '~/constants'

defineEmits<{
    (e: 'close', payload: boolean): void
}>()
</script>

<template>
    <div
        :class="[
            'opacity-in',
            'fixed inset-0 z-50 overflow-hidden',
            'bg-black/[0.6]',
            'transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.57,0,0.98)]', {
        }]"
    />
    <aside
        :class="[
            'fade-in',
            'flex flex-col justify-end items-center',
            'fixed top-3 bottom-3 left-3 right-3 z-50',
            'transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.57,0,0.98)]'
        ]"
    >
        <div :class="[
            'bg-zinc-800 text-white border border-white/[0.1] rounded-[.5em]',
            'flex flex-col justify-center items-center w-full h-auto max-h-full pt-8 md:pt-16',
            'transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.57,0,0.98)]'
        ]">
            <Icon
                name="x"
                :sizes="FONT_SIZES.h3"
                :stroke="1"
                class="cursor-pointer"
                @click="$emit('close', false)"
            />
            <!--  -->
            <div class="w-full py-8 px-[20px] overflow-y-auto">
                <slot />
            </div>
        </div>
    </aside>
</template>

<style scoped>
@keyframes opacityIn {
    from {opacity: 0;}
    to {opacity: 1;}
}
@keyframes fadeIn {
    from {opacity: 0; transform: scale(0.95);}
    to {opacity: 1;transform: scale(1);}
}
.opacity-in {
    transform-origin: center;
    animation-name: opacityIn;
    animation-timing-function: cubic-bezier(0.4,0.57,0,0.98);
    animation-duration: .4s;
}
.fade-in {
    transform-origin: center;
    animation-name: fadeIn;
    animation-timing-function: cubic-bezier(0.4,0.57,0,0.98);
    animation-duration: .4s;
}
</style>