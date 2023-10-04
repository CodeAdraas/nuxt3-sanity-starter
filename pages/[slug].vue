<script setup lang="ts">
import {PAGE_QUERY} from '~/queries/sanity/page'

const {data, error} = await useSanityQuery(PAGE_QUERY, {slug: useRoute().params.slug})

useSeoMeta({
    title: data.value.seo.title,
    description: data.value.seo.description,
    ogDescription: data.value.seo.description
})
</script>

<template>
    <h1>{{data.title}}</h1>
</template>