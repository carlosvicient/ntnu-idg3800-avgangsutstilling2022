import { isUniqueAcrossAllDocuments } from '../lib/isUniqueAcrossAllDocuments';
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
        isUnique: isUniqueAcrossAllDocuments,
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
      name: 'social',
      title: 'Social media links',
      type: 'platform',
    },
    {
      name: 'showcase',
      title: 'Showcase',
      type: 'portfolio',
    },
  ],
};
