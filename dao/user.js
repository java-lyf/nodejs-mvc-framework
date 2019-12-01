/*** 举个小栗子 user.js ***/
// 引入 sequelize 包，创建 sequelize 实例
let Sequelize = require('sequelize');
let sequelize = require('../config/db.js');

let User = sequelize.define('tb_user',{
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	},
	remark: {
		type: Sequelize.STRING
	}
},{
	 // freezeTabelName 为 true 时不会在库中映射表时增加复数表名
	  // 该选项为 true 时，user 在映射时映射成 user，而为 false 时会映射成users
	  freezeTableName: true,
	  timestamps: false,
})

exports.findUserByName = function(id,callback) {
  User.findOne({
    where: {
      id: id
    }
  }).then(res =>{
	  callback(res);
  })
};