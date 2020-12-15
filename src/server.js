// importar dependências do express
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()
const methodOverride = require('method-override')

server.use(express.urlencoded({ extended: true }))
server.use(express.static("public"))
server.use(methodOverride('_method'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true  
})

// cria servidor
server.listen(5000, function() {
    console.log("Server is running!")
})
