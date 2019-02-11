module.exports = {
    proxy: {
          '/api': {    //将www.exaple.com印射为/api
              target: '',  // 接口域名
              secure: false,  // 如果是https接口，需要配置这个参数
              changeOrigin: true,  //是否跨域
            //   pathRewrite: {
            //       '^/api': ''   //需要rewrite的,
            //   }              
          },
          '/account':{
            target: '',  // 接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
          }
    }
  }