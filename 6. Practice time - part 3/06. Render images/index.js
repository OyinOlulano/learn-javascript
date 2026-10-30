// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const divEl = document.querySelector("#container")

function render(arr) {
    let imgsDom = ""
    for(let i = 0; i < arr.length; i++){
        imgsDom += ` 
            <img alt="Employee in the company" class="team-img" src="${arr[i]}">
             `
    }
    divEl.innerHTML = imgsDom
}

render(imgs)