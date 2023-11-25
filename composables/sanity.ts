import imageUrlBuilder from '@sanity/image-url'

type ImageRecord = Record<string, any>

/**
 * Creates a single Sanity image CDN URL based on a image record.
 */
export const useSanityImage = (record: ImageRecord) => {
    const { config } = useSanity()
    const builder = imageUrlBuilder({
        projectId: config.projectId,
        dataset: config.dataset || 'production'
    })
    return builder.image(record).url()
}