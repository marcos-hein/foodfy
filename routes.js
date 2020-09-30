const express = require('express')
const routes = express.Router()
const foodfy = require('./controllers/FoodfyController')
const recipes = require('./controllers/RecipesController')

// Rotas da página
routes.get('/', foodfy.index)
routes.get('/about-foodfy', foodfy.about)
routes.get('/recipes', foodfy.recipes)
routes.get('/recipes/:index', foodfy.recipeDetails)


// Rotas do admin

// Mostrar a lista de receitas
routes.get('/admin/recipes', recipes.index)

// Mostrar formulário de nova receita
routes.get('/admin/recipes/create', recipes.create)

// Exibir detalhes de uma receita
routes.get('/admin/recipes/:index', recipes.show)


// Cadastrar nova receita
routes.post('/admin/recipes', recipes.post)

// Mostrar formulário de edição de receita
// routes.get('/admin/recipes/:id/edit', recipes.edit)

// Editar uma receita
// routes.put('/admin/recipes', recipes.put)

// Deletar uma receita
// routes.delete('/admin/recipes', recipes.delete)


module.exports = routes