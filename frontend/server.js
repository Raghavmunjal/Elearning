const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // apply proxy in dev mode
    if (dev) {
      server.use(
        "/api",
        createProxyMiddleware({
          target: "http://localhost:5000",
          changeOrigin: true,
        })
      );
    }
    // any req coming into the server using wildcard
    server.all("*", (req, res) => {
      // once we use express to apply proxy then express all that request then it pass to next js app
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
