var user = require("../dao/user");

module.exports = {
	getUserById: (param,callback) =>{
		user.findUserByName(param,function(res){
			callback(null,res);
		});
	}
}