export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
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
        source: (doc) => `${doc.title}`,
        maxLength: 96,
        required: true,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
        required: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      options: {
        maxLength: 100,
        required: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      student: 'student.name',
      media: 'mainImage',
    },
  },
};
