const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/test':{
        target:'https://api.vvhan.com',
        changeOrigin: true,
        secure:true,
        pathRewrite:{
          '^/test': '/'
        }
      }
    }
  }
  // devServer:{
  //   proxy:{
  //     '/api/':{
  //       target:'https://api.wetab.link/',
  //       secure:true,
  //     }
  //   }
  // }
  // devServer:{
  //   host: 'localhost',
  //   port: 9999,
  //   open: true, // 自动打开浏览器
  //   proxy:{
  //     '/api':{
  //       target:'https://api.wetab.link',
  //       secure:true,
  //       changeOrigin: true,
  //       pathRewrite:{
  //         "^/api": ""
  //       },
  //       headers:{
  //         'Host':'api.wetab.link'
  //       }
  //     }
  //   }
  // }
})
