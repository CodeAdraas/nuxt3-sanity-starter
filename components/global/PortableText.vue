<script setup lang="ts">
import {PortableText} from '@portabletext/vue'
import {CLASS_FONT_SIZES} from '~/constants'

defineProps(['value', 'serializers', 'flexCol'])

const emit = defineEmits(['mounted'])

import {
    // Marks
    BaseLinkExternal as AnnotationLinkExternal,
    BaseLinkInternal as AnnotationLinkInternal,
    // Types
    ModuleAccordion,
} from '#components'

const defaultSerializers = {
    block: {
        h1: (value: any, {slots}: any) => h('h1', {class: [CLASS_FONT_SIZES.h1]}, slots),
        h2: (value: any, {slots}: any) => h('h2', {class: [CLASS_FONT_SIZES.h2]}, slots),
        h3: (value: any, {slots}: any) => h('h3', {class: [CLASS_FONT_SIZES.h3]}, slots),
        h4: (value: any, {slots}: any) => h('h4', {class: [CLASS_FONT_SIZES.h4]}, slots),
        h5: (value: any, {slots}: any) => h('h5', {class: [CLASS_FONT_SIZES.h5]}, slots),
        h6: (value: any, {slots}: any) => h('h6', {class: [CLASS_FONT_SIZES.h6]}, slots),
        normal: (value: any, {slots}: any) => h('p', {class: [CLASS_FONT_SIZES.base]}, slots),
    },
    list: {
        bullet: (value: any, {slots}: any) => h('ul', {class: [CLASS_FONT_SIZES.base, 'pl-[1.5em] flex flex-col gap-2 list-[square]']}, slots),
    },
    marks: {
        annotationLinkExternal: ({value: {url, targetBlank}}: any, {slots}: any) => {
            return h(AnnotationLinkExternal, {url, targetBlank}, slots)
        },
        annotationLinkInternal: ({value: {reference}}: any, {slots}: any) => {
            return h(AnnotationLinkInternal, {
                to: reference.slug,
                documentType: reference.documentType,
                underline: true
            }, slots)
        }
    },
    types: {
        'module.accordion': ({value: {groups}}: any, {slots}: any) => {
            return h(ModuleAccordion, {groups})
        }
    }
}

onMounted(() => emit('mounted', getCurrentInstance()?.proxy?.$el))
</script>

<template>
    <div :class="[
        'portable-text',
        'flex',
        flexCol ? 'flex-col' : ''
    ]">
        <PortableText
            :value="value"
            :components="{
                marks: {
                    ...defaultSerializers.marks,
                    ...(serializers?.marks ?? {})
                },
                block: {
                    ...defaultSerializers.block,
                    ...(serializers?.block ?? {})
                },
                types: {
                    ...defaultSerializers.types,
                    ...(serializers?.types ?? {})
                },
                list: {
                    ...defaultSerializers.list,
                    ...(serializers?.list ?? {})
                },
                listItem: serializers?.listItem
            }"
        />
    </div>
</template>