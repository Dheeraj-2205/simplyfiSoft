const express = require("express");
const app = express();

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path : "backend/config/config.env"})
}

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const product = require("./routes/post");
const user = require ("./routes/user");

app.use("/ecommerce/api", user)
app.use("/ecommerce/api",product)

module.exports = app;
