const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function () {
    const rand = randColor()
    document.body.style.backgroundColor = colors[rand]
    color.textContent = colors[rand]
})

function randColor() {
    return Math.floor(Math.random() * colors.length)
}