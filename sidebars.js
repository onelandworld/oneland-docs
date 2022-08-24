/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  mySidebar: [
    {
      type: 'doc',
      id: 'v1.0/overview',
      label: 'Data API Overview'
    },
    {
      type: 'doc',
      id: 'v1.0/projects',
      label: 'Retreive project list'
    },
    {
      type: 'doc',
      id: 'v1.0/stats',
      label: 'Retreive project stats'
    },
    {
      type: 'doc',
      id: 'v1.0/floorPrices',
      label: 'Retreive project floor prices'
    },
    {
      type: 'doc',
      id: 'v1.0/users',
      label: 'Retreive project users data'
    }
  ]
};
