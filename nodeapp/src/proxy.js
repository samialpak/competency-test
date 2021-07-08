const httpProxy = require('http-proxy');
const http = require('http');
const queryString = require('querystring');
const config = require('config');

const javaApiUrl = config.get('javaApiUrl');

const proxy = httpProxy.createProxyServer({
  agent: new http.Agent({
    keepAlive: true
  })
});

proxy.on('proxyReq', (proxyReq, req, res, options) =>  {
  if (!req.body || !Object.keys(req.body).length) {
    return;
  }

  var contentType = proxyReq.getHeader('Content-Type');
  var bodyData;

  if (contentType === 'application/json') {
    bodyData = JSON.stringify(req.body);
  }

  if (contentType === 'application/x-www-form-urlencoded') {
    bodyData = queryString.stringify(req.body);
  }

  if (bodyData) {
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    proxyReq.write(bodyData);
  }
});

const configureProxy = (app) => {

  app.use('/user', (req, res, next) => {

    proxy.web(req, res, 
      { 
        target: javaApiUrl + '/user', 
        changeOrigin: true
      },
      (error) => {
        let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write('Internal Server Error: Proxy error on ' + fullUrl);
        res.end();
      });
  });
};

export { proxy, configureProxy };