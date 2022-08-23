/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ONELAND Docs',
  tagline: 'ONELAND, Your One-stop Land-Fi Platform in the Metaverse.',
  url: 'https://docs.oneland.world',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'onelandworld', // Usually your GitHub org/user name.
  projectName: 'oneland-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['java'],
    },
    navbar: {
      title: '',
      logo: {
        alt: 'ONELAND Logo',
        src: 'img/logo.svg',
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    }

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.

          // editUrl: 'https://github.com/onelandworld/oneland-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/onelandworld/oneland-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
