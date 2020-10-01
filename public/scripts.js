const cards = document.querySelectorAll(".card")
const hideShowButtons = document.querySelectorAll(".button.hide-show")
const recipeInfos = document.querySelectorAll(".recipe-hide-show")


function addIngredient() {
    console.log('entreni na função')
    const ingredients = document.querySelector('#ingredients')
    const fieldContainer = document.querySelectorAll('.ingredient')

    const newField = fieldContainer[fieldContainer.length -1].cloneNode(true)
    if (newField.children[0].value == "") return false

    newField.children[0].value = ""
    ingredients.appendChild(newField)
}

function addStep() {
    const steps = document.querySelector('#steps')
    const fieldContainer = document.querySelectorAll('.step')

    const newField = fieldContainer[fieldContainer.length -1].cloneNode(true)
    console.log(steps)
    if (newField.children[0].value == "") return false

    newField.children[0].value = ""
    steps.appendChild(newField)
}

document
    .querySelector('.add-ingredient')
    .addEventListener('click', addIngredient)

document
    .querySelector('.add-step')
    .addEventListener('click', addStep)

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


