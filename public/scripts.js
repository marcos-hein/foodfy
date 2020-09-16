const cards = document.querySelectorAll(".card")
const hideShowButtons = document.querySelectorAll(".button")
const recipeInfos = document.querySelectorAll(".recipe-hide-show")

for (const card of cards) {
    card.addEventListener("click", function() {
        const recipeId = card.getAttribute('id')
        
        window.location.href = `recipes/${ recipeId }`
    })
}

// for (let i = 0; i < hideShowButtons.length; i++) {
//     hideShowButtons[i].addEventListener("click", function() {
//         if(recipeInfos[i].classList.contains('hidden')) {
//             recipeInfos[i].classList.remove('hidden')

//             hideShowButtons[i].textContent = 'ESCONDER'
//         } else {
//             recipeInfos[i].classList.add('hidden')
            
//             hideShowButtons[i].textContent = 'MOSTRAR'
//         }
//     })
// }

for (const button in hideShowButtons) {
    hideShowButtons[button].addEventListener("click", function() {
        if(recipeInfos[button].classList.contains('hidden')) {
            recipeInfos[button].classList.remove('hidden')

            hideShowButtons[button].textContent = 'ESCONDER'
        } else {
            recipeInfos[button].classList.add('hidden')
            
            hideShowButtons[button].textContent = 'MOSTRAR'
        }
    })
}