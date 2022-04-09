export default {
  title: 'Portfolio',
  name: 'portfolio',
  type: 'object',
  fields: [
    {
      title: 'First project',
      name: 'firstproject',
      type: 'reference',
      to: { type: 'project' },
    },
    {
      title: 'Second project',
      name: 'secondproject',
      type: 'reference',
      to: { type: 'project' },
    },
    {
      title: 'Third project',
      name: 'thirdproject',
      type: 'reference',
      to: { type: 'project' },
    },
  ],
};
