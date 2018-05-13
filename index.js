"use strict";

const https = require("https");
const fs = require("fs");
const express = require("express");
const app = express();

const options = {
    cert: fs.readFileSync("./certs/localhost.crt"),
    key: fs.readFileSync("./certs/localhost.key")
};

const page = require("./page");

app.use(require("helmet")());

app.use(express.static("static"));

app.get("/health-check", (req, res) => res.sendStatus(200));

app.get("/knock-knock", (req, res) => res.send(page.knock()));
app.get("/who-is-there", (req, res) => res.send(page.whosthere()));
app.post("/we-know", (req, res) => res.send(page.weknow()));

app.listen(8080);
https.createServer(options, app).listen(8443);
