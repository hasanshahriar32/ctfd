import { GlobalConfig } from 'payload'
import link from '@/fields/link'

const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [link],
    },
  ],
}

export default Footer
