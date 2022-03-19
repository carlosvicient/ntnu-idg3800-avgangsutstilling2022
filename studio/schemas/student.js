export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'middle',
      title: 'Middle Name',
      type: 'string',
    },
    {
      name: 'surname',
      title: 'Surname',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) =>
          !doc.middle
            ? `${doc.name}-${doc.surname}`
            : `${doc.name}-${doc.middle}-${doc.surname}`,
        maxLength: 96,
      },
    },
    {
      name: 'studyprogramme',
      title: 'Studyprogramme',
      type: 'reference',
      weak: true,
      to: { type: 'studyprogramme' },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      type: 'object',
      name: 'social',
      title: 'Social media links',
      fields: [
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
        {
          title: 'LinkedIn',
          name: 'linkedin',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
        {
          title: 'Behance',
          name: 'behance',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
        {
          title: 'Portfolio',
          name: 'portfolio',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
      ],
    },
    {
      title: 'Projects',
      name: 'project',
      type: 'object',
      fields: [
        {
          title: 'First',
          name: 'first',
          type: 'reference',
          to: { type: 'project' },
        },
        {
          title: 'Second',
          name: 'second',
          type: 'reference',
          to: { type: 'project' },
        },
        {
          title: 'Third',
          name: 'third',
          type: 'reference',
          to: { type: 'project' },
        },
      ],
    },
  ],
};
