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
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
    },
    {
      type: 'text',
      name: 'source',
      label: 'Source',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export default Study
