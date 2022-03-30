// vue.config.js 是一个可选的配置文件，
// 如果项目的 (和 package.json 同级的) 根目录中存在这个文件，
// 那么它会被 @vue/cli-service 自动加载。你也可以使用 package.json 中的 vue 字段，
// 但是注意这种写法需要你严格遵照 JSON 的格式来写。
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

module.exports = {
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 基本路径
  publicPath: './',
  //构建时的输出目录
  outputDir: 'dist',
  // 放置静态文件夹目录
  assetsDir: 'assets',
  // 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
  // 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: false,
  // 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字，value 是：
  // 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
  // 或一个指定其 entry 的字符串。
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/index/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   subpage: 'src/subpage/main.js'
  // },

  // lintOnSave: process.env.NODE_ENV !== 'production',

  // dev环境下
  devServer: {
    // npm run serve 时是否直接打开浏览器
    open: true,
    // 开发运行时的端口
    port: 8090,
    // 开发运行时域名，设置成'0.0.0.0',在同一个局域网下，如果你的项目在运行，同时可以通
    host: '0.0.0.0',
    // 是否启用 https
    https: false,
    // 开启热加载
    hot: true,
    // 开启代理
    // proxy: {},
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
}
