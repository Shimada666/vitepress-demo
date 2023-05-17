import { defineConfig } from 'vitepress'
import { getSideBar } from "vitepress-plugin-autobar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress-demo",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: getSideBar("./docs", {
      ignoreMDFiles: ["index"],
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
