// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const router = require("./routes/jokes.js");
// const swaggerUI = require("swagger-ui-express");
// const docs = require('./docs/index.js');

import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./routes/jokes.js"
import swaggerUI from "swagger-ui-express"
import docs from "./api-documentation/index.js"



const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
