<script setup lang="ts">
const {loaded} = usePageLoaded()
</script>

<template>
    <div
        :class="[
            'bg-white',
            'fixed inset-0 z-[999] overflow-hidden',
            'transition-all duration-[300ms]', {
            'opacity-0 pointer-events-none': loaded
        }]"
    >
    </div>
</template>