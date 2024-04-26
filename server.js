const express = require('express')
const dotenv = require('dotenv')
const morgan = require ('morgan')
const boyParser = require('body-parser')
const server = express();
// const PORT = 3030 || 5050


dotenv.config({path: "config.env"})
const PORT = process.env.PORT || 2000

//morgan is a middleware
server.use(morgan("tiny"))
//bodyParser allows you to have access to your body (data present in your body)
server.use(boyParser.urlencoded({extended: true}))

server.get("/", (req, res)=>{
    res.send("We are working on a serious project")
})

server.set("view engine", "ejs")

server.get("/ejs", (req, res)=>{
    res.render("index")
})







server.listen(PORT, ()=>{
    console.log(`your server is running on port ${PORT}`);
})
