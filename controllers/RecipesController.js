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
        console.log("aqui")
        if (req.body[key] == "") {
            return res.send('Please, Fill all fields!')
        }
    }
    
    return res.send(req.body)
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
