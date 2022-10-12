const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);
const port = process.env.PORT || 3000;

const { getAllUsers, postUser } = require("./controllers/users.controller");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use("/", express.static(path.join(__dirname, "site")));

app.get("/users", getAllUsers);

app.post("/users", postUser);
app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.listen(port, () => {
	console.log("Listening at port http://localhost:3000");
});
