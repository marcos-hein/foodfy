
// importar dependências do express
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.set("view engine", "njk")

server.use(express.static("public"))

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
    
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

server.get("/recipes/:index", function(req, res) {
    const recipeIndex = req.params.index;

    if (!recipes[recipeIndex]) {
        return res.send("Recipe not found!")
    }

    return res.render("detail-recipe", { recipe : recipes[recipeIndex] })
})

// cria servidor
server.listen(5000, function() {
    console.log("Server is running!")
})
