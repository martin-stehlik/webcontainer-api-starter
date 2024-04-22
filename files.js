/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
  "index.js": {
    file: {
      contents: `
import express from 'express';
import { createProxyMiddleware, responseInterceptor } from 'http-proxy-middleware';

const app = express();
const port = 3111;
  
const proxyServer = 'https://corsproxy.io';
const shopUrl = 'https://classic.shoptet.cz';

const target = proxyServer + '/?' + shopUrl;

app.use(createProxyMiddleware({
    target,
    changeOrigin: true, // this is needed to virtual host the request to the target
}));

app.listen(port, () => {
    console.log(\`App is live at http://localhost:\${port}\`);
});`
    }
  },
  "package.json": {
    file: {
      contents: `
          {
            "name": "example-app",
            "type": "module",
            "dependencies": {
              "express": "latest",
              "nodemon": "latest",
              "http-proxy-middleware": "latest"
            },
            "scripts": {
              "start": "nodemon index.js"
            }
          }`
    }
  }
};
