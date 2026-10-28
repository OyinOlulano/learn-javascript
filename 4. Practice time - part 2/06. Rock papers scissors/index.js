let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function getRandomhands() {
    let i = Math.floor(Math.random()* 3)
    return hands[i]
}

console.log(getRandomhands())
