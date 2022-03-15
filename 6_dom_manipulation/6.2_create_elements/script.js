const main = document.querySelector("#main");

for (let i = 0; i < 10; i++) {
    main.innerHTML += `<div class="square"></div>`;
}

const squares = document.querySelectorAll(".square");

setTimeout(() => {
    squares.forEach(s => s.style.backgroundColor = "pink");
}, 2000)
