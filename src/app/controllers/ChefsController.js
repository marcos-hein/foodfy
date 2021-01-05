const { date } = require("../../lib/utils")
const Chef = require("../models/Chef")
// function removeLastEmptyElement (array) {
//     if (array[array.length - 1] == "") {
//         array.pop()
//     }
//     return array
// }

module.exports = {
    index(req, res) {
        Chef.all(function(chefs) {
            return res.render("admin/chefs/index", { chefs })
        })
    },    
    create(req, res) {
        return res.render("../views/admin/chefs/create")
    },
    post(req, res) {
    
        const keys = Object.keys(req.body)
    
        for(const key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, Fill all fields!')
            }
        }

        Chef.create(req.body, function(chef) {
            return res.redirect(`/admin/chefs/${chef.id}`)
        })
    },
    show(req, res) {
        Chef.find(req.params.id, function(chef) {
            if (!chef) return res.send("Chef not found!")

            Chef.chefRecipes(chef.id, (recipes) => {
                return res.render("admin/chefs/detail-chef", { chef, recipes })

            })

        })
    },
    edit(req, res) {
        Chef.find(req.params.id, function(chef) {
            if (!chef) return res.send("Chef not found!")

            return res.render("admin/chefs/edit", { chef })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)
    
        for(const key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, Fill all fields!')
            }
        }
    
        Chef.update(req.body, () => {
            return res.redirect(`/admin/chefs/${req.body.id}`)
        })

    },
    delete(req, res) {
        Chef.delete(req.body.id, () => {
            return res.redirect("/admin/chefs")
        })
    }
}

// exports.index = function(req, res) {
//     const chefs = data.chefs
//     return res.render("../views/admin/chefs/index", { chefs })
// }

// // create
// exports.create = function(req, res) {
//     return res.render("../views/admin/chefs/create")
// }

// // post
// exports.post = function(req, res) {

//     const keys = Object.keys(req.body)

//     for(const key of keys) {
//         if (req.body[key] == "") {
//             return res.send('Please, Fill all fields!')
//         }
//     }

//     let { image, title, author, ingredients, preparation, information} = req.body

//     title = "receita genérica"
//     author = "vini"
//     ingredients = removeLastEmptyElement(ingredients)
//     preparation = removeLastEmptyElement(preparation)
//     const id = Number(data.chefs.length + 1)

//     data.chefs.push({
//         id,
//         image,
//         title,
//         author,
//         ingredients,
//         preparation,
//         information
//     })

//     fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
//         if (err) return res.send('Write file error')

//         return res.redirect('/admin/chefs')

//     })
// }

// // show
// exports.show = function(req, res) {
//     const { id } = req.params

//     const foundChef = data.chefs.find(function(chef) {
//         return chef.id == id
//     })

//     if (!foundChef) return res.send('Chef not found!')

//     return res.render("../views/admin/chefs/detail-chef.njk", { chef : foundChef })
// }

// // edit
// exports.edit = function(req, res) {
//     const { id } = req.params

//     const foundChef = data.chefs.find(function(chef) {
//         return chef.id == id
//     })

//     if (!foundChef) return res.send('Chef not found!')
    
//     return res.render("../views/admin/chefs/edit", { chef : foundChef })
// }

// // put
// exports.put = function(req, res) {
//     const { id } = req.body

//     let index = 0

//     const foundChef = data.chefs.find(function(chef, foundIndex) {
//         if (id == chef.id) {
//             index = foundIndex
//             return true
//         }
//     })

//     if (!foundChef) return res.send('Chef not found!')

//     foundChef.ingredients = removeLastEmptyElement(foundChef.ingredients)
//     foundChef.preparation = removeLastEmptyElement(foundChef.preparation)

//     const chef = {
//         ...foundChef,
//         ...req.body
//     }
    
//     data.chefs[index] = chef

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//         if (err) return res.send('Write error!')

//         return res.redirect(`/admin/chefs/${id}`)
//     })
// }

// // delete
// exports.delete = function(req, res) {
//     const { id } = req.body

//     const filteredChefs = data.chefs.filter(function(chef) {
//         return chef.id != id
//     })

//     data.chefs = filteredChefs

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//         if(err) return res.send("Write file error!")

//         return res.redirect("/admin/chefs")
//     })
// }
