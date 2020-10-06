const data = require('../data.json')

exports.index = function(req, res) {
    return res.render("site/index", { recipes : data.recipes })
}

exports.about = function(req, res) {
    return res.render("site/about-foodfy")   
}

exports.recipes = function(req, res) {
    return res.render("site/recipes", { recipes : data.recipes })
}

exports.recipeDetails = function(req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send("Recipe not found!")

    return res.render("site/detail-recipe", { recipe : foundRecipe })
}