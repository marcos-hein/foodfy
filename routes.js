const express = require('express')
const routes = express.Router()
const foodfy = require('./FoodfyController')

// Rotas da página
routes.get("/", foodfy.index)
routes.get("/about-foodfy", foodfy.about)
routes.get('/recipes', foodfy.recipes)
routes.get("/recipes/:index", foodfy.recipeDetails)


// Rotas do admin

// // Mostrar a lista de receitas
// routes.get("/admin/recipes", recipes.index)

// // Mostrar formulário de nova receita
// routes.get("/admin/recipes/create", recipes.create)

// // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id", recipes.show)

// // Mostrar formulário de edição de receita
// routes.get("/admin/recipes/:id/edit", recipes.edit)

// // Cadastrar nova receita
// routes.post("/admin/recipes", recipes.post)

// // Editar uma receita
// routes.put("/admin/recipes", recipes.put)

// // Deletar uma receita
// routes.delete("/admin/recipes", recipes.delete)


module.exports = routes