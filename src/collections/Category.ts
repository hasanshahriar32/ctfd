import slug from '@/fields/slug'
import { CollectionConfig } from 'payload'

const Category: CollectionConfig = {
  slug: 'categories',
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
    slug,
  ],
}

export default Category
