import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'headphones',
  title: 'Headphones',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toLowerCase(),
      },
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'string',
    }),
    defineField({
      title: 'Box',
      name: 'box',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'productImages',
      name: 'productImages',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'unit',
      name: 'unit',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'isNewProduct',
      title: 'isNewProduct',
      type: 'boolean',
    }),
  ],
})
