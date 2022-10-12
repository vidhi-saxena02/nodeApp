const users = require("../models/users.model");

function getAllUsers() {
	return users;
}
function postUser(req, res) {
	const user = req.body;
	console.log(user);
	users.push(user);
}

module.exports = {
	getAllUsers,
	postUser,
};
