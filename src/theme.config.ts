// cannot use path alias here because unocss can not resolve it
import { defineConfig } from "./toolkit/themeConfig.ts";

export default defineConfig({
  footer: {
    icp: {
      enable: true,
      icpnumber: "闽ICP备2026021587号",
      icpurl: "https://beian.miit.gov.cn/",
      beian: "闽公网安备35010202002207号",
      recordcode: "35010202002207",
    },
  },
  nav: [
    {
      href: "/",
      text: "首页",
      icon: "i-ri-home-line",
    },
    {
      text: "关于",
      href: "/about/",
      icon: "i-ri-user-3-line",
    },
    {
      text: "文章",
      href: "/random/",
      icon: "i-ri-quill-pen-fill",
      dropbox: {
        enable: true,
        items: [
          {
            href: "/categories/",
            text: "分类",
            icon: "i-ri-book-shelf-fill",
          },
          {
            href: "/tags/",
            text: "标签",
            icon: "i-ri-price-tag-3-fill",
          },
          {
            href: "/archives/",
            text: "归档",
            icon: "i-ri-archive-line",
          },
        ],
      },
    },
    {
      text: "友链",
      href: "/friends/",
      icon: "i-ri-link",
    },
    {
      text: "动态",
      href: "/moments/",
      icon: "i-ri-chat-quote-line",
    },
    {
      text: "工具",
      href: "/tools/",
      icon: "i-ri-tools-fill",
    },
    {
      text: "统计",
      href: "/statistics/",
      icon: "i-ri-bar-chart-box-line",
    },
  ],
});
