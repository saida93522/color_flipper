const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    let hexCode = "#";
    // let hexColor = getRandomhex()
    for (let i = 1; i <= 6; i++) {
        hexCode += hex[getRandomhex()]
    }
    document.body.style.backgroundColor = hexCode
    color.textContent = hexCode

})

function getRandomhex() {
    return Math.floor(Math.random() * hex.length)
}