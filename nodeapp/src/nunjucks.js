const nunjucks = require('nunjucks');
const config = require('config');

const htmlPagesPath = config.get('htmlPagesPath');

const configureNunjuks = (app) => {

  nunjucks.configure(htmlPagesPath, {
    autoescape: true,
    express: app
  });
  
  app.get(["/"], (req, res) => {
    res.render('index.html');
  }); 
  app.get(["/index.bundle.js"], (req, res) => {
    res.render('index.bundle.js');
  });
  app.get(["/favicon.ico"], (req, res) => {
    res.render('favicon.ico');
  });   
};

export { configureNunjuks };