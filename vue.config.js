module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理
        pathRewrite: {
          "^/api": "/src/data"
        }
      }
    } // 配置多个代理
  }
};
