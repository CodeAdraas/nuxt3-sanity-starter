<script setup lang="ts">
import {FONT_SIZES} from '~/constants'

const settings = useState<any>('settings')
</script>

<template>
    <header class="w-full">
        <div class="container mx-auto px-[20px]">
            <Icon
                name="menu"
                :sizes="FONT_SIZES.h3"
                @click="useDrawerActivate('header.menu')"
            />
        </div>
    </header>
</template>