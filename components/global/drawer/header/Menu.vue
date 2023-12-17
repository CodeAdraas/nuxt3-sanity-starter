<script setup lang="ts">
import {FONT_SIZES} from '~/constants'

const settings = useState<any>('settings')
</script>

<template>
    <BaseMenu
        v-if="settings.menu?.links?.length"
        :links="settings.menu.links"
        :class="[FONT_SIZES.h3, 'flex flex-col']"
    />
</template> 