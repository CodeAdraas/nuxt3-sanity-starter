<script setup lang="ts">
import {SETTINGS_QUERY} from '~/queries/sanity/settings'
import type {SanitySettings} from './types';

const scroll = useScroll({})
const {data, error} = await useSanityQuery<SanitySettings>(SETTINGS_QUERY)

useSeoMeta({
    title: data.value.seo.title,
    description: data.value.seo.description,
    ogDescription: data.value.seo.description
})

onMounted(() => scroll.init())
onBeforeUnmount(() => scroll.destroy())
</script>

<template>
    <ClientOnly>
        <!-- TODO -->
        <div
            :class="[
                'max-w-[1000px] w-full mx-auto',
                'flex flex-col lg:flex-row gap-x-16 lg:gap-32',
                'text-white'
            ]"
        >
            <Header />
            <NuxtPage />
        </div>
        <!-- TODO -->
    </ClientOnly>
</template>