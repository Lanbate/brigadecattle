module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:80",
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理
        pathRewrite: {
          "^/api": "/src/data"
        }
      }
    } // 配置多个代理
  }
};
