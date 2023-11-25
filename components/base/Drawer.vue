<script setup lang="ts">
import {FONT_SIZES} from '~/constants'

defineProps<{
    modelValue: boolean,
    width?: string
}>()

const canApplyWidth = computed(() => {
    return useBreakpoint().between('md', null).value
})
</script>

<template>
    <div
        :class="[
            'fixed inset-0 z-50 overflow-hidden',
            'bg-black/[0.8]',
            'transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.57,0,0.98)]', {
            'opacity-0 pointer-events-none': !modelValue
        }]"
        @click="$emit('update:modelValue', false)"
    />
    <aside
        :class="[
            'flex flex-col',
            'bg-white text-purple h-[100vh]',
            'fixed top-0 right-0 z-50',
            'p-[20px] md:p-8 lg:p-16',
            'transition-all duration-[600ms] ease-[cubic-bezier(0.4,0.57,0,0.98)]',
            'w-[96vw]', {
            'md:w-[500px]': !width || (width && !canApplyWidth),
            'translate-x-[100%] pointer-events-none': !modelValue
        }]"
        :style="{width: canApplyWidth ? width : undefined}"
    >
        <div class="flex items-center justify-between">
            <Icon
                name="x"
                :sizes="FONT_SIZES.h3"
                :stroke="1"
                class="cursor-pointer"
                @click="$emit('update:modelValue', false)"
            />
            <Icon
                name="logo"
                :sizes="FONT_SIZES.h1"
            />
        </div>
        <!--  -->
        <div class="w-full h-full overflow-y-auto pt-8 md:pt-16">
            <slot />
        </div>
    </aside>
</template>