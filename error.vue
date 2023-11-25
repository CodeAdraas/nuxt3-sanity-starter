<script setup lang="ts">
import {SETTINGS_QUERY} from '~/queries/sanity/settings';

// @TODO: error handling
const {data} = await useSanityQuery(SETTINGS_QUERY);
useState('settings', () => ({
    seo: data.value?.seo ?? {},
    menu: data.value?.menu ?? [],
    headerMenuDrawerOpen: false
}));

if (data.value?.seo)
    useSeoMeta({
        title: data.value.seo?.title,
        description: data.value.seo?.description,
        ogDescription: data.value.seo?.description
    })

onMounted(() => useScroll().init());
onBeforeUnmount(() => useScroll().destroy());
</script>

<template>
    <ClientOnly>
        <main>
            <PageSection
                v-if="data?.notFoundPage"
                :body="data.notFoundPage.body"
                flex-col
            />
        </main>
        <Footer />
        <DrawerHeaderMenu />
    </ClientOnly>
</template>