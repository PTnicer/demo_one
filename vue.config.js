//cli4弃用和替换了部分参数
// const testJson=require('./src/mock/test.json');
const path = require('path');
const webpack = require('webpack');
module.exports = {
  // 基本路径
  publicPath: "/",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
 chainWebpack: config => {
  //全局引入jquery
  config.plugin('provide').use(webpack.ProvidePlugin, [{
    $: 'jquery',
    jquery: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }])
},
  configureWebpack: () => {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    hot: true,
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true, //webpack4.0 开启热更新
    //proxy代理设置
    proxy: {
      // 配置多个跨域
      '/api': {
        target: 'http://localhost:8081', //跨域接口的地址
        changeOrigin: true,
        ws: true,
        //这里必须要 不然无法映射到需要访问的地址
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  
  // 第三方插件配置
  pluginOptions: {
    // 'style-resources-loader': {
    //   preProcessor: 'less',
    //   patterns: [
    //     path.resolve(__dirname, './src/conmon/css/theme.less'), 
    //   ],
    // },
  }
};