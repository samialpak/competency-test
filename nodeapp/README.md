# 'nodeapp' Node project details

This project is a node project. The project has `nunjucks`, `http-proxy`, `express`, `axios`, `config` packages.

This project has `clientapp\build` folder. In this folder, there are 3 files: `index.html`, `index.bundle.js`,`favicon.ico`. These files are copied from `clientapp` React frontend project.

## Available paths

This app has basically 4 paths:

### `/`

This path is used for rendering frontend application. Frontend application files are in `clientapp/build/` folder. This path is read from `config/default.json` file as a config.

When you call the `/` path, `clientapp/build/index.html` file is returned as response with `nunjucks`

In `clientapp/build/index.html` file has dependencies which names are `index.bundle.js` and `favicon.ico`. These dependencies are managed by `nunjucks`. 

Details for `nunjucks` configuration, you can see `src/nunjucks.js`.

### `/country`

This path is used for getting country list.

When you call the `/country` path, country list is get by `axios` with `https://restcountries.eu/rest/v1/region/Europe` url. This url is read from `config/default.json` file as a config. After request is successfully ended, response is edited as label-value keypair and is returned as response for `/country` request.

Details for this configuration, you can see `src/api.js`.

### `/user`

This path is used for saving the user to database.

When you call the `/user` path with `post` method type, request and parameters are passed to java backend app which name is `javaapp`. This operation managed by `http-proxy` package. This package forward request to `javaApiUrl`. This url is get from `config/default.json` file as a config. If your `javaapp` backend application running port is different from `8080`, you should change this config.
When java backend app return a response, `http-proxy` return this response to client app.

Details for this configuration, you can see `src/proxy.js`.

### `/user/all`

This path is used for getting all users which were saved to database.

When you call the `/user/all` path with `get` method type, request is passed to java backend app which name is `javaapp`. This operation managed by `http-proxy` package. This package forward request to `javaApiUrl`. This url is get from `config/default.json` file as a config. If your `javaapp` backend application running port is different from `8080`, you should change this config.
When java backend app return users saved database before, `http-proxy` return these users infos as response to client app.

Details for this configuration, you can see `src/proxy.js`.

## Available Scripts

In the project directory, you can run:

### `npm install`

With this command you can install all dependency for the project. You should run this command before other commands.

### `npm start`

Runs the app with `nodemon`. App is opened on [http://localhost:5000](http://localhost:5000).

The app will reload if you make edits.

### `npm run test`

Run the tests with `mocha`. Tests are in `tests` folder.

Details for tests, you can see `test_server.js`, `test_api.js`, `test_nunjucks.js`, `test_proxy.js` files.
