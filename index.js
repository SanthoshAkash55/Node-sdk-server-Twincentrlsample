const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const dotenv = require("dotenv");

// const {model} = require("./getModelTree")
const {auth} = require("./authentication")
const {getModelname} = require("./getModelname")
const {getModelassetId} = require ("./getModelbyassetid")
const {models} = require("./getModels")
const {getModelbyId} = require("./getModelbyid")
const {getModelquery} = require("./getModelbyquery")

// app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

// app.post("/model/tree",model)
app.post("/auth",auth)
app.post("/getmodelname",getModelname)
app.post("/getModelassetId",getModelassetId)
app.post("/getModels",models)
app.post("/getModelbyId",getModelbyId)
app.post("/getModelquery",getModelquery)

app.listen(3000, () => {
    console.log(`Server is running on port in 3000`);
  });