<script setup lang="ts">
const prop = defineProps(['body', 'anchorId'])

const id = computed(() => prop.anchorId === 'Sectie' ? null : prop.anchorId)
</script>

<template>
    <section :id="id">
        <PortableText
            :value="body"
            :flex-col="true"
            class="gap-y-8 max-w-[1200px] w-full mx-auto px-[20px] py-16"
        />
    </section>
</template>