const fs = require('fs')
const data = require('../data.json')

function removeLastEmptyElement (array) {
    if (array[array.length - 1] == "") {
        array.pop()
    }
    return array
}

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

    let { image, title, author, ingredients, preparation, information} = req.body

    title = "receita genérica"
    author = "vini"
    ingredients = removeLastEmptyElement(ingredients)
    preparation = removeLastEmptyElement(preparation)

    data.recipes.push({
        image,
        title,
        author,
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
exports.edit = function(req, res) {
    const recipeIndex = req.params.index
    const foundRecipe = data.recipes[recipeIndex]

    if (!foundRecipe) return res.send('Recipe not found!')
    
    return res.render("./admin/edit", { recipe : foundRecipe })
}

// put
exports.put = function(req, res) {
    const recipeIndex = req.params.index
    const foundRecipe = data.recipes[recipeIndex]
    console.log(recipeIndex)
    console.log(foundRecipe)

    if (!foundRecipe) return res.send('Recipe not found!')

    foundRecipe.ingredients = removeLastEmptyElement(foundRecipe.ingredients)
    foundRecipe.preparation = removeLastEmptyElement(foundRecipe.preparation)

    const recipe = {
        ...foundRecipe,
        ...req.body
    }
    
    data.recipes[recipeIndex] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write error!')

        return res.redirect(`/admin/recipes/${recipeIndex}`)
    })
}

// delete
