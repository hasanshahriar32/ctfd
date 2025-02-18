import meta from '@/fields/meta'
import slug from '@/fields/slug'
import { CollectionConfig } from 'payload'

const Study: CollectionConfig = {
  slug: 'studies',
  admin: {
    // useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'client',
      label: 'Client',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    slug,
    meta,
  ],
}

export default Study
