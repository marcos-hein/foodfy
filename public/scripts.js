const cards = document.querySelectorAll(".card")
const hideShowButtons = document.querySelectorAll(".button.hide-show")
const recipeInfos = document.querySelectorAll(".recipe-hide-show")

// Mostra receita
for (const card of cards) {
    card.addEventListener("click", function() {
        const recipeId = card.getAttribute('id')
        
        window.location.href = `recipes/${ recipeId }`
    })
}

// Esconde e mostra detalhes da receita
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


