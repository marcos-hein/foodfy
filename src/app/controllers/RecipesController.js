const fs = require('fs')
const data = require('../../data.json')

function removeLastEmptyElement (array) {
    if (array[array.length - 1] == "") {
        array.pop()
    }
    return array
}

exports.index = function(req, res) {
    const recipes = data.recipes
    return res.render("../views/admin/recipes/index", { recipes })
}

// create
exports.create = function(req, res) {
    return res.render("../views/admin/recipes/create")
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
    const id = Number(data.recipes.length + 1)

    data.recipes.push({
        id,
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
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    return res.render("../views/admin/recipes/detail-recipe.njk", { recipe : foundRecipe })
}

// edit
exports.edit = function(req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send('Recipe not found!')
    
    return res.render("../views/admin/recipes/edit", { recipe : foundRecipe })
}

// put
exports.put = function(req, res) {
    const { id } = req.body

    let index = 0

    const foundRecipe = data.recipes.find(function(recipe, foundIndex) {
        if (id == recipe.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    foundRecipe.ingredients = removeLastEmptyElement(foundRecipe.ingredients)
    foundRecipe.preparation = removeLastEmptyElement(foundRecipe.preparation)

    const recipe = {
        ...foundRecipe,
        ...req.body
    }
    
    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write error!')

        return res.redirect(`/admin/recipes/${id}`)
    })
}

// delete
exports.delete = function(req, res) {
    const { id } = req.body

    const filteredRecipes = data.recipes.filter(function(recipe) {
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write file error!")

        return res.redirect("/admin/recipes")
    })
}
