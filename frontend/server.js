// const express = require('express');
// const next = require("next");
// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// app
//   .prepare()
//   .then(() => {
//     const server = express();
//
//     // apply proxy in dev mode
//     if (dev) {
//       server.use("/api", createProxyMiddleware({
//         target: "http://127.0.0.1:8000",
//         changeOrigin: true
//       }));
//     }
//
//     server.all('*', (req, res) => {
//       return handle(req, res);
//     });
//
//     server.listen(3000, (error) => {
//       if (error) throw error;
//       console.log("> Ready on http://127.0.0.1:8000");
//     })
//   })
//   .catch(error => {
//     console.log("Error", error)
//   })
