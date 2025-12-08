import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Docs | VRCT",
  tagline: 'VRCT is software that supports VRChat conversations with translation and transcription.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://misyaguziya.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/VRCT-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "misyaguziya", // Usually your GitHub org/user name.
  projectName: 'VRCT-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ["@cmfcmf/docusaurus-search-local"],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/misyaguziya/VRCT-Docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/misyaguziya/VRCT-Docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/vrct-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VRCT',
      logo: {
        alt: 'Software Icon',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar',
          position: 'left',
          label: 'Home',
          href: '/',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar',
          position: 'left',
          label: 'Tutorial',
          href: '/docs/tutorial',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar',
          position: 'left',
          label: 'Feature Guide',
          href: '/docs/feature-guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar',
          position: 'left',
          label: 'UI Guide',
          href: '/docs/ui-guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar',
          position: 'left',
          label: 'FAQ',
          href: '/docs/faq',
        },
        {
          label: 'Supporters👑',
          position: 'right',
          items: [
            {
              label: 'VRCT Supporters',
              href: 'https://shiinasakamoto.github.io/vrct_supporters/',
            },
            {
              label: 'PIXIV FANBOX',
              href: 'https://vrct-dev.fanbox.cc',
            },
            {
              label: 'Patreon',
              href: 'https://patreon.com/vrct_dev',
            },
            {
              label: 'Ko-fi',
              href: 'https://ko-fi.com/vrct_dev',
            },
          ],
        },
        {
          href: 'https://github.com/misyaguziya/VRCT',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documents',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/tutorial',
            },
            {
              label: 'Feature Guide',
              to: '/docs/feature-guide',
            },
            {
              label: 'UI Guide',
              to: '/docs/ui-guide',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X(Main Development)',
              href: 'https://x.com/misya_ai',
            },
            {
              label: 'X(UI/UX Design)',
              href: 'https://x.com/Shiina_12siy',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'GitHub (Main Repo)',
              href: 'https://github.com/misyaguziya/VRCT',
            },
            {
              label: 'GitHub (Docs)',
              href: 'https://github.com/misyaguziya/VRCT-Docs',
            },
            {
              label: 'GitHub (VRCT-TTS)',
              href: 'https://github.com/misyaguziya/VRCT-TTS',
            }
          ],
        },
        {
          title: 'Supporters',
          items: [
            {
              label: 'VRCT Supporters',
              href: 'https://shiinasakamoto.github.io/vrct_supporters/',
            },
            {
              label: 'PIXIV FANBOX',
              href: 'https://vrct-dev.fanbox.cc',
            },
            {
              label: 'Patreon',
              href: 'https://patreon.com/vrct_dev',
            },
            {
              label: 'Ko-fi',
              href: 'https://ko-fi.com/vrct_dev',
            },
          ],
        }
      ],
      copyright: `
        <div style="margin-bottom: 1rem;">
          <img 
            src="/VRCT-Docs/img/M's_logo_White_yoko.png" 
            alt="m's software" 
            style="height: 100px;"
            class="footer-logo-dark"
          />
          <img 
            src="/VRCT-Docs/img/M's_logo_Black_yoko.png" 
            alt="m's software" 
            style="height: 100px;"
            class="footer-logo-light"
          />
        </br>
        Copyright © 2022-${new Date().getFullYear()}-present m's software.
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
