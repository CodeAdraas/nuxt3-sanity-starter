<script setup lang="ts">
import {SETTINGS_QUERY} from '~/queries/sanity/settings';

// @TODO: error handling
const {data} = await useSanityQuery(SETTINGS_QUERY);
useState('settings', () => ({
    seo: data.value?.seo,
    menu: data.value?.menu,
    headerMenuDrawerOpen: false
}));

if (data.value?.seo) {
    useSeoMeta({
        title: data.value.seo?.title,
        description: data.value.seo?.description,
        ogDescription: data.value.seo?.description
    });
}

useDrawerRegister([
    'header.menu'
])

onMounted(() => useScroll({}).init());
onBeforeUnmount(() => useScroll().destroy());
</script>

<template>
    <ClientOnly>
        <Header />
        <main class="font-sans">
            <NuxtPage />
        </main>
        <Footer />
        <DrawerRenderer />
        <PreLoader />
    </ClientOnly>
</template>