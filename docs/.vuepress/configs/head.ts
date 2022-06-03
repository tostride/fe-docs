import type { HeadConfig } from "vuepress";

export const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: `/fe-docs/images/icons/favicon-16x16.png`,
    },
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: `/fe-docs/images/icons/favicon-32x32.png`,
    },
  ],
  ["link", { rel: "manifest", href: "/fe-docs/manifest.webmanifest" }],
  ["meta", { name: "application-name", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  [
    "link",
    {
      rel: "apple-touch-icon",
      href: `/fe-docs/images/icons/apple-touch-icon.png`,
    },
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/fe-docs/images/icons/safari-pinned-tab.svg",
      color: "#3eaf7c",
    },
  ],
  ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
  ["meta", { name: "theme-color", content: "#3eaf7c" }],
];
