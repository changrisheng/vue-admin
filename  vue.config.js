// vue.config.js 是一个可选的配置文件，
// 如果项目的 (和 package.json 同级的) 根目录中存在这个文件，
// 那么它会被 @vue/cli-service 自动加载。你也可以使用 package.json 中的 vue 字段，
// 但是注意这种写法需要你严格遵照 JSON 的格式来写。

module.exports = {
  productionSourceMap: false,
  // 基本路径
  publicPath: './',
  //构建时的输出目录
  outputDir: 'dist',
  // 放置静态文件夹目录
  assetsDir: 'assets',
  // dev环境下
  devServer: {
    // 开发运行时的端口
    port: 8090,
    // 开发运行时域名，设置成'0.0.0.0',在同一个局域网下，如果你的项目在运行，同时可以通
    host: '0.0.0.0',
    // 是否启用 https
    https: false,
    // npm run serve 时是否直接打开浏览器
    open: true
  },
}
