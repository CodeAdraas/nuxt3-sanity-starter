<script setup lang="ts">
import {PAGE_QUERY} from '~/queries/sanity/page'

// @TODO: error handling
const {data} = await useSanityQuery(PAGE_QUERY, {slug: useRoute().params.slug})

if (!data.value) throw createError({
    statusCode: 404,
    fatal: true
})

if (data.value?.seo)
    useSeoMeta({
        title: data.value.seo?.title,
        description: data.value.seo?.description,
        ogDescription: data.value.seo?.description
    })
</script>

<template>
    <PageSection
        v-if="data?.sections"
        v-for="{body, anchorId} in data?.sections"
        :body="body"
        :anchor-id="anchorId"
    />
</template>