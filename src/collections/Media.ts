import { CollectionConfig } from 'payload'

export type Type = {
  filename: string
  alt: string
  sizes: {
    card?: {
      filename: string
      width: number
      height: number
    }
    feature?: {
      filename: string
      width: number
      height: number
    }
  }
}

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  upload: {
    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'card',
        width: 640,
        height: 480,
      },
      {
        name: 'feature',
        width: 1024,
        height: 576,
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
}

export default Media
