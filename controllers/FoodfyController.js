const data = require('../data')

exports.index = function(req, res) {
    return res.render("site/index", { recipes : data })
}

exports.about = function(req, res) {
    return res.render("site/about-foodfy")   
}

exports.recipes = function(req, res) {
    return res.render("site/recipes", { recipes : data })
}

exports.recipeDetails = function(req, res) {
    const recipeIndex = req.params.index;

    if (!data[recipeIndex]) {
        return res.send("Recipe not found!")
    }

    return res.render("site/detail-recipe", { recipes : data[recipeIndex] })
}