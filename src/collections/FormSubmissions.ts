import { CollectionConfig } from 'payload'

const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'text',
      name: 'source',
      label: 'Source',
      required: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}

export default FormSubmissions
