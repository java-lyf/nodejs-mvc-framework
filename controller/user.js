var response = require("../support/response.js");
var userModel = require("../models/user.js");
exports.getUserById = (req,res) =>{
	userModel.getUserById(req.params.id,function(error,result){
		let data = response.success(null,result);
		res.end(JSON.stringify(data));
	})
}