<script setup lang="ts">
import {FONT_SIZES} from '~/constants'

const settings = useState<any>('settings')
</script>

<template>
    <header>
        <Icon
            name="menu"
            :sizes="FONT_SIZES.h3"
            @click="settings.headerMenuDrawerOpen = true"
        />
    </header>
</template>