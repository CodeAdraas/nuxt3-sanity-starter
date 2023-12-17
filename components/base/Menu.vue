<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import {
    BaseLinkExternal as LinkExternal,
    BaseLinkInternal as LinkInternal,
    BaseLinkAnchor as LinkAnchor
} from '#components'

defineProps(['links'])

const components = {
    types: {
        linkExternal: ({value: {title, url, targetBlank}}: any, {slots}: any) => {
            return h(LinkExternal, {url, targetBlank, class: ['py-3']},() => title)
        },
        linkInternal: ({value: {title, reference}}: any, {slots}: any) => {
            return h(LinkInternal, {
                to: reference.slug,
                documentType: reference.documentType,
                class: ['py-3']
            }, () => title)
        },
        linkAnchor: ({value: {title, anchorId}}: any, {slots}: any) => {
            return h(LinkAnchor, {anchorId, class: ['py-3']}, () => title)
        }
    }
}
</script>

<template>
    <nav class="px-[20px] pb-8 divide-y">
        <PortableText
            :value="links"
            :components="components"
        />
    </nav>
</template>