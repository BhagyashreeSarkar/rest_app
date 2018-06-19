require('json-response');
var sampleModel = require('./sampleModel');

// Create and Save a new Note
exports.create = (req, res) => {

    // Create a Note
    const sample = new sampleModel({
        name: req.body.name || "Test User",
        address: req.body.address || "Kolkata"
    });

    // Save Note in the database
    sample.save()
    .then(data => {
        res.send(res.response(200,data,"data send!"));
    }).catch(err => {
        res.send(res.response(204,[],"unsuccessful!"));
    });
};

exports.findAll = function(req, res){

	var user = {};
	user.name = req.body.name || "Default Name";
	user.email = req.body.email || "default@test.com";

  // res.send(res.response(200,{"name":user.name},"data send"));
  sampleModel.find()
    .then(users => {
        res.send(res.response(200,users,"data send!"));
    }).catch(err => {
        res.send(res.response(204,[],"data not found!"));
    });


}
