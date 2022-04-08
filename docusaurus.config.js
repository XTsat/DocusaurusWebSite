// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '晓同',
  tagline: '各种指南',
  url: 'https://github.com/XTsat',
  baseUrl: '/WebSite/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'static\img\favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

    // 顶栏
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '晓同',
        logo: {
          alt: 'My Site Logo',
          src: 'img/top.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: '指南',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/XTsat',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 底栏
      footer: {
        style: 'dark',
        links: [
          {
            title: '指南',
            items: [
              {
                label: 'Guide',
                to: '/docs/',
              },
            ],
          },
          {
            title: '关于我',
            items: [
              {
                label: 'BiliBili 📺',
                href: 'https://space.bilibili.com/53283118',
              },
              {
                label: 'Steam 🎮',
                href: 'https://steamcommunity.com/id/XTxiaotong',
              },
              {
                label: '𝖯𝗅𝖺𝗒𝗅𝗂𝗌𝗍 🎵',
                href: 'https://music.163.com/#/user/home?id=283588276',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/XTsat',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.made by 晓同`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
