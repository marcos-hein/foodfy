const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
    const recipes = data.recipes
    return res.render("admin/index", { recipes })
}

// create
exports.create = function(req, res) {
    return res.render("./admin/create")
}


// post
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for(const key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, Fill all fields!')
        }
    }

    let { image, ingredients, preparation, information} = req.body

    data.recipes.push({
        image,
        ingredients,
        preparation,
        information
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) return res.send('Write file error')

        return res.redirect('/admin/recipes')

    })
}

// show
exports.show = function(req, res) {
    const recipeIndex = req.params.index

    const foundRecipe = data.recipes[recipeIndex]

    if (!foundRecipe) return res.send('Recipe not found!')

    return res.render("./admin/detail-recipe", { recipe : foundRecipe, recipeIndex })
}
// edit


// put

// delete
