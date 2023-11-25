<script setup lang="ts">
import {CLASS_FONT_SIZES, FONT_SIZES} from '~/constants';

interface AccordionGroup {
    _key: string;
    title: string;
    image: Record<string, any>;
    body: Record<string, any>[];
}

defineProps<{
    groups: AccordionGroup[]
}>()

const currentKey = ref()
const setKey = (key: any) => currentKey.value = currentKey.value === key ? null : key
</script>

<template>
    <div class="flex flex-col divide-y divide-pink/[0.1]">
        <!-- Accordion Group -->
        <div
            v-for="accordionGroup in groups"
            :key="accordionGroup._key"
            class="py-[20px] cursor-pointer"
            @click="setKey(accordionGroup._key)"
        >
            <!-- Accordion Title -->
            <div class="flex items-center gap-4">
                <!-- Icon -->
                <icon
                    :name="currentKey !== accordionGroup._key ? 'plus' : 'minus'"
                    :sizes="FONT_SIZES.h6"
                    :stroke="1"
                />
                <h6
                    :class="[CLASS_FONT_SIZES.h6]"
                >
                    {{accordionGroup.title}}
                </h6>
            </div>
            <!-- End Accordion Title -->
            <!-- Accordion Body -->
            <BaseAccordionBody
                :body="accordionGroup.body"
                :expanded="currentKey === accordionGroup._key "
            />
            <!-- End Accordion Body -->
        </div>
        <!-- End Accordion Group -->
    </div>
</template>