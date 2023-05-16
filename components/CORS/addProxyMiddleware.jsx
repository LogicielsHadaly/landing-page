import "http-proxy-middleware";

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function addProxyMiddleware(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.hadaly.ca",
      changeOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "Get",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    })
  );
};
