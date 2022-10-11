const express = require ("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT
const methodOverride = require ("method-override");
const cookieParser = require ("cookie-parser")
const session = require ("express-session");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(session({ secret: process.env.SECRET_WORD }));


app.listen (port, ()=>{console.log (`servidor rodando em http://localhost:${port}`)})
