const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetPer(greeting) {
    welcomeEl.textContent = `${greeting}, Per Harald Borgen 👋`    
}

greetPer("How do you do")