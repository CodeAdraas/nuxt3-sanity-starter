<script setup lang="ts">
import {FONT_SIZES} from '~/constants'

const settings = useState<any>('settings')
</script>

<template>
    <BaseDrawer v-model="settings.headerMenuDrawerOpen">
        <div class="h-full flex flex-col justify-between">
            <BaseMenu
                v-if="settings.menu?.links?.length"
                :links="settings.menu.links"
                :class="[FONT_SIZES.h3, 'flex flex-col']"
            />
        </div>
    </BaseDrawer>
</template> 