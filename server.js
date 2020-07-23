
// importar dependências do express
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.set("view engine", "njk")

server.use(express.static("public"))

nunjucks.configure("views", {
    express: server
})


// cria a primeira rota
server.get("/", function(req, res) {
    return res.render("index", { recipes })
})

server.get("/about-foodfy", function(req, res) {
    return res.render("about-foodfy")
})

server.get("/recipes", function(req, res) {

    return res.render("recipes", { recipes })
})

// cria servidor
server.listen(5000, function() {
    console.log("Server is running!")
})
