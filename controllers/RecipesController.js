const data = require('../data')

exports.index = function(req, res) {
    return res.render("admin/index", { recipes : data })
}

// create

// show
exports.show = function(req, res) {
    const recipeIndex = req.params.id;
    
    if (!data[recipeIndex]) {
        return res.send("Recipe not found!")
    }

    return res.render("admin/detail-recipe", { recipe : data[recipeIndex], recipeIndex })
}

// edit

// post

// put

// delete