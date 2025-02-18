import { Field } from 'payload'
import { Type as PageType } from '../collections/Page'

export type Type = {
  type: 'page' | 'custom'
  label: string
  page?: PageType
  url?: string
}

const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'radio',
      options: [
        {
          label: 'Page',
          value: 'page',
        },
        {
          label: 'Custom URL',
          value: 'custom',
        },
      ],
      defaultValue: 'page',
      admin: {
        layout: 'horizontal',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'page',
          label: 'Page to link to',
          type: 'relationship',
          //@ts-ignore
          relationTo: 'pages',
          required: true,
          admin: {
            condition: (_: any, siblingData: { type?: string }) => siblingData?.type === 'page',
            width: '50%',
          },
        },
        {
          name: 'url',
          label: 'Custom URL',
          type: 'text',
          required: true,
          admin: {
            condition: (_: any, siblingData: { type?: string }) => siblingData?.type === 'custom',
            width: '50%',
          },
        },
      ],
    },
  ],
}

export default link
