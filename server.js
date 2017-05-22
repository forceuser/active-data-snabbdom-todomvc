/* global process */

const http = require("http");
const express = require("express");

const app = express();
// app.set('trust proxy', true);

const router = express.Router();

router.use("/", express.static("./"));

app.use("/", router);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", (req, res) => {
	const addr = server.address();

	console.log("Web server listening at", addr.address + ":" + addr.port);
});
