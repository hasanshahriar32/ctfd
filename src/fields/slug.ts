import { Field } from 'payload'
import formatslug from '../utilities/formatSlug'

const slug: Field = {
  name: 'slug',
  label: 'Slug',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [formatslug('title')],
  },
}

export default slug
