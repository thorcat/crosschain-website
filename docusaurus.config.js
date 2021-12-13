// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crosschain.Quest',
  tagline: 'Move across blockchains without a centralized exchange',
  url: 'https://crosschain.quest',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  projectName: 'crosschain-website',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: 'thorcat', // Usually your GitHub org/user name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/thorcat/crosschain-website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/thorcat/crosschain-website/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-CDTRS5TEWJ',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Crosschain.Quest',
        logo: {
          alt: 'Crosschain.Quest Logo',
          src: 'img/ccq4.svg',
        },
        items: [
          {type: 'doc', docId:'About', label: 'About', position: 'left'},
          {
            type: 'doc',
            docId: 'how-to/Overview',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'Affiliate Program',
            position: 'left',
            label: 'Affiliate',
          },
          {
            type: 'doc',
            docId: 'Disclaimer',
            position: 'left',
            label: 'Disclaimer',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/About',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/fAf2ykVJSF',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/crosschainquest/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/thorcat/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
