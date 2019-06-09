## webpack

    模块打包器
###  基本依赖

   -  webpack  包含webpack 的核心功能模块
   -  webpack-cli 负责 webpack 的命令行操作功能

###  新插件和旧插件的变动

    -  显示打包进度百分比(webpack 提供)
         -  new webpack.ProgressPlugin()
    -  clean-webpack-plugin(不在直接导出构造函数)
         -  { CleanWebpackPlugin } = require('clean-webpack-plugin')
    -  webpack-dev-server 
         -  progress 会log出文件在各个阶段的进度
         -  hot  会自动添加webpack.hotModuleReplacementPlugin(只更新变动模块)
    -  html-webpack-plugin 内部含有很多优化配置
    -  mini-css-extract-plugin 将css文件提取出来

###  实现功能

> 注意: 本版主要为单页,简单实现的功能,针对development

     - es6转es5
     - less scss postcss预处理
     - 图片 font加载
     - 提取css文件
     - 模块热更新
     - source-map



    
