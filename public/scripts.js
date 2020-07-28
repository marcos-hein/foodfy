const cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", function() {
        const recipeId = card.getAttribute('id')
        
        window.location.href = `recipes/${ recipeId }`
    })
}
