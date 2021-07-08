const axios = require('axios');
const { StatusCodes } = require('http-status-codes');
const config = require('config');

const countryApiUrl = config.get('countryApiUrl');

const configureApi = (app) => {
  
  app.use('/country', (req, res, next) => {
    axios.get(countryApiUrl)
      .then(response => {
        res.writeHead(StatusCodes.OK, { 'Content-Type': 'application/json' });

        let modifiedData = response.data.map(function(element){
          return {
            "label":element.name,
            "value": element.alpha3Code
          };
        });

        res.write(JSON.stringify(modifiedData));
        res.end();
      }, error => {
        res.writeHead(StatusCodes.NOT_FOUND, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(error));
        res.end();
      })
  });
};

export { configureApi };