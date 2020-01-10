const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@components', resolve('./src/components'))
    }
}
