const users = require("../models/users.model");

const MongoClient = require("mongodb").MongoClient;
let mongoUrlLocal = "mongodb://admin:password@localhost:27017";
async function getAllUsers(req, res) {
	await client.connect();
	console.log("connected");
	const db = client.db(databaseName);
	const collection = db.collection("users");
	const response = await collection.find({}).toArray();
	console.log(response);
	return res.status(200).json(response);
}

const client = new MongoClient(mongoUrlLocal);
let databaseName = "my-db";
// use when starting application as a separate docker container
let mongoUrlDocker = "mongodb://admin:password@host.docker.internal:27017";

// use when starting application as docker container, part of docker-compose
let mongoUrlDockerCompose = "mongodb://admin:password@mongodb";
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

async function postUser(req, res) {
	const user = req.body;
	console.log(user);

	await client.connect();
	console.log("connected");
	try {
		const db = client.db(databaseName);
		const collection = db.collection("users");
		const doc = {
			email: user.email,
			pass: user.email,
		};
		const result = await collection.insertOne(doc);
		console.log("user was inserted");
	} catch (err) {
		console.log(err);
	} finally {
		await client.close();
		console.log("connection closed");
	}
	// MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
	// 	if (err) throw err;

	// 	let db = client.db(databaseName);
	// 	userObj['email'] = user.email;
	// 	userObj['pass'] = user.pass;

	// 	let newvalues = { $set: userObj };

	// 	db.collection("users").findOneAndUpdate({email:user.email}, newvalues, {upsert: true});

	//   });

	// users.push(user);
}

module.exports = {
	getAllUsers,
	postUser,
};
