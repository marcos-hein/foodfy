const cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", function() {
        const cardIndex = cards.indexOf()
        console.log(cards.indexOf(card))
        window.location.href = 'recipes/${ cardIndex }'
    })
}
