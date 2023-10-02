import  express  from "express";
// marcaba error al ejecutar se agregp type:module en package.json
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
// module de router
import indexRouter from'./router/index.js'

// const dirname = require("path");
// const fileURLToPath = require("url");
// const express = require("express");
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

console.log(join(__dirname,'views'));
app.set("views", join(__dirname,'views'))
app.set("view engine", "ejs");
// cambiamos por una ruta dinamica
// app.get("/", (req, res) => res.render("index"));
app.use(indexRouter)
app.use(express.static(join(__dirname,'public')))



app.listen(port, () => console.log(`this is port ${port}`));
