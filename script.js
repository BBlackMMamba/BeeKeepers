let logoContainer = document.querySelector('.logo-container');
let firstWord = document.querySelectorAll('.firstWord');
let secondWord = document.querySelectorAll('.secondWord');
let thirdWord = document.querySelectorAll('.thirdWord');

logoContainer.addEventListener('mouseover', () => {
    for (let i of secondWord) {
        i.style.color = "#ffd700"
        i.style.fontFamily = "Sk - Modernist";

    }
})

logoContainer.addEventListener('mouseout', () => {
    for (let i of secondWord) {
        i.style.color = "";
        i.style.fontFamily = "";
        i.style.fontSize = "";
    }
})

logoContainer.addEventListener('mouseover', () => {
    for (let i of firstWord) {
        i.style.color = "#ffffff"
    }
})

logoContainer.addEventListener('mouseout', () => {
    for (let i of firstWord) {
        i.style.color = ""
        i.style.textShadow = ""
    }
})

logoContainer.addEventListener('mouseover', () => {
    for (let i of thirdWord) {
        i.style.color = "#ffffff"
    }
})

logoContainer.addEventListener('mouseout', () => {
    for (let i of thirdWord) {
        i.style.color = ""
    }
})