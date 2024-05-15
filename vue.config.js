module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 设置一些别名
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'services': '@/services',
        'pages': '@/pages',
      }
    }
  }
}
