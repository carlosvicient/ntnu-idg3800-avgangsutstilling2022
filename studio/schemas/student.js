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
      options: {
        required: true,
      },
    },
    {
      name: 'middle',
      title: 'Middle Name',
      type: 'string',
      description: 'If student has a middle name add it (optional field)',
      options: {
        required: true,
      },
    },
    {
      name: 'surname',
      title: 'Surname',
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
        source: (doc) =>
          !doc.middle
            ? `${doc.name}-${doc.firstlettersurname}`
            : `${doc.name}-${doc.middle}-${doc.firstlettersurname}`,
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
        required: true,
      },
      description:
        'The slug are uniqe and created by using, name-middlename-surname or name-surname',
    },
    {
      name: 'studyprogramme',
      title: 'Studyprogramme',
      type: 'reference',
      weak: true,
      to: { type: 'studyprogramme' },
      description: 'Choose the study program that the student is enrolled in',
      options: {
        required: true,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        required: true,
      },
      description: 'Image of the student',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {
              title: 'Normal',
              value: 'normal',
            },
          ],
          lists: [],
          options: {
            required: true,
          },
        },
      ],
      options: {
        required: true,
      },
      description: 'Short 100 characters',
    },
    {
      name: 'social',
      title: 'Social media links',
      type: 'platform',
      description: 'Paste the whole link for the social platform',
    },
    {
      name: 'showcase',
      title: 'Showcase',
      type: 'portfolio',
    },
  ],
};
