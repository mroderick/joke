"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/health-check", (req, res) => res.sendStatus(200));

// eslint-disable-next-line no-console
app.listen(3000, () => console.log("Example app listening on port 3000!"));
