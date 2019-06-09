let path = require('path');
let webpack = require('webpack');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:'./js/[name][hash:8].js',
        path:path.resolve(__dirname,'dist'),
        // publicPath: 'https://cdn.example.com/assets/'
    },
    devtool:"source-map",
    devServer:{
        contentBase:"./dist",
        port:3000,
        open:true,
        progress:true,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            insertAt:'top'
                        }
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            insertAt:'top'
                        }
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            insertAt:'top'
                        }
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader'
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            },
            {
               test: /.js$/,
               use: {
                   loader: "babel-loader"
               }
           },
           {
            test: /\.(png|svg|jpg|gif)$/,
            use:[
                {
                    loader:"file-loader",
                    options: {
                        outputPath: 'images',
                      }
                }
            ]                   
           },
           {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use:[
                {
                  loader:"file-loader",
                  options: {
                    outputPath: 'css/font',
                  }
                }
            ]
           },
           {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader'
            }
          }
        ]
    },
    // externals: {
    //     jquery: '$'
    // },
    plugins:[
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html',
            hash:true
        }),
        new MiniCssExtractPlugin({
            filename:'./css/[name].css'
        })
    ]
}