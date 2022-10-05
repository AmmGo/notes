const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "Amm",
  description: 'vdoing博客主题模板',
  base: '/notes/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "2481bb1a1a980484fc80",
        clientSecret: "77a3471d39d6c05ffa25504c0aa73f14cd19b0ae",
        owner: "AmmGo",
        repo: "notes",
      },
    ],
  ],
  themeConfig,
}