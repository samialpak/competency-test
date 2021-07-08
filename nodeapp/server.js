const express = require('express');
const { configureNunjuks }  = require('./src/nunjucks');
const { configureProxy } = require('./src/proxy');
const { configureApi } = require('./src/api');

const PORT = process.env.PORT || 5000;
const app = express();

configureNunjuks(app);

configureProxy(app);

configureApi(app);

app.listen(PORT, () => {
    console.log(`Node server started on port ${PORT}`)
    app.set('started_port', PORT);
  }
);

export default app;