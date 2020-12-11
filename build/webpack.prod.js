const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
　　/**
　　* 打包模式，不配置會警告，但底層還是會去配置默認的，就是production
　　* production: 壓縮模式，被壓縮的代碼
　　* development: 開發模式，不壓縮的代碼
　　*
　　*/
　　mode: "production",
　　/**
　　* cheap:在生成source-map的時候可以不帶列信息，只帶行信息就可以了
　　* 同時不要對我load代碼的source-map。只要對我的業務代碼進行source-map生成
　　* 這種方式提示的錯誤比較全，打包速度比較快，
　　*/
　　devtool: "cheap-module-source-map"
}
module.exports = merge(commonConfig, prodConfig);