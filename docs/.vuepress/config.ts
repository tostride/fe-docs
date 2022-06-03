import { defineUserConfig, defaultTheme } from "vuepress";
import { head } from "./configs";

export default defineUserConfig({
  lang: "zh-CN",
  title: "前端知识体系",
  description: "这是我的前端知识体系",
  base: "/fe-docs/",
  head,
  // configure default theme
  theme: defaultTheme({
    logo: "/images/hero.png",
    docsDir: "docs",

    // theme-level locales config
    locales: {
      /**
       * Chinese locale config
       */
      "/": {
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏",
      },
    },
  }),
});
