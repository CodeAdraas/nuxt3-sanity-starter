<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import {
    BaseLinkExternal as LinkExternal,
    BaseLinkInternal as LinkInternal
} from '#components'

defineProps(['links'])

const components = {
    types: {
        linkExternal: ({value: {title, url, targetBlank}}: any, {slots}: any) => {
            return h(LinkExternal, {url, targetBlank},() => title)
        },
        linkInternal: ({value: {title, reference}}: any, {slots}: any) => {
            return h(LinkInternal, {
                to: reference.slug,
                documentType: reference.documentType
            }, () => title)
        }
    }
}
</script>

<template>
    <div>
        <PortableText
            :value="links"
            :components="components"
        />
    </div>
</template>