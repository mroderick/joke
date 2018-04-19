"use strict";

const https = require("https");
const fs = require("fs");
const express = require("express");
const app = express();

const options = {
    cert: fs.readFileSync("./certs/localhost.crt"),
    key: fs.readFileSync("./certs/localhost.key")
};

app.use(require("helmet")());

app.use(express.static("static"));

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/health-check", (req, res) => res.sendStatus(200));

app.listen(8080);
https.createServer(options, app).listen(8443);
