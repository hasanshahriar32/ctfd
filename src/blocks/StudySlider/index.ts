import { Block } from 'payload'
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor'
import { Type as StudyType } from '@/collections/Studies'

export type Type = {
  backgroundColor: BackgroundColorType
  studies: StudyType[]
}

const StudySlider: Block = {
  slug: 'study-slider',
  labels: {
    singular: 'Study Slider',
    plural: 'Study Sliders',
  },
  fields: [
    backgroundColor,
    {
      name: 'studies',
      type: 'relationship',
      relationTo: 'studies',
      hasMany: true,
      required: true,
    },
  ],
}

export default StudySlider
