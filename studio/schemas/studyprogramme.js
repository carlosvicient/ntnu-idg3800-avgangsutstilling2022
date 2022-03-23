export default {
  name: 'studyprogramme',
  title: 'Studyprogramme',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        required: true,
      },
    },
    {
      name: 'code',
      code: 'Code',
      type: 'string',
      options: {
        required: true,
      },
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      options: {
        required: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        required: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'code',
        maxLength: 96,
        required: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
      options: {
        required: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'code',
    },
  },
};
