let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

// 1. Store the message-el paragraph in a variable called messageEl

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        messageEl.textContent = message
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        messageEl.textContent = message
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        messageEl.textContent = message
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent   
}
