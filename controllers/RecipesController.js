const data = require('../data')

exports.index = function(req, res) {
    return res.render("admin/index", { recipes : data })
}

// create
exports.create = function(req, res) {
    return res.render("./admin/create")
}

// show
exports.show = function(req, res) {
    const recipeIndex = req.params.index;
    
    if (!data[recipeIndex]) {
        return res.send("Recipe not found!")
    }

    return res.render("./admin/detail-recipe", { recipe : data[recipeIndex], recipeIndex })
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
// edit


// put

// delete
