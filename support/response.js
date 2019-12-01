let response = {};

response.error = (code,msg) => {
	return {
		code: code || 500,
		msg: msg || "call is error" ,
	}
}
response.success = (msg, data) => {
	return {
		code: 200,
		msg: msg || "success",
		data: data || {}
	}
}
module.exports = response;