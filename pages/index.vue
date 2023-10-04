<script setup lang="ts">
import {HOME_PAGE_QUERY} from '~/queries/sanity/home'

const {data, error} = useSanityQuery(HOME_PAGE_QUERY)

useSeoMeta({
    title: data.value.seo.title,
    description: data.value.seo.description,
    ogDescription: data.value.seo.description
})
</script>

<template>
    <h1>Home</h1>
</template>