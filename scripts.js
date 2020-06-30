const modalOverlay = document.querySelector(".modal-overlay")
const modalContent = document.querySelector(".modal-content")
const cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add("active")
        var cardModal = card.innerHTML
        modalContent.innerHTML = cardModal
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
})