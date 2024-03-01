import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/cs-blog',
    head: [["link",{rel:"icon",href:"/images/logo.svg"}]],
    title: "小陈睡不醒的超级文档",
    description: "这是介绍",
    themeConfig: {
        logo: '/images/logo.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '示例',items:[
                {text: '测试1',link:'/'},
                {text: '测试2',link: '/'}
              ]},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        footer: {
          copyright: 'Copyright@ 2023 Chen '
        },
        // 设置搜索框的样式
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        }
    }
})
