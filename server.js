
// importar dependências do express
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "html")

server.use(express.static("public"))

nunjucks.configure("views", {
    express: server
})


// cria a primeira rota
server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/about-foodfy", function(req, res) {
    return res.render("about-foodfy")
})

server.get("/recipes", function(req, res) {
    return res.render("recipes")
})

// cria servidor
server.listen(5000, function() {
    console.log("Server is running!")
})
