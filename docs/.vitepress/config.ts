import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/RustPlanet-Site/',
  cleanUrls: true,
  // 路由重写：将 /en/ 下的源文件映射为站点根路径，
  // 这样英文内容将以根路径提供，方便语言切换映射。
  rewrites: {
    'en/:path*': ':path*'
  },
  locales: {
     root:{
      label: 'English',
      lang: 'en-US',
      title: 'RustPlanet',
      description: 'High-Performance cross-platform RTS game',
      head: [
        ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }]
      ],
      themeConfig: {
          nav: [
          { text: 'Home', link: '/' },
          { text: 'Tutorial', link: '/tutorial/getting-started' },
          { text: 'Modding', link: '/modding/introduction' },
          { text: 'Community', link: '/community' }
        ],
        sidebar: {
          '/tutorial/': [
            {
              text: 'Tutorial',
              items: [
                { text: 'Getting Started', link: '/tutorial/getting-started' },
                { text: 'Introduction', link: '/tutorial/introduction' },
                { text: 'Unit System', link: '/tutorial/unit-system' },
                { text: 'Multiplayer', link: '/tutorial/multiplayer' }
              ]
            }
          ],
          '/modding/': [
            {
              text: 'Modding',
              items: [
                { text: 'Introduction', link: '/modding/introduction' },
                { text: 'Creating Mods', link: '/modding/creating-mods' },
                { text: 'API Reference', link: '/modding/api-reference' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/eam2539/RustPlanet' }
        ],
        footer: {
          message: 'Released under Apache-2.0',
          copyright: `Copyright © ${new Date().getFullYear()} RustPlanet Team`
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Search docs', buttonAriaLabel: 'Search docs' },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Reset',
                footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
              }
            }
          }
        }
      }
    },
      zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'RustPlanet',
      description: '高性能跨平台 RTS 游戏',
      head: [
        ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }]
      ],
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/index' },
          { text: '教程', link: '/zh/tutorial/getting-started' },
          { text: '模组开发', link: '/zh/modding/introduction' },
          { text: '社区', link: '/zh/community' }
        ],
        sidebar: {
          '/zh/tutorial/': [  
            {
              text: '教程',
              items: [
                { text: '介绍', link: '/zh/tutorial/introduction' },
                { text: '单位系统', link: '/zh/tutorial/unit-system' },
                { text: '联机系统', link: '/zh/tutorial/multiplayer' }
              ]
            }
          ],
          '/zh/modding/': [
            {
              text: '模组开发',
              items: [
                { text: '模组介绍', link: '/zh/modding/introduction' },
                { text: '创建模组', link: '/zh/modding/creating-mods' },
                { text: 'API 参考', link: '/zh/modding/api-reference' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/eam2539/RustPlanet' }
        ],
        footer: {
          message: '使用 Apache 2.0 协议发布',
          copyright: `Copyright © ${new Date().getFullYear()} RustPlanet Team`
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除查询',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          }
        }
      }
    }
  }
})