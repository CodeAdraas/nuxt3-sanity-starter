<script setup lang="ts">
import {HOME_PAGE_QUERY} from '~/queries/sanity/home'

// @TODO: error handling
const {data} = await useSanityQuery(HOME_PAGE_QUERY)

if (data.value?.seo)
    useSeoMeta({
        title: data.value.seo?.title,
        description: data.value.seo?.description,
        ogDescription: data.value.seo?.description
    })
</script>

<template>
    <PageSection
        v-for="{body, anchorId} in data.sections"
        :body="body"
        :anchor-id="anchorId"
    />
</template>