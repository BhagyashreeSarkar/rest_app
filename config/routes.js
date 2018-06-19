const sample = require('../app/modules/sample');

function cors(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
}

module.exports = function (app) {
  //enable cross-origin resource sharing
  app.all('*', cors);

  app.use('/sample', sample);
}
